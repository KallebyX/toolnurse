import React, { useState } from 'react';
import toolNurseImage from '../../assets/toolNurse.jpg'; // Ajuste o caminho conforme necessário
import Menu from '../Menu'; // Ajuste o caminho conforme necessário

function FormularioRecemNascido() {
  const [dados, setDados] = useState({
    peso: '',
    estatura: '',
    pc: '',
    temperaturaAxilar: '',
    fr: '',
    estadoGeral: '',
    texturaPele: '',
    sensacaoPele: '',
    corPele: '',
    hidratacaoPele: '',
    krammerZona: '',
    milliumSebaceo: '',
    hemangioma: '',
    manchaMongolica: '',
    eritemaToxico: '',
    fontanelas: '',
    bossaSeroSanguinolenta: '',
    cefalohematoma: '',
    linfonodosCervicais: '',
    faceSimetria: '',
    malformacao: '',
    deformidades: '',
    aparenciaSindromica: '',
    olhosSimetria: '',
    secrecaoOlhos: '',
    estrabismo: '',
    esclera: '',
    pupilas: '',
    secrecaoNariz: '',
    batimentosNariz: '',
    obstrucaoNasal: '',
    palatoIntegro: '',
    fendaLabial: '',
    tamanhoLingua: '',
    freioLingual: '',
    mucosa: '',
    secrecaoOrelhas: '',
    linfonodoRetroauricular: '',
    torcicoloCongenito: '',
    toraxSimetria: '',
    linfonodoSupraclavicular: '',
    linfonodoAxilar: '',
    brotoMamario: '',
    tiragem: '',
    retracaoXifoideana: '',
    gemidos: '',
    estridor: '',
    sinaisEsforcoRespiratorio: '',
    bulhasCardiacas: '',
    estadoAbdome: '',
    herniaUmbilical: '',
    ruidosHidroaereos: '',
    cotoUmbilical: '',
    dorPalpacao: '',
    deformidadesSuperiores: '',
    malformacaoSuperiores: '',
    linhaPalmar: '',
    deformidadesInferiores: '',
    malformacaoInferiores: '',
    peTorto: '',
    polidactilia: '',
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
    fissurasAnal: '',
    assadurasAnal: '',
    reflexoBusca: '',
    reflexoSuccao: '',
    reflexoMoro: '',
    reflexoBabinski: '',
    preensaoPalmar: '',
    preensaoPlantar: '',
    reflexoMarcha: '',
  });

  const formatarDados = () => {
    return `
      **Avaliação de Recém-Nascido**
  
      **Peso:** ${dados.peso} Kg
      **Estatura:** ${dados.estatura} cm
      **PC:** ${dados.pc} cm
      **Temperatura Axilar:** ${dados.temperaturaAxilar} °C
      **FR:** ${dados.fr} RPM
      **Estado Geral:** ${dados.estadoGeral}
  
      **Pele:**
      - Textura: ${dados.texturaPele}
      - Sensação: ${dados.sensacaoPele}
      - Cor: ${dados.corPele}
      - Hidratação: ${dados.hidratacaoPele}
      - Krammer Zona: ${dados.krammerZona}
      - Millium Sebáceo: ${dados.milliumSebaceo}
      - Hemangioma: ${dados.hemangioma}
      - Mancha Mongólica: ${dados.manchaMongolica}
      - Eritema Tóxico: ${dados.eritemaToxico}
  
      **Cabeça:**
      - Fontanelas: ${dados.fontanelas}
      - Bossa Serosanguinolenta: ${dados.bossaSeroSanguinolenta}
      - Cefalohematoma: ${dados.cefalohematoma}
      - Linfonodos Cervicais Palpáveis: ${dados.linfonodosCervicais}
  
      **Face:**
      - Simetria: ${dados.faceSimetria}
      - Malformação: ${dados.malformacao}
      - Deformidades: ${dados.deformidades}
      - Aparência Sindrômica: ${dados.aparenciaSindromica}
  
      **Olhos:**
      - Simetria: ${dados.olhosSimetria}
      - Secreção: ${dados.secrecaoOlhos}
      - Estrabismo: ${dados.estrabismo}
      - Esclera: ${dados.esclera}
      - Pupilas: ${dados.pupilas}
  
      **Nariz:**
      - Secreção: ${dados.secrecaoNariz}
      - Batimentos das asas do nariz: ${dados.batimentosNariz}
      - Obstrução Nasal: ${dados.obstrucaoNasal}
  
      **Boca:**
      - Palato Íntegro: ${dados.palatoIntegro}
      - Fenda Labial: ${dados.fendaLabial}
      - Tamanho da Língua: ${dados.tamanhoLingua}
      - Freio Lingual: ${dados.freioLingual}
      - Mucosa: ${dados.mucosa}
  
      **Orelhas/Ouvidos:**
      - Secreção: ${dados.secrecaoOrelhas}
      - Linfonodo Retroauricular: ${dados.linfonodoRetroauricular}
  
      **Pescoço:**
      - Torcicolo Congênito: ${dados.torcicoloCongenito}
  
      **Tórax:**
      - Simetria: ${dados.toraxSimetria}
      - Linfonodo Palpável Supraclavicular: ${dados.linfonodoSupraclavicular}
      - Linfonodo Palpável Axilar: ${dados.linfonodoAxilar}
      - Broto Mamário: ${dados.brotoMamario}
      - Tiragem: ${dados.tiragem}
      - Retração Xifoideana: ${dados.retracaoXifoideana}
      - Gemidos: ${dados.gemidos}
      - Estridor: ${dados.estridor}
      - Sinais de Esforço Respiratório: ${dados.sinaisEsforcoRespiratorio}
      - Bulhas Cardíacas: ${dados.bulhasCardiacas}
  
      **Abdome:**
      - Estado: ${dados.estadoAbdome}
      - Hérnia Umbilical: ${dados.herniaUmbilical}
      - Ruídos Hidroaéreos: ${dados.ruidosHidroaereos}
      - Coto Umbilical: ${dados.cotoUmbilical}
      - Dor à Palpação: ${dados.dorPalpacao}
  
      **Membros Superiores:**
      - Deformidades: ${dados.deformidadesSuperiores}
      - Malformação: ${dados.malformacaoSuperiores}
      - Linha Palmar: ${dados.linhaPalmar}
  
      **Membros Inferiores:**
      - Deformidades: ${dados.deformidadesInferiores}
      - Malformação: ${dados.malformacaoInferiores}
      - Pé Torto: ${dados.peTorto}
      - Polidactilia: ${dados.polidactilia}
  
      **Genitália Feminina:**
      - Pequenos Lábios e Clitóris Proeminentes: ${dados.labiosProeminentes}
      - Secreção: ${dados.secrecaoFeminina}
      - Sinéquia: ${dados.sinequia}
      - Hérnia Inguinal: ${dados.herniaInguinalFem}
  
      **Genitália Masculina:**
      - Hérnia Inguinal: ${dados.herniaInguinalMas}
      - Hidrocele: ${dados.hidrocele}
      - Fimose Fisiológica: ${dados.fimoseFisiologica}
      - Testículos: ${dados.testiculos}
      - Meato Urinário: ${dados.meatoUrinario}
  
      **Orifício Anal:**
      - Anomalias: ${dados.anomaliasAnal}
      - Fissuras: ${dados.fissurasAnal}
      - Assaduras: ${dados.assadurasAnal}
  
      **Reflexos:**
      - Busca: ${dados.reflexoBusca}
      - Sucção: ${dados.reflexoSuccao}
      - Moro: ${dados.reflexoMoro}
      - Babinski: ${dados.reflexoBabinski}
      - Preensão Palmar: ${dados.preensaoPalmar}
      - Preensão Plantar: ${dados.preensaoPlantar}
      - Marcha: ${dados.reflexoMarcha}
    `.trim();
  };
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedData = formatarDados();
    console.log('Formatted Data:', formattedData);
    alert('Dados formatados e prontos para serem revistos ou salvos!');
  };

  return (
    <div className='tudo'>
      <div className="cabecalho">
        <img className="img" src={toolNurseImage} alt="Tool Nurse Logo" />
        <Menu />
      </div>
      <hr className="hr" />

    <form onSubmit={handleSubmit}>
      
  
  <h3>Rescém nascido</h3>
  <div></div>
    <div className='formulario-recem-nascido'>
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
    <label>PC (cm):</label>
    <input type="text" name="pc" value={dados.pc} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label>Temperatura axilar (ºC):</label>
    <input type="text" name="temperaturaAxilar" value={dados.temperaturaAxilar} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label>FR (RPM):</label>
    <input type="text" name="fr" value={dados.fr} onChange={handleChange} />
  </div>
  </div>

  <div className="formulario-section">
  <h3>Estado Geral e Pele</h3>
  <div className="form-group">
    <label>Estado geral:</label>
    <div>
      <input type="radio" id="ativo" name="estadoGeral" value="Ativo" checked={dados.estadoGeral === 'Ativo'} onChange={handleChange} />
      <label htmlFor="ativo">Ativo</label>
      <input type="radio" id="hipoativo" name="estadoGeral" value="Hipoativo" checked={dados.estadoGeral === 'Hipoativo'} onChange={handleChange} />
      <label htmlFor="hipoativo">Hipoativo</label>
      <input type="radio" id="letargico" name="estadoGeral" value="Letárgico" checked={dados.estadoGeral === 'Letárgico'} onChange={handleChange} />
      <label htmlFor="letargico">Letárgico</label>
      <input type="radio" id="calmo" name="estadoGeral" value="Calmo" checked={dados.estadoGeral === 'Calmo'} onChange={handleChange} />
      <label htmlFor="calmo">Calmo</label>
      <input type="radio" id="choroso" name="estadoGeral" value="Choroso" checked={dados.estadoGeral === 'Choroso'} onChange={handleChange} />
      <label htmlFor="choroso">Choroso</label>
    </div>
  </div>

  <div className="form-group">
    <label>Textura da pele:</label>
    <div>
      <input type="radio" id="lisa" name="texturaPele" value="Lisa" checked={dados.texturaPele === 'Lisa'} onChange={handleChange} />
      <label htmlFor="lisa">Lisa</label>
      <input type="radio" id="irregular" name="texturaPele" value="Irregular" checked={dados.texturaPele === 'Irregular'} onChange={handleChange} />
      <label htmlFor="irregular">Irregular</label>
    </div>
  </div>
  
  <div className="form-group">
    <label>Sensação da pele:</label>
    <div>
      <input type="radio" id="macia" name="sensacaoPele" value="Macia" checked={dados.sensacaoPele === 'Macia'} onChange={handleChange} />
      <label htmlFor="macia">Macia</label>
      <input type="radio" id="aspera" name="sensacaoPele" value="Áspera" checked={dados.sensacaoPele === 'Áspera'} onChange={handleChange} />
      <label htmlFor="aspera">Áspera</label>
    </div>
  </div>

  <div className="form-group">
    <label>Cor da pele:</label>
    <div>
      <input type="radio" id="rosea" name="corPele" value="Rósea" checked={dados.corPele === 'Rósea'} onChange={handleChange} />
      <label htmlFor="rosea">Rósea</label>
      <input type="radio" id="palida" name="corPele" value="Pálida" checked={dados.corPele === 'Pálida'} onChange={handleChange} />
      <label htmlFor="palida">Pálida</label>
      <label htmlFor="palida">Pálida</label>
      <input type="radio" id="cianotica" name="corPele" value="Cianótica" checked={dados.corPele === 'Cianótica'} onChange={handleChange} />
      <label htmlFor="cianotica">Cianótica</label>
      <input type="radio" id="icterica" name="corPele" value="Ictérica" checked={dados.corPele === 'Ictérica'} onChange={handleChange} />
      <label htmlFor="icterica">Ictérica</label>
    </div>
  </div>

  <div className="form-group">
    <label>Hidratação da pele:</label>
    <div>
      <input type="radio" id="hidratada" name="hidratacaoPele" value="Hidratada" checked={dados.hidratacaoPele === 'Hidratada'} onChange={handleChange} />
      <label htmlFor="hidratada">Hidratada</label>
      <input type="radio" id="desidratada" name="hidratacaoPele" value="Desidratada" checked={dados.hidratacaoPele === 'Desidratada'} onChange={handleChange} />
      <label htmlFor="desidratada">Desidratada</label>
    </div>
  </div>

  <div className="form-group">
    <label>Krammer Zona:</label>
    <div>
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i + 1}>
          <input type="radio" id={`krammer${i + 1}`} name="krammerZona" value={i + 1} checked={dados.krammerZona === `${i + 1}`} onChange={handleChange} />
          <label htmlFor={`krammer${i + 1}`}>{i + 1}</label>
        </div>
      ))}
    </div>
  </div>

  <div className="form-group">
    <label>Millium sebáceo:</label>
    <div>
      <input type="radio" id="milliumYes" name="milliumSebaceo" value="Sim" checked={dados.milliumSebaceo === 'Sim'} onChange={handleChange} />
      <label htmlFor="milliumYes">Sim</label>
      <input type="radio" id="milliumNo" name="milliumSebaceo" value="Não" checked={dados.milliumSebaceo === 'Não'} onChange={handleChange} />
      <label htmlFor="milliumNo">Não</label>
    </div>
  </div>

  <div className="form-group">
    <label>Hemangioma:</label>
    <div>
      <input type="radio" id="hemangiomaYes" name="hemangioma" value="Sim" checked={dados.hemangioma === 'Sim'} onChange={handleChange} />
      <label htmlFor="hemangiomaYes">Sim</label>
      <input type="radio" id="hemangiomaNo" name="hemangioma" value="Não" checked={dados.hemangioma === 'Não'} onChange={handleChange} />
      <label htmlFor="hemangiomaNo">Não</label>
    </div>
  </div>

  <div className="form-group">
    <label>Mancha mongólica:</label>
    <div>
      <input type="radio" id="manchaYes" name="manchaMongolica" value="Sim" checked={dados.manchaMongolica === 'Sim'} onChange={handleChange} />
      <label htmlFor="manchaYes">Sim</label>
      <input type="radio" id="manchaNo" name="manchaMongolica" value="Não" checked={dados.manchaMongolica === 'Não'} onChange={handleChange} />
      <label htmlFor="manchaNo">Não</label>
    </div>
  </div>

  <div className="form-group">
    <label>Eritema tóxico:</label>
    <div>
      <input type="radio" id="eritemaYes" name="eritemaToxico" value="Sim" checked={dados.eritemaToxico === 'Sim'} onChange={handleChange} />
      <label htmlFor="eritemaYes">Sim</label>
      <input type="radio" id="eritemaNo" name="eritemaToxico" value="Não" checked={dados.eritemaToxico === 'Não'} onChange={handleChange} />
      <label htmlFor="eritemaNo">Não</label>
    </div>
  </div>
  </div>
  <div className="formulario-section">
  <h3>Cabeça</h3>

  <div className="form-group">
    <label>Fontanelas:</label>
    <div>
      <input type="radio" id="fontanelasAbauladas" name="fontanelas" value="Abauladas" checked={dados.fontanelas === 'Abauladas'} onChange={handleChange} />
      <label htmlFor="fontanelasAbauladas">Abauladas</label>
      <input type="radio" id="fontanelasDeprimidas" name="fontanelas" value="Deprimidas" checked={dados.fontanelas === 'Deprimidas'} onChange={handleChange} />
      <label htmlFor="fontanelasDeprimidas">Deprimidas</label>
      <input type="radio" id="fontanelasPlanas" name="fontanelas" value="Planas" checked={dados.fontanelas === 'Planas'} onChange={handleChange} />
      <label htmlFor="fontanelasPlanas">Planas</label>
    </div>
  </div>

  <div className="form-group">
    <label>Bossa serossanguinolenta:</label>
    <input type="radio" id="bossaYes" name="bossaSeroSanguinolenta" value="Sim" checked={dados.bossaSeroSanguinolenta === 'Sim'} onChange={handleChange} />
    <label htmlFor="bossaYes">Sim</label>
    <input type="radio" id="bossaNo" name="bossaSeroSanguinolenta" value="Não" checked={dados.bossaSeroSanguinolenta === 'Não'} onChange={handleChange} />
    <label htmlFor="bossaNo">Não</label>
  </div>

  <div className="form-group">
    <label>Cefalohematoma:</label>
    <input type="radio" id="cefaloYes" name="cefalohematoma" value="Sim" checked={dados.cefalohematoma === 'Sim'} onChange={handleChange} />
    <label htmlFor="cefaloYes">Sim</label>
    <input type="radio" id="cefaloNo" name="cefalohematoma" value="Não" checked={dados.cefalohematoma === 'Não'} onChange={handleChange} />
    <label htmlFor="cefaloNo">Não</label>
  </div>

  <div className="form-group">
    <label>Linfonodos cervicais palpáveis:</label>
    <input type="radio" id="linfonodosSim" name="linfonodosCervicais" value="Sim" checked={dados.linfonodosCervicais === 'Sim'} onChange={handleChange} />
    <label htmlFor="linfonodosSim">Sim</label>
    <input type="radio" id="linfonodosNao" name="linfonodosCervicais" value="Não" checked={dados.linfonodosCervicais === 'Não'} onChange={handleChange} />
    <label htmlFor="linfonodosNao">Não</label>
  </div>

  <div className="form-group">
    <label>Face:</label>
    <input type="radio" id="faceAssimetrica" name="face" value="Assimétrica" checked={dados.face === 'Assimétrica'} onChange={handleChange} />
    <label htmlFor="faceAssimetrica">Assimétrica</label>
    <input type="radio" id="faceSimetrica" name="face" value="Simétrica" checked={dados.face === 'Simétrica'} onChange={handleChange} />
    <label htmlFor="faceSimetrica">Simétrica</label>
  </div>

  <div className="form-group">
    <label>Malformação:</label>
    <input type="radio" id="malformacaoSim" name="malformacao" value="Sim" checked={dados.malformacao === 'Sim'} onChange={handleChange} />
    <label htmlFor="malformacaoSim">Sim</label>
    <input type="radio" id="malformacaoNao" name="malformacao" value="Não" checked={dados.malformacao === 'Não'} onChange={handleChange} />
    <label htmlFor="malformacaoNao">Não</label>
  </div>

  <div className="form-group">
    <label>Deformidades:</label>
    <input type="radio" id="deformidadesSim" name="deformidades" value="Sim" checked={dados.deformidades === 'Sim'} onChange={handleChange} />
    <label htmlFor="deformidadesSim">Sim</label>
    <label htmlFor="deformidadesSim">Sim</label>
    <input type="radio" id="deformidadesNao" name="deformidades" value="Não" checked={dados.deformidades === 'Não'} onChange={handleChange} />
    <label htmlFor="deformidadesNao">Não</label>
  </div>

  <div className="form-group">
    <label>Aparência sindrômica:</label>
    <input type="radio" id="aparenciaSindromicaSim" name="aparenciaSindromica" value="Sim" checked={dados.aparenciaSindromica === 'Sim'} onChange={handleChange} />
    <label htmlFor="aparenciaSindromicaSim">Sim</label>
    <input type="radio" id="aparenciaSindromicaNao" name="aparenciaSindromica" value="Não" checked={dados.aparenciaSindromica === 'Não'} onChange={handleChange} />
    <label htmlFor="aparenciaSindromicaNao">Não</label>
  </div>
  </div>
  <div className="formulario-section">
  <h3>Olhos</h3>
  <div className="form-group">
    <label>Simetria:</label>
    <input type="radio" id="olhosSimetricos" name="olhosSimetria" value="Simétricos" checked={dados.olhosSimetria === 'Simétricos'} onChange={handleChange} />
    <label htmlFor="olhosSimetricos">Simétricos</label>
    <input type="radio" id="olhosAssimetricos" name="olhosSimetria" value="Assimétricos" checked={dados.olhosSimetria === 'Assimétricos'} onChange={handleChange} />
    <label htmlFor="olhosAssimetricos">Assimétricos</label>
  </div>
  <div className="form-group">
    <label>Secreção:</label>
    <input type="radio" id="secrecaoSim" name="secrecaoOlhos" value="Sim" checked={dados.secrecaoOlhos === 'Sim'} onChange={handleChange} />
    <label htmlFor="secrecaoSim">Sim</label>
    <input type="radio" id="secrecaoNao" name="secrecaoOlhos" value="Não" checked={dados.secrecaoOlhos === 'Não'} onChange={handleChange} />
    <label htmlFor="secrecaoNao">Não</label>
  </div>
  <div className="form-group">
    <label>Estrabismo:</label>
    <input type="radio" id="estrabismoSim" name="estrabismo" value="Sim" checked={dados.estrabismo === 'Sim'} onChange={handleChange} />
    <label htmlFor="estrabismoSim">Sim</label>
    <input type="radio" id="estrabismoNao" name="estrabismo" value="Não" checked={dados.estrabismo === 'Não'} onChange={handleChange} />
    <label htmlFor="estrabismoNao">Não</label>
  </div>
  <div className="form-group">
    <label>Esclera:</label>
    <input type="radio" id="escleraIcterica" name="esclera" value="Ictérica" checked={dados.esclera === 'Ictérica'} onChange={handleChange} />
    <label htmlFor="escleraIcterica">Ictérica</label>
    <input type="radio" id="escleraAnicterica" name="esclera" value="Anictérica" checked={dados.esclera === 'Anictérica'} onChange={handleChange} />
    <label htmlFor="escleraAnicterica">Anictérica</label>
  </div>
  <div className="form-group">
    <label>Pupilas:</label>
    <input type="radio" id="pupilasAnisocoricas" name="pupilas" value="Anisocóricas" checked={dados.pupilas === 'Anisocóricas'} onChange={handleChange} />
    <label htmlFor="pupilasAnisocoricas">Anisocóricas</label>
    <input type="radio" id="pupilasIsocoricas" name="pupilas" value="Isocóricas" checked={dados.pupilas === 'Isocóricas'} onChange={handleChange} />
    <label htmlFor="pupilasIsocoricas">Isocóricas</label>
  </div>

  <h3>Nariz</h3>
  <div className="form-group">
    <label>Secreção:</label>
    <input type="radio" id="secrecaoNarizSim" name="secrecaoNariz" value="Sim" checked={dados.secrecaoNariz === 'Sim'} onChange={handleChange} />
    <label htmlFor="secrecaoNarizSim">Sim</label>
    <input type="radio" id="secrecaoNarizNao" name="secrecaoNariz" value="Não" checked={dados.secrecaoNariz === 'Não'} onChange={handleChange} />
    <label htmlFor="secrecaoNarizNao">Não</label>
  </div>
  <div className="form-group">
    <label>Batimentos das asas do nariz:</label>
    <input type="radio" id="batimentosSim" name="batimentosNariz" value="Sim" checked={dados.batimentosNariz === 'Sim'} onChange={handleChange} />
    <label htmlFor="batimentosSim">Sim</label>
    <input type="radio" id="batimentosNao" name="batimentosNariz" value="Não" checked={dados.batimentosNariz === 'Não'} onChange={handleChange} />
    <label htmlFor="batimentosNao">Não</label>
  </div>
  <div className="form-group">
    <label>Obstrução nasal:</label>
    <input type="radio" id="obstrucaoNasalSim" name="obstrucaoNasal" value="Sim" checked={dados.obstrucaoNasal === 'Sim'} onChange={handleChange} />
    <label htmlFor="obstrucaoNasalSim">Sim</label>
    <input type="radio" id="obstrucaoNasalNao" name="obstrucaoNasal" value="Não" checked={dados.obstrucaoNasal === 'Não'} onChange={handleChange} />
    <label htmlFor="obstrucaoNasalNao">Não</label>
  </div>
  </div>
  <div className="formulario-section">
  <h3>Boca</h3>
  <div className="form-group">
    <label>Palato íntegro:</label>
    <input type="radio" id="palatoSim" name="palatoIntegro" value="Sim" checked={dados.palatoIntegro === 'Sim'} onChange={handleChange} />
    <label htmlFor="palatoSim">Sim</label>
    <input type="radio" id="palatoNao" name="palatoIntegro" value="Não" checked={dados.palatoIntegro === 'Não'} onChange={handleChange} />
    <label htmlFor="palatoNao">Não</label>
  </div>
  <div className="form-group">
    <label>Fenda labial:</label>
    <input type="radio" id="fendaSim" name="fendaLabial" value="Sim" checked={dados.fendaLabial === 'Sim'} onChange={handleChange} />
    <label htmlFor="fendaSim">Sim</label>
    <input type="radio" id="fendaNao" name="fendaLabial" value="Não" checked={dados.fendaLabial === 'Não'} onChange={handleChange} />
    <label htmlFor="fendaNao">Não</label>
  </div>
  <div className="form-group">
    <label>Tamanho da língua:</label>
    <input type="radio" id="linguaNormal" name="tamanhoLingua" value="Normal" checked={dados.tamanhoLingua === 'Normal'} onChange={handleChange} />
    <label htmlFor="linguaNormal">Normal</label>
    <input type="radio" id="macroglossia" name="tamanhoLingua" value="Macroglossia" checked={dados.tamanhoLingua === 'Macroglossia'} onChange={handleChange} />
    <label htmlFor="macroglossia">Macroglossia</label>
  </div>
  <div className="form-group">
    <label>Freio lingual:</label>
    <input type="radio" id="freioNormal" name="freioLingual" value="Normal" checked={dados.freioLingual === 'Normal'} onChange={handleChange} />
    <label htmlFor="freioNormal">Normal</label>
    <input type="radio" id="freioCurto" name="freioLingual" value="Curto" checked={dados.freioLingual === 'Curto'} onChange={handleChange} />
    <label htmlFor="freioCurto">Curto</label>
  </div>
  <div className="form-group">
    <label>Mucosa:</label>
    <input type="radio" id="mucosaCorada" name="mucosa" value="Corada" checked={dados.mucosa === 'Corada'} onChange={handleChange} />
    <label htmlFor="mucosaCorada">Corada</label>
    <input type="radio" id="mucosaPalida" name="mucosa" value="Pálida" checked={dados.mucosa === 'Pálida'} onChange={handleChange} />
    <label htmlFor="mucosaPalida">Pálida</label>
  </div>

  <h3>Orelhas/Ouvidos</h3>
  <div className="form-group">
    <label>Secreção:</label>
    <input type="radio" id="secrecaoOrelhasSim" name="secrecaoOrelhas" value="Sim" checked={dados.secrecaoOrelhas === 'Sim'} onChange={handleChange} />
    <label htmlFor="secrecaoOrelhasSim">Sim</label>
    <input type="radio" id="secrecaoOrelhasNao" name="secrecaoOrelhas" value="Não" checked={dados.secrecaoOrelhas === 'Não'} onChange={handleChange} />
    <label htmlFor="secrecaoOrelhasNao">Não</label>
  </div>

  <h3>Pescoço</h3>
  <div className="form-group">
    <label>Torcicolo congênito:</label>
    <input type="radio" id="torcicoloSim" name="torcicoloCongenito" value="Sim" checked={dados.torcicoloCongenito === 'Sim'} onChange={handleChange} />
    <label htmlFor="torcicoloSim">Sim</label>
    <input type="radio" id="torcicoloNao" name="torcicoloCongenito" value="Não" checked={dados.torcicoloCongenito === 'Não'} onChange={handleChange} />
    <label htmlFor="torcicoloNao">Não</label>
  </div>
  </div>
  <div className="formulario-section">
  <h3>Tórax</h3>
  <div className="form-group">
    <label>Simetria:</label>
    <input type="radio" id="toraxSimetrico" name="toraxSimetria" value="Simétrico" checked={dados.toraxSimetria === 'Simétrico'} onChange={handleChange} />
    <label htmlFor="toraxSimetrico">Simétrico</label>
    <input type="radio" id="toraxAssimetrico" name="toraxSimetria" value="Assimétrico" checked={dados.toraxSimetria === 'Assimétrico'} onChange={handleChange} />
    <label htmlFor="toraxAssimetrico">Assimétrico</label>
  </div>
  <div className="form-group">
    <label>Deformidades:</label>
    <input type="radio" id="deformidadesToraxSim" name="deformidadesTorax" value="Sim" checked={dados.deformidadesTorax === 'Sim'} onChange={handleChange} />
    <label htmlFor="deformidadesToraxSim">Sim</label>
    <input type="radio" id="deformidadesToraxNao" name="deformidadesTorax" value="Não" checked={dados.deformidadesTorax === 'Não'} onChange={handleChange} />
    <label htmlFor="deformidadesToraxNao">Não</label>
  </div>
  <div className="form-group">
    <label>Linfonodo palpável supraclavicular:</label>
    <input type="radio" id="linfonodoSupraSim" name="linfonodoSupraclavicular" value="Sim" checked={dados.linfonodoSupraclavicular === 'Sim'} onChange={handleChange} />
    <label htmlFor="linfonodoSupraSim">Sim</label>
    <input type="radio" id="linfonodoSupraNao" name="linfonodoSupraclavicular" value="Não" checked={dados.linfonodoSupraclavicular === 'Não'} onChange={handleChange} />
    <label htmlFor="linfonodoSupraNao">Não</label>
  </div>
  <div className="form-group">
    <label>Linfonodo palpável axilar:</label>
    <input type="radio" id="linfonodoAxilarSim" name="linfonodoAxilar" value="Sim" checked={dados.linfonodoAxilar === 'Sim'} onChange={handleChange} />
    <label htmlFor="linfonodoAxilarSim">Sim</label>
    <input type="radio" id="linfonodoAxilarNao" name="linfonodoAxilar" value="Não" checked={dados.linfonodoAxilar === 'Não'} onChange={handleChange} />
    <label htmlFor="linfonodoAxilarNao">Não</label>
  </div>
  <div className="form-group">
    <label>Broto mamário:</label>
    <input type="radio" id="brotoMamarioSim" name="brotoMamario" value="Sim" checked={dados.brotoMamario === 'Sim'} onChange={handleChange} />
    <label htmlFor="brotoMamarioSim">Sim</label>
    <input type="radio" id="brotoMamarioNao" name="brotoMamario" value="Não" checked={dados.brotoMamario === 'Não'} onChange={handleChange} />
    <label htmlFor="brotoMamarioNao">Não</label>
  </div>
  <div className="form-group">
    <label>Ausculta Pulmonar - Tiragem:</label>
    <input type="radio" id="tiragemSim" name="tiragem" value="Sim" checked={dados.tiragem === 'Sim'} onChange={handleChange} />
    <label htmlFor="tiragemSim">Sim</label>
    <input type="radio" id="tiragemNao" name="tiragem" value="Não" checked={dados.tiragem === 'Não'} onChange={handleChange} />
    <label htmlFor="tiragemNao">Não</label>
  </div>
  <div className="form-group">
    <label>Retração Xifoideana:</label>
    <input type="radio" id="retracaoXifoideanaSim" name="retracaoXifoideana" value="Sim" checked={dados.retracaoXifoideana === 'Sim'} onChange={handleChange} />
    <label htmlFor="retracaoXifoideanaSim">Sim</label>
    <input type="radio" id="retracaoXifoideanaNao" name="retracaoXifoideana" value="Não" checked={dados.retracaoXifoideana === 'Não'} onChange={handleChange} />
    <label htmlFor="retracaoXifoideanaNao">Não</label>
  </div>
  <div className="form-group">
    <label>Gemidos:</label>
    <input type="radio" id="gemidosSim" name="gemidos" value="Sim" checked={dados.gemidos === 'Sim'} onChange={handleChange} />
    <label htmlFor="gemidosSim">Sim</label>
    <input type="radio" id="gemidosNao" name="gemidos" value="Não" checked={dados.gemidos === 'Não'} onChange={handleChange} />
    <label htmlFor="gemidosNao">Não</label>
  </div>
  <div className="form-group">
    <label>Estridor:</label>
    <input type="radio" id="estridorSim" name="estridor" value="Sim" checked={dados.estridor === 'Sim'} onChange={handleChange} />
    <label htmlFor="estridorSim">Sim</label>
    <input type="radio" id="estridorNao" name="estridor" value="Não" checked={dados.estridor === 'Não'} onChange={handleChange} />
    <label htmlFor="estridorNao">Não</label>
  </div>
  <div className="form-group">
    <label>Sinais de Esforço Respiratório:</label>
    <input type="radio" id="esforcoRespiratorioSim" name="esforcoRespiratorio" value="Sim" checked={dados.esforcoRespiratorio === 'Sim'} onChange={handleChange} />
    <label htmlFor="esforcoRespiratorioSim">Sim</label>
    <input type="radio" id="esforcoRespiratorioNao" name="esforcoRespiratorio" value="Não" checked={dados.esforcoRespiratorio === 'Não'} onChange={handleChange} />
    <label htmlFor="esforcoRespiratorioNao">Não</label>
  </div>
  <div className="form-group">
    <label>Ausculta Cardíaca - Bulhas Cardíacas:</label>
    <input type="radio" id="bulhasSemSopro" name="bulhasCardiacas" value="Sem Sopro" checked={dados.bulhasCardiacas === 'Sem Sopro'} onChange={handleChange} />
    <label htmlFor="bulhasSemSopro">Sem Sopro</label>
    <input type="radio" id="bulhasComSopro" name="bulhasCardiacas" value="Com Sopro" checked={dados.bulhasCardiacas === 'Com Sopro'} onChange={handleChange} />
    <label htmlFor="bulhasComSopro">Com Sopro</label>
  </div>
  </div>
  <div className="formulario-section">
  <h3>Abdome</h3>
  <div className="form-group">
    <label>Estado:</label>
    <input type="radio" id="abdomeDilatado" name="estadoAbdome" value="Dilatado" checked={dados.estadoAbdome === 'Dilatado'} onChange={handleChange} />
    <label htmlFor="abdomeDilatado">Dilatado</label>
    <input type="radio" id="abdomeEscavado" name="estadoAbdome" value="Escavado" checked={dados.estadoAbdome === 'Escavado'} onChange={handleChange} />
    <label htmlFor="abdomeEscavado">Escavado</label>
    <input type="radio" id="abdomeGloboso" name="estadoAbdome" value="Globoso" checked={dados.estadoAbdome === 'Globoso'} onChange={handleChange} />
    <label htmlFor="abdomeGloboso">Globoso</label>
  </div>
  <div className="form-group">
    <label>Hérnia umbilical:</label>
    <input type="radio" id="herniaUmbilicalSim" name="herniaUmbilical" value="Sim" checked={dados.herniaUmbilical === 'Sim'} onChange={handleChange} />
    <label htmlFor="herniaUmbilicalSim">Sim</label>
    <input type="radio" id="herniaUmbilicalNao" name="herniaUmbilical" value="Não" checked={dados.herniaUmbilical === 'Não'} onChange={handleChange} />
    <label htmlFor="herniaUmbilicalNao">Não</label>
  </div>
  <div className="form-group">
    <label>Ruídos hidroaéreos:</label>
    <input type="radio" id="ruidosHidroaereosPresentes" name="ruidosHidroaereos" value="Presentes" checked={dados.ruidosHidroaereos === 'Presentes'} onChange={handleChange} />
    <label htmlFor="ruidosHidroaereosPresentes">Presentes</label>
    <input type="radio" id="ruidosHidroaereosAusentes" name="ruidosHidroaereos" value="Ausentes" checked={dados.ruidosHidroaereos === 'Ausentes'} onChange={handleChange} />
    <label htmlFor="ruidosHidroaereosAusentes">Ausentes</label>
  </div>
  <div className="form-group">
    <label>Coto umbilical:</label>
    <input type="radio" id="cotoUmbilicalDesidratado" name="cotoUmbilical" value="Desidratado" checked={dados.cotoUmbilical === 'Desidratado'} onChange={handleChange} />
    <label htmlFor="cotoUmbilicalDesidratado">Desidratado</label>
    <input type="radio" id="cotoUmbilicalMumificado" name="cotoUmbilical" value="Mumificado" checked={dados.cotoUmbilical === 'Mumificado'} onChange={handleChange} />
    <label htmlFor="cotoUmbilicalMumificado">Mumificado</label>
    <input type="radio" id="cotoUmbilicalCicatrizacao" name="cotoUmbilical" value="Em cicatrização" checked={dados.cotoUmbilical === 'Em cicatrização'} onChange={handleChange} />
    <label htmlFor="cotoUmbilicalCicatrizacao">Em cicatrização</label>
  </div>
  <div className="form-group">
    <label>Secreção:</label>
    <input type="radio" id="secrecaoSim" name="secrecaoCoto" value="Sim" checked={dados.secrecaoCoto === 'Sim'} onChange={handleChange} />
    <label htmlFor="secrecaoSim">Sim</label>
    <input type="radio" id="secrecaoNao" name="secrecaoCoto" value="Não" checked={dados.secrecaoCoto === 'Não'} onChange={handleChange} />
    <label htmlFor="secrecaoNao">Não</label>
  </div>
  <div className="form-group">
    <label>Hiper<div className="form-group"></div>emia:</label>
    <label>Hiperemia:</label>
    <input type="radio" id="hiperemiaSim" name="hiperemia" value="Sim" checked={dados.hiperemia === 'Sim'} onChange={handleChange} />
    <label htmlFor="hiperemiaSim">Sim</label>
    <input type="radio" id="hiperemiaNao" name="hiperemia" value="Não" checked={dados.hiperemia === 'Não'} onChange={handleChange} />
    <label htmlFor="hiperemiaNao">Não</label>
  </div>
  <div className="form-group">
    <label>Odor:</label>
    <input type="radio" id="odorSim" name="odor" value="Sim" checked={dados.odor === 'Sim'} onChange={handleChange} />
    <label htmlFor="odorSim">Sim</label>
    <input type="radio" id="odorNao" name="odor" value="Não" checked={dados.odor === 'Não'} onChange={handleChange} />
    <label htmlFor="odorNao">Não</label>
  </div>
  <div className="form-group">
    <label>Granuloma:</label>
    <input type="radio" id="granulomaSim" name="granuloma" value="Sim" checked={dados.granuloma === 'Sim'} onChange={handleChange} />
    <label htmlFor="granulomaSim">Sim</label>
    <input type="radio" id="granulomaNao" name="granuloma" value="Não" checked={dados.granuloma === 'Não'} onChange={handleChange} />
    <label htmlFor="granulomaNao">Não</label>
  </div>
  <div className="form-group">
    <label>Dor à palpação:</label>
    <input type="radio" id="dorPalpacaoSim" name="dorPalpacao" value="Sim" checked={dados.dorPalpacao === 'Sim'} onChange={handleChange} />
    <label htmlFor="dorPalpacaoSim">Sim</label>
    <input type="radio" id="dorPalpacaoNao" name="dorPalpacao" value="Não" checked={dados.dorPalpacao === 'Não'} onChange={handleChange} />
    <label htmlFor="dorPalpacaoNao">Não</label>
  </div>
  </div>
  <div className="formulario-section">
  <h3>Membros Superiores</h3>
  <div className="form-group">
    <label>Deformidades:</label>
    <input type="radio" id="deformidadesSuperioresSim" name="deformidadesSuperiores" value="Sim" checked={dados.deformidadesSuperiores === 'Sim'} onChange={handleChange} />
    <label htmlFor="deformidadesSuperioresSim">Sim</label>
    <input type="radio" id="deformidadesSuperioresNao" name="deformidadesSuperiores" value="Não" checked={dados.deformidadesSuperiores === 'Não'} onChange={handleChange} />
    <label htmlFor="deformidadesSuperioresNao">Não</label>
  </div>
  <div className="form-group">
    <label>Malformação:</label>
    <input type="radio" id="malformacaoSuperioresSim" name="malformacaoSuperiores" value="Sim" checked={dados.malformacaoSuperiores === 'Sim'} onChange={handleChange} />
    <label htmlFor="malformacaoSuperioresSim">Sim</label>
    <input type="radio" id="malformacaoSuperioresNao" name="malformacaoSuperiores" value="Não" checked={dados.malformacaoSuperiores === 'Não'} onChange={handleChange} />
    <label htmlFor="malformacaoSuperioresNao">Não</label>
  </div>
  <div className="form-group">
    <label>Linha palmar:</label>
    <input type="radio" id="linhaPalmarSim" name="linhaPalmarSuperiores" value="Sim" checked={dados.linhaPalmarSuperiores === 'Sim'} onChange={handleChange} />
    <label htmlFor="linhaPalmarSim">Sim</label>
    <input type="radio" id="linhaPalmarNao" name="linhaPalmarSuperiores" value="Não" checked={dados.linhaPalmarSuperiores === 'Não'} onChange={handleChange} />
    <label htmlFor="linhaPalmarNao">Não</label>
  </div>

  <h3>Membros Inferiores</h3>
  <div className="form-group">
    <label>Deformidades:</label>
    <input type="radio" id="deformidadesInferioresSim" name="deformidadesInferiores" value="Sim" checked={dados.deformidadesInferiores === 'Sim'} onChange={handleChange} />
    <label htmlFor="deformidadesInferioresSim">Sim</label>
    <input type="radio" id="deformidadesInferioresNao" name="deformidadesInferiores" value="Não" checked={dados.deformidadesInferiores === 'Não'} onChange={handleChange} />
    <label htmlFor="deformidadesInferioresNao">Não</label>
  </div>
  <div className="form-group">
    <label>Malformação:</label>
    <input type="radio" id="malformacaoInferioresSim" name="malformacaoInferiores" value="Sim" checked={dados.malformacaoInferiores === 'Sim'} onChange={handleChange} />
    <label htmlFor="malformacaoInferioresSim">Sim</label>
    <input type="radio" id="malformacaoInferioresNao" name="malformacaoInferiores" value="Não" checked={dados.malformacaoInferiores === 'Não'} onChange={handleChange} />
    <label htmlFor="malformacaoInferioresNao">Não</label>
  </div>
  <div className="form-group">
    <label>Pé torto:</label>
    <input type="radio" id="peTortoSim" name="peTorto" value="Sim" checked={dados.peTorto === 'Sim'} onChange={handleChange} />
    <label htmlFor="peTortoSim">Sim</label>
    <input type="radio" id="peTortoNao" name="peTorto" value="Não" checked={dados.peTorto === 'Não'} onChange={handleChange} />
    <label htmlFor="peTortoNao">Não</label>
  </div>
  <div className="form-group">
    <label>Polidactilia:</label>
    <input type="radio" id="polidactiliaSim" name="polidactilia" value="Sim" checked={dados.polidactilia === 'Sim'} onChange={handleChange} />
    <label htmlFor="polidactiliaSim">Sim</label>
    <input type="radio" id="polidactiliaNao" name="polidactilia" value="Não" checked={dados.polidactilia === 'Não'} onChange={handleChange} />
    <label htmlFor="polidactiliaNao">Não</label>
  </div>
  </div>
  <div className="formulario-section">
  <h3>Genitália Feminina</h3>
  <div className="form-group">
    <label>Pequenos lábios e clitóris proeminentes:</label>
    <input type="radio" id="labiosProeminentesSim" name="labiosProeminentes" value="Sim" checked={dados.labiosProeminentes === 'Sim'} onChange={handleChange} />
    <label htmlFor="labiosProeminentesSim">Sim</label>
    <input type="radio" id="labiosProeminentesNao" name="labiosProeminentes" value="Não" checked={dados.labiosProeminentes === 'Não'} onChange={handleChange} />
    <label htmlFor="labiosProeminentesNao">Não</label>
  </div>
  <div className="form-group">
    <label>Secreção:</label>
    <input type="radio" id="secrecaoFemininaSim" name="secrecaoFeminina" value="Sim" checked={dados.secrecaoFeminina === 'Sim'} onChange={handleChange} />
    <label htmlFor="secrecaoFemininaSim">Sim</label>
    <input type="radio" id="secrecaoFemininaNao" name="secrecaoFeminina" value="Não" checked={dados.secrecaoFeminina === 'Não'} onChange={handleChange} />
    <label htmlFor="secrecaoFemininaNao">Não</label>
  </div>
  <div className="form-group">
    <label>Sinéquia:</label>
    <input type="radio" id="sinequiaSim" name="sinequia" value="Sim" checked={dados.sinequia === 'Sim'} onChange={handleChange} />
    <label htmlFor="sinequiaSim">Sim</label>
    <input type="radio" id="sinequiaNao" name="sinequia" value="Não" checked={dados.sinequia === 'Não'} onChange={handleChange} />
    <label htmlFor="sinequiaNao">Não</label>
  </div>
  <div className="form-group">
    <label>Hérnia inguinal:</label>
    <input type="radio" id="herniaInguinalFemSim" name="herniaInguinalFem" value="Sim" checked={dados.herniaInguinalFem === 'Sim'} onChange={handleChange} />
    <label htmlFor="herniaInguinalFemSim">Sim</label>
    <input type="radio" id="herniaInguinalFemNao" name="herniaInguinalFem" value="Não" checked={dados.herniaInguinalFem === 'Não'} onChange={handleChange} />
    <label htmlFor="herniaInguinalFemNao">Não</label>
  </div>

  <h3>Genitália Masculina</h3>
  <div className="form-group">
    <label>Hérnia inguinal:</label>
    <input type="radio" id="herniaInguinalMasSim" name="herniaInguinalMas" value="Sim" checked={dados.herniaInguinalMas === 'Sim'} onChange={handleChange} />
    <label htmlFor="herniaInguinalMasSim">Sim</label>
    <input type="radio" id="herniaInguinalMasNao" name="herniaInguinalMas" value="Não" checked={dados.herniaInguinalMas === 'Não'} onChange={handleChange} />
    <label htmlFor="herniaInguinalMasNao">Não</label>
  </div>
  <div className="form-group">
    <label>Hidrocele:</label>
    <input type="radio" id="hidroceleSim" name="hidrocele" value="Sim" checked={dados.hidrocele === 'Sim'} onChange={handleChange} />
    <label htmlFor="hidroceleSim">Sim</label>
    <input type="radio" id="hidroceleNao" name="hidrocele" value="Não" checked={dados.hidrocele === 'Não'} onChange={handleChange} />
    <label htmlFor="hidroceleNao">Não</label>
  </div>
  <div className="form-group">
    <label>Fimose fisiológica:</label>
    <input type="radio" id="fimoseSim" name="fimoseFisiologica" value="Sim" checked={dados.fimoseFisiologica === 'Sim'} onChange={handleChange} />
    <label htmlFor="fimoseSim">Sim</label>
    <input type="radio" id="fimoseNao" name="fimoseFisiologica" value="Não" checked={dados.fimoseFisiologica === 'Não'} onChange={handleChange} />
    <label htmlFor="fimoseNao">Não</label>
  </div>
  <div className="form-group">
    <label>Testículos:</label>
    <input type="radio" id="testiculosEctopicos" name="testiculos" value="Ectópicos" checked={dados.testiculos === 'Ectópicos'} onChange={handleChange} />
    <label htmlFor="testiculosEctopicos">Ectópicos</label>
    <input type="radio" id="testiculosCriptorquidia" name="testiculos" value="Criptorquidia" checked={dados.testiculos === 'Criptorquidia'} onChange={handleChange} />
    <label htmlFor="testiculosCriptorquidia">Criptorquidia</label>
  </div>
  <div className="form-group">
    <label>Meato urinário:</label>
    <input type="radio" id="meatoVisualizado" name="meatoUrinario" value="Visualizado" checked={dados.meatoUrinario === 'Visualizado'} onChange={handleChange} />
    <label htmlFor="meatoVisualizado">Visualizado</label>
    <input type="radio" id="meatoNaoVisualizado" name="meatoUrinario" value="Não visualizado" checked={dados.meatoUrinario === 'Não visualizado'} onChange={handleChange} />
    <label htmlFor="meatoNaoVisualizado">Não visualizado</label>
    <input type="radio" id="meatoHipospadia" name="meatoUrinario" value="Hipospadia" checked={dados.meatoUrinario === 'Hipospadia'} onChange={handleChange} />
    <label htmlFor="meatoHipospadia">Hipospadia</label>
    <input type="radio" id="meatoEpispadia" name="meatoUrinario" value="Epispadia" checked={dados.meatoUrinario === 'Epispadia'} onChange={handleChange} />
    <label htmlFor="meatoEpispadia">Epispadia</label>
  </div>
  </div>
  <div className="formulario-section">
  <h3>Orifício Anal</h3>
  <div className="form-group">
    <label>Anomalias:</label>
    <input type="radio" id="anomaliasSim" name="anomaliasAnal" value="Sim" checked={dados.anomaliasAnal === 'Sim'} onChange={handleChange} />
    <label htmlFor="anomaliasSim">Sim</label>
    <input type="radio" id="anomaliasNao" name="anomaliasAnal" value="Não" checked={dados.anomaliasAnal === 'Não'} onChange={handleChange} />
    <label htmlFor="anomaliasNao">Não</label>
  </div>
  <div className="form-group">
    <label>Fissuras:</label>
    <input type="radio" id="fissurasSim" name="fissurasAnal" value="Sim" checked={dados.fissurasAnal === 'Sim'} onChange={handleChange} />
    <label htmlFor="fissurasSim">Sim</label>
    <input type="radio" id="fissurasNao" name="fissurasAnal" value="Não" checked={dados.fissurasAnal === 'Não'} onChange={handleChange} />
    <label htmlFor="fissurasNao">Não</label>
  </div>
  <div className="form-group">
    <label>Assaduras:</label>
    <input type="radio" id="assadurasSim" name="assadurasAnal" value="Sim" checked={dados.assadurasAnal === 'Sim'} onChange={handleChange} />
    <label htmlFor="assadurasSim">Sim</label>
    <input type="radio" id="assadurasNao" name="assadurasAnal" value="Não" checked={dados.assadurasAnal === 'Não'} onChange={handleChange} />
    <label htmlFor="assadurasNao">Não</label>
  </div>

  <h3>Reflexos</h3>
  <div className="form-group">
    <label>Reflexo de Busca:</label>
    <input type="radio" id="reflexoBuscaPresente" name="reflexoBusca" value="Presente" checked={dados.reflexoBusca === 'Presente'} onChange={handleChange} />
    <label htmlFor="reflexoBuscaPresente">Presente</label>
    <input type="radio" id="reflexoBuscaAusente" name="reflexoBusca" value="Ausente" checked={dados.reflexoBusca === 'Ausente'} onChange={handleChange} />
    <label htmlFor="reflexoBuscaAusente">Ausente</label>
  </div>
  <div className="form-group">
    <label>Reflexo de Sucção:</label>
    <input type="radio" id="reflexoSuccaoPresente" name="reflexoSuccao" value="Presente" checked={dados.reflexoSuccao === 'Presente'} onChange={handleChange} />
    <label htmlFor="reflexoSuccaoPresente">Presente</label>
    <input type="radio" id="reflexoSuccaoAusente" name="reflexoSuccao" value="Ausente" checked={dados.reflexoSuccao === 'Ausente'} onChange={handleChange} />
    <label htmlFor="reflexoSuccaoAusente">Ausente</label>
  </div>
  <div className="form-group">
    <label>Reflexo de Moro:</label>
    <input type="radio" id="reflexoMoroPresente" name="reflexoMoro" value="Presente" checked={dados.reflexoMoro === 'Presente'} onChange={handleChange} />
    <label htmlFor="reflexoMoroPresente">Presente</label>
    <input type="radio" id="reflexoMoroAusente" name="reflexoMoro" value="Ausente" checked={dados.reflexoMoro === 'Ausente'} onChange={handleChange} />
    <label htmlFor="reflexoMoroAusente">Ausente</label>
  </div>
  <div className="form-group">
    <label>Reflexo de Babinski:</label>
    <input type="radio" id="reflexoBabinskiPresente" name="reflexoBabinski" value="Presente" checked={dados.reflexoBabinski === 'Presente'} onChange={handleChange} />
    <label htmlFor="reflexoBabinskiPresente">Presente</label>
    <input type="radio" id="reflexoBabinskiAusente" name="reflexoBabinski" value="Ausente" checked={dados.reflexoBabinski === 'Ausente'} onChange={handleChange} />
    <label htmlFor="reflexoBabinskiAusente">Ausente</label>
  </div>
  <div className="form-group">
    <label>Preensão Palmar:</label>
    <input type="radio" id="preensaoPalmarPresente" name="preensaoPalmar" value="Presente" checked={dados.preensaoPalmar === 'Presente'} onChange={handleChange} />
    <label htmlFor="preensaoPalmarPresente">Presente</label>
    <input type="radio" id="preensaoPalmarAusente" name="preensaoPalmar" value="Ausente" checked={dados.preensaoPalmar === 'Ausente'} onChange={handleChange} />
    <label htmlFor="preensaoPalmarAusente">Ausente</label>
  </div>
  <div className="form-group">
    <label>Preensão Plantar:</label>
    <input type="radio" id="preensaoPlantarPresente" name="preensaoPlantar" value="Presente" checked={dados.preensaoPlantar === 'Presente'} onChange={handleChange} />
    <label htmlFor="preensaoPlantarPresente">Presente</label>
    <input type="radio" id="preensaoPlantarAusente" name="preensaoPlantar" value="Ausente" checked={dados.preensaoPlantar === 'Ausente'} onChange={handleChange} />
    <label htmlFor="preensaoPlantarAusente">Ausente</label>
  </div>
  <div className="form-group">
    <label>Reflexo de Marcha:</label>
    <input type="radio" id="reflexoMarchaPresente" name="reflexoMarcha" value="Presente" checked={dados.reflexoMarcha === 'Presente'} onChange={handleChange} />
    <label htmlFor="reflexoMarchaPresente">Presente</label>
    <input type="radio" id="reflexoMarchaAusente" name="reflexoMarcha" value="Ausente" checked={dados.reflexoMarcha === 'Ausente'} onChange={handleChange} />
    <label htmlFor="reflexoMarchaAusente">Ausente</label>
  </div>
  </div>
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

export default FormularioRecemNascido;
