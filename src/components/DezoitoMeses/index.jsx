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
  - Linfonodos Cervicais Palpáveis: ${dados.linfonodosCervicaisPalpaveis}
  
  **Olhos:**
  - Secreção: ${dados.secrecaoOlhos}
  
  **Boca:**
  - Mucosa: ${dados.mucosa}
  - Incisivo Lateral Inferior: ${dados.incisivoLateralInferior}
  - 1º Molar: ${dados.primeiroMolar}
  
  **Orelhas/Ouvidos:**
  - Secreção: ${dados.secrecaoOrelhas}
  - Linfonodo Retroauricular Palpável: ${dados.linfonodoRetroauricular}
  
  **Tórax:**
  - AP: ${dados.tiragem ? 'Tiragem' : 'Sem tiragem'}
  - Murmúrio Vesicular: ${dados.murmVesiculares ? 'Presente' : 'Ausente'}
  - AC: ${dados.bulhasCardiacas ? 'Com sopro' : 'Sem sopro'}
  
  **Abdome:**
  - Estado: ${dados.estadoAbdome}
  - Presença de Hérnia Umbilical: ${dados.herniaUmbilical ? 'Sim' : 'Não'}
  
  **Genitália:**
  - Feminina:
    - Pequenos Lábios e Clitóris Proeminentes: ${dados.labiosClitorisProeminentes ? 'Sim' : 'Não'}
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
  - Mostra o que quer: ${dados.mostraOQueQuer ? 'Presente' : 'Ausente'}
  - Coloca blocos na caneca: ${dados.colocaBlocosNaCaneca ? 'Presente' : 'Ausente'}
  - Diz uma palavra: ${dados.dizUmaPalavra ? 'Presente' : 'Ausente'}
  - Anda sem apoio: ${dados.andaSemApoio ? 'Presente' : 'Ausente'}
  - Usa colher ou garfo: ${dados.usaColherOuGarfo ? 'Presente' : 'Ausente'}
  - Constrói torre de 2 cubos: ${dados.constroiTorreDeDoisCubos ? 'Presente' : 'Ausente'}
  - Fala 3 palavras: ${dados.falaTresPalavras ? 'Presente' : 'Ausente'}
  - Anda para trás: ${dados.andaParaTras ? 'Presente' : 'Ausente'}
  `.trim();
  };
  

  return (
    <div className='tudo'>
      <form onSubmit={handleSubmit}>
        <div className="cabecalho">
          <img className="img" src={toolNurseImage} alt="Tool Nurse Logo" />
          <Menu />
          <hr className="hr" />
        </div>
        <div className="formulario">
          <h2>Formulário de Avaliação - 18 Meses</h2>
          <div className="form-section">
  <h3>Anamnese Geral</h3>
  <div className="form-group">
    <label>Peso (Kg):</label>
    <input type="text" name="peso" value={dados.peso} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label>Estatura (cm):</label>
    <input type="text" name="estatura" value={dados.estatura} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label>IMC:</label>
    <input type="text" name="imc" value={dados.imc} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label>PC (cm):</label>
    <input type="text" name="pc" value={dados.pc} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label>Temperatura axilar (ºC):</label>
    <input type="text" name="temperatura" value={dados.temperatura} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label>FR (RPM):</label>
    <input type="text" name="fr" value={dados.fr} onChange={handleChange} />
  </div>
</div>

<div className="form-section">
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
    <p>Linfonodos cervicais palpáveis:</p>
    <div>
      <label>
        <input 
          type="radio" 
          name="linfonodosCervicaisPalpaveis" 
          value="Sim" 
          checked={dados.linfonodosCervicaisPalpaveis === 'Sim'} 
          onChange={handleChange} 
        />
        Sim
      </label>
      <label>
        <input 
          type="radio" 
          name="linfonodosCervicaisPalpaveis" 
          value="Não" 
          checked={dados.linfonodosCervicaisPalpaveis === 'Não'} 
          onChange={handleChange} 
        />
        Não
      </label>
      {/* Adicione mais opções conforme necessário */}
    </div>
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
  <div className="form-group">
    <p>Mucosa:</p>
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
  <div className="form-group">
    <p>Incisivo lateral inferior:</p>
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
    <p>1º molar:</p>
    {["Presença", "Sem erupção", "Não visualizado"].map(opcao => (
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
  <div className="form-group">
    <p>Secreção:</p>
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
    <p>Linfonodo retroauricular palpável:</p>
    <label>
      <input 
        type="radio" 
        name="linfonodoRetroauricular" 
        value="Sim" 
        checked={dados.linfonodoRetroauricular === 'Sim'} 
        onChange={handleChange} 
      />
      Sim
    </label>
    <label>
      <input 
        type="radio" 
        name="linfonodoRetroauricular" 
        value="Não" 
        checked={dados.linfonodoRetroauricular === 'Não'} 
        onChange={handleChange} 
      />
      Não
    </label>
    {/* Adicione mais opções conforme necessário */}
  </div>
</div>
<div className="form-section">
  <h3>Tórax</h3>
  <div className="form-group">
    <p>AP:</p>
    <label>
      <input 
        type="radio" 
        name="apTiragem" 
        value="Tiragem" 
        checked={dados.apTiragem === 'Tiragem'} 
        onChange={handleChange} 
      />
      Tiragem
    </label>
    <label>
      <input 
        type="radio" 
        name="murmVesiculares" 
        value="Murmúrio Vesicular" 
        checked={dados.murmVesiculares === 'Murmúrio Vesicular'} 
        onChange={handleChange} 
      />
      Murmúrio Vesicular
    </label>
    <label>
      <input 
        type="radio" 
        name="semRuidosAdventicios" 
        value="Sem Ruídos Adventícios" 
        checked={dados.semRuidosAdventicios === 'Sem Ruídos Adventícios'} 
        onChange={handleChange} 
      />
      Sem Ruídos Adventícios
    </label>
  </div>
  <div className="form-group">
    <p>AC:</p>
    <label>
      <input 
        type="radio" 
        name="bulhasCardiacas" 
        value="Sem Sopro" 
        checked={dados.bulhasCardiacas === 'Sem Sopro'} 
        onChange={handleChange} 
      />
      Sem Sopro
    </label>
    <label>
      <input 
        type="radio" 
        name="bulhasCardiacas" 
        value="Com Sopro" 
        checked={dados.bulhasCardiacas === 'Com Sopro'} 
        onChange={handleChange} 
      />
      Com Sopro
    </label>
  </div>
</div>

<div className="form-section">
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
  <h3>Genitália</h3>
  
  {/* Genitália Feminina */}
  <h4>Feminina</h4>
  <div className="form-group">
    <label>Pequenos lábios e clitóris proeminentes:</label>
    <label>
      <input 
        type="radio" 
        name="labiosClitorisProeminentes" 
        value="Sim" 
        checked={dados.labiosClitorisProeminentes === 'Sim'} 
        onChange={handleChange} 
      />
      Sim
    </label>
    <label>
      <input 
        type="radio" 
        name="labiosClitorisProeminentes" 
        value="Não" 
        checked={dados.labiosClitorisProeminentes === 'Não'} 
        onChange={handleChange} 
      />
      Não
    </label>
  </div>
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
