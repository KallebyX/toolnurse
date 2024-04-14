import React, { useState } from "react";
import toolNurseImage from "../../assets/toolNurse.jpg";
import Menu from "../Menu";

function Formulario() {
  const [dados, setDados] = useState({
    // Inicialize seus estados aqui
    peso: "",
    estatura: "",
    pc: "",
    temperaturaAxilar: "",
    fr: "",
    peleTextura: "",
    peleSensacao: "",
    peleCor: "",
    peleHidratacao: "",
    fontanelas: "",
    linfonodosCervicais: "",
    olhosSecrecao: "",
    olhosEstrabismo: "",
    mucosaCor: "",
    mucosaEstado: "",
    narizSecrecao: "",
    narizBatimentos: "",
    narizObstrucao: "",
    ouvidosSecrecao: "",
    linfonodoRetroauricular: "",
    toraxAP: "",
    toraxAC: "",
    abdomenEstado: "",
    herniaUmbilical: "",
    genitaliaFemininaLabios: "",
    genitaliaFemininaSecrecao: "",
    genitaliaFemininaSinequia: "",
    genitaliaFemininaHerniaInguinal: "",
    genitaliaMasculinaHerniaInguinal: "",
    genitaliaMasculinaHidrocele: "",
    genitaliaMasculinaFimose: "",
    genitaliaMasculinaTesticulos: "",
    genitaliaMasculinaMeatoUrinario: "",
    orificioAnalAnomalias: "",
    orificioAnalFissuras: "",
    orificioAnalAssaduras: "",
    marcosDesenvolvimentoPernasBracos: "",
    marcosDesenvolvimentoObservaRosto: "",
    marcosDesenvolvimentoReageSom: "",
    marcosDesenvolvimentoElevaCabeca: "",
    pernasBracosFletidos: "",
    observaRosto: "",
    reageAoSom: "",
    elevaCabeca: "",
    // Continue com as outras variáveis conforme necessário
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };

  const formatarDados = () => {
    let formattedData = "1 Mês - Avaliação\n\n";
  
    // Anamnese
    formattedData += "**Anamnese**\n";
    formattedData += "Informações da criança\n\n";
    formattedData += "**Peso**: " + dados.peso + " kg\n";
    formattedData += "**Estatura**: " + dados.estatura + " cm\n";
    formattedData += "**PC**: " + dados.pc + " cm\n";
    formattedData += "**Temperatura axilar**: " + dados.temperaturaAxilar + " ºC\n";
    formattedData += "**FR**: " + dados.fr + " RPM\n\n";
  
    // Pele
    formattedData += "**Pele**\n";
    formattedData += "Textura: " + (dados.peleTexturaLisa ? "Lisa" : "Irregular") + "\n";
    formattedData += "Sensação ao Toque: " + (dados.peleSensacaoMacia ? "Macia" : "Áspera") + "\n";
    formattedData += "Cor: " + (dados.peleCorRosea ? "Rósea" : "") + (dados.peleCorPalida ? ", Pálida" : "") + (dados.peleCorCianotica ? ", Cianótica" : "") + (dados.peleCorIcterica ? ", Ictérica" : "") + "\n";
    formattedData += "Hidratação: " + (dados.peleHidratacao === "hidratada" ? "Hidratada" : "Desidratada") + "\n\n";
  
    // Cabeça
    formattedData += "**Cabeça**\n";
    formattedData += "Fontanelas: " + dados.fontanelas + "\n";
    formattedData += "Linfonodos cervicais palpáveis: " + (dados.linfonodosCervicais === "sim" ? "Sim" : "Não") + "\n";
    formattedData += "Olhos - Secreção: " + (dados.olhosSecrecao === "sim" ? "Sim" : "Não") + "\n";
    formattedData += "Estrabismo: " + (dados.olhosEstrabismo === "sim" ? "Sim" : "Não") + "\n";
    formattedData += "Nariz - Secreção: " + (dados.narizSecrecao === "sim" ? "Sim" : "Não") + "\n";
    formattedData += "Batimentos das asas do nariz: " + (dados.narizBatimentos === "sim" ? "Sim" : "Não") + "\n";
    formattedData += "Obstrução nasal: " + (dados.narizObstrucao === "sim" ? "Sim" : "Não") + "\n";
    formattedData += "Orelhas/Ouvidos - Secreção: " + (dados.ouvidosSecrecao === "sim" ? "Sim" : "Não") + "\n";
    formattedData += "Linfonodo retroauricular palpável: " + (dados.linfonodoRetroauricular === "sim" ? "Sim" : "Não") + "\n\n";
  
    // Tórax
    formattedData += "**Tórax**\n";
    formattedData += "AP - Tiragem: " + (dados.apTiragem ? "Presente" : "Ausente") + "\n";
    formattedData += "AC - Bulhas cardíacas: " + (dados.acBulhas === "semSopro" ? "Sem Sopro" : "Com Sopro") + "\n\n";
  
    // Abdome
    formattedData += "**Abdome**\n";
    formattedData += "Dilatado: " + (dados.abdomenDilatado ? "Presente" : "Ausente") + "\n";
    formattedData += "Escavado: " + (dados.abdomenEscavado ? "Presente" : "Ausente") + "\n";
    formattedData += "Globoso: " + (dados.abdomenGloboso ? "Presente" : "Ausente") + "\n";
    formattedData += "Hérnia umbilical: " + (dados.herniaUmbilical === "sim" ? "Sim" : "Não") + "\n\n";
  
    // Genitália
    formattedData += "**Genitália**\n";
    formattedData += "**Feminina**\n";
    formattedData += "Pequenos lábios e clitóris proeminentes: " + (dados.genitaliaFemininaLabios === "sim" ? "Sim" : "Não") + "\n";
    formattedData += "Secreção: " + (dados.genitaliaFemininaSecrecao === "sim" ? "Sim" : "Não") + "\n";
    formattedData += "Sinéquia: " + (dados.genitaliaFemininaSinequia === "sim" ? "Sim" : "Não") + "\n";
    formattedData += "Hérnia inguinal: " + (dados.genitaliaFemininaHerniaInguinal === "sim" ? "Sim" : "Não") + "\n\n";
  
    formattedData += "**Masculina**\n";
    formattedData += "Hérnia inguinal: " + (dados.genitaliaMasculinaHerniaInguinal === "sim" ? "Sim" : "Não") + "\n";
    formattedData += "Hidrocele: " + (dados.genitaliaMasculinaHidrocele === "sim" ? "Sim" : "Não") + "\n";
    formattedData += "Fimose fisiológica: " + (dados.genitaliaMasculinaFimose === "sim" ? "Sim" : "Não") + "\n";
    formattedData += "Testículos: " + dados.genitaliaMasculinaTesticulos + "\n";
    formattedData += "Meato urinário: " + dados.genitaliaMasculinaMeatoUrinario + "\n\n";
  
    // Orifício Anal
    formattedData += "**Orifício Anal**\n";
    formattedData += "Anomalias: " + (dados.orificioAnalAnomalias === "sim" ? "Sim" : "Não") + "\n";
    formattedData += "Fissuras: " + (dados.orificioAnalFissuras === "sim" ? "Sim" : "Não") + "\n";
    formattedData += "Assaduras: " + (dados.orificioAnalAssaduras === "sim" ? "Sim" : "Não") + "\n\n";
  
    // Marcos do Desenvolvimento
    formattedData += "**Marcos do Desenvolvimento**\n";
    formattedData += "Pernas e braços fletidos, cabeça lateralizada: " + dados.pernasBracosFletidos + "\n";
    formattedData += "Observa um rosto: " + dados.observaRosto + "\n";
    formattedData += "Reage ao som: " + dados.reageAoSom + "\n";
    formattedData += "Eleva a cabeça: " + dados.elevaCabeca + "\n";
  
    return formattedData;
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedData = formatarDados();
    navigator.clipboard.writeText(formattedData)
      .then(() => alert("Formulário copiado para a área de transferência!"))
      .catch(err => console.error("Erro ao copiar o formulário: ", err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="cabecalho">
        <img className="img" src={toolNurseImage} alt="Tool Nurse Logo" />
        <Menu />
      </div>

      <hr className="hr" />

      <div className="tudo">
        <div className="h2Box">
          <h2>1 Mês - Avaliação</h2>
        </div>

        <hr className="hr" />

        <div>
          <h3>Anamnese</h3>
          <p>Informações da criança</p>

          <label>Peso (Kg):
            <input
              type="text"
              name="peso"
              value={dados.peso}
              onChange={handleChange} />
          </label>

          <label>Estatura (cm):
            <input
              type="text"
              name="estatura"
              value={dados.estatura}
              onChange={handleChange} />
          </label>

          <label>PC (cm):
            <input
              type="text"
              name="pc"
              value={dados.pc}
              onChange={handleChange} />
          </label>

          <label>Temperatura axilar (ºC):
            <input
              type="text"
              name="temperatura"
              value={dados.temperatura}
              onChange={handleChange} />
          </label>

          <label>FR (RPM):
            <input
              type="text"
              name="fr"
              value={dados.fr}
              onChange={handleChange} />
          </label>
        </div>

        {/* Pele Section */}
        <div className="section pele">
  <h3>Pele</h3>

  <div className="textura">
    <label>Textura:</label>
    <input type="checkbox" name="peleTexturaLisa" value="lisa" onChange={handleChange} /> Lisa
    <input type="checkbox" name="peleTexturaIrregular" value="irregular" onChange={handleChange} /> Irregular
  </div>

  <div className="sensacao">
    <label>Sensação ao Toque:</label>
    <input type="checkbox" name="peleSensacaoMacia" value="macia" onChange={handleChange} /> Macia
    <input type="checkbox" name="peleSensacaoAspera" value="aspera" onChange={handleChange} /> Áspera
  </div>

  <div className="cor">
    <label>Cor:</label>
    <input type="checkbox" name="peleCorRosea" value="rosea" onChange={handleChange} /> Rósea
    <input type="checkbox" name="peleCorPalida" value="palida" onChange={handleChange} /> Pálida
    <input type="checkbox" name="peleCorCianotica" value="cianotica" onChange={handleChange} /> Cianótica
    <input type="checkbox" name="peleCorIcterica" value="icterica" onChange={handleChange} /> Ictérica
  </div>

  <div className="hidratacao">
    <label>Hidratação:</label>
    <input type="radio" name="peleHidratacao" value="hidratada" onChange={handleChange} /> Hidratada
    <input type="radio" name="peleHidratacao" value="desidratada" onChange={handleChange} /> Desidratada
  </div>
</div>

<div className="section cabeca">
  <h3>Cabeça</h3>
  
  <div className="fontanelas">
    <p>Fontanelas:</p>
    <label><input type="radio" name="fontanelas" value="abauladas" onChange={handleChange} /> Abauladas</label>
    <label><input type="radio" name="fontanelas" value="deprimidas" onChange={handleChange} /> Deprimidas</label>
    <label><input type="radio" name="fontanelas" value="planas" onChange={handleChange} /> Planas</label>
  </div>

  <div className="linfonodosCervicais">
    <p>Linfonodos cervicais palpáveis:</p>
    <label><input type="radio" name="linfonodosCervicais" value="sim" onChange={handleChange} /> SIM</label>
    <div className="linfonodosCervicaisDetalhes" style={{ display: dados.linfonodosCervicais === "sim" ? "block" : "none" }}>
      <label><input type="checkbox" name="linfonodosCervicaisMovel" onChange={handleChange} /> Móvel</label>
      <label><input type="checkbox" name="linfonodosCervicaisFixo" onChange={handleChange} /> Fixo</label>
      <label><input type="checkbox" name="linfonodosCervicaisFibroblastico" onChange={handleChange} /> Fibrobástico</label>
      <label><input type="checkbox" name="linfonodosCervicaisAmolecido" onChange={handleChange} /> Amolecido</label>
      <label><input type="checkbox" name="linfonodosCervicaisEndurecido" onChange={handleChange} /> Endurecido</label>
    </div>
    <label><input type="radio" name="linfonodosCervicais" value="nao" onChange={handleChange} /> NÃO</label>
  </div>

  <div className="olhos">
    <p>Olhos:</p>
    <label>Secreção:<input type="radio" name="olhosSecrecao" value="sim" onChange={handleChange} /> Sim<input type="radio" name="olhosSecrecao" value="nao" onChange={handleChange} /> Não</label>
    <label>Estrabismo:<input type="radio" name="olhosEstrabismo" value="sim" onChange={handleChange} /> Sim<input type="radio" name="olhosEstrabismo" value="nao" onChange={handleChange} /> Não</label>
  </div>

  <div className="mucosa">
    <p>Mucosa:</p>
    <label><input type="checkbox" name="mucosaCorada" onChange={handleChange} /> Corada</label>
    <label><input type="checkbox" name="mucosaPalida" onChange={handleChange} /> Pálida</label>
    <label><input type="checkbox" name="mucosaCianotica" onChange={handleChange} /> Cianótica</label>
    <label><input type="checkbox" name="mucosaAcianotica" onChange={handleChange} /> Acianótica</label>
    <label><input type="checkbox" name="mucosaUmida" onChange={handleChange} /> Úmida</label>
    <label><input type="checkbox" name="mucosaSeca" onChange={handleChange} /> Seca</label>
  </div>

  <div className="nariz">
    <p>Nariz:</p>
    <label>Secreção:<input type="radio" name="narizSecrecao" value="sim" onChange={handleChange} /> Sim<input type="radio" name="narizSecrecao" value="nao" onChange={handleChange} /> Não</label>
    <label>Batimentos das asas do nariz:<input type="radio" name="narizBatimentos" value="sim" onChange={handleChange} /> Sim<input type="radio" name="narizBatimentos" value="nao" onChange={handleChange} /> Não</label>
    <label>Obstrução nasal:<input type="radio" name="narizObstrucao" value="sim" onChange={handleChange} /> Sim<input type="radio" name="narizObstrucao" value="nao" onChange={handleChange} /> Não</label>
  </div>

  <div className="ouvidos">
    <p>Orelhas/Ouvidos:</p>
    <label>Secreção:<input type="radio" name="ouvidosSecrecao" value="sim" onChange={handleChange} /> Sim<input type="radio" name="ouvidosSecrecao" value="nao" onChange={handleChange} /> Não</label>
    <label>Linfonodo retroauricular palpável:<input type="radio" name="linfonodoRetroauricular" value="sim" onChange={handleChange} /> Sim<input type="radio" name="linfonodoRetroauricular" value="nao" onChange={handleChange} /> Não</label>
    <div className="linfonodoRetroauricularDetalhes" style={{ display: dados.linfonodoRetroauricular === "sim" ? "block" : "none" }}>
      <label><input type="checkbox" name="linfonodoRetroauricularMovel" onChange={handleChange} /> Móvel</label>
      <label><input type="checkbox" name="linfonodoRetroauricularFixo" onChange={handleChange} /> Fixo</label>
      <label><input type="checkbox" name="linfonodoRetroauricularFibroblastico" onChange={handleChange} /> Fibrobástico</label>
      <label><input type="checkbox" name="linfonodoRetroauricularAmolecido" onChange={handleChange} /> Amolecido</label>
      <label><input type="checkbox" name="linfonodoRetroauricularEndurecido" onChange={handleChange} /> Endurecido</label>
    </div>
  </div>
</div>

<div className="section torax">
  <h3>Tórax</h3>
  <div className="ap">
    <label>AP - Tiragem:</label>
    <input type="checkbox" name="apTiragem" onChange={handleChange} /> Presente
  </div>

  <div className="ac">
    <label>AC - Bulhas cardíacas:</label>
    <input type="radio" name="acBulhas" value="semSopro" onChange={handleChange} /> Sem Sopro
    <input type="radio" name="acBulhas" value="comSopro" onChange={handleChange} /> Com Sopro
  </div>
</div>
<div className="section abdomen">
  <h3>Abdome</h3>
  <label>Dilatado:</label>
  <input type="checkbox" name="abdomenDilatado" onChange={handleChange} /> Presente

  <label>Escavado:</label>
  <input type="checkbox" name="abdomenEscavado" onChange={handleChange} /> Presente

  <label>Globoso:</label>
  <input type="checkbox" name="abdomenGloboso" onChange={handleChange} /> Presente

  <label>Hérnia umbilical:</label>
  <input type="radio" name="herniaUmbilical" value="sim" onChange={handleChange} /> Sim
  <input type="radio" name="herniaUmbilical" value="nao" onChange={handleChange} /> Não
</div>
<div className="section genitalia">
  <h3>Genitália</h3>

  {/* Genitália Feminina */}
  <div className="genitaliaFeminina">
    <h4>Feminina</h4>
    <label><input type="radio" name="genitaliaFemininaLabios" value="sim" onChange={handleChange} /> Pequenos lábios e clitóris proeminentes: Sim</label>
    <label><input type="radio" name="genitaliaFemininaLabios" value="nao" onChange={handleChange} /> Não</label>

    <label><input type="radio" name="genitaliaFemininaSecrecao" value="sim" onChange={handleChange} /> Secreção: Sim</label>
    <label><input type="radio" name="genitaliaFemininaSecrecao" value="nao" onChange={handleChange} /> Não</label>

    <label><input type="radio" name="genitaliaFemininaSinequia" value="sim" onChange={handleChange} /> Sinéquia: Sim</label>
    <label><input type="radio" name="genitaliaFemininaSinequia" value="nao" onChange={handleChange} /> Não</label>

    <label><input type="radio" name="genitaliaFemininaHerniaInguinal" value="sim" onChange={handleChange} /> Hérnia inguinal: Sim</label>
    <label><input type="radio" name="genitaliaFemininaHerniaInguinal" value="nao" onChange={handleChange} /> Não</label>
  </div>

  {/* Genitália Masculina */}
  <div className="genitaliaMasculina">
    <h4>Masculina</h4>
    <label><input type="radio" name="genitaliaMasculinaHerniaInguinal" value="sim" onChange={handleChange} /> Hérnia inguinal: Sim</label>
    <label><input type="radio" name="genitaliaMasculinaHerniaInguinal" value="nao" onChange={handleChange} /> Não</label>

    <label><input type="radio" name="genitaliaMasculinaHidrocele" value="sim" onChange={handleChange} /> Hidrocele: Sim</label>
    <label><input type="radio" name="genitaliaMasculinaHidrocele" value="nao" onChange={handleChange} /> Não</label>

    <label><input type="radio" name="genitaliaMasculinaFimose" value="sim" onChange={handleChange} /> Fimose fisiológica: Sim</label>
    <label><input type="radio" name="genitaliaMasculinaFimose" value="nao" onChange={handleChange} /> Não</label>

    
  </div>
</div>


{/* Orifício Anal */}
<div className="section orificioAnal">
  <h3>Orifício Anal</h3>
  <label>Anomalias:</label>
  <input type="radio" name="orificioAnalAnomalias" value="sim" onChange={handleChange} /> Sim
  <input type="radio" name="orificioAnalAnomalias" value="nao" onChange={handleChange} /> Não

  <label>Fissuras:</label>
  <input type="radio" name="orificioAnalFissuras" value="sim" onChange={handleChange} /> Sim
  <input type="radio" name="orificioAnalFissuras" value="nao" onChange={handleChange} /> Não

  <label>Assaduras:</label>
  <input type="radio" name="orificioAnalAssaduras" value="sim" onChange={handleChange} /> Sim
  <input type="radio" name="orificioAnalAssaduras" value="nao" onChange={handleChange} /> Não
  </div>
  <div className="section marcosDesenvolvimento">
  <h3>Marcos do Desenvolvimento</h3>

  <div className="pernasBracosFletidos">
    <label>Pernas e braços fletidos, cabeça lateralizada:</label>
    <input type="radio" name="pernasBracosFletidos" value="presente" onChange={handleChange} /> Presente
    <input type="radio" name="pernasBracosFletidos" value="ausente" onChange={handleChange} /> Ausente
    <input type="radio" name="pernasBracosFletidos" value="naoVerificado" onChange={handleChange} /> Não verificado
  </div>

  <div className="observaRosto">
    <label>Observa um rosto:</label>
    <input type="radio" name="observaRosto" value="presente" onChange={handleChange} /> Presente
    <input type="radio" name="observaRosto" value="ausente" onChange={handleChange} /> Ausente
    <input type="radio" name="observaRosto" value="naoVerificado" onChange={handleChange} /> Não verificado
  </div>

  <div className="reageAoSom">
    <label>Reage ao som:</label>
    <input type="radio" name="reageAoSom" value="presente" onChange={handleChange} /> Presente
    <input type="radio" name="reageAoSom" value="ausente" onChange={handleChange} /> Ausente
    <input type="radio" name="reageAoSom" value="naoVerificado" onChange={handleChange} /> Não verificado
  </div>

  <div className="elevaCabeca">
    <label>Eleva a cabeça:</label>
    <input type="radio" name="elevaCabeca" value="presente" onChange={handleChange} /> Presente
    <input type="radio" name="elevaCabeca" value="ausente" onChange={handleChange} /> Ausente
    <input type="radio" name="elevaCabeca" value="naoVerificado" onChange={handleChange} /> Não verificado
    <button className="copiar" type="submit">
            Copiar
          </button>
        </div>
      </div>
</div>
</form>
  );
}

export default Formulario;
