import React, { useState } from 'react';
import toolNurseImage from '../../assets/toolNurse.jpg'; // Ajuste o caminho conforme necessário
import Menu from '../Menu'; // Ajuste o caminho conforme necessário

function Formulario12Meses() {
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
    denteIncisivoLateralSuperior: '',
    denteIncisivoLateralInferior: '',
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
    imitaGestos: '',
    fazPinca: '',
    produzJargao: '',
    andaComApoio: '',
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

  // Função para formatar os dados para visualização ou envio

const formatarDados = () => {
    return `
**Avaliação de Desenvolvimento - 12 Meses**

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
- Dentição - Dente Incisivo Lateral Superior: ${dados.denteIncisivoLateralSuperior}
- Dentição - Dente Incisivo Lateral Inferior: ${dados.denteIncisivoLateralInferior}

**Orelhas/Ouvidos:**
- Secreção: ${dados.secrecaoOrelhas}
- Linfonodo Retroauricular Palpável: ${dados.linfonodoRetroauricular}

**Tórax:**
- AP Tiragem: ${dados.tiragem}
- Murmúrio Vesicular: ${dados.murmVesiculares}
- AC Bulhas Cardíacas: ${dados.bulhasCardiacas}

**Abdome:**
- Estado: ${dados.abdomen}
- Presença de Hérnia Umbilical: ${dados.herniaUmbilical}

**Genitália:**
- Feminina:
  - Pequenos Lábios e Clitóris Proeminentes: ${dados.labiosClitorisProeminentes}
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
- Imita Gestos: ${dados.imitaGestos}
- Faz Pinça: ${dados.fazPinca}
- Produz “Jargão”: ${dados.produzJargao}
- Anda com Apoio: ${dados.andaComApoio}
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
          <h2>Formulário de Avaliação - 12 Meses</h2>
          
          {/* Cada seção do formulário seria implementada aqui, similar ao exemplo: */}

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
  <div className="form-group">
    {["Ativo", "Hipoativo", "Letárgico", "Calmo", "Choroso"].map((estado) => (
      <label key={estado}>
        <input 
          type="radio" 
          id={`estadoGeral-${estado}`} 
          name="estadoGeral" 
          value={estado} 
          checked={dados.estadoGeral === estado} 
          onChange={handleChange} 
        />
        {estado}
      </label>
    ))}
  </div>
</div>


<div className="form-section">
  <h3>Pele</h3>
  <div className="form-group">
    <label>Textura:</label>
    <div>
      <label><input type="radio" name="texturaPele" value="Lisa" checked={dados.texturaPele === "Lisa"} onChange={handleChange} /> Lisa</label>
      <label><input type="radio" name="texturaPele" value="Irregular" checked={dados.texturaPele === "Irregular"} onChange={handleChange} /> Irregular</label>
    </div>
  </div>
  <div className="form-group">
    <label>Sensação ao Toque:</label>
    <div>
      <label><input type="radio" name="sensacaoPele" value="Macia" checked={dados.sensacaoPele === "Macia"} onChange={handleChange} /> Macia</label>
      <label><input type="radio" name="sensacaoPele" value="Áspera" checked={dados.sensacaoPele === "Áspera"} onChange={handleChange} /> Áspera</label>
    </div>
  </div>
  <div className="form-group">
    <label>Cor:</label>
    <div>
      <label><input type="radio" name="corPele" value="Rósea" checked={dados.corPele === "Rósea"} onChange={handleChange} /> Rósea</label>
      <label><input type="radio" name="corPele" value="Pálida" checked={dados.corPele === "Pálida"} onChange={handleChange} /> Pálida</label>
      <label><input type="radio" name="corPele" value="Cianótica" checked={dados.corPele === "Cianótica"} onChange={handleChange} /> Cianótica</label>
      <label><input type="radio" name="corPele" value="Ictérica" checked={dados.corPele === "Ictérica"} onChange={handleChange} /> Ictérica</label>
    </div>
  </div>
  <div className="form-group">
    <label>Hidratação:</label>
    <div>
      <label><input type="radio" name="hidratacaoPele" value="Hidratada" checked={dados.hidratacaoPele === "Hidratada"} onChange={handleChange} /> Hidratada</label>
      <label><input type="radio" name="hidratacaoPele" value="Desidratada" checked={dados.hidratacaoPele === "Desidratada"} onChange={handleChange} /> Desidratada</label>
    </div>
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

  {/* Dentição */}
  {/* Implemente conforme sua necessidade, exemplo para dente incisivo lateral superior */}
  <div className="form-group">
    <p>Dente incisivo lateral superior:</p>
    {["Presença", "Sem erupção", "Não visualizado"].map(opcao => (
      <label key={opcao}>
        <input 
          type="radio" 
          name="denteIncisivoLateralSuperior" 
          value={opcao} 
          checked={dados.denteIncisivoLateralSuperior === opcao} 
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
  </div>
</div>

<div className="form-section">
  <h3>Tórax</h3>
  <div className="form-group">
    <p>AP:</p>
    <label>
      <input 
        type="radio" 
        name="tiragem" 
        value="Tiragem" 
        checked={dados.tiragem === 'Tiragem'} 
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
    {/* Adicione mais opções conforme necessário */}
  </div>
  <div className="form-group">
    <p>AC:</p>
    <label>
      <input 
        type="radio" 
        name="bulhasCardiacas" 
        value="Sem sopro" 
        checked={dados.bulhasCardiacas === 'Sem sopro'} 
        onChange={handleChange} 
      />
      Sem Sopro
    </label>
    <label>
      <input 
        type="radio" 
        name="bulhasCardiacas" 
        value="Com sopro" 
        checked={dados.bulhasCardiacas === 'Com sopro'} 
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
  <div className="form-group">
    <h4>Feminina</h4>
    <div className="form-group">
      <label>Pequenos lábios e clitóris proeminentes:</label>
      <div>
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
    </div>
    <div className="form-group">
      <label>Secreção:</label>
      <div>
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
    </div>
    <div className="form-group">
      <label>Sinéquia:</label>
      <div>
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
    </div>
    <div className="form-group">
      <label>Hérnia inguinal:</label>
      <div>
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
  </div>
  <div className="form-group">
    <h4>Masculina</h4>
    <div className="form-group">
      <label>Hérnia inguinal:</label>
      <div>
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
    </div>
    <div className="form-group">
      <label>Hidrocele:</label>
      <div>
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
    </div>
    <div className="form-group">
      <label>Fimose fisiológica:</label>
      <div>
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
    </div>
    <div className="form-group">
  <label>Testículos:</label>
  <div>
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
    <label>
      <input 
        type="radio" 
        name="testiculos" 
        value="Descidos" 
        checked={dados.testiculos === 'Descidos'} 
        onChange={handleChange} 
      />
      Descidos
    </label>
    {/* Adicione mais opções de acordo com sua necessidade */}
  </div>
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
</div>

<div className="form-section">
  <h3>Orifício Anal</h3>
  <div className="form-group">
    <label>Anomalias:</label>
    <div>
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
  </div>
  <div className="form-group">
    <label>Fissuras:</label>
    <div>
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
  </div>
  <div className="form-group">
    <label>Assaduras:</label>
    <div>
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
</div>
<div className="form-section">
  <h3>Marcos do Desenvolvimento</h3>
  <div className="form-group">
    <label>Imita gestos:</label>
    <div>
      <label>
        <input 
          type="radio" 
          name="imitaGestos" 
          value="Presente" 
          checked={dados.imitaGestos === 'Presente'} 
          onChange={handleChange} 
        />
        Presente
      </label>
      <label>
        <input 
          type="radio" 
          name="imitaGestos" 
          value="Ausente" 
          checked={dados.imitaGestos === 'Ausente'} 
          onChange={handleChange} 
        />
        Ausente
      </label>
      <label>
        <input 
          type="radio" 
          name="imitaGestos" 
          value="Não verificado" 
          checked={dados.imitaGestos === 'Não verificado'} 
          onChange={handleChange} 
        />
        Não verificado
      </label>
    </div>
  </div>
  <div className="form-group">
    <label>Faz pinça:</label>
    <div>
      <label>
        <input 
          type="radio" 
          name="fazPinca" 
          value="Presente" 
          checked={dados.fazPinca === 'Presente'} 
          onChange={handleChange} 
        />
        Presente
      </label>
      <label>
        <input 
          type="radio" 
          name="fazPinca" 
          value="Ausente" 
          checked={dados.fazPinca === 'Ausente'} 
          onChange={handleChange} 
        />
        Ausente
      </label>
      <label>
        <input 
          type="radio" 
          name="fazPinca" 
          value="Não verificado" 
          checked={dados.fazPinca === 'Não verificado'} 
          onChange={handleChange} 
        />
        Não verificado
      </label>
    </div>
  </div>
  <div className="form-group">
    <label>Produz “jargão”:</label>
    <div>
      <label>
        <input 
          type="radio" 
          name="produzJargao" 
          value="Presente" 
          checked={dados.produzJargao === 'Presente'} 
          onChange={handleChange} 
        />
        Presente
      </label>
      <label>
        <input 
          type="radio" 
          name="produzJargao" 
          value="Ausente" 
          checked={dados.produzJargao === 'Ausente'} 
          onChange={handleChange} 
        />
        Ausente
      </label>
      <label>
        <input 
          type="radio" 
          name="produzJargao" 
          value="Não verificado" 
          checked={dados.produzJargao === 'Não verificado'} 
          onChange={handleChange} 
        />
        Não verificado
      </label>
    </div>
  </div>
  <div className="form-group">
    <label>Anda com apoio:</label>
    <div>
      <label>
        <input 
          type="radio" 
          name="andaComApoio" 
          value="Presente" 
          checked={dados.andaComApoio === 'Presente'} 
          onChange={handleChange} 
        />
        Presente
      </label>
      <label>
        <input 
          type="radio" 
          name="andaComApoio" 
          value="Ausente" 
          checked={dados.andaComApoio === 'Ausente'} 
          onChange={handleChange} 
        />
        Ausente
      </label>
      <label>
        <input 
          type="radio" 
          name="andaComApoio" 
          value="Não verificado" 
          checked={dados.andaComApoio === 'Não verificado'} 
          onChange={handleChange} 
        />
        Não verificado
      </label>
    </div>
  </div>
</div>

          
          {/* Mais seções seriam adicionadas aqui, seguindo a estrutura acima */}
          
          <button className='copiar' type="submit">Copiar</button>
        </div>
      </form>
    </div>
  );
}

export default Formulario12Meses;
