import React, { useState } from 'react';
import toolNurseImage from '../../assets/toolNurse.jpg'; // Ajuste conforme necessário
import Menu from '../Menu'; // Ajuste conforme necessário

function Formulario2Anos() {
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
    fontanelaAnteriorFechada: '',
    linfonodosCervicaisPalpaveis: '',
    secrecaoOlhos: '',
    mucosa: '',
    caninoSuperior: '',
    secrecaoOrelhas: '',
    linfonodoRetroauricular: '',
    tiragem: '',
    murmVesiculares: '',
    bulhasCardiacas: '',
    estadoAbdome: '',
    herniaUmbilical: '',
    labiosClitorisProeminentesFem: '',
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
    tiraRoupa: '',
    constroiTorreTresCubos: '',
    apontaDuasFiguras: '',
    chutaBola: '',
  });

  const formatarDados = () => {
    return `
  **Avaliação de Desenvolvimento - 2 Anos**
  
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
  - Fontanela Anterior fechada: ${dados.fontanelaAnteriorFechada}
  
  -Linfonodos Cervicais Palpáveis: ${dados.linfonodosCervicaisPalpaveis} ${dados.linfonodosCervicaisPalpaveis === 'SIM' ? `(${dados.tipoLinfonodoCervical})` : ''}
  
  **Olhos:**
  - Secreção: ${dados.secrecaoOlhos}
  
  **Boca:**
  - Mucosa: ${dados.mucosa}
  - Dentição - Canino Superior: ${dados.caninoSuperior}
  
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
  - Presença de Hérnia Umbilical: ${dados.herniaUmbilical}
  
  **Genitália:**
  - Feminina:
    - Secreção: ${dados.secrecaoFeminina}
    - Sinéquia: ${dados.sinequia}
    - Hérnia Inguinal: ${dados.herniaInguinalFem}
  - Masculina:
    - Hérnia Inguinal: ${dados.herniaInguinalMas}
    - Hidrocele: ${dados.hidrocele}
    - Fimose Fisiológica: ${dados.fimoseFisiologica}
    - Testículos: ${dados.testiculos}
    - Meato Urinário: ${dados.meatoUrinario}
  
  **Orifício Anal:**
  - Anomalias: ${dados.anomaliasAnal}
  - Fissuras: ${dados.fissuras}
  - Assaduras: ${dados.assaduras}
  
  **Marcos do Desenvolvimento:**
  - Tira roupa: ${dados.tiraRoupa}
  - Constrói torre de 3 cubos: ${dados.constroiTorreTresCubos}
  - Aponta 2 figuras: ${dados.apontaDuasFiguras}
  - Chuta bola: ${dados.chutaBola}
  `.trim();
  };
  
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
  <h3>2 Anos</h3>
  <hr className="hr" />
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
      <div key={estado} className="form-check">
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
        <div key={textura} className="form-check">
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
        <div key={sensacao} className="form-check">
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
        <div key={cor} className="form-check">
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
        <div key={hidratacao} className="form-check">
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
</div>
<div className="form-section">
<svg xmlns="http://www.w3.org/2000/svg" width="1049" height="2" viewBox="0 0 1049 2" fill="none">
  <path d="M0 1H1049" stroke="#FB8484" stroke-width="2"/>
</svg>
  <h3>Cabeça</h3>

  <div className="form-group">
    <label>Fontanela Anterior fechada:</label>
    <label>
      <input
        type="radio"
        name="fontanelaAnteriorFechada"
        value="Sim"
        checked={dados.fontanelaAnteriorFechada === 'Sim'}
        onChange={handleChange}
      />
      Sim
    </label>
    <label>
      <input
        type="radio"
        name="fontanelaAnteriorFechada"
        value="Não"
        checked={dados.fontanelaAnteriorFechada === 'Não'}
        onChange={handleChange}
      />
      Não
    </label>
  </div>
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

  <div className="form-group">
    <label>Secreção nos olhos:</label>
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
<label htmlFor="">Boca:</label>
  <div className="form-group">
    <label>Mucosa:</label>
    {["Corada", "Pálida", "Úmida", "Seca"].map((mucosa) => (
      <label key={mucosa}>
        <input
          type="radio"
          name="mucosa"
          value={mucosa}
          checked={dados.mucosa === mucosa}
          onChange={handleChange}
        />
        {mucosa}
      </label>
    ))}
  </div>

