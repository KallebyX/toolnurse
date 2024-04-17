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
  
  **Linfonodos Cervicais Palpáveis:** ${dados.linfonodosCervicaisPalpaveis}
  
  **Olhos:**
  - Secreção: ${dados.secrecaoOlhos}
  
  **Boca:**
  - Mucosa: ${dados.mucosa}
  - Dentição - Canino Superior: ${dados.caninoSuperior}
  
  **Orelhas/Ouvidos:**
  - Secreção: ${dados.secrecaoOrelhas}
  - Linfonodo Retroauricular Palpável: ${dados.linfonodoRetroauricular}
  
  **Tórax:**
  - AP Tiragem: ${dados.tiragem}
  - Murmúrio Vesicular: ${dados.murmVesiculares}
  - AC Bulhas Cardíacas: ${dados.bulhasCardiacas}
  
  **Abdome:**
  - Estado: ${dados.estadoAbdome}
  - Presença de Hérnia Umbilical: ${dados.herniaUmbilical}
  
  **Genitália:**
  - Feminina:
    - Pequenos Lábios e Clitóris Proeminentes: ${dados.labiosClitorisProeminentesFem}
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
      <form onSubmit={handleSubmit}>
        <div className="cabecalho">
          <img className="img" src={toolNurseImage} alt="Tool Nurse Logo" />
          <Menu />
         
        </div>
        <div className="formulario">
  <h3>2 Anos</h3>
  <hr className="hr" />
  <div className="form-section">
  <h3>Informações Básicas</h3>
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
  <h3>Cabeça</h3>

  <div className="form-group">
    <p>Fontanela Anterior fechada:</p>
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
    <p>Linfonodos cervicais palpáveis:</p>
    {/* Aqui, você pode querer implementar uma lógica mais complexa para lidar com múltiplas opções ou adicionar mais opções conforme necessário */}
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
  </div>

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

  <div className="form-group">
    <p>Mucosa:</p>
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

  <div className="form-group">
    <p>Canino superior:</p>
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

  <div className="form-group">
    <p>Secreção nas orelhas:</p>
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
  </div>
</div>
<div className="form-section">
            <h3>Tórax</h3>

            <div className="form-group">
              <p>AP Tiragem:</p>
              <label>
                <input
                  type="radio"
                  name="tiragem"
                  value="Normal"
                  checked={dados.tiragem === 'Normal'}
                  onChange={handleChange}
                />
                Normal
              </label>
              <label>
                <input
                  type="radio"
                  name="tiragem"
                  value="Aumentada"
                  checked={dados.tiragem === 'Aumentada'}
                  onChange={handleChange}
                />
                Aumentada
              </label>
            </div>

            <div className="form-group">
              <p>Murmúrio Vesicular:</p>
              <label>
                <input
                  type="radio"
                  name="murmVesiculares"
                  value="Presente"
                  checked={dados.murmVesiculares === 'Presente'}
                  onChange={handleChange}
                />
                Presente
              </label>
              <label>
                <input
                  type="radio"
                  name="murmVesiculares"
                  value="Ausente"
                  checked={dados.murmVesiculares === 'Ausente'}
                  onChange={handleChange}
                />
                Ausente
              </label>
            </div>

            <div className="form-group">
              <p>Bulhas Cardíacas:</p>
              <label>
                <input
                  type="radio"
                  name="bulhasCardiacas"
                  value="Sem sopro"
                  checked={dados.bulhasCardiacas === 'Sem sopro'}
                  onChange={handleChange}
                />
                Sem sopro
              </label>
              <label>
                <input
                  type="radio"
                  name="bulhasCardiacas"
                  value="Com sopro"
                  checked={dados.bulhasCardiacas === 'Com sopro'}
                  onChange={handleChange}
                />
                Com sopro
              </label>
            </div>
          </div>

          <div className="form-section">
            <h3>Abdome</h3>

            <div className="form-group">
              <p>Estado:</p>
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
            <h3>Genitália</h3>

            <h4>Feminina</h4>
            <div className="form-group">
              <p>Pequenos lábios e clitóris proeminentes:</p>
              <label>
                <input
                  type="radio"
                  name="labiosClitorisProeminentesFem"
                  value="Sim"
                  checked={dados.labiosClitorisProeminentesFem === 'Sim'}
                  onChange={handleChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="labiosClitorisProeminentesFem"
                  value="Não"
                  checked={dados.labiosClitorisProeminentesFem === 'Não'}
                  onChange={handleChange}
                />
                Não
              </label>
            </div>

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
              <p>Meato urinário:</p>
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
            </div>
          </div>

          <div className="form-section">
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
