import React, { useState } from 'react';
import toolNurseImage from '../../assets/toolNurse.jpg'; // Ajuste o caminho conforme necessário
import Menu from '../Menu'; // Ajuste o caminho conforme necessário

function Formulario18Meses() {
  const [dados, setDados] = useState({
    peso: '',
    estatura: '',
    imc: '',
    pc: '',
    temperatura: '',
    fr: '',
    estadoGeral: '',
    texturaPele: '',
    sensacaoPele: '',
    corPele: '',
    hidratacaoPele: '',
    fontanelaAnterior: '',
    linfonodosCervicaisPalpaveis: '',
    secrecaoOlhos: '',
    mucosa: '',
    incisivoLateralInferior: '',
    primeiroMolar: '',
    secrecaoOrelhas: '',
    linfonodoRetroauricular: '',
    tiragem: '',
    murmVesiculares: '',
    bulhasCardiacas: '',
    estadoAbdome: '',
    herniaUmbilical: '',
    labiosClitorisProeminentes: '',
    secrecaoFeminina: '',
    sinequia: '',
    herniaInguinalFem: '',
    herniaInguinalMas: '',
    hidrocele: '',
    fimoseFisiologica: '',
    testiculos: '',
    meatoUrinario: '',
    anomaliasAnal: '',
    fissuras: '',
    assaduras: '',
    mostraOQueQuer: '',
    colocaBlocosNaCaneca: '',
    dizUmaPalavra: '',
    andaSemApoio: '',
    usaColherOuGarfo: '',
    constroiTorreDeDoisCubos: '',
    falaTresPalavras: '',
    andaParaTras: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedData = formatarDados();
    navigator.clipboard.writeText(formattedData)
      .then(() => alert('Dados formatados copiados para a área de transferência!'))
      .catch((error) => console.error('Erro ao copiar os dados: ', error));
  };

const formatarDados = () => {
    return `
  **Avaliação de Desenvolvimento - 18 Meses**
  **Peso:** ${dados.peso} Kg
  **Estatura:** ${dados.estatura} cm
  **IMC:** ${dados.imc}
  **PC:** ${dados.pc} cm
  **Temperatura Axilar:** ${dados.temperatura} °C
  **FR:** ${dados.fr} RPM
  **Estado Geral:** ${dados.estadoGeral}
  
  **Pele:**
  - Textura: ${dados.texturaPele}
  - Sensação ao Toque: ${dados.sensacaoPele}
  - Cor: ${dados.corPele}
  - Hidratação: ${dados.hidratacaoPele}
  
  **Cabeça:**
  - Fontanela Anterior: ${dados.fontanelaAnterior}
  - Linfonodos Cervicais Palpáveis: ${dados.linfonodosCervicaisPalpaveis} ${dados.linfonodosCervicaisPalpaveis === 'SIM' ? `(${dados.tipoLinfonodoCervical})` : ''}
  
  **Olhos:**
  - Secreção: ${dados.secrecaoOlhos}
  
  **Boca:**
  - Mucosa: ${dados.mucosa}
  - Incisivo Lateral Inferior: ${dados.incisivoLateralInferior}
  - 1º Molar: ${dados.primeiroMolar}
  
  **Orelhas/Ouvidos:**
  - Secreção: ${dados.secrecaoOrelhas}
  - Linfonodo Retroauricular Palpável: ${dados.linfonodoRetroauricular} ${dados.linfonodoRetroauricular === 'sim' ? `(${dados.tipoLinfonodoRetroauricular})` : ''}
  
  TÓRAX
  - AP:
    ${dados.apTiragem ? 'Tiragem' : ''}
    ${dados.apMurmurioVesiculares ? 'Murmúrio Vesiculares' : ''}
    ${dados.apSemRuidos ? 'Sem Ruídos Adventícios' : ''}
  - AC: ${dados.bulhasCardiacas}  

  **Abdome:**
  - Estado: ${dados.estadoAbdome}
  - Presença de Hérnia Umbilical: ${dados.herniaUmbilical ? 'Sim' : 'Não'}
  
  **Genitália:**
  - Feminina:
    - Secreção: ${dados.secrecaoFeminina ? 'Sim' : 'Não'}
    - Sinéquia: ${dados.sinequia ? 'Sim' : 'Não'}
    - Hérnia Inguinal: ${dados.herniaInguinalFem ? 'Sim' : 'Não'}
  - Masculina:
    - Hérnia Inguinal: ${dados.herniaInguinalMas ? 'Sim' : 'Não'}
    - Hidrocele: ${dados.hidrocele ? 'Sim' : 'Não'}
    - Fimose Fisiológica: ${dados.fimoseFisiologica ? 'Sim' : 'Não'}
    - Testículos: ${dados.testiculos}
    - Meato Urinário: ${dados.meatoUrinario}
  
  **Orifício Anal:**
  - Anomalias: ${dados.anomaliasAnal ? 'Sim' : 'Não'}
  - Fissuras: ${dados.fissuras ? 'Sim' : 'Não'}
  - Assaduras: ${dados.assaduras ? 'Sim' : 'Não'}
  
  **Marcos do Desenvolvimento:**
  ${formatDevelopmentMilestone('Mostra o que quer', dados.mostraOQueQuer)}
  ${formatDevelopmentMilestone('Coloca blocos na caneca', dados.colocaBlocosNaCaneca)}
  ${formatDevelopmentMilestone('Diz uma palavra', dados.dizUmaPalavra)}
  ${formatDevelopmentMilestone('Anda sem apoio', dados.andaSemApoio)}
  ${formatDevelopmentMilestone('Usa colher ou garfo', dados.usaColherOuGarfo)}
  ${formatDevelopmentMilestone('Constrói torre de 2 cubos', dados.constroiTorreDeDoisCubos)}
  ${formatDevelopmentMilestone('Fala 3 palavras', dados.falaTresPalavras)}
  ${formatDevelopmentMilestone('Anda para trás', dados.andaParaTras)}
  `.trim();
};

function formatDevelopmentMilestone(milestone, value) {
  return `**${milestone}:** ${value}`;  // Always include the value provided
}





  return (
    <div className='tudo'>
    
        <div className="cabecalho">
          <img className="img" src={toolNurseImage} alt="Tool Nurse Logo" />
      
   
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="1049" height="2" viewBox="0 0 1049 2" fill="none">
  <path d="M0 1H1049" stroke="#FB8484" stroke-width="2"/>
</svg>
        <Menu />
        <svg xmlns="http://www.w3.org/2000/svg" width="1049" height="2" viewBox="0 0 1049 2" fill="none">
  <path d="M0 1H1049" stroke="#FB8484" stroke-width="2"/>
</svg>
        <form onSubmit={handleSubmit}>
        <div className="formulario">
          <h3>18 Meses</h3>
          <br />
<div className="form-section">
  <h3>Informações Básicas</h3>
  <div className="basicos">
    <div className="form-group">
      <label>Peso (Kg):</label>
      <input id='peso' type="text" name="peso" value={dados.peso} onChange={handleChange} />
    </div>
    <div className="form-group">
      <label>Estatura (cm):</label>
      <input id='estatura' type="text" name="estatura" value={dados.estatura} onChange={handleChange} />
    </div>
    <div className="form-group">
      <label>IMC:</label>
      <input id='imc' type="text" name="imc" value={dados.imc} onChange={handleChange} />
    </div>
    <div className="form-group">
      <label>PC (cm):</label>
      <input id='pc' type="text" name="pc" value={dados.pc} onChange={handleChange} />
    </div>
    <div className="form-group">
      <label>Temperatura axilar (ºC):</label>
      <input id='temperaturaAxilar' type="text" name="temperatura" value={dados.temperatura} onChange={handleChange} />
    </div>
    <div className="form-group">
      <label>FR (RPM):</label>
      <input id='fr' type="text" name="fr" value={dados.fr} onChange={handleChange} />
    </div>
  </div>
</div>

   

<div className="form-section">
<svg xmlns="http://www.w3.org/2000/svg" width="1049" height="2" viewBox="0 0 1049 2" fill="none">
  <path d="M0 1H1049" stroke="#FB8484" stroke-width="2"/>
</svg>
  <h3>Estado Geral</h3>
  {["Ativo", "Hipoativo", "Letárgico", "Calmo", "Choroso"].map((estado) => (
    <div key={estado}>
      <input 
        type="radio" 
        id={`estadoGeral-${estado}`} 
        name="estadoGeral" 
        value={estado} 
        checked={dados.estadoGeral === estado} 
        onChange={handleChange} 
      />
      <label htmlFor={`estadoGeral-${estado}`}>{estado}</label>
    </div>
  ))}
</div>

<div className="form-section">
<svg xmlns="http://www.w3.org/2000/svg" width="1049" height="2" viewBox="0 0 1049 2" fill="none">
  <path d="M0 1H1049" stroke="#FB8484" stroke-width="2"/>
</svg>
  <h3>Pele</h3>
  <div className="form-group">
    <label>Textura:</label>
    {["Lisa", "Irregular"].map((textura) => (
      <div key={textura}>
        <input 
          type="radio" 
          id={`texturaPele-${textura}`} 
          name="texturaPele" 
          value={textura} 
          checked={dados.texturaPele === textura} 
          onChange={handleChange} 
        />
        <label htmlFor={`texturaPele-${textura}`}>{textura}</label>
      </div>
    ))}
  </div>
  <div className="form-group">
    <label>Sensação ao Toque:</label>
    {["Macia", "Áspera"].map((sensacao) => (
      <div key={sensacao}>
        <input 
          type="radio" 
          id={`sensacaoPele-${sensacao}`} 
          name="sensacaoPele" 
          value={sensacao} 
          checked={dados.sensacaoPele === sensacao} 
          onChange={handleChange} 
        />
        <label htmlFor={`sensacaoPele-${sensacao}`}>{sensacao}</label>
      </div>
    ))}
  </div>
  <div className="form-group">
    <label>Cor:</label>
    {["Rósea", "Pálida", "Cianótica", "Ictérica"].map((cor) => (
      <div key={cor}>
        <input 
          type="radio" 
          id={`corPele-${cor}`} 
          name="corPele" 
          value={cor} 
          checked={dados.corPele === cor} 
          onChange={handleChange} 
        />
        <label htmlFor={`corPele-${cor}`}>{cor}</label>
      </div>
    ))}
  </div>
  <div className="form-group">
    <label>Hidratação:</label>
    {["Hidratada", "Desidratada"].map((hidratacao) => (
      <div key={hidratacao}>
        <input 
          type="radio" 
          id={`hidratacaoPele-${hidratacao}`} 
          name="hidratacaoPele" 
          value={hidratacao} 
          checked={dados.hidratacaoPele === hidratacao} 
          onChange={handleChange} 
        />
        <label htmlFor={`hidratacaoPele-${hidratacao}`}>{hidratacao}</label>
      </div>
    ))}
  </div>
</div>
<div className="form-section">
<svg xmlns="http://www.w3.org/2000/svg" width="1049" height="2" viewBox="0 0 1049 2" fill="none">
  <path d="M0 1H1049" stroke="#FB8484" stroke-width="2"/>
</svg>
  <h3>Cabeça</h3>
  
  {/* Fontanela Anterior */}
  <div className="form-group">
    <p>Fontanela Anterior:</p>
    {["Em fechamento", "Fechada", "Abauladas", "Deprimidas", "Planas"].map(opcao => (
      <label key={opcao}>
        <input 
          type="radio" 
          name="fontanelaAnterior" 
          value={opcao} 
          checked={dados.fontanelaAnterior === opcao} 
          onChange={handleChange} 
        />
        {opcao}
      </label>
    ))}
  </div>

  {/* Linfonodos cervicais palpáveis */}
  <div className="form-group">
  <label>Linfonodos cervicais palpáveis:</label><br />
  <input type="radio" id="linfonodosSim" name="linfonodosCervicaisPalpaveis" value="SIM" checked={dados.linfonodosCervicaisPalpaveis === 'SIM'} onChange={handleChange} /> Sim<br />
  <input type="radio" id="linfonodosNao" name="linfonodosCervicaisPalpaveis" value="NÃO" checked={dados.linfonodosCervicaisPalpaveis === 'NÃO'} onChange={handleChange} /> Não<br />

  {dados.linfonodosCervicaisPalpaveis === 'SIM' && (
    <div>
      <input type="radio" name="tipoLinfonodoCervical" value="Móvel" checked={dados.tipoLinfonodoCervical === 'Móvel'} onChange={handleChange} /> Móvel<br />
      <input type="radio" name="tipoLinfonodoCervical" value="Fixo" checked={dados.tipoLinfonodoCervical === 'Fixo'} onChange={handleChange} /> Fixo<br />
      <input type="radio" name="tipoLinfonodoCervical" value="Fibrobástico" checked={dados.tipoLinfonodoCervical === 'Fibrobástico'} onChange={handleChange} /> Fibrobástico<br />
      <input type="radio" name="tipoLinfonodoCervical" value="Amolecido" checked={dados.tipoLinfonodoCervical === 'Amolecido'} onChange={handleChange} /> Amolecido<br />
      <input type="radio" name="tipoLinfonodoCervical" value="Endurecido" checked={dados.tipoLinfonodoCervical === 'Endurecido'} onChange={handleChange} /> Endurecido<br />
    </div>
  )}
</div>

  {/* Olhos */}
  <div className="form-group">
    <p>Secreção nos olhos:</p>
    <label>
      <input 
        type="radio" 
        name="secrecaoOlhos" 
        value="Sim" 
        checked={dados.secrecaoOlhos === 'Sim'} 
        onChange={handleChange} 
      />
      Sim
    </label>
    <label>
      <input 
        type="radio" 
        name="secrecaoOlhos" 
        value="Não" 
        checked={dados.secrecaoOlhos === 'Não'} 
        onChange={handleChange} 
      />
      Não
    </label>
  </div>

  {/* Boca */}
  <label htmlFor="">Boca:</label>
  <div className="form-group">
    <label>Mucosa:</label>
    {["Corada", "Pálida", "Úmida", "Seca"].map(opcao => (
      <label key={opcao}>
        <input 
          type="radio" 
          name="mucosa" 
          value={opcao} 
          checked={dados.mucosa === opcao} 
          onChange={handleChange} 
        />
        {opcao}
      </label>
    ))}
  </div>
  <label htmlFor="">Dentição:</label>
  <div className="form-group">
    <label>Incisivo lateral inferior:</label>
    {["Presente", "Sem erupção", "Não visualizado"].map(opcao => (
      <label key={opcao}>
        <input 
          type="radio" 
          name="incisivoLateralInferior" 
          value={opcao} 
          checked={dados.incisivoLateralInferior === opcao} 
          onChange={handleChange} 
        />
        {opcao}
      </label>
    ))}
  </div>
  <div className="form-group">
    <label>1º molar:</label>
    {["Presente", "Sem erupção", "Não visualizado"].map(opcao => (
      <label key={opcao}>
        <input 
          type="radio" 
          name="primeiroMolar" 
          value={opcao} 
          checked={dados.primeiroMolar === opcao} 
          onChange={handleChange} 
        />
        {opcao}
      </label>
    ))}
  </div>

  {/* Orelhas/Ouvidos */}
  <label htmlFor="">Orelhas/ouvidos:</label>
  <div className="form-group">
    <label>Secreção:</label>
    <label>
      <input 
        type="radio" 
        name="secrecaoOrelhas" 
        value="Sim" 
        checked={dados.secrecaoOrelhas === 'Sim'} 
        onChange={handleChange} 
      />
      Sim
    </label>
    <label>
      <input 
        type="radio" 
        name="secrecaoOrelhas" 
        value="Não" 
        checked={dados.secrecaoOrelhas === 'Não'} 
        onChange={handleChange} 
      />
      Não
    </label>
  </div>
  <div className="form-group">
  <label>Linfonodo retroauricular palpável:</label><br />
  <label>
    <input type="radio" id="linfonodoRetroauricularSim" name="linfonodoRetroauricular" value="sim" checked={dados.linfonodoRetroauricular === 'sim'} onChange={handleChange} />
    Sim
  </label>
  <label>
    <input type="radio" id="linfonodoRetroauricularNao" name="linfonodoRetroauricular" value="não" checked={dados.linfonodoRetroauricular === 'não'} onChange={handleChange} />
    Não
  </label><br />

  {dados.linfonodoRetroauricular === 'sim' && (
    <div>
      <label>
        <input type="radio" name="tipoLinfonodoRetroauricular" value="Móvel" checked={dados.tipoLinfonodoRetroauricular === 'Móvel'} onChange={handleChange} />
        Móvel
      </label>
      <label>
        <input type="radio" name="tipoLinfonodoRetroauricular" value="Fixo" checked={dados.tipoLinfonodoRetroauricular === 'Fixo'} onChange={handleChange} />
        Fixo
      </label>
      <label>
        <input type="radio" name="tipoLinfonodoRetroauricular" value="Fibrobástico" checked={dados.tipoLinfonodoRetroauricular === 'Fibrobástico'} onChange={handleChange} />
        Fibrobástico
      </label>
      <label>
        <input type="radio" name="tipoLinfonodoRetroauricular" value="Amolecido" checked={dados.tipoLinfonodoRetroauricular === 'Amolecido'} onChange={handleChange} />
        Amolecido
      </label>
      <label>
        <input type="radio" name="tipoLinfonodoRetroauricular" value="Endurecido" checked={dados.tipoLinfonodoRetroauricular === 'Endurecido'} onChange={handleChange} />
        Endurecido
      </label>
    </div>
  )}
</div>
</div>
<svg xmlns="http://www.w3.org/2000/svg" width="1049" height="2" viewBox="0 0 1049 2" fill="none">
  <path d="M0 1H1049" stroke="#FB8484" stroke-width="2"/>
</svg>
<h3>TÓRAX</h3>

<div className="form-group">
  <label>AP:</label><br />
  <input type="checkbox" id="apTiragem" name="apTiragem" checked={dados.apTiragem} onChange={handleChange} />
  <label htmlFor="apTiragem">Tiragem</label><br />
  <input type="checkbox" id="apMurmurioVesiculares" name="apMurmurioVesiculares" checked={dados.apMurmurioVesiculares} onChange={handleChange} />
  <label htmlFor="apMurmurioVesiculares">Murmúrio vesiculares</label><br />
  <input type="checkbox" id="apSemRuidos" name="apSemRuidos" checked={dados.apSemRuidos} onChange={handleChange} />
  <label htmlFor="apSemRuidos">Sem ruídos adventícios</label><br />
</div>

<div className="form-group">
  <label>AC:</label><br />
  <input type="radio" id="bulhasCardiacasNormal" name="bulhasCardiacas" value="Bulhas Cardíacas" checked={dados.bulhasCardiacas === 'Bulhas Cardíacas'} onChange={handleChange} />
  <label htmlFor="bulhasCardiacasNormal">Bulhas Cardíacas</label><br />
  <input type="radio" id="semSopro" name="bulhasCardiacas" value="Sem Sopro" checked={dados.bulhasCardiacas === 'Sem Sopro'} onChange={handleChange} />
  <label htmlFor="semSopro">Sem Sopro</label><br />
  <input type="radio" id="comSopro" name="bulhasCardiacas" value="Com Sopro" checked={dados.bulhasCardiacas === 'Com Sopro'} onChange={handleChange} />
  <label htmlFor="comSopro">Com Sopro</label><br />
</div>


<div className="form-section">
<svg xmlns="http://www.w3.org/2000/svg" width="1049" height="2" viewBox="0 0 1049 2" fill="none">
  <path d="M0 1H1049" stroke="#FB8484" stroke-width="2"/>
</svg>
  <h3>Abdome</h3>
  <div className="form-group">
    <p>Estado:</p>
    {["Plano", "Globoso", "Rígido", "Flácido"].map(estado => (
      <label key={estado}>
        <input 
          type="radio" 
          name="estadoAbdome" 
          value={estado} 
          checked={dados.estadoAbdome === estado} 
          onChange={handleChange} 
        />
        {estado}
      </label>
    ))}
  </div>
  <div className="form-group">
    <p>Presença de hérnia umbilical:</p>
    <label>
      <input 
        type="radio" 
        name="herniaUmbilical" 
        value="Sim" 
        checked={dados.herniaUmbilical === 'Sim'} 
        onChange={handleChange} 
      />
      Sim
    </label>
    <label>
      <input 
        type="radio" 
        name="herniaUmbilical" 
        value="Não" 
        checked={dados.herniaUmbilical === 'Não'} 
        onChange={handleChange} 
      />
      Não
    </label>
  </div>
</div>
<div className="form-section">
<svg xmlns="http://www.w3.org/2000/svg" width="1049" height="2" viewBox="0 0 1049 2" fill="none">
  <path d="M0 1H1049" stroke="#FB8484" stroke-width="2"/>
</svg>
  <h3>Genitália</h3>
  
  {/* Genitália Feminina */}
  <h4>Feminina</h4>
  <div className="form-group">
    <label>Secreção:</label>
    <label>
      <input 
        type="radio" 
        name="secrecaoFeminina" 
        value="Sim" 
        checked={dados.secrecaoFeminina === 'Sim'} 
        onChange={handleChange} 
      />
      Sim
    </label>
    <label>
      <input 
        type="radio" 
        name="secrecaoFeminina" 
        value="Não" 
        checked={dados.secrecaoFeminina === 'Não'} 
        onChange={handleChange} 
      />
      Não
    </label>
  </div>
  <div className="form-group">
    <label>Sinéquia:</label>
    <label>
      <input 
        type="radio" 
        name="sinequia" 
        value="Sim" 
        checked={dados.sinequia === 'Sim'} 
        onChange={handleChange} 
      />
      Sim
    </label>
    <label>
      <input 
        type="radio" 
        name="sinequia" 
        value="Não" 
        checked={dados.sinequia === 'Não'} 
        onChange={handleChange} 
      />
      Não
    </label>
  </div>
  <div className="form-group">
    <label>Hérnia inguinal:</label>
    <label>
      <input 
        type="radio" 
        name="herniaInguinalFem" 
        value="Sim" 
        checked={dados.herniaInguinalFem === 'Sim'} 
        onChange={handleChange} 
      />
      Sim
    </label>
    <label>
      <input 
        type="radio" 
        name="herniaInguinalFem" 
        value="Não" 
        checked={dados.herniaInguinalFem === 'Não'} 
        onChange={handleChange} 
      />
      Não
    </label>
  </div>
  
  {/* Genitália Masculina */}
  <svg xmlns="http://www.w3.org/2000/svg" width="1049" height="2" viewBox="0 0 1049 2" fill="none">
  <path d="M0 1H1049" stroke="#FB8484" stroke-width="2"/>
</svg>
  <h4>Masculina</h4>
  <div className="form-group">
    <label>Hérnia inguinal:</label>
    <label>
      <input 
        type="radio" 
        name="herniaInguinalMas" 
        value="Sim" 
        checked={dados.herniaInguinalMas === 'Sim'} 
        onChange={handleChange} 
      />
      Sim
    </label>
    <label>
      <input 
        type="radio" 
        name="herniaInguinalMas" 
        value="Não" 
        checked={dados.herniaInguinalMas === 'Não'} 
        onChange={handleChange} 
      />
      Não
    </label>
  </div>
  <div className="form-group">
    <label>Hidrocele:</label>
    <label>
      <input 
        type="radio" 
        name="hidrocele" 
        value="Sim" 
        checked={dados.hidrocele === 'Sim'} 
        onChange={handleChange} 
      />
      Sim
    </label>
    <label>
      <input 
        type="radio" 
        name="hidrocele" 
        value="Não" 
        checked={dados.hidrocele === 'Não'} 
        onChange={handleChange} 
      />
      Não
    </label>
  </div>
  <div className="form-group">
    <label>Fimose fisiológica:</label>
    <label>
      <input 
        type="radio" 
        name="fimoseFisiologica" 
        value="Sim" 
        checked={dados.fimoseFisiologica === 'Sim'} 
        onChange={handleChange} 
      />
      Sim
    </label>
    <label>
      <input 
        type="radio" 
        name="fimoseFisiologica" 
        value="Não" 
        checked={dados.fimoseFisiologica === 'Não'} 
        onChange={handleChange} 
      />
      Não
    </label>
  </div>
  <div className="form-group">
    <label>Testículos:</label>
    {["Ectópicos", "Criptorquidia"].map((estado) => (
      <label key={estado}>
        <input 
          type="radio" 
          name="testiculos" 
          value={estado} 
          checked={dados.testiculos.includes(estado)} 
          onChange={handleChange} 
        />
        {estado}
      </label>
    ))}
  </div>
  <div className="form-group">
    <label>Meato urinário:</label>
    {["Visualizado", "Não visualizado", "Hipospadia", "Epispádia"].map((estado) => (
      <label key={estado}>
        <input 
          type="radio" 
          name="meatoUrinario" 
          value={estado} 
          checked={dados.meatoUrinario === estado} 
          onChange={handleChange} 
        />
        {estado}
      </label>
    ))}
  </div>
</div>

<div className="form-section">
<svg xmlns="http://www.w3.org/2000/svg" width="1049" height="2" viewBox="0 0 1049 2" fill="none">
  <path d="M0 1H1049" stroke="#FB8484" stroke-width="2"/>
</svg>
  <h3>Orifício Anal</h3>
  <div className="form-group">
    <label>Anomalias:</label>
    <label>
      <input 
        type="radio" 
        name="anomaliasAnal" 
        value="Sim" 
        checked={dados.anomaliasAnal === 'Sim'} 
        onChange={handleChange} 
      />
      Sim
    </label>
    <label>
      <input 
        type="radio" 
        name="anomaliasAnal" 
        value="Não" 
        checked={dados.anomaliasAnal === 'Não'} 
        onChange={handleChange} 
      />
      Não
    </label>
  </div>
  <div className="form-group">
    <label>Fissuras:</label>
    <label>
      <input 
        type="radio" 
        name="fissuras" 
        value="Sim" 
        checked={dados.fissuras === 'Sim'} 
        onChange={handleChange} 
      />
      Sim
    </label>
    <label>
      <input 
        type="radio" 
        name="fissuras" 
        value="Não" 
        checked={dados.fissuras === 'Não'} 
        onChange={handleChange} 
      />
      Não
    </label>
  </div>
  <div className="form-group">
    <label>Assaduras:</label>
    <label>
      <input 
        type="radio" 
        name="assaduras" 
        value="Sim" 
        checked={dados.assaduras === 'Sim'} 
        onChange={handleChange} 
      />
      Sim
    </label>
    <label>
      <input 
        type="radio" 
        name="assaduras" 
        value="Não" 
        checked={dados.assaduras === 'Não'} 
        onChange={handleChange} 
      />
      Não
    </label>
  </div>
</div>
<div className="form-section">
<svg xmlns="http://www.w3.org/2000/svg" width="1049" height="2" viewBox="0 0 1049 2" fill="none">
  <path d="M0 1H1049" stroke="#FB8484" stroke-width="2"/>
</svg>
  <h3>Marcos do Desenvolvimento</h3>
  
  {/* Mostra o que quer */}
  <div className="form-group">
    <label>Mostra o que quer:</label>
    {["Presente", "Ausente", "Não verificado"].map((estado) => (
      <label key={estado}>
        <input 
          type="radio" 
          name="mostraOQueQuer" 
          value={estado} 
          checked={dados.mostraOQueQuer === estado} 
          onChange={handleChange} 
        />
        {estado}
      </label>
    ))}
  </div>
  
  {/* Coloca blocos na caneca */}
  <div className="form-group">
    <label>Coloca blocos na caneca:</label>
    {["Presente", "Ausente", "Não verificado"].map((estado) => (
      <label key={estado}>
        <input 
          type="radio" 
          name="colocaBlocosNaCaneca" 
          value={estado} 
          checked={dados.colocaBlocosNaCaneca === estado} 
          onChange={handleChange} 
        />
        {estado}
      </label>
    ))}
  </div>
  
  {/* Diz uma palavra */}
  <div className="form-group">
    <label>Diz uma palavra:</label>
    {["Presente", "Ausente", "Não verificado"].map((estado) => (
      <label key={estado}>
        <input 
          type="radio" 
          name="dizUmaPalavra" 
          value={estado} 
          checked={dados.dizUmaPalavra === estado} 
          onChange={handleChange} 
        />
        {estado}
      </label>
    ))}
  </div>
  
  {/* Anda sem apoio */}
  <div className="form-group">
    <label>Anda sem apoio:</label>
    {["Presente", "Ausente", "Não verificado"].map((estado) => (
      <label key={estado}>
        <input 
          type="radio" 
          name="andaSemApoio" 
          value={estado} 
          checked={dados.andaSemApoio === estado} 
          onChange={handleChange} 
        />
        {estado}
      </label>
    ))}
  </div>
  
  {/* Usa colher ou garfo */}
  <div className="form-group">
    <label>Usa colher ou garfo:</label>
    {["Presente", "Ausente", "Não verificado"].map((estado) => (
      <label key={estado}>
        <input 
          type="radio" 
          name="usaColherOuGarfo" 
          value={estado} 
          checked={dados.usaColherOuGarfo === estado} 
          onChange={handleChange} 
        />
        {estado}
      </label>
    ))}
  </div>
  
  {/* Constrói torre de 2 cubos */}
  <div className="form-group">
    <label>Constrói torre de 2 cubos:</label>
    {["Presente", "Ausente", "Não verificado"].map((estado) => (
      <label key={estado}>
        <input 
          type="radio" 
          name="constroiTorreDeDoisCubos" 
          value={estado} 
          checked={dados.constroiTorreDeDoisCubos === estado} 
          onChange={handleChange} 
        />
        {estado}
      </label>
    ))}
  </div>
  
  {/* Fala 3 palavras */}
  <div className="form-group">
    <label>Fala 3 palavras:</label>
    {["Presente", "Ausente", "Não verificado"].map((estado) => (
      <label key={estado}>
        <input 
          type="radio" 
          name="falaTresPalavras" 
          value={estado} 
          checked={dados.falaTresPalavras === estado} 
          onChange={handleChange} 
        />
        {estado}
      </label>
    ))}
  </div>
  
  {/* Anda para trás */}
  <div className="form-group">
    <label>Anda para trás:</label>
    {["Presente", "Ausente", "Não verificado"].map((estado) => (
      <label key={estado}>
        <input 
          type="radio" 
          name="andaParaTras" 
          value={estado} 
          checked={dados.andaParaTras === estado} 
          onChange={handleChange} 
        />
        {estado}
      </label>
    ))}
  </div>
</div>

        </div>
        <button className='copiar' type="submit">Copiar</button>
      </form>
    </div>
  );
}

export default Formulario18Meses;
