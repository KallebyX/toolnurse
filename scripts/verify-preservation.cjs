// Clinical baseline: c222276. Classes and wrappers may change, but state, clinical
// options and copy handlers must remain identical. Route expectations also include
// the authorized 2026-11-25 newborn home and informational pages.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const parser = require('@babel/parser');

const root = path.resolve(__dirname, '..');
const baseline = JSON.parse(fs.readFileSync(path.join(root, 'tests/clinical-contract.json'), 'utf8'));
const forms = [
  'RecemNascido', 'PrimeiroMes', 'DoisMeses', 'QuatroMeses', 'SeisMeses',
  'NoveMeses', 'DozeMeses', 'DezoitoMeses', 'DoisAnos',
];
const metadata = new Set([
  'start', 'end', 'loc', 'extra', 'leadingComments', 'trailingComments',
  'innerComments', 'comments', 'tokens', 'errors',
]);

function normalize(value) {
  if (Array.isArray(value)) return value.map(normalize);
  if (value && typeof value === 'object') {
    const result = {};
    Object.keys(value).filter(key => !metadata.has(key)).sort().forEach(key => {
      result[key] = normalize(value[key]);
    });
    return result;
  }
  return value;
}

const serialize = value => JSON.stringify(normalize(value));
const hash = value => crypto.createHash('sha256').update(
  typeof value === 'string' ? value : serialize(value),
).digest('hex');

function attributeValue(node) {
  if (!node) return null;
  if (node.type === 'StringLiteral') return node.value;
  if (node.type === 'JSXText') return node.value.replace(/\s+/g, ' ').trim();
  if (node.type === 'JSXExpressionContainer') return { expression: normalize(node.expression) };
  return normalize(node);
}

const tag = node => !node ? '' : node.type === 'JSXIdentifier' ? node.name : serialize(node);

function attributes(node) {
  const result = {};
  for (const attribute of node.openingElement.attributes) {
    if (attribute.type === 'JSXSpreadAttribute') {
      result.spread = normalize(attribute.argument);
    } else {
      result[attribute.name.name] = attribute.value === null ? true : attributeValue(attribute.value);
    }
  }
  return result;
}

function walk(node, visit, guards = []) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) {
    node.forEach(child => walk(child, visit, guards));
    return;
  }
  visit(node, guards);
  for (const [key, value] of Object.entries(node)) {
    if (metadata.has(key)) continue;
    let nestedGuards = guards;
    if (node.type === 'ConditionalExpression' && ['consequent', 'alternate'].includes(key)) {
      nestedGuards = guards.concat([{ branch: key, test: normalize(node.test) }]);
    }
    if (node.type === 'LogicalExpression' && key === 'right') {
      nestedGuards = guards.concat([{ branch: 'right', operator: node.operator, test: normalize(node.left) }]);
    }
    if (node.type === 'IfStatement' && ['consequent', 'alternate'].includes(key)) {
      nestedGuards = guards.concat([{ branch: key, test: normalize(node.test) }]);
    }
    walk(value, visit, nestedGuards);
  }
}

function parse(relative) {
  return parser.parse(fs.readFileSync(path.join(root, relative), 'utf8'), {
    sourceType: 'module', plugins: ['jsx'],
  });
}

function formContract(name) {
  const states = [];
  const handlers = {};
  const controls = [];
  const mappedOptions = [];
  walk(parse(`src/components/${name}/index.jsx`), (node, guards) => {
    if (node.type === 'CallExpression' && node.callee.type === 'MemberExpression' && node.callee.property.name === 'map') {
      let containsInput = false;
      walk(node.arguments, child => {
        if (child.type === 'JSXElement' && ['input', 'option', 'select'].includes(tag(child.openingElement.name))) {
          containsInput = true;
        }
      });
      if (containsInput) mappedOptions.push({ source: normalize(node.callee.object), params: normalize(node.arguments[0]?.params) });
    }
    if (node.type === 'CallExpression' && node.callee.type === 'Identifier' && node.callee.name === 'useState') {
      states.push(normalize(node.arguments));
    }
    if (node.type === 'VariableDeclarator' && node.id.type === 'Identifier' && /^(handle|formatar|copiar)/.test(node.id.name)) {
      handlers[node.id.name] = hash(node.init);
    }
    if (node.type === 'FunctionDeclaration' && /^(handle|formatar|copiar)/.test(node.id?.name || '')) {
      handlers[node.id.name] = hash(node);
    }
    if (node.type !== 'JSXElement') return;
    const kind = tag(node.openingElement.name);
    if (!['input', 'select', 'textarea', 'button', 'form'].includes(kind)) return;
    const allAttributes = attributes(node);
    const bindings = {};
    for (const key of [
      'name', 'id', 'type', 'value', 'checked', 'defaultValue', 'defaultChecked',
      'onChange', 'onClick', 'onSubmit', 'required', 'disabled', 'min', 'max', 'step', 'multiple',
    ]) {
      if (key in allAttributes) bindings[key] = allAttributes[key];
    }
    const options = [];
    if (kind === 'select') {
      walk(node, child => {
        if (child.type === 'JSXElement' && tag(child.openingElement.name) === 'option') {
          options.push({ attributes: attributes(child), children: child.children.map(attributeValue) });
        }
      });
    }
    controls.push({ kind, bindings, guards: normalize(guards), options });
  });
  return {
    stateHash: hash(states),
    handlers,
    controlHash: hash(controls.map(serialize).sort()),
    mappedOptionsHash: hash(mappedOptions.map(serialize).sort()),
    counts: {
      input: controls.filter(control => control.kind === 'input').length,
      select: controls.filter(control => control.kind === 'select').length,
      textarea: controls.filter(control => control.kind === 'textarea').length,
      button: controls.filter(control => control.kind === 'button').length,
      form: controls.filter(control => control.kind === 'form').length,
      conditionalControls: controls.filter(control => control.guards.length).length,
      options: controls.reduce((total, control) => total + control.options.length, 0),
    },
  };
}

function routeContract() {
  const routes = [];
  walk(parse('src/routes/routes.jsx'), node => {
    if (node.type !== 'JSXElement' || tag(node.openingElement.name) !== 'Route') return;
    const attrs = node.openingElement.attributes;
    const routePath = attrs.find(attribute => attribute.name?.name === 'path');
    const element = attrs.find(attribute => attribute.name?.name === 'element');
    routes.push({ path: routePath?.value?.value, component: tag(element?.value?.expression?.openingElement?.name) });
  });
  return routes.sort((a, b) => a.path.localeCompare(b.path));
}

const failures = [];
const routes = routeContract();
if (serialize(baseline.__routes) !== serialize(routes)) failures.push({ section: 'routes' });
for (const name of forms) {
  const current = formContract(name);
  for (const section of ['stateHash', 'handlers', 'controlHash', 'mappedOptionsHash', 'counts']) {
    if (serialize(baseline[name]?.[section]) !== serialize(current[section])) {
      failures.push({ form: name, section });
    }
  }
}

console.log(JSON.stringify({ forms: forms.length, routes: routes.length, failures }, null, 2));
if (failures.length) process.exitCode = 1;