<label htmlFor="">Dentição:</label>
  <div className="form-group">
    <label>Canino superior:</label>
    {["Visualizado", "Sem erupção", "Não visualizado"].map((estado) => (
      <label key={estado}>
        <input
          type="radio"
          name="caninoSuperior"
          value={estado}
          checked={dados.caninoSuperior === estado}
          onChange={handleChange}
        />
        {estado}
      </label>
    ))}
  </div>

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

              <label>
                <input
                  type="radio"
                  name="estadoAbdome"
                  value="Plano"
                  checked={dados.estadoAbdome === 'Plano'}
                  onChange={handleChange}
                />
                Plano
              </label>
              <label>
                <input
                  type="radio"
                  name="estadoAbdome"
                  value="Globoso"
                  checked={dados.estadoAbdome === 'Globoso'}
                  onChange={handleChange}
                />
                Globoso
              </label>
              <label>
                <input
                  type="radio"
                  name="estadoAbdome"
                  value="Rígido"
                  checked={dados.estadoAbdome === 'Rígido'}
                  onChange={handleChange}
                />
                Rígido
              </label>
              <label>
                <input
                  type="radio"
                  name="estadoAbdome"
                  value="Flácido"
                  checked={dados.estadoAbdome === 'Flácido'}
                  onChange={handleChange}
                />
                Flácido
              </label>
            </div>

            <div className="form-group">
              <p>Presença de Hérnia Umbilical:</p>
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

            <h4>Feminina</h4>
            <div className="form-group">
              <p>Secreção:</p>
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
              <p>Sinéquia:</p>
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
              <p>Hérnia inguinal:</p>
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
          </div>

          <div className="form-section">
          <svg xmlns="http://www.w3.org/2000/svg" width="1049" height="2" viewBox="0 0 1049 2" fill="none">
  <path d="M0 1H1049" stroke="#FB8484" stroke-width="2"/>
</svg>
            <h4>Masculina</h4>
            <div className="form-group">
              <p>Hérnia inguinal:</p>
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
              <p>Hidrocele:</p>
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
              <p>Fimose fisiológica:</p>
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
              <p>Testículos:</p>
              <label>
                <input
                  type="radio"
                  name="testiculos"
                  value="Ectópicos"
                  checked={dados.testiculos === 'Ectópicos'}
                  onChange={handleChange}
                />
                Ectópicos
              </label>
              <label>
                <input
                  type="radio"
                  name="testiculos"
                  value="Criptorquidia"
                  checked={dados.testiculos === 'Criptorquidia'}
                  onChange={handleChange}
                />
                Criptorquidia
              </label>
            </div>

            <div className="form-group">
      <label>Meato urinário:</label>
      <div>
        <label>
          <input 
            type="radio" 
            name="meatoUrinario" 
            value="Visualizado" 
            checked={dados.meatoUrinario === 'Visualizado'} 
            onChange={handleChange} 
          />
          Visualizado
        </label>
        <label>
          <input 
            type="radio" 
            name="meatoUrinario" 
            value="Não visualizado" 
            checked={dados.meatoUrinario === 'Não visualizado'} 
            onChange={handleChange} 
          />
          Não visualizado
        </label>
        <label>
          <input 
            type="radio" 
            name="meatoUrinario" 
            value="Hipospadia" 
            checked={dados.meatoUrinario === 'Hipospadia'} 
            onChange={handleChange} 
          />
          Hipospadia
        </label>
        <label>
          <input 
            type="radio" 
            name="meatoUrinario" 
            value="Epispádia" 
            checked={dados.meatoUrinario === 'Epispádia'} 
            onChange={handleChange} 
          />
          Epispádia
        </label>
      </div>
    </div>
          </div>

          <div className="form-section">
          <svg xmlns="http://www.w3.org/2000/svg" width="1049" height="2" viewBox="0 0 1049 2" fill="none">
  <path d="M0 1H1049" stroke="#FB8484" stroke-width="2"/>
