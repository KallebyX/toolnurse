import React, { useState } from 'react';
import toolNurseImage from '../../assets/toolNurse.jpg'; // Adjust path as necessary
import Menu from '../Menu'; // Adjust path as necessary

function FormularioSeisMeses() {
  const [dados, setDados] = useState({
    peso: '',
    estatura: '',
    pc: '',
    estadoGeral: '',
    texturaPele: '',
    sensacaoPele: '',
    corPele: '',
    hidratacaoPele: '',
    fontanelaAnterior: '',
    linfonodosCervicais: '',
    secrecaoOlhos: '',
    estrabismo: '',
    mucosaBoca: '',
    denticacao: '',
    secrecaoOrelhas: '',
    linfonodoRetroauricular: '',
    tiragem: false,
    murmurioVesiculares: '',
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
    hipospadia: '',
    epispadia: '',
    anomaliasAnal: '',
    fissuras: '',
    assaduras: '',
    escondeAchou: '',
    transfereObjetos: '',
    duplicaSilabas: '',
    sentaSemApoio: ''
  });  

  const formatarDados = () => {
    return `
      6 Meses
      
      Peso: ${dados.peso} Kg
      Estatura: ${dados.estatura} cm
      PC: ${dados.pc} cm
  
      Estado Geral: ${dados.estadoGeral}
      Pele:
        - Textura: ${dados.texturaPele}
        - Sensação: ${dados.sensacaoPele}
        - Cor: ${dados.corPele}
        - Hidratação: ${dados.hidratacaoPele}
  
      Cabeça:
        - Fontanela Anterior: ${dados.fontanelaAnterior}
        - Linfonodos Cervicais: ${dados.linfonodosCervicais}
  
      Olhos:
        - Secreção: ${dados.secrecaoOlhos}
        - Estrabismo: ${dados.estrabismo}
  
      Boca:
        - Mucosa: ${dados.mucosa}
        - Dentição Incisivo Central Inferior: ${dados.denticacao}
  
      Orelhas/Ouvidos:
        - Secreção: ${dados.secrecaoOrelhas}
        - Linfonodo Retroauricular: ${dados.linfonodoRetroauricular}
  
      Tórax:
        - AP:
        ${dados.apTiragem ? 'Tiragem' : ''}
        ${dados.apMurmurioVesiculares ? 'Murmúrio Vesiculares' : ''}
        ${dados.apSemRuidos ? 'Sem Ruídos Adventícios' : ''}
        - AC: ${dados.acBulhas}
  
      Abdome:
        - Estado: ${dados.estadoAbdome}
        - Presença de Hérnia Umbilical: ${dados.herniaUmbilical}
  
      Genitália:
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
  
      Orifício Anal:
        - Anomalias: ${dados.anomaliasAnal}
        - Fissuras: ${dados.fissuras}
        - Assaduras: ${dados.assaduras}
  
      Marcos do Desenvolvimento:
        - Brinca de Esconde-Achou: ${dados.brincaEscondeAchou}
        - Transfere Objetos de Uma Mão para Outra: ${dados.transfereObjetos}
        - Duplica Sílabas: ${dados.duplicaSilabas}
        - Senta-se Sem Apoio: ${dados.sentaSemApoio}
    `.trim();
  };
  

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    // Para checkboxes, o valor é determinado pelo estado checked, para outros inputs é o valor do input
    if (type === 'checkbox') {
      setDados({ ...dados, [name]: checked });
    } else {
      setDados({ ...dados, [name]: value });
    }
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Formatar dados para serem visualizados ou enviados
    const formattedData = formatarDados();
    console.log(formattedData);
    // Aqui você pode também enviar os dados para um servidor ou API
  };
  

  return (
    <div className="tudo">
      <div className="cabecalho">
        <img className="img" src={toolNurseImage} alt="Tool Nurse Logo" />
        <Menu />
      </div>
      <h3>6 Meses</h3>
      <form onSubmit={handleSubmit}>
        {/* Form fields here, structured similarly to the previous forms with inputs for each category */}
        {/* For example: */}
        <div className="form-section">
  <div className="form-group">
  <h3>Informações Básicas</h3>
    <label>Peso (Kg):</label>
    <input type="text" name="peso" value={dados.peso} onChange={handleChange} />
  </div>

  <div className="form-group">
    <label>Estatura (cm):</label>
    <input type="text" name="estatura" value={dados.estatura} onChange={handleChange} />
  </div>

  <div className="form-group">
    <label>PC (cm):</label>
    <input type="text" name="pc" value={dados.pc} onChange={handleChange} />
  </div>

  <div className="form-section">
    <h3>Estado Geral</h3>
    {["Ativo", "Hipoativo", "Letárgico", "Calmo", "Choroso"].map((estado) => (
      <label key={estado}>
        <input
          type="radio"
          name="estadoGeral"
          value={estado}
          checked={dados.estadoGeral === estado}
          onChange={handleChange}
        />
        {estado}
      </label>
    ))}
  </div>

  <div className="form-section">
    <h3>Pele</h3>
    <div className="form-group">
      <label>Textura:</label>
      {["Lisa", "Irregular"].map((textura) => (
        <label key={textura}>
          <input
            type="radio"
            name="texturaPele"
            value={textura}
            checked={dados.texturaPele === textura}
            onChange={handleChange}
          />
          {textura}
        </label>
      ))}
    </div>
    <div className="form-group">
      <label>Sensação:</label>
      {["Macia", "Áspera"].map((sensacao) => (
        <label key={sensacao}>
          <input
            type="radio"
            name="sensacaoPele"
            value={sensacao}
            checked={dados.sensacaoPele === sensacao}
            onChange={handleChange}
          />
          {sensacao}
        </label>
      ))}
    </div>
    <div className="form-group">
      <label>Cor:</label>
      {["Rósea", "Pálida", "Cianótica", "Ictérica"].map((cor) => (
        <label key={cor}>
          <input
            type="radio"
            name="corPele"
            value={cor}
            checked={dados.corPele === cor}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
    </div>
    <div className="form-group">
      <label>Hidratação:</label>
      {["Hidratada", "Desidratada"].map((hidratacao) => (
        <label key={hidratacao}>
          <input
            type="radio"
            name="hidratacaoPele"
            value={hidratacao}
            checked={dados.hidratacaoPele === hidratacao}
            onChange={handleChange}
          />
          {hidratacao}
        </label>
      ))}
    </div>
  </div>
</div>
<div className="form-section">
  <h3>Cabeça</h3>
  <div className="form-group">
    <label>Fontanela Anterior:</label>
    {["Abauladas", "Deprimidas", "Planas"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="fontanelaAnterior"
          value={option}
          checked={dados.fontanelaAnterior === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>

  <div className="form-group">
    <label>Linfonodos cervicais palpáveis:</label>
    <label>
      <input
        type="radio"
        name="linfonodosCervicais"
        value="Não"
        checked={dados.linfonodosCervicais === "Não"}
        onChange={handleChange}
      />
      Não
    </label>
    {["Sim - Móvel", "Sim - Fixo", "Sim - Fibrobástico", "Sim - Amolecido", "Sim - Endurecido"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="linfonodosCervicais"
          value={option}
          checked={dados.linfonodosCervicais === option}
          onChange={handleChange}
        />
        {option.split(" - ")[1]}
      </label>
    ))}
  </div>
<label htmlFor="">Olhos:</label>
  <div className="form-group">
    <label>Secreção ocular:</label>
    <label>
      <input
        type="radio"
        name="secrecaoOlhos"
        value="sim"
        checked={dados.secrecaoOlhos === "sim"}
        onChange={handleChange}
      />
      Sim
    </label>
    <label>
      <input
        type="radio"
        name="secrecaoOlhos"
        value="não"
        checked={dados.secrecaoOlhos === "não"}
        onChange={handleChange}
      />
      Não
    </label>
  </div>

  <div className="form-group">
    <label>Estrabismo:</label>
    <label>
      <input
        type="radio"
        name="estrabismo"
        value="sim"
        checked={dados.estrabismo === "sim"}
        onChange={handleChange}
      />
      Sim
    </label>
    <label>
      <input
        type="radio"
        name="estrabismo"
        value="não"
        checked={dados.estrabismo === "não"}
        onChange={handleChange}
      />
      Não
    </label>
  </div>
</div>
<div className="form-section">
  <label htmlFor="">Boca:</label>
  <div className="form-group">
    <label>Mucosa:</label>
    {["Corada", "Pálida", "Úmida", "Seca"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="mucosa"
          value={option}
          checked={dados.mucosa === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>

  <div className="form-group">
    <label>Dentição - Dente incisivo central inferior:</label>
    {["Presente", "Ausente", "Não visualizado"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="denticacao"
          value={option}
          checked={dados.denticacao === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>
  <label htmlFor="">Orelhas/ouvidos:</label>
  <div className="form-group">
    <label>Secreção:</label>
    {["sim", "não"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="secrecaoOrelhas"
          value={option}
          checked={dados.secrecaoOrelhas === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>

  <div className="form-group">
    <label>Linfonodo retroauricular palpável:</label>
    <label>
      <input
        type="radio"
        name="linfonodoRetroauricular"
        value="Não"
        checked={dados.linfonodoRetroauricular === "Não"}
        onChange={handleChange}
      />
      Não
    </label>
    {["Sim - Móvel", "Sim - Fixo", "Sim - Fibrobástico", "Sim - Amolecido", "Sim - Endurecido"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="linfonodoRetroauricular"
          value={option}
          checked={dados.linfonodoRetroauricular === option}
          onChange={handleChange}
        />
        {option.split(" - ")[1]}
      </label>
    ))}
  </div>
</div>
<div className="form-section">
  <h3>Tórax</h3>
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
  <input type="radio" id="acSemSopro" name="acBulhas" value="Sem sopro" checked={dados.acBulhas === 'Sem sopro'} onChange={handleChange} />
  <label htmlFor="acSemSopro">Sem sopro</label><br />
  <input type="radio" id="acComSopro" name="acBulhas" value="Com sopro" checked={dados.acBulhas === 'Com sopro'} onChange={handleChange} />
  <label htmlFor="acComSopro">Com sopro</label><br />
</div>
</div>
<div className="form-section">
  <h3>Abdome</h3>
  <div className="form-group">
    <label>Estado do Abdome:</label>
    {["Plano", "Globoso", "Rígido", "Flácido"].map((estado) => (
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
    <label>Presença de hérnia umbilical:</label>
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
  <h3>Marcos do Desenvolvimento - 6 Meses</h3>
  <div className="form-group">
    <label>Brinca de esconde-achou:</label>
    {["Presente", "Ausente", "Não verificado"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="brincaEscondeAchou"
          value={option}
          checked={dados.brincaEscondeAchou === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>

  <div className="form-group">
    <label>Transfere objetos de uma mão para outra:</label>
    {["Presente", "Ausente", "Não verificado"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="transfereObjetos"
          value={option}
          checked={dados.transfereObjetos === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>

  <div className="form-group">
    <label>Duplica sílabas:</label>
    {["Presente", "Ausente", "Não verificado"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="duplicaSilabas"
          value={option}
          checked={dados.duplicaSilabas === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>

  <div className="form-group">
    <label>Senta-se sem apoio:</label>
    {["Presente", "Ausente", "Não verificado"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="sentaSemApoio"
          value={option}
          checked={dados.sentaSemApoio === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>
</div>

        {/* Continue adding other fields following the same pattern */}
        <button
          type="button"
          className='copiar'
          onClick={() => {
            const formattedData = formatarDados();  // Ensure this function returns the formatted string of data
            navigator.clipboard.writeText(formattedData)
              .then(() => alert('Dados copiados para a área de transferência!'))
              .catch((error) => console.error('Erro ao copiar os dados:', error));
          }}
        >
          Copiar Dados
        </button>
      </form>
    </div>
  );
}

export default FormularioSeisMeses;
