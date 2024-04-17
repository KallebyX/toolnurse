import React, { useState } from 'react';
import toolNurseImage from '../../assets/toolNurse.jpg'; // Ajuste o caminho conforme necessário
import Menu from '../Menu'; // Ajuste o caminho conforme necessário

const FormularioUmMes = () => {
  const [dados, setDados] = useState({
    peso: '',
    estatura: '',
    pc: '',
    temperaturaAxilar: '',
    fr: '',
    texturaPele: '',
    sensacaoPele: '',
    corPele: '',
    hidratacaoPele: '',
    fontanelas: '',
    linfonodosCervicaisPalpaveis: '',
    secrecaoOlhos: '',
    estrabismo: '',
    mucosa: '',
    secrecaoNariz: '',
    batimentosNariz: '',
    obstrucaoNasal: '',
    secrecaoOrelhas: '',
    linfonodoRetroauricular: '',
    tiragem: '',
    bulhasCardiacas: '',
    murmurioVesiculares: '',
    abdomen: '',
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
    pernasBraçosFletidos: '',
    rostoObservado: '',
    reageSom: '',
    elevaCabeça: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedData = formatarDados();
    // Aqui você pode fazer algo com os dados formatados, como enviar para um servidor ou exibir em um alerta
    console.log(formattedData);
  };

  const formatarDados = () => {
    // Lógica para formatar os dados para exibição ou envio
    // Aqui você pode utilizar os dados do estado 'dados' para formatá-los como desejado
    // Exemplo de formatação:
    return `
      1 Mês 

      Peso: ${dados.peso} Kg 
      Estatura: ${dados.estatura} cm 
      PC: ${dados.pc} cm 
      Temperatura axilar: ${dados.temperaturaAxilar} ºC 
      FR: ${dados.fr} RPM 

      Pele: 
      - Textura: ${dados.texturaPele} 
      - Sensação: ${dados.sensacaoPele} 
      - Cor: ${dados.corPele} 
      - Hidratação: ${dados.hidratacaoPele} 

      CABEÇA 
      Fontanelas: ${dados.fontanelas} 
      Linfonodos cervicais palpáveis: ${dados.linfonodosCervicaisPalpaveis} 

      Olhos: 
      - Secreção: ${dados.secrecaoOlhos} 
      - Estrabismo: ${dados.estrabismo} 
      - Mucosa: ${dados.mucosa} 

      Nariz: 
      - Secreção: ${dados.secrecaoNariz} 
      - Batimentos das asas do nariz: ${dados.batimentosNariz} 
      - Obstrução nasal: ${dados.obstrucaoNasal} 

      Orelhas/ouvidos 
      - Secreção: ${dados.secrecaoOrelhas} 
      - Linfonodo retroauricular palpável: ${dados.linfonodoRetroauricular} 

      TÓRAX 
      - AP: ${dados.tiragem} 
      - Murmúrio Vesiculares: ${dados.murmurioVesiculares} 
      - AC: ${dados.bulhasCardiacas}  

      ABDOME 
      - Estado: ${dados.abdomen} 
      - Hérnia umbilical: ${dados.herniaUmbilical} 

      GENITÁLIA 
      - Feminina: 
        - Pequenos lábios e clitóris proeminentes: ${dados.labiosClitorisProeminentesFem} 
        - Secreção: ${dados.secrecaoFeminina} 
        - Sinéquia: ${dados.sinequia} 
        - Hérnia inguinal: ${dados.herniaInguinalFem} 
      - Masculina: 
        - Hérnia inguinal: ${dados.herniaInguinalMas} 
        - Hidrocele: ${dados.hidrocele} 
        - Fimose fisiológica: ${dados.fimoseFisiologica} 
        - Testículos: ${dados.testiculos} 
        - Meato urinário: ${dados.meatoUrinario} 

      Orifício anal 
      - Anomalias: ${dados.anomaliasAnal} 
      - Fissuras: ${dados.fissuras} 
      - Assaduras: ${dados.assaduras} 

      Marcos do Desenvolvimento 
      - Pernas e braços fletidos cabeça lateralizada: ${dados.pernasBraçosFletidos} 
      - Observa um rosto: ${dados.rostoObservado} 
      - Reage ao som: ${dados.reageSom} 
      - Eleva a cabeça: ${dados.elevaCabeça} 
    `.trim();
  };

  return (
    <div className="tudo">
    <div className="cabecalho">
      <img className="img" src={toolNurseImage} alt="Tool Nurse Logo" />
      <Menu />
    </div>

    <h3>Primeiro Mês</h3>
    <hr className="hr" />
    <form onSubmit={handleSubmit}>
      {/* Peso */}
      <div className="form-group">
      
      <h3>Informações Básicas</h3>
        <label htmlFor="peso">Peso (Kg):</label>
        <input type="text" id="peso" name="peso" value={dados.peso} onChange={handleChange} />
      </div>

      {/* Estatura */}
      <div className="form-group">
        <label htmlFor="estatura">Estatura (cm):</label>
        <input type="text" id="estatura" name="estatura" value={dados.estatura} onChange={handleChange} />
      </div>

      {/* PC */}
      <div className="form-group">
        <label htmlFor="pc">PC (cm):</label>
        <input type="text" id="pc" name="pc" value={dados.pc} onChange={handleChange} />
      </div>

      {/* Temperatura Axilar */}
      <div className="form-group">
        <label htmlFor="temperaturaAxilar">Temperatura Axilar (ºC):</label>
        <input type="text" id="temperaturaAxilar" name="temperaturaAxilar" value={dados.temperaturaAxilar} onChange={handleChange} />
      </div>

      {/* FR */}
      <div className="form-group">
        <label htmlFor="fr">FR (RPM):</label>
        <input type="text" id="fr" name="fr" value={dados.fr} onChange={handleChange} />
      </div>
<h3>pele</h3>
      {/* Pele */}
      <div className="form-group">
        <label>Textura da Pele:</label><br />
        <label>
          <input type="radio" name="texturaPele" value="Lisa" checked={dados.texturaPele === 'Lisa'} onChange={handleChange} />
          Lisa
        </label><br />
        <label>
          <input type="radio" name="texturaPele" value="Irregular" checked={dados.texturaPele === 'Irregular'} onChange={handleChange} />
          Irregular
        </label><br />
        <label>
          <input type="radio" name="texturaPele" value="Macia" checked={dados.texturaPele === 'Macia'} onChange={handleChange} />
          Macia
        </label><br />
        <label>
          <input type="radio" name="texturaPele" value="Áspera" checked={dados.texturaPele === 'Áspera'} onChange={handleChange} />
          Áspera
        </label><br />
      </div>

      {/* Sensação Pele */}
      <div className="form-group">
        <label>Sensação da Pele:</label><br />
        <label>
          <input type="radio" name="sensacaoPele" value="Rósea" checked={dados.sensacaoPele === 'Rósea'} onChange={handleChange} />
          Rósea
        </label><br />
        <label>
          <input type="radio" name="sensacaoPele" value="Pálida" checked={dados.sensacaoPele === 'Pálida'} onChange={handleChange} />
          Pálida
        </label><br />
        <label>
          <input type="radio" name="sensacaoPele" value="Cianótica" checked={dados.sensacaoPele === 'Cianótica'} onChange={handleChange} />
          Cianótica
        </label><br />
        <label>
          <input type="radio" name="sensacaoPele" value="Ictérica" checked={dados.sensacaoPele === 'Ictérica'} onChange={handleChange} />
          Ictérica
        </label><br />
      </div>

      {/* Cor Pele */}
      <div className="form-group">
        <label>Cor da Pele:</label><br />
        <label>
          <input type="radio" name="corPele" value="Rósea" checked={dados.corPele === 'Rósea'} onChange={handleChange} />
          Rósea
        </label><br />
        <label>
          <input type="radio" name="corPele" value="Pálida" checked={dados.corPele === 'Pálida'} onChange={handleChange} />
          Pálida
        </label><br />
        <label>
          <input type="radio" name="corPele" value="Cianótica" checked={dados.corPele === 'Cianótica'} onChange={handleChange} />
          Cianótica
        </label><br />
        <label>
          <input type="radio" name="corPele" value="Ictérica" checked={dados.corPele === 'Ictérica'} onChange={handleChange} />
          Ictérica
        </label><br />
      </div>

      {/* Hidratação Pele */}
      <div className="form-group">
        <label>Hidratação da Pele:</label><br />
        <label>
          <input type="radio" name="hidratacaoPele" value="Hidratada" checked={dados.hidratacaoPele === 'Hidratada'} onChange={handleChange} />
          Hidratada
        </label><br />
        <label>
          <input type="radio" name="hidratacaoPele" value="Desidratada" checked={dados.hidratacaoPele === 'Desidratada'} onChange={handleChange} />
          Desidratada
        </label><br />
      </div>
{/* CABEÇA */}
<div className="form-group">
  <h3>Cabeça</h3>
  <label>Fontanelas:</label><br />
  <input type="radio" name="fontanelas" value="Abauladas" checked={dados.fontanelas === 'Abauladas'} onChange={handleChange} /> Abauladas<br />
  <input type="radio" name="fontanelas" value="Deprimidas" checked={dados.fontanelas === 'Deprimidas'} onChange={handleChange} /> Deprimidas<br />
  <input type="radio" name="fontanelas" value="Planas" checked={dados.fontanelas === 'Planas'} onChange={handleChange} /> Planas<br />
</div>

<div className="form-group">
  <label>Linfonodos cervicais palpáveis:</label><br />
  <input type="radio" name="linfonodosCervicaisPalpaveis" value="SIM" checked={dados.linfonodosCervicaisPalpaveis === 'SIM'} onChange={handleChange} /> SIM<br />
  <input type="radio" name="linfonodosCervicaisPalpaveis" value="NÃO" checked={dados.linfonodosCervicaisPalpaveis === 'NÃO'} onChange={handleChange} /> NÃO<br />
</div>

{/* Olhos */}
<div className="form-group">
  <label>Olhos:</label><br />
  <label>
    <input type="radio" name="secrecaoOlhos" value="sim" checked={dados.secrecaoOlhos === 'sim'} onChange={handleChange} />
    Sim
  </label>
  <label>
    <input type="radio" name="secrecaoOlhos" value="não" checked={dados.secrecaoOlhos === 'não'} onChange={handleChange} />
    Não
  </label><br />
</div>

{/* Estrabismo */}
<div className="form-group">
  <label>Estrabismo:</label><br />
  <label>
    <input type="radio" name="estrabismo" value="sim" checked={dados.estrabismo === 'sim'} onChange={handleChange} />
    Sim
  </label>
  <label>
    <input type="radio" name="estrabismo" value="não" checked={dados.estrabismo === 'não'} onChange={handleChange} />
    Não
  </label><br />
</div>

{/* Mucosa */}
<div className="form-group">
  <label>Mucosa:</label><br />
  <label>
    <input type="radio" name="mucosa" value="corada" checked={dados.mucosa === 'corada'} onChange={handleChange} />
    Corada
  </label>
  <label>
    <input type="radio" name="mucosa" value="pálida" checked={dados.mucosa === 'pálida'} onChange={handleChange} />
    Pálida
  </label>
  <label>
    <input type="radio" name="mucosa" value="cianóticas" checked={dados.mucosa === 'cianóticas'} onChange={handleChange} />
    Cianóticas
  </label>
  <label>
    <input type="radio" name="mucosa" value="acianóticas" checked={dados.mucosa === 'acianóticas'} onChange={handleChange} />
    Acianóticas
  </label><br />
  <label>
    <input type="radio" name="mucosa" value="úmida" checked={dados.mucosa === 'úmida'} onChange={handleChange} />
    Úmida
  </label>
  <label>
    <input type="radio" name="mucosa" value="seca" checked={dados.mucosa === 'seca'} onChange={handleChange} />
    Seca
  </label><br />
</div>
{/* Nariz */}
<div className="form-group">
  <label>Secreção:</label><br />
  <label>
    <input type="radio" name="secrecaoNariz" value="sim" checked={dados.secrecaoNariz === 'sim'} onChange={handleChange} />
    Sim
  </label>
  <label>
    <input type="radio" name="secrecaoNariz" value="não" checked={dados.secrecaoNariz === 'não'} onChange={handleChange} />
    Não
  </label><br />
</div>

<div className="form-group">
  <label>Batimentos das asas do nariz:</label><br />
  <label>
    <input type="radio" name="batimentosNariz" value="sim" checked={dados.batimentosNariz === 'sim'} onChange={handleChange} />
    Sim
  </label>
  <label>
    <input type="radio" name="batimentosNariz" value="não" checked={dados.batimentosNariz === 'não'} onChange={handleChange} />
    Não
  </label><br />
</div>

<div className="form-group">
  <label>Obstrução nasal:</label><br />
  <label>
    <input type="radio" name="obstrucaoNasal" value="sim" checked={dados.obstrucaoNasal === 'sim'} onChange={handleChange} />
    Sim
  </label>
  <label>
    <input type="radio" name="obstrucaoNasal" value="não" checked={dados.obstrucaoNasal === 'não'} onChange={handleChange} />
    Não
  </label><br />
</div>

{/* Orelhas/ouvidos */}
<div className="form-group">
  <label>Secreção:</label><br />
  <label>
    <input type="radio" name="secrecaoOrelhas" value="sim" checked={dados.secrecaoOrelhas === 'sim'} onChange={handleChange} />
    Sim
  </label>
  <label>
    <input type="radio" name="secrecaoOrelhas" value="não" checked={dados.secrecaoOrelhas === 'não'} onChange={handleChange} />
    Não
  </label><br />
</div>

<div className="form-group">
  <label>Linfonodo retroauricular palpável:</label><br />
  <label>
    <input type="radio" name="linfonodoRetroauricular" value="sim" checked={dados.linfonodoRetroauricular === 'sim'} onChange={handleChange} />
    Sim
  </label>
  <label>
    <input type="radio" name="linfonodoRetroauricular" value="não" checked={dados.linfonodoRetroauricular === 'não'} onChange={handleChange} />
    Não
  </label><br />
</div>

{/* TÓRAX */}
<h3>TÓRAX</h3>

<div className="form-group">
  <label>AP:</label><br />
  <input type="radio" id="ap" name="tiragem" value="AP" checked={dados.tiragem === 'AP'} onChange={handleChange} />
  <label htmlFor="ap">AP</label><br />

  <input type="radio" id="póstero" name="tiragem" value="Póstero" checked={dados.tiragem === 'Póstero'} onChange={handleChange} />
  <label htmlFor="póstero">Póstero</label><br />
</div>

<div className="form-group">
  <label>Murmúrio vesiculares:</label><br />
  <input type="radio" id="semRuidos" name="murmurioVesiculares" value="Sem ruídos adventícios" checked={dados.murmurioVesiculares === 'Sem ruídos adventícios'}  onChange={handleChange} />
  <label htmlFor="semRuidos">Sem ruídos adventícios</label><br />

  <input type="radio" id="comRuidos" name="murmurioVesiculares" value="Com ruídos adventícios" checked={dados.murmurioVesiculares === 'Com ruídos adventícios'} onChange={handleChange} />
  <label htmlFor="comRuidos">Com ruídos adventícios</label><br />
</div>

<div className="form-group">
  <label>AC:</label><br />
  <input type="radio" id="semSopro" name="bulhasCardiacas" value="Sem sopro" checked={dados.bulhasCardiacas === 'Sem sopro'} onChange={handleChange} />
  <label htmlFor="semSopro">Sem sopro</label><br />

  <input type="radio" id="comSopro" name="bulhasCardiacas" value="Com sopro" checked={dados.bulhasCardiacas === 'Com sopro'} onChange={handleChange} />
  <label htmlFor="comSopro">Com sopro</label><br />
</div>

{/* ABDOME */}
<h3>ABDOME</h3>

<div className="form-group">
  <label>Dilatação:</label><br />
  <input type="radio" id="dilatado" name="abdomen" value="Dilatado" checked={dados.abdomen === 'Dilatado'} onChange={handleChange} />
  <label htmlFor="dilatado">Dilatado</label><br />

  <input type="radio" id="escavado" name="abdomen" value="Escavado" checked={dados.abdomen === 'Escavado'} onChange={handleChange} />
  <label htmlFor="escavado">Escavado</label><br />

  <input type="radio" id="globoso" name="abdomen" value="Globoso" checked={dados.abdomen === 'Globoso'} onChange={handleChange} />
  <label htmlFor="globoso">Globoso</label><br />

  <input type="radio" id="semigloboso" name="abdomen" value="Semigloboso" checked={dados.abdomen === 'Semigloboso'} onChange={handleChange} />
  <label htmlFor="semigloboso">Semigloboso</label><br />
</div>

<div className="form-group">
  <label>Hérnia umbilical:</label><br />
  <input type="radio" id="simHernia" name="herniaUmbilical" value="Sim" checked={dados.herniaUmbilical === 'Sim'} onChange={handleChange} />
  <label htmlFor="simHernia">Sim</label><br />

  <input type="radio" id="naoHernia" name="herniaUmbilical" value="Não" checked={dados.herniaUmbilical === 'Não'} onChange={handleChange} />
  <label htmlFor="naoHernia">Não</label><br />
</div>
{/* GENITÁLIA */}
<h3>GENITÁLIA</h3>

{/* Feminina */}
<h4>Feminina</h4>
<div className="form-group">
  <label>Pequenos lábios e clitóris proeminentes:</label><br />
  <input type="radio" id="simLabi" name="labiosClitorisProeminentesFem" value="Sim" checked={dados.labiosClitorisProeminentesFem === 'Sim'} onChange={handleChange} />
  <label htmlFor="simLabi">Sim</label><br />

  <input type="radio" id="naoLabi" name="labiosClitorisProeminentesFem" value="Não" checked={dados.labiosClitorisProeminentesFem === 'Não'} onChange={handleChange} />
  <label htmlFor="naoLabi">Não</label><br />
</div>

<div className="form-group">
  <label>Secreção:</label><br />
  <input type="radio" id="simSecrecao" name="secrecaoFeminina" value="Sim" checked={dados.secrecaoFeminina === 'Sim'} onChange={handleChange} />
  <label htmlFor="simSecrecao">Sim</label><br />

  <input type="radio" id="naoSecrecao" name="secrecaoFeminina" value="Não" checked={dados.secrecaoFeminina === 'Não'} onChange={handleChange} />
  <label htmlFor="naoSecrecao">Não</label><br />
</div>

<div className="form-group">
  <label>Sinéquia:</label><br />
  <input type="radio" id="simSinequia" name="sinequia" value="Sim" checked={dados.sinequia === 'Sim'} onChange={handleChange} />
  <label htmlFor="simSinequia">Sim</label><br />

  <input type="radio" id="naoSinequia" name="sinequia" value="Não" checked={dados.sinequia === 'Não'} onChange={handleChange} />
  <label htmlFor="naoSinequia">Não</label><br />
</div>

<div className="form-group">
  <label>Hérnia inguinal:</label><br />
  <input type="radio" id="simHerniaFem" name="herniaInguinalFem" value="Sim" checked={dados.herniaInguinalFem === 'Sim'} onChange={handleChange} />
  <label htmlFor="simHerniaFem">Sim</label><br />

  <input type="radio" id="naoHerniaFem" name="herniaInguinalFem" value="Não" checked={dados.herniaInguinalFem === 'Não'} onChange={handleChange} />
  <label htmlFor="naoHerniaFem">Não</label><br />
</div>

{/* Masculina */}
<h4>Masculina</h4>
<div className="form-group">
  <label>Hérnia inguinal:</label><br />
  <input type="radio" id="simHerniaMas" name="herniaInguinalMas" value="Sim" checked={dados.herniaInguinalMas === 'Sim'} onChange={handleChange} />
  <label htmlFor="simHerniaMas">Sim</label><br />

  <input type="radio" id="naoHerniaMas" name="herniaInguinalMas" value="Não" checked={dados.herniaInguinalMas === 'Não'} onChange={handleChange} />
  <label htmlFor="naoHerniaMas">Não</label><br />
</div>

<div className="form-group">
  <label>Hidrocele:</label><br />
  <input type="radio" id="simHidrocele" name="hidrocele" value="Sim" checked={dados.hidrocele === 'Sim'} onChange={handleChange} />
  <label htmlFor="simHidrocele">Sim</label><br />

  <input type="radio" id="naoHidrocele" name="hidrocele" value="Não" checked={dados.hidrocele === 'Não'} onChange={handleChange} />
  <label htmlFor="naoHidrocele">Não</label><br />
</div>

<div className="form-group">
  <label>Fimose fisiológica:</label><br />
  <input type="radio" id="simFimose" name="fimoseFisiologica" value="Sim" checked={dados.fimoseFisiologica === 'Sim'} onChange={handleChange} />
  <label htmlFor="simFimose">Sim</label><br />

  <input type="radio" id="naoFimose" name="fimoseFisiologica" value="Não" checked={dados.fimoseFisiologica === 'Não'} onChange={handleChange} />
  <label htmlFor="naoFimose">Não</label><br />
</div>

<div className="form-group">
  <label>Testículos:</label><br />
  <input type="radio" id="ectopicos" name="testiculos" value="Ectópicos" checked={dados.testiculos === 'Ectópicos'} onChange={handleChange} />
  <label htmlFor="ectopicos">Ectópicos</label><br />

  <input type="radio" id="naoEctopicos" name="testiculos" value="Não Ectópicos" checked={dados.testiculos === 'Não Ectópicos'} onChange={handleChange} />
  <label htmlFor="naoEctopicos">Não Ectópicos</label><br />
</div>

<div className="form-group">
  <label>Criptorquidia:</label><br />
  <input type="radio" id="criptorquidia" name="criptorquidia" value="Sim" checked={dados.criptorquidia === 'Sim'} onChange={handleChange} />
  <label htmlFor="criptorquidia">Sim</label><br />

  <input type="radio" id="naoCriptorquidia" name="criptorquidia" value="Não" checked={dados.criptorquidia === 'Não'} onChange={handleChange} />
  <label htmlFor="naoCriptorquidia">Não</label><br />
</div>

<div className="form-group">
  <label>Meato urinário:</label><br />
  <input type="radio" id="meatoVisualizado" name="meatoUrinario" value="Visualizado" checked={dados.meatoUrinario === 'Visualizado'} onChange={handleChange} />
  <label htmlFor="meatoVisualizado">Visualizado</label><br />

  <input type="radio" id="naoMeatoVisualizado" name="meatoUrinario" value="Não Visualizado" checked={dados.meatoUrinario === 'Não Visualizado'} onChange={handleChange} />
  <label htmlFor="naoMeatoVisualizado">Não Visualizado</label><br />
</div>

<div className="form-group">
  <label>Hipospadia:</label><br />
  <input type="radio" id="simHipospadia" name="hipospadia" value="Sim" checked={dados.hipospadia === 'Sim'} onChange={handleChange} />
  <label htmlFor="simHipospadia">Sim</label><br />

  <input type="radio" id="naoHipospadia" name="hipospadia" value="Não" checked={dados.hipospadia === 'Não'} onChange={handleChange} />
  <label htmlFor="naoHipospadia">Não</label><br />
</div>

<div className="form-group">
  <label>Epispádia:</label><br />
  <input type="radio" id="simEpispadia" name="epispadia" value="Sim" checked={dados.epispadia === 'Sim'} onChange={handleChange} />
  <label htmlFor="simEpispadia">Sim</label><br />

  <input type="radio" id="naoEpispadia" name="epispadia" value="Não" checked={dados.epispadia === 'Não'} onChange={handleChange} />
  <label htmlFor="naoEpispadia">Não</label><br />
</div>
{/* Orifício anal */}
<h3>Orifício anal</h3>

<div className="form-group">
  <label>Anomalias:</label><br />
  <input type="radio" id="simAnomalias" name="anomaliasAnal" value="Sim" checked={dados.anomaliasAnal === 'Sim'} onChange={handleChange} />
  <label htmlFor="simAnomalias">Sim</label><br />

  <input type="radio" id="naoAnomalias" name="anomaliasAnal" value="Não" checked={dados.anomaliasAnal === 'Não'} onChange={handleChange} />
  <label htmlFor="naoAnomalias">Não</label><br />
</div>

<div className="form-group">
  <label>Fissuras:</label><br />
  <input type="radio" id="simFissuras" name="fissuras" value="Sim" checked={dados.fissuras === 'Sim'} onChange={handleChange} />
  <label htmlFor="simFissuras">Sim</label><br />

  <input type="radio" id="naoFissuras" name="fissuras" value="Não" checked={dados.fissuras === 'Não'} onChange={handleChange} />
  <label htmlFor="naoFissuras">Não</label><br />
</div>

<div className="form-group">
  <label>Assaduras:</label><br />
  <input type="radio" id="simAssaduras" name="assaduras" value="Sim" checked={dados.assaduras === 'Sim'} onChange={handleChange} />
  <label htmlFor="simAssaduras">Sim</label><br />

  <input type="radio" id="naoAssaduras" name="assaduras" value="Não" checked={dados.assaduras === 'Não'} onChange={handleChange} />
  <label htmlFor="naoAssaduras">Não</label><br />
</div>
{/* Marcos do Desenvolvimento */}
<h3>Marcos do Desenvolvimento</h3>

<div className="form-group">
  <label>Pernas e braços fletidos cabeça lateralizada:</label><br />
  <input type="radio" id="presentePBCL" name="pernasBraçosFletidos" value="Presente" checked={dados.pernasBraçosFletidos === 'Presente'} onChange={handleChange} />
  <label htmlFor="presentePBCL">Presente</label><br />

  <input type="radio" id="ausentePBCL" name="pernasBraçosFletidos" value="Ausente" checked={dados.pernasBraçosFletidos === 'Ausente'} onChange={handleChange} />
  <label htmlFor="ausentePBCL">Ausente</label><br />

  <input type="radio" id="naoVerificadoPBCL" name="pernasBraçosFletidos" value="Não verificado" checked={dados.pernasBraçosFletidos === 'Não verificado'} onChange={handleChange} />
  <label htmlFor="naoVerificadoPBCL">Não verificado</label><br />
</div>

<div className="form-group">
  <label>Observa um rosto:</label><br />
  <input type="radio" id="presenteRosto" name="rostoObservado" value="Presente" checked={dados.rostoObservado === 'Presente'} onChange={handleChange} />
  <label htmlFor="presenteRosto">Presente</label><br />

  <input type="radio" id="ausenteRosto" name="rostoObservado" value="Ausente" checked={dados.rostoObservado === 'Ausente'} onChange={handleChange} />
  <label htmlFor="ausenteRosto">Ausente</label><br />

  <input type="radio" id="naoVerificadoRosto" name="rostoObservado" value="Não verificado" checked={dados.rostoObservado === 'Não verificado'} onChange={handleChange} />
  <label htmlFor="naoVerificadoRosto">Não verificado</label><br />
</div>

<div className="form-group">
  <label>Reage ao som:</label><br />
  <input type="radio" id="presenteSom" name="reageSom" value="Presente" checked={dados.reageSom === 'Presente'} onChange={handleChange} />
  <label htmlFor="presenteSom">Presente</label><br />

  <input type="radio" id="ausenteSom" name="reageSom" value="Ausente" checked={dados.reageSom === 'Ausente'} onChange={handleChange} />
  <label htmlFor="ausenteSom">Ausente</label><br />

  <input type="radio" id="naoVerificadoSom" name="reageSom" value="Não verificado" checked={dados.reageSom === 'Não verificado'} onChange={handleChange} />
  <label htmlFor="naoVerificadoSom">Não verificado</label><br />
</div>

<div className="form-group">
  <label>Eleva a cabeça:</label><br />
  <input type="radio" id="presenteCabeça" name="elevaCabeça" value="Presente" checked={dados.elevaCabeça === 'Presente'} onChange={handleChange} />
  <label htmlFor="presenteCabeça">Presente</label><br />

  <input type="radio" id="ausenteCabeça" name="elevaCabeça" value="Ausente" checked={dados.elevaCabeça === 'Ausente'} onChange={handleChange} />
  <label htmlFor="ausenteCabeça">Ausente</label><br />

  <input type="radio" id="naoVerificadoCabeça" name="elevaCabeça" value="Não verificado" checked={dados.elevaCabeça === 'Não verificado'} onChange={handleChange} />
  <label htmlFor="naoVerificadoCabeça">Não verificado</label><br />
</div>

        {/* Adicione aqui os outros campos do formulário */}

        {/* Botão de Envio */}
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
};

export default FormularioUmMes;
