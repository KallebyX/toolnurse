import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ageGroups = [
  { path: '/recem', label: 'Recém-nascido' },
  { path: '/ummes', label: 'Primeiro Mês' },
  { path: '/doismeses', label: '2 - 3 Meses' },
  { path: '/quatromeses', label: '4 - 5 Meses' },
  { path: '/seismeses', label: '6 Meses' },
  { path: '/novemeses', label: '9 Meses' },
  { path: '/dozemeses', label: '12 Meses' },
  { path: '/dezoitomeses', label: '18 Meses' },
  { path: '/doisanos', label: '2 anos' },
];

export default function Menu() {
  const { pathname: locationPath } = useLocation();
  const pathname = locationPath.replace(/\/+$/, '') || '/';
  const activePath = pathname === '/' ? '/recem' : pathname;
  const current = ageGroups.find(item => item.path === activePath);
  const [expanded, setExpanded] = useState(false);
  const toggleRef = useRef(null);
  useEffect(() => setExpanded(false), [pathname]);

  function onKeyDown(event) {
    if (event.key === 'Escape' && expanded) {
      setExpanded(false);
      toggleRef.current?.focus();
    }
  }

  return <nav id="menu" className="tn-age-navigation" aria-label="Navegação da plataforma" onKeyDown={onKeyDown}>
    <div className="tn-nav-intro"><p className="tn-eyebrow">Acompanhamento infantil</p><h2>Faixa etária</h2><p>Selecione a idade para abrir o roteiro de avaliação.</p></div>
    <button ref={toggleRef} className="tn-age-toggle" type="button" aria-expanded={expanded} aria-controls="tn-navigation-links" onClick={() => setExpanded(value => !value)}>
      <span className="tn-age-toggle-copy"><span>{current ? 'Faixa etária' : 'Navegação'}</span><strong>{current?.label || (pathname === '/sobre' ? 'Sobre o projeto' : 'Como utilizar')}</strong></span>
      <svg className={expanded ? 'is-open' : ''} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
    </button>
    <div id="tn-navigation-links" className={`tn-navigation-links${expanded ? ' is-expanded' : ''}`}>
    <ol id="tn-age-links" className="tn-age-links">
      {ageGroups.map((item, index) => {
        const active = item.path === activePath;
        return <li key={item.path}><Link to={item.path} className={`tn-age-link${active ? ' is-active' : ''}`} aria-current={active ? 'page' : undefined} onClick={() => setExpanded(false)}>
          <span className="tn-age-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><span>{item.label}</span>
          {active && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>}
        </Link></li>;
      })}
    </ol>
    <div className="tn-resource-links">
      <Link to="/como-utilizar" aria-current={pathname === '/como-utilizar' ? 'page' : undefined} onClick={() => setExpanded(false)}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 7v14m0-14C9 4 5 4 2 5v14c3-1 7-1 10 2 3-3 7-3 10-2V5c-3-1-7-1-10 2Z" /></svg>Como utilizar</Link>
      <Link to="/sobre" aria-current={pathname === '/sobre' ? 'page' : undefined} onClick={() => setExpanded(false)}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 11v6m0-10h.01" /></svg>Sobre o projeto</Link>
    </div>
    </div>
    <div className="tn-nav-note"><span className="tn-note-line" aria-hidden="true" /><p>Um roteiro para cada etapa do cuidado.</p></div>
  </nav>;
}
