import React, { useState } from 'react';
import toolNurseImage from '../../assets/toolNurse.jpg'; // Ajuste o caminho conforme necessário
import Menu from '../Menu'; // Ajuste o caminho conforme necessário

function Formulario9Meses() {
  const [dados, setDados] = useState({
    peso: '',
    estatura: '',
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
    denticao: '',
    denteIncisivoCentralInferior : '',
    denteIncisivoCentralSuperior: '',
    secrecaoOrelhas: '',
    linfonodoRetroauricular: '',
    tiragem: '',
    apTiragem: '',
    murmVesicular: '',
    acBulhasCardiacas: '',
    murmVesiculares: '',
    bulhasCardiacas: '',
    apTiragem: '',
    murmurioVesicular: '',
    acBulhasCardiacas: '',
    estadoAbdome: '',
    herniaUmbilical: '',
    abdomen: '',
    herniaUmbilical: '',
    labiosClitorisProeminentes: '',
    secrecaoFeminina: '',
    sinequia: '',
    herniaInguinalFem: '',
    herniaInguinalMas: '',
    hidrocele: '',
    fimose: '',
    testiculos: '',
    meatoUrinario: '',
    anomaliasAnal: '',
    fissuras: '',
    assaduras: '',
    escondeAchou: '',
    transfereObjetos: '',
    duplicaSilabas: '',
    sentaSemApoio: '',
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
    return `**Avaliação de Desenvolvimento - 9 Meses**\n\n` +
      `**Peso:** ${dados.peso} Kg\n` +
      `**Estatura:** ${dados.estatura} cm\n` +
      `**PC:** ${dados.pc} cm\n` +
      `**Temperatura Axilar:** ${dados.temperatura} °C\n` +
      `**FR:** ${dados.fr} RPM\n` +
      `**Estado Geral:** ${dados.estadoGeral}\n\n` +
      `**Pele:**\n` +
      `- Textura: ${dados.texturaPele}\n` +
      `- Sensação ao Toque: ${dados.sensacaoPele}\n` +
      `- Cor: ${dados.corPele}\n` +
      `- Hidratação: ${dados.hidratacaoPele}\n\n` +
      `**Cabeça:**\n` +
      `- Fontanela Anterior: ${dados.fontanelaAnterior}\n` +
      `- Linfonodos cervicais palpáveis: ${dados.linfonodosCervicaisPalpaveis}\n\n` +
      `**Olhos:**\n` +
      `- Secreção: ${dados.secrecaoOlhos}\n\n` +
      `**Mucosa:** ${dados.mucosa}\n\n` +
      `**Dentição:**\n` +
      `- Dente Incisivo Central Inferior: ${dados.denteIncisivoCentralInferior}\n` +
      `- Dente Incisivo Central Superior: ${dados.denteIncisivoCentralSuperior}\n\n` +
      `**Orelhas/Ouvidos:**\n` +
      `- Secreção: ${dados.secrecaoOrelhas}\n` +
      `- Linfonodo retroauricular palpável: ${dados.linfonodoRetroauricular}\n\n` +
      `**Tórax:**\n` +
      `- AP Tiragem: ${dados.apTiragem}\n` +
      `- Murmúrio Vesicular: ${dados.murmVesicular}\n` +
      `- AC Bulhas Cardíacas: ${dados.acBulhasCardiacas}\n\n` +
      `**Abdome:**\n` +
      `- Estado: ${dados.abdomen}\n` +
      `- Hérnia Umbilical: ${dados.herniaUmbilical}\n\n` +
      `**Genitália Feminina:**\n` +
      `- Pequenos lábios e clitóris proeminentes: ${dados.labiosClitorisProeminentes}\n` +
      `- Secreção: ${dados.secrecaoFeminina}\n` +
      `- Sinéquia: ${dados.sinequia}\n` +
      `- Hérnia inguinal: ${dados.herniaInguinalFem}\n\n` +
      `**Genitália Masculina:**\n` +
      `- Hérnia inguinal: ${dados.herniaInguinalMas}\n` +
      `- Hidrocele: ${dados.hidrocele}\n` +
      `- Fimose: ${dados.fimose}\n` +
      `- Testículos: ${dados.testiculos}\n` +
      `- Meato Urinário: ${dados.meatoUrinario}\n\n` +
      `**Orifício Anal:**\n` +
      `- Anomalias: ${dados.anomaliasAnal}\n` +
      `- Fissuras: ${dados.fissuras}\n` +
      `- Assaduras: ${dados.assaduras}\n\n` +
      `**Marcos do Desenvolvimento - 9 Meses:**\n` +
      `- Brinca de esconde-achou: ${dados.escondeAchou}\n` +
      `- Transfere objetos de uma mão para outra: ${dados.transfereObjetos}\n` +
      `- Duplica sílabas: ${dados.duplicaSilabas}\n` +
      `- Senta-se sem apoio: ${dados.sentaSemApoio}`;
  };

  return (
    <div className='tudo'>
      <form onSubmit={handleSubmit}>
        <div className="cabecalho">
          <div className="cabecalho">
            <img className="img" src={toolNurseImage} alt="Tool Nurse Logo" />
            <Menu />
          </div>
          
          
        </div>
        <h3>9 Meses</h3>
        <hr className="hr" />
        <div className="formulario">
          {/* Campos do formulário */}
          <div className="form-section">
            
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
  <div className="form-group">
    <label>Temperatura Axilar (ºC):</label>
    <input type="text" name="temperatura" value={dados.temperatura} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label>FR (RPM):</label>
    <input type="text" name="fr" value={dados.fr} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label>Estado Geral:</label>
    <div>
      {["Ativo", "Hipoativo", "Letárgico", "Calmo", "Choroso"].map(estado => (
        <React.Fragment key={estado}>
          <input type="radio" id={`estadoGeral-${estado}`} name="estadoGeral" value={estado} onChange={handleChange} checked={dados.estadoGeral === estado} />
          <label htmlFor={`estadoGeral-${estado}`}>{estado}</label>
        </React.Fragment>
      ))}
    </div>
  </div>
</div>
<div className="form-section">
  <h3>Cabeça</h3>
  <div className="form-group">
    <label>Fontanela Anterior:</label>
    <div>
      {["Em Fechamento", "Fechada", "Abauladas", "Deprimidas", "Planas"].map(opcao => (
        <React.Fragment key={opcao}>
          <input type="radio" id={`fontanelaAnterior-${opcao}`} name="fontanelaAnterior" value={opcao} onChange={handleChange} checked={dados.fontanelaAnterior === opcao} />
          <label htmlFor={`fontanelaAnterior-${opcao}`}>{opcao}</label>
        </React.Fragment>
      ))}
    </div>
  </div>
  <div className="form-group">
    <label>Linfonodos cervicais palpáveis:</label>
    <input type="radio" id="linfonodosCervicaisPalpaveisSim" name="linfonodosCervicaisPalpaveis" value="Sim" onChange={handleChange} checked={dados.linfonodosCervicaisPalpaveis === "Sim"} />
    <label htmlFor="linfonodosCervicaisPalpaveisSim">Sim</label>
    <input type="radio" id="linfonodosCervicaisPalpaveisNao" name="linfonodosCervicaisPalpaveis" value="Nao" onChange={handleChange} checked={dados.linfonodosCervicaisPalpaveis === "Nao"} />
    <label htmlFor="linfonodosCervicaisPalpaveisNao">Não</label>
  </div>
</div>
<div className="form-section">
  <h3>Pele</h3>
  <div className="form-group">
    <label>Textura:</label>
    <input type="radio" id="texturaPeleLisa" name="texturaPele" value="Lisa" onChange={handleChange} checked={dados.texturaPele === "Lisa"} />
    <label htmlFor="texturaPeleLisa">Lisa</label>
    <input type="radio" id="texturaPeleIrregular" name="texturaPele" value="Irregular" onChange={handleChange} checked={dados.texturaPele === "Irregular"} />
    <label htmlFor="texturaPeleIrregular">Irregular</label>
  </div>
  <div className="form-group">
    <label>Sensação ao Toque:</label>
    <input type="radio" id="sensacaoPeleMacia" name="sensacaoPele" value="Macia" onChange={handleChange} checked={dados.sensacaoPele === "Macia"} />
    <label htmlFor="sensacaoPeleMacia">Macia</label>
    <input type="radio" id="sensacaoPeleAspera" name="sensacaoPele" value="Aspera" onChange={handleChange} checked={dados.sensacaoPele === "Aspera"} />
    <label htmlFor="sensacaoPeleAspera">Áspera</label>
  </div>
  <div className="form-group">
    <label>Cor:</label>
    {["Rósea", "Pálida", "Cianótica", "Ictérica"].map(cor => (
      <React.Fragment key={cor}>
        <input type="radio" id={`corPele-${cor}`} name="corPele" value={cor} onChange={handleChange} checked={dados.corPele === cor} />
        <label htmlFor={`corPele-${cor}`}>{cor}</label>
      </React.Fragment>
    ))}
  </div>
  <div className="form-group">
    <label>Hidratação:</label>
    <input type="radio" id="hidratacaoPeleHidratada" name="hidratacaoPele" value="Hidratada" onChange={handleChange} checked={dados.hidratacaoPele === "Hidratada"} />
    <label htmlFor="hidratacaoPeleHidratada">Hidratada</label>
    <input type="radio" id="hidratacaoPeleDesidratada" name="hidratacaoPele" value="Desidratada" onChange={handleChange} checked={dados.hidratacaoPele === "Desidratada"} />
    <label htmlFor="hidratacaoPeleDesidratada">Desidratada</label>
  </div>
</div>
<div className="form-section">
  <div className="form-group">
    <label>Secreção:</label>
    <div>
      <input type="radio" id="secrecaoOlhosSim" name="secrecaoOlhos" value="Sim" onChange={handleChange} checked={dados.secrecaoOlhos === "Sim"} />
      <label htmlFor="secrecaoOlhosSim">Sim</label>
      <input type="radio" id="secrecaoOlhosNao" name="secrecaoOlhos" value="Nao" onChange={handleChange} checked={dados.secrecaoOlhos === "Nao"} />
      <label htmlFor="secrecaoOlhosNao">Não</label>
    </div>
  </div>
  <div className="form-group">
    <label>Estrabismo:</label>
    <div>
      <input type="radio" id="estrabismoSim" name="estrabismo" value="Sim" onChange={handleChange} checked={dados.estrabismo === "Sim"} />
      <label htmlFor="estrabismoSim">Sim</label>
      <input type="radio" id="estrabismoNao" name="estrabismo" value="Nao" onChange={handleChange} checked={dados.estrabismo === "Nao"} />
      <label htmlFor="estrabismoNao">Não</label>
    </div>
  </div>
</div>
<div className="form-section">
  <div className="form-group">
    <label>Mucosa:</label>
    <div>
      <input type="radio" id="mucosaCorada" name="mucosa" value="Corada" onChange={handleChange} checked={dados.mucosa === "Corada"} />
      <label htmlFor="mucosaCorada">Corada</label>
      <input type="radio" id="mucosaPalida" name="mucosa" value="Palida" onChange={handleChange} checked={dados.mucosa === "Palida"} />
      <label htmlFor="mucosaPalida">Pálida</label>
      <input type="radio" id="mucosaUmida" name="mucosa" value="Umida" onChange={handleChange} checked={dados.mucosa === "Umida"} />
      <label htmlFor="mucosaUmida">Úmida</label>
      <input type="radio" id="mucosaSeca" name="mucosa" value="Seca" onChange={handleChange} checked={dados.mucosa === "Seca"} />
      <label htmlFor="mucosaSeca">Seca</label>
    </div>
  </div>
  <div className="form-group">
    <label>Dentição - Dente Incisivo Central Inferior:</label>
    <div>
      <input type="radio" id="denticaoInferiorPresente" name="denticaoInferior" value="Presente" onChange={handleChange} checked={dados.denticaoInferior === "Presente"} />
      <label htmlFor="denticaoInferiorPresente">Presente</label>
      <input type="radio" id="denticaoInferiorAusencia" name="denticaoInferior" value="Ausencia" onChange={handleChange} checked={dados.denticaoInferior === "Ausencia"} />
      <label htmlFor="denticaoInferiorAusencia">Ausência</label>
      <input type="radio" id="denticaoInferiorNaoVisualizado" name="denticaoInferior" value="NaoVisualizado" onChange={handleChange} checked={dados.denticaoInferior === "NaoVisualizado"} />
      <label htmlFor="denticaoInferiorNaoVisualizado">Não Visualizado</label>
    </div>
  </div>
</div>
<div className="form-section">
  <div className="form-group">
    <label>Secreção:</label>
    <div>
      <input type="radio" id="secrecaoOrelhasSim" name="secrecaoOrelhas" value="Sim" onChange={handleChange} checked={dados.secrecaoOrelhas === "Sim"} />
      <label htmlFor="secrecaoOrelhasSim">Sim</label>
      <input type="radio" id="secrecaoOrelhasNao" name="secrecaoOrelhas" value="Nao" onChange={handleChange} checked={dados.secrecaoOrelhas === "Nao"} />
      <label htmlFor="secrecaoOrelhasNao">Não</label>
    </div>
  </div>
  <div className="form-group">
    <label>Linfonodo Retroauricular Palpável:</label>
    <div>
      <input type="radio" id="linfonodoRetroauricularSim" name="linfonodoRetroauricular" value="Sim" onChange={handleChange} checked={dados.linfonodoRetroauricular === "Sim"} />
      <label htmlFor="linfonodoRetroauricularSim">Sim</label>
      <input type="radio" id="linfonodoRetroauricularNao" name="linfonodoRetroauricular" value="Nao" onChange={handleChange} checked={dados.linfonodoRetroauricular === "Nao"} />
      <label htmlFor="linfonodoRetroauricularNao">Não</label>
    </div>
  </div>
</div>
<div className="form-section">
  <div className="form-group">
    <label>Dente Incisivo Central Inferior:</label>
    <div>
      <input type="radio" id="denteIncisivoCentralInferiorPresente" name="denteIncisivoCentralInferior" value="Presente" onChange={handleChange} checked={dados.denteIncisivoCentralInferior === "Presente"} />
      <label htmlFor="denteIncisivoCentralInferiorPresente">Presente</label>
      <input type="radio" id="denteIncisivoCentralInferiorAusente" name="denteIncisivoCentralInferior" value="Ausente" onChange={handleChange} checked={dados.denteIncisivoCentralInferior === "Ausente"} />
      <label htmlFor="denteIncisivoCentralInferiorAusente">Ausente</label>
      <input type="radio" id="denteIncisivoCentralInferiorNaoVisualizado" name="denteIncisivoCentralInferior" value="Não Visualizado" onChange={handleChange} checked={dados.denteIncisivoCentralInferior === "Não Visualizado"} />
      <label htmlFor="denteIncisivoCentralInferiorNaoVisualizado">Não Visualizado</label>
    </div>
  </div>
  <div className="form-group">
    <label>Dente Incisivo Central Superior:</label>
    <div>
      <input type="radio" id="denteIncisivoCentralSuperiorPresente" name="denteIncisivoCentralSuperior" value="Presente" onChange={handleChange} checked={dados.denteIncisivoCentralSuperior === "Presente"} />
      <label htmlFor="denteIncisivoCentralSuperiorPresente">Presente</label>
      <input type="radio" id="denteIncisivoCentralSuperiorAusente" name="denteIncisivoCentralSuperior" value="Ausente" onChange={handleChange} checked={dados.denteIncisivoCentralSuperior === "Ausente"} />
      <label htmlFor="denteIncisivoCentralSuperiorAusente">Ausente</label>
      <input type="radio" id="denteIncisivoCentralSuperiorNaoVisualizado" name="denteIncisivoCentralSuperior" value="Não Visualizado" onChange={handleChange} checked={dados.denteIncisivoCentralSuperior === "Não Visualizado"} />
      <label htmlFor="denteIncisivoCentralSuperiorNaoVisualizado">Não Visualizado</label>
    </div>
  </div>
</div>

<div className="form-section">
  <h3>Tórax</h3>
  <div className="form-group">
    <label>AP - Tiragem:</label>
    <div>
      <input type="radio" id="apTiragemSim" name="apTiragem" value="Sim" onChange={handleChange} checked={dados.apTiragem === "Sim"} />
      <label htmlFor="apTiragemSim">Sim</label>
      <input type="radio" id="apTiragemNao" name="apTiragem" value="Nao" onChange={handleChange} checked={dados.apTiragem === "Nao"} />
      <label htmlFor="apTiragemNao">Não</label>
    </div>
  </div>
  <div className="form-group">
    <label>Murmúrio Vesicular:</label>
    <div>
      <input type="radio" id="murmVesicularPresente" name="murmVesicular" value="Presente" onChange={handleChange} checked={dados.murmVesicular === "Presente"} />
      <label htmlFor="murmVesicularPresente">Presente</label>
      <input type="radio" id="murmVesicularAusente" name="murmVesicular" value="Ausente" onChange={handleChange} checked={dados.murmVesicular === "Ausente"} />
      <label htmlFor="murmVesicularAusente">Ausente</label>
    </div>
  </div>
  <div className="form-group">
    <label>AC - Bulhas Cardíacas:</label>
    <div>
      <input type="radio" id="acBulhasCardiacasSemSopro" name="acBulhasCardiacas" value="SemSopro" onChange={handleChange} checked={dados.acBulhasCardiacas === "SemSopro"} />
      <label htmlFor="acBulhasCardiacasSemSopro">Sem Sopro</label>
      <input type="radio" id="acBulhasCardiacasComSopro" name="acBulhasCardiacas" value="ComSopro" onChange={handleChange} checked={dados.acBulhasCardiacas === "ComSopro"} />
      <label htmlFor="acBulhasCardiacasComSopro">Com Sopro</label>
    </div>
  </div>
</div>


<div className="form-section">
  <h3>Abdome</h3>
  <div className="form-group">
    <label>Estado:</label>
    <div>
      <input type="radio" id="estadoAbdomePlano" name="estadoAbdome" value="Plano" onChange={handleChange} checked={dados.estadoAbdome === "Plano"} />
      <label htmlFor="estadoAbdomePlano">Plano</label>
      <input type="radio" id="estadoAbdomeGloboso" name="estadoAbdome" value="Globoso" onChange={handleChange} checked={dados.estadoAbdome === "Globoso"} />
      <label htmlFor="estadoAbdomeGloboso">Globoso</label>
      <input type="radio" id="estadoAbdomeRigido" name="estadoAbdome" value="Rigido" onChange={handleChange} checked={dados.estadoAbdome === "Rigido"} />
      <label htmlFor="estadoAbdomeRigido">Rígido</label>
      <input type="radio" id="estadoAbdomeFlacido" name="estadoAbdome" value="Flacido" onChange={handleChange} checked={dados.estadoAbdome === "Flacido"} />
      <label htmlFor="estadoAbdomeFlacido">Flácido</label>
    </div>
  </div>
  <div className="form-group">
    <label>Presença de Hérnia Umbilical:</label>
    <div>
      <input type="radio" id="herniaUmbilicalSim" name="herniaUmbilical" value="Sim" onChange={handleChange} checked={dados.herniaUmbilical === "Sim"} />
      <label htmlFor="herniaUmbilicalSim">Sim</label>
      <input type="radio" id="herniaUmbilicalNao" name="herniaUmbilical" value="Nao" onChange={handleChange} checked={dados.herniaUmbilical === "Nao"} />
      <label htmlFor="herniaUmbilicalNao">Não</label>
    </div>
  </div>
</div>

<div className="form-section">
  <h3>Genitália</h3>
  <h4>Feminina</h4>
  <div className="form-group">
    <label>Pequenos lábios e clitóris proeminentes:</label>
    <div>
      <input type="radio" id="labiosClitorisProeminentesSim" name="labiosClitorisProeminentes" value="Sim" onChange={handleChange} checked={dados.labiosClitorisProeminentes === "Sim"} />
      <label htmlFor="labiosClitorisProeminentesSim">Sim</label>
      <input type="radio" id="labiosClitorisProeminentesNao" name="labiosClitorisProeminentes" value="Nao" onChange={handleChange} checked={dados.labiosClitorisProeminentes === "Nao"} />
      <label htmlFor="labiosClitorisProeminentesNao">Não</label>
    </div>
  </div>
  <div className="form-group">
    <label>Secreção:</label>
    <div>
      <input type="radio" id="secrecaoFemininaSim" name="secrecaoFeminina" value="Sim" onChange={handleChange} checked={dados.secrecaoFeminina === "Sim"} />
      <label htmlFor="secrecaoFemininaSim">Sim</label>
      <input type="radio" id="secrecaoFemininaNao" name="secrecaoFeminina" value="Nao" onChange={handleChange} checked={dados.secrecaoFeminina === "Nao"} />
      <label htmlFor="secrecaoFemininaNao">Não</label>
    </div>
  </div>
  <div className="form-group">
  <label>Sinéquia:</label>
  <div>
    <input type="radio" id="sinequiaSim" name="sinequia" value="Sim" onChange={handleChange} checked={dados.sinequia === "Sim"} />
    <label htmlFor="sinequiaSim">Sim</label>
    <input type="radio" id="sinequiaNao" name="sinequia" value="Nao" onChange={handleChange} checked={dados.sinequia === "Nao"} />
    <label htmlFor="sinequiaNao">Não</label>
  </div>
</div>
<div className="form-group">
  <label>Hérnia inguinal:</label>
  <div>
    <input type="radio" id="herniaInguinalFemSim" name="herniaInguinalFem" value="Sim" onChange={handleChange} checked={dados.herniaInguinalFem === "Sim"} />
    <label htmlFor="herniaInguinalFemSim">Sim</label>
    <input type="radio" id="herniaInguinalFemNao" name="herniaInguinalFem" value="Nao" onChange={handleChange} checked={dados.herniaInguinalFem === "Nao"} />
    <label htmlFor="herniaInguinalFemNao">Não</label>
  </div>
</div>
<h4>Masculina</h4>
<div className="form-group">
  <label>Hérnia inguinal:</label>
  <div>
    <input type="radio" id="herniaInguinalMasSim" name="herniaInguinalMas" value="Sim" onChange={handleChange} checked={dados.herniaInguinalMas === "Sim"} />
    <label htmlFor="herniaInguinalMasSim">Sim</label>
    <input type="radio" id="herniaInguinalMasNao" name="herniaInguinalMas" value="Nao" onChange={handleChange} checked={dados.herniaInguinalMas === "Nao"} />
    <label htmlFor="herniaInguinalMasNao">Não</label>
  </div>
</div>
<div className="form-group">
  <label>Hidrocele:</label>
  <div>
    <input type="radio" id="hidroceleSim" name="hidrocele" value="Sim" onChange={handleChange} checked={dados.hidrocele === "Sim"} />
    <label htmlFor="hidroceleSim">Sim</label>
    <input type="radio" id="hidroceleNao" name="hidrocele" value="Nao" onChange={handleChange} checked={dados.hidrocele === "Nao"} />
    <label htmlFor="hidroceleNao">Não</label>
  </div>
</div>
<div className="form-group">
  <label>Fimose:</label>
  <div>
    <input type="radio" id="fimoseSim" name="fimose" value="Sim" onChange={handleChange} checked={dados.fimose === "Sim"} />
    <label htmlFor="fimoseSim">Sim</label>
    <input type="radio" id="fimoseNao" name="fimose" value="Nao" onChange={handleChange} checked={dados.fimose === "Nao"} />
    <label htmlFor="fimoseNao">Não</label>
  </div>
</div>
<div className="form-group">
  <label>Testículos:</label>
  <div>
    {/* Adapte as opções conforme necessário */}
    <input type="radio" id="testiculosEctopicos" name="testiculos" value="Ectopicos" onChange={handleChange} checked={dados.testiculos === "Ectopicos"} />
    <label htmlFor="testiculosEctopicos">Ectópicos</label>
    <input type="radio" id="testiculosCriptorquidia" name="testiculos" value="Criptorquidia" onChange={handleChange} checked={dados.testiculos === "Criptorquidia"} />
    <label htmlFor="testiculosCriptorquidia">Criptorquidia</label>
  </div>
</div>
<div className="form-group">
  <label>Meato Urinário:</label>
  <div>
    {/* Adapte as opções conforme necessário */}
    <input type="radio" id="meatoUrinarioVisualizado" name="meatoUrinario" value="Visualizado" onChange={handleChange} checked={dados.meatoUrinario === "Visualizado"} />
    <label htmlFor="meatoUrinarioVisualizado">Visualizado</label>
    <input type="radio" id="meatoUrinarioNaoVisualizado" name="meatoUrinario" value="NaoVisualizado" onChange={handleChange} checked={dados.meatoUrinario === "NaoVisualizado"} />
    <label htmlFor="meatoUrinarioNaoVisualizado">Não Visualizado</label>
  </div>
</div>
</div>
<div className="form-section">
  <h3>Orifício Anal</h3>
  <div className="form-group">
    <label>Anomalias:</label>
    <div>
      <input type="radio" id="anomaliasAnalSim" name="anomaliasAnal" value="Sim" onChange={handleChange} checked={dados.anomaliasAnal === "Sim"} />
      <label htmlFor="anomaliasAnalSim">Sim</label>
      <input type="radio" id="anomaliasAnalNao" name="anomaliasAnal" value="Nao" onChange={handleChange} checked={dados.anomaliasAnal === "Nao"} />
      <label htmlFor="anomaliasAnalNao">Não</label>
    </div>
  </div>
  <div className="form-group">
    <label>Fissuras:</label>
    <div>
      <input type="radio" id="fissurasSim" name="fissuras" value="Sim" onChange={handleChange} checked={dados.fissuras === "Sim"} />
      <label htmlFor="fissurasSim">Sim</label>
      <input type="radio" id="fissurasNao" name="fissuras" value="Nao" onChange={handleChange} checked={dados.fissuras === "Nao"} />
      <label htmlFor="fissurasNao">Não</label>
    </div>
  </div>
  <div className="form-group">
    <label>Assaduras:</label>
    <div>
      <input type="radio" id="assadurasSim" name="assaduras" value="Sim" onChange={handleChange} checked={dados.assaduras === "Sim"} />
      <label htmlFor="assadurasSim">Sim</label>
      <input type="radio" id="assadurasNao" name="assaduras" value="Nao" onChange={handleChange} checked={dados.assaduras === "Nao"} />
      <label htmlFor="assadurasNao">Não</label>
    </div>
  </div>
<div className="form-group">
  <label>Duplica Sílabas:</label>
  <div>
    <input type="radio" id="duplicaSilabasPresente" name="duplicaSilabas" value="Presente" onChange={handleChange} checked={dados.duplicaSilabas === "Presente"} />
    <label htmlFor="duplicaSilabasPresente">Presente</label>
    <input type="radio" id="duplicaSilabasAusente" name="duplicaSilabas" value="Ausente" onChange={handleChange} checked={dados.duplicaSilabas === "Ausente"} />
    <label htmlFor="duplicaSilabasAusente">Ausente</label>
    <input type="radio" id="duplicaSilabasNaoVerificado" name="duplicaSilabas" value="NaoVerificado" onChange={handleChange} checked={dados.duplicaSilabas === "NaoVerificado"} />
    <label htmlFor="duplicaSilabasNaoVerificado">Não Verificado</label>
  </div>
</div>

<div className="form-group">
  <label>Senta-se Sem Apoio:</label>
  <div>
    <input type="radio" id="sentaSemApoioPresente" name="sentaSemApoio" value="Presente" onChange={handleChange} checked={dados.sentaSemApoio === "Presente"} />
    <label htmlFor="sentaSemApoioPresente">Presente</label>
    <input type="radio" id="sentaSemApoioAusente" name="sentaSemApoio" value="Ausente" onChange={handleChange} checked={dados.sentaSemApoio === "Ausente"} />
    <label htmlFor="sentaSemApoioAusente">Ausente</label>
    <input type="radio" id="sentaSemApoioNaoVerificado" name="sentaSemApoio" value="NaoVerificado" onChange={handleChange} checked={dados.sentaSemApoio === "NaoVerificado"} />
    <label htmlFor="sentaSemApoioNaoVerificado">Não Verificado</label>
  </div>
</div>

</div>
<div className="form-section">
  <h3>Marcos do Desenvolvimento - 9 Meses</h3>
  <div className="form-group">
    <label>Brinca de esconde-achou:</label>
    <div>
      <input type="radio" id="escondeAchouPresente" name="escondeAchou" value="Presente" onChange={handleChange} checked={dados.escondeAchou === "Presente"} />
      <label htmlFor="escondeAchouPresente">Presente</label>
      <input type="radio" id="escondeAchouAusente" name="escondeAchou" value="Ausente" onChange={handleChange} checked={dados.escondeAchou === "Ausente"} />
      <label htmlFor="escondeAchouAusente">Ausente</label>
      <input type="radio" id="escondeAchouNaoVerificado" name="escondeAchou" value="NaoVerificado" onChange={handleChange} checked={dados.escondeAchou === "NaoVerificado"} />
      <label htmlFor="escondeAchouNaoVerificado">Não Verificado</label>
    </div>
  </div>
  <div className="form-group">
    <label>Transfere objetos de uma mão para outra:</label>
    <div>
      <input type="radio" id="transfereObjetosPresente" name="transfereObjetos" value="Presente" onChange={handleChange} checked={dados.transfereObjetos === "Presente"} />
      <label htmlFor="transfereObjetosPresente">Presente</label>
      <input type="radio" id="transfereObjetosAusente" name="transfereObjetos" value="Ausente" onChange={handleChange} checked={dados.transfereObjetos === "Ausente"} />
      <label htmlFor="transfereObjetosAusente">Ausente</label>
      <input type="radio" id="transfereObjetosNaoVerificado" name="transfereObjetos" value="NaoVerificado" onChange={handleChange} checked={dados.transfereObjetos === "NaoVerificado"} />
      <label htmlFor="transfereObjetosNaoVerificado">Não Verificado</label>
    </div>
  </div>
</div>


            {/* Adicione mais campos conforme necessário */}
          </div>
        </div>
        <button className='copiar' type="submit">Copiar</button>
      </form>
    </div>
  );
}

export default Formulario9Meses;