</svg>
            <h3>Orifício anal</h3>
            <div className="form-group">
              <p>Anomalias:</p>
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
              <p>Fissuras:</p>
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
              <p>Assaduras:</p>
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

            <div className="form-group">
              <p>Tira roupa:</p>
              <label>
                <input
                  type="radio"
                  name="tiraRoupa"
                  value="Presente"
                  checked={dados.tiraRoupa === 'Presente'}
                  onChange={handleChange}
                />
                Presente
              </label>
              <label>
                <input
                  type="radio"
                  name="tiraRoupa"
                  value="Ausente"
                  checked={dados.tiraRoupa === 'Ausente'}
                  onChange={handleChange}
                />
                Ausente
              </label>
              <label>
                <input
                  type="radio"
                  name="tiraRoupa"
                  value="Não verificado"
                  checked={dados.tiraRoupa === 'Não verificado'}
                  onChange={handleChange}
                />
                Não verificado
              </label>
            </div>

            <div className="form-group">
              <p>Constrói torre de 3 cubos:</p>
              <label>
                <input
                  type="radio"
                  name="constroiTorreTresCubos"
                  value="Presente"
                  checked={dados.constroiTorreTresCubos === 'Presente'}
                  onChange={handleChange}
                />
                Presente
              </label>
              <label>
                <input
                  type="radio"
                  name="constroiTorreTresCubos"
                  value="Ausente"
                  checked={dados.constroiTorreTresCubos === 'Ausente'}
                  onChange={handleChange}
                />
                Ausente
              </label>
              <label>
                <input
                  type="radio"
                  name="constroiTorreTresCubos"
                  value="Não verificado"
                  checked={dados.constroiTorreTresCubos === 'Não verificado'}
                  onChange={handleChange}
                />
                Não verificado
              </label>
            </div>

            <div className="form-group">
              <p>Aponta 2 figuras:</p>
              <label>
                <input
                  type="radio"
                  name="apontaDuasFiguras"
                  value="Presente"
                  checked={dados.apontaDuasFiguras === 'Presente'}
                  onChange={handleChange}
                />
                Presente
              </label>
              <label>
                <input
                  type="radio"
                  name="apontaDuasFiguras"
                  value="Ausente"
                  checked={dados.apontaDuasFiguras === 'Ausente'}
                  onChange={handleChange}
                />
                Ausente
              </label>
              <label>
                <input
                  type="radio"
                  name="apontaDuasFiguras"
                  value="Não verificado"
                  checked={dados.apontaDuasFiguras === 'Não verificado'}
                  onChange={handleChange}
                />
                Não verificado
              </label>
            </div>

            <div className="form-group">
              <p>Chuta bola:</p>
              <label>
                <input
                  type="radio"
                  name="chutaBola"
                  value="Presente"
                  checked={dados.chutaBola === 'Presente'}
                  onChange={handleChange}
                />
                Presente
              </label>
              <label>
                <input
                  type="radio"
                  name="chutaBola"
                  value="Ausente"
                  checked={dados.chutaBola === 'Ausente'}
                  onChange={handleChange}
                />
                Ausente
              </label>
              <label>
                <input
                  type="radio"
                  name="chutaBola"
                  value="Não verificado"
                  checked={dados.chutaBola === 'Não verificado'}
                  onChange={handleChange}
                />
                Não verificado
              </label>
            </div>
            <button className='copiar' type="submit">Copiar</button>
          </div>
      </form>
    </div>
  );
}

export default Formulario2Anos;
