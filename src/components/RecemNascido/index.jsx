import React, { useState } from "react";
import toolNurseImage from "../../assets/toolNurse.jpg";
import Menu from "../Menu";

const formData = new FormData();

function FormularioH() {
  const [dados, setDados] = useState({
    peso: "",
    estatura: "",
    pc: "",
    temperatura: "",
    fr: "",
    estadoGeral: "Ativo",
    estadoPele: "Lisa",
    krammerZone: "1",
    milliumSebaceo: "Nao",
    hemangioma: "Nao",
    manchaMongolica: "Nao",
    eritemaToxico: "Nao",
    fontenelas: "Abauladas",
    bossa: "Nao",
    cefalohematoma: "Nao",
    linfonodosCervicais: "Nao",
    faceSimetria: "Simetrica",
    aparenciaSindromica: "Nao",
    malformacaoFace: "Nao",
    olhosSimetria: "Simetricos",
    olhosSecrecao: "Nao",
    olhosEstrabismo: "Nao",
    esclera: "Anicterica",
    pupilas: "Isocoricas",
    narizSecrecao: "Nao",
    narizBatimentos: "Nao",
    narizObstrucao: "Nao",
    palatoIntegro: "Sim",
    fendaLabial: "Nao",
    tamanhoLingua: "Normal",
    freioLingual: "Normal",
    mucosaCor: "Corada",
    mucosaPalida: "Nao",
    mucosaIcterica: "Nao",
    mucosaCianotica: "Nao",
    mucosaAcianotica: "Nao",
    mucosaUmida: "Nao",
    mucosaSeca: "Nao",
    ouvidosSecrecao: "Nao",
    linfonodoRetroauricular: "Nao",
    torcicoloCongenito: "Nao",
    toraxSimetria: "Simetrico",
    toraxDeformidades: "Nao",
    linfonodoSupraclavicular: "Nao",
    linfonodoAxilar: "Nao",
    brotoMamario: "Nao",
    auscultaPulmonarTiragem: "Nao",
    auscultaPulmonarRetracao: "Nao",
    auscultaPulmonarGemidos: "Nao",
    auscultaPulmonarEstridor: "Nao",
    auscultaPulmonarSinaisEsforco: "Nao",
    auscultaCardiacaSopro: "Nao",
    abdomenDilatado: "Nao",
    abdomenEscavado: "Nao",
    abdomenGloboso: "Nao",
    herniaUmbilical: "Nao",
    ruidosHidroaereos: "Nao",
    cotoUmbilical: "Nao",
    cotoUmbilicalSecrecao: "Nao",
    cotoUmbilicalHiperemia: "Nao",
    cotoUmbilicalOdor: "Nao",
    cotoUmbilicalGranuloma: "Nao",
    cotoUmbilicalDorPalpacao: "Nao",
    membrosSuperioresDeformidades: "Nao",
    membrosSuperioresMalformacao: "Nao",
    membrosSuperioresLinhaPalmar: "Nao",
    membrosInferioresDeformidades: "Nao",
    membrosInferioresMalformacao: "Nao",
    membrosInferioresPeTorto: "Nao",
    membrosInferioresPolidactilia: "Nao",
    genitaliaFemininaLabiosClitoris: "Nao",
    genitaliaFemininaSecrecao: "Nao",
    genitaliaFemininaSinequia: "Nao",
    genitaliaFemininaHerniaInguinal: "Nao",
    genitaliaMasculinaHerniaInguinal: "Nao",
    genitaliaMasculinaHidrocele: "Nao",
    genitaliaMasculinaFimoseFisiologica: "Nao",
    genitaliaMasculinaTesticulos: "Nao",
    genitaliaMasculinaMeatoUrinario: "Nao",
    genitaliaMasculinaOrificioVisualizado: "Nao",
    genitaliaMasculinaHipospadia: "Nao",
    genitaliaMasculinaEpispadia: "Nao",
    orificioAnalAnomalias: "Nao",
    orificioAnalFissuras: "Nao",
    orificioAnalAssaduras: "Nao",
    reflexoBusca: "Nao",
    reflexoSuccao: "Nao",
    reflexoMoro: "Nao",
    reflexoBabinski: "Nao",
    reflexoPreensaoPalmar: "Nao",
    reflexoPreensaoPlantar: "Nao",
    reflexoMarcha: "Nao",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const textData = Object.entries(dados)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    navigator.clipboard
      .writeText(textData)
      .then(() => {
        alert(
          "Dados copiados com sucesso! Cole-os em um editor de texto para impressão."
        );
      })
      .catch((error) => {
        console.error("Erro ao copiar os dados:", error);
        alert(
          "Ocorreu um erro ao copiar os dados. Por favor, tente novamente."
        );
      });
  };

  return (
    <form method="post" id="dados" onSubmit={handleSubmit}>
      <div className="cabecalho">
        <img className="img" src={toolNurseImage} alt="" />
      </div>
      <hr className="hr" />
      <div className="tudo">
        <div className="h2Box">
          <h2 className="h2">Idade</h2>
          <Menu />
        </div>
        <hr className="hr" />
        <div>
          <h2 className="anamnase"> EXAME FÍSICO </h2>
          <p className="p">Questões a serem respondidas</p>
        </div>
        <div>
          <fieldset className="identificacao">
            <h2>Identificação do Recém Nascido</h2>
            <div className="boxm">
              <div className="box1">
                <input
                  name="ID"
                  value={formData.ID}
                  hidden
                  onChange={handleChange}
                />
                <label> Peso (Kg):</label>
                <input
                  type="number"
                  step="0.0010"
                  size="4"
                  maxLength="4"
                  min="0"
                  max="15"
                  name="peso"
                  value={dados.peso}
                  onChange={handleChange}
                />
                <label> Estatura (cm):</label>
                <input
                  type="number"
                  step="0.1"
                  size="3"
                  maxLength="3"
                  min="0"
                  max="150"
                  name="estatura"
                  value={dados.estatura}
                  onChange={handleChange}
                />
                <label> PC (cm):</label>
                <input
                  type="number"
                  step="0.1"
                  size="3"
                  maxLength="3"
                  min="0"
                  max="150"
                  name="pc"
                  value={dados.pc}
                  onChange={handleChange}
                />
              </div>
              <div className="box2">
                <label> Temp. Axilar (°C):</label>
                <input
                  className="tem"
                  type="number"
                  step="0.1"
                  size="3"
                  maxLength="3"
                  min="0"
                  max="50"
                  name="tempaux"
                  value={dados.tempaux}
                  onChange={handleChange}
                />
                <label className="fr"> FR (rpm):</label>
                <input
                  type="number"
                  step="1"
                  size="3"
                  maxLength="3"
                  min="0"
                  max="200"
                  name="fr"
                  value={dados.fr}
                  onChange={handleChange}
                />
              </div>
              <div className="identAll">
                <div className="geral">
                  <label>Estado Geral:</label>
                  <input
                    type="radio"
                    name="estgeral"
                    value="Ativo"
                    checked={dados.estgeral === "Ativo"}
                    onChange={handleChange}
                  />
                  <label>Ativo</label>
                  <input
                    type="radio"
                    name="estgeral"
                    value="Hipoativo"
                    checked={dados.estgeral === "Hipoativo"}
                    onChange={handleChange}
                  />
                  <label>Hipoativo</label>
                  <input
                    type="radio"
                    name="estgeral"
                    value="Letargico"
                    checked={dados.estgeral === "Letargico"}
                    onChange={handleChange}
                  />
                  <label>Letárgico</label>
                  <input
                    type="radio"
                    name="estgeral"
                    value="Calmo"
                    checked={dados.estgeral === "Calmo"}
                    onChange={handleChange}
                  />
                  <label>Calmo</label>
                  <input
                    type="radio"
                    name="estgeral"
                    value="Choroso"
                    checked={dados.estgeral === "Choroso"}
                    onChange={handleChange}
                  />
                  <label>Choroso</label>
                </div>
              </div>

              <div className="pele">
                <label>Estado da Pele:</label>
                <input
                  type="radio"
                  name="estpele"
                  value="Lisa"
                  checked={dados.estpele === "Lisa"}
                  onChange={handleChange}
                />
                <label>Lisa</label>
                <input
                  type="radio"
                  name="estpele"
                  value="Irregular"
                  checked={dados.estpele === "Irregular"}
                  onChange={handleChange}
                />
                <label>Irregular</label>
                <input
                  type="radio"
                  name="estpele"
                  value="Macia"
                  checked={dados.estpele === "Macia"}
                  onChange={handleChange}
                />
                <label>Macia</label>
                <input
                  type="radio"
                  name="estpele"
                  value="Áspera"
                  checked={dados.estpele === "Áspera"}
                  onChange={handleChange}
                />
                <label>Áspera</label>
                <input
                  type="radio"
                  name="estpele"
                  value="Rósea"
                  checked={dados.estpele === "Rósea"}
                  onChange={handleChange}
                />
                <label>Rósea</label>
                <input
                  type="radio"
                  name="estpele"
                  value="Pálida"
                  checked={dados.estpele === "Pálida"}
                  onChange={handleChange}
                />
                <label>Pálida</label>
                <input
                  type="radio"
                  name="estpele"
                  value="Cianótica"
                  checked={dados.estpele === "Cianótica"}
                  onChange={handleChange}
                />
                <label>Cianótica</label>
                <input
                  type="radio"
                  name="estpele"
                  value="Ictérica"
                  checked={dados.estpele === "Ictérica"}
                  onChange={handleChange}
                />
                <label>Ictérica</label>
                <input
                  type="radio"
                  name="estpele"
                  value="Hidrata"
                  checked={dados.estpele === "Hidrata"}
                  onChange={handleChange}
                />
                <label>Hidrata</label>
                <input
                  type="radio"
                  name="estpele"
                  value="Desidratada"
                  checked={dados.estpele === "Desidratada"}
                  onChange={handleChange}
                />
                <label>Desidratada</label>
              </div>

              <div className="krammer">
                <label>Krammer:</label>
                <input
                  type="radio"
                  name="krammer"
                  value="1"
                  checked={dados.krammer === "1"}
                  onChange={handleChange}
                />
                <label>1</label>
                <input
                  type="radio"
                  name="krammer"
                  value="2"
                  checked={dados.krammer === "2"}
                  onChange={handleChange}
                />
                <label>2</label>
                <input
                  type="radio"
                  name="krammer"
                  value="3"
                  checked={dados.krammer === "3"}
                  onChange={handleChange}
                />
                <label>3</label>
                <input
                  type="radio"
                  name="krammer"
                  value="4"
                  checked={dados.krammer === "4"}
                  onChange={handleChange}
                />
                <label>4</label>
                <input
                  type="radio"
                  name="krammer"
                  value="5"
                  checked={dados.krammer === "5"}
                  onChange={handleChange}
                />
                <label>5</label>
              </div>

              <div className="millium">
                <label>Millium sebáceo:</label>
                <input
                  type="radio"
                  name="millium"
                  value="nao"
                  checked={dados.millium === "nao"}
                  onChange={handleChange}
                />
                <label>Não</label>
                <input
                  type="radio"
                  name="millium"
                  value="sim"
                  checked={dados.millium === "sim"}
                  onChange={handleChange}
                />
                <label>Sim</label>
              </div>
              <div className="hemangioma">
                <label>Hemangioma:</label>
                <input
                  type="radio"
                  name="hemangioma"
                  value="nao"
                  checked={dados.hemangioma === "nao"}
                  onChange={handleChange}
                />
                <label>Não</label>
                <input
                  type="radio"
                  name="hemangioma"
                  value="sim"
                  checked={dados.hemangioma === "sim"}
                  onChange={handleChange}
                />
                <label>Sim</label>
              </div>
              <div className="manchas">
                <label>Mancha Mongólica:</label>
                <input
                  type="radio"
                  name="mancham"
                  value="nao"
                  checked={dados.mancham === "nao"}
                  onChange={handleChange}
                />
                <label>Não</label>
                <input
                  type="radio"
                  name="mancham"
                  value="sim"
                  checked={dados.mancham === "sim"}
                  onChange={handleChange}
                />
                <label>Sim</label>
              </div>
              <div className="eritema">
                <label>Eritema Tóxico:</label>
                <input
                  type="radio"
                  name="eritema"
                  value="nao"
                  checked={dados.eritema === "nao"}
                  onChange={handleChange}
                />
                <label>Não</label>
                <input
                  type="radio"
                  name="eritema"
                  value="sim"
                  checked={dados.eritema === "sim"}
                  onChange={handleChange}
                />
                <label>Sim</label>
              </div>
            </div>
          </fieldset>
          <hr className="hr" />
          <fieldset className="exameFisicoa">
            <h2>Exame Físico</h2>
            <div className="face">
              <h3>Face</h3>
              <br />
              <div className="simetriaFace">
                <label>Simetria:</label>
                <label>
                  <input
                    type="radio"
                    name="simetriaFace"
                    value="simetrica"
                    checked={dados.simetriaFace === "simetrica"}
                    onChange={handleChange}
                  />
                  Simétrica
                </label>
                <label>
                  <input
                    type="radio"
                    name="simetriaFace"
                    value="assimetrica"
                    checked={dados.simetriaFace === "assimetrica"}
                    onChange={handleChange}
                  />
                  Assimétrica
                </label>
              </div>

              <div className="malformacaoFace">
                <label>Malformação:</label>
                <label>
                  <input
                    type="radio"
                    name="malformacaoFace"
                    value="sim"
                    checked={dados.malformacaoFace === "sim"}
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="malformacaoFace"
                    value="nao"
                    checked={dados.malformacaoFace === "nao"}
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="deformidadesFace">
                <label>Deformidades:</label>
                <label>
                  <input
                    type="radio"
                    name="deformidadesFace"
                    value="sim"
                    checked={dados.deformidadesFace === "sim"}
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="deformidadesFace"
                    value="nao"
                    checked={dados.deformidadesFace === "nao"}
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="aparenciaSindromica">
                <label>Aparência sindrômica:</label>
                <label>
                  <input
                    type="radio"
                    name="aparenciaSindromica"
                    value="sim"
                    checked={dados.aparenciaSindromica === "sim"}
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="aparenciaSindromica"
                    value="nao"
                    checked={dados.aparenciaSindromica === "nao"}
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>
            </div>

            <div className="olhos">
              <h3>Olhos</h3>
              <br />
              <div className="simetriaOlhos">
                <label>Simetria:</label>
                <label>
                  <input
                    type="radio"
                    name="simetriaOlhos"
                    value="simetricos"
                    checked={dados.simetriaOlhos === "simetricos"}
                    onChange={handleChange}
                  />
                  Simétricos
                </label>
                <label>
                  <input
                    type="radio"
                    name="simetriaOlhos"
                    value="assimetricos"
                    checked={dados.simetriaOlhos === "assimetricos"}
                    onChange={handleChange}
                  />
                  Assimétricos
                </label>
              </div>

              <div className="secrecaoOlhos">
                <label>Secreção:</label>
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
                    value="nao"
                    checked={dados.secrecaoOlhos === "nao"}
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="estrabismo">
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
                    value="nao"
                    checked={dados.estrabismo === "nao"}
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="esclera">
                <label>Esclera:</label>
                <label>
                  <input
                    type="radio"
                    name="esclera"
                    value="icterica"
                    checked={dados.esclera === "icterica"}
                    onChange={handleChange}
                  />
                  Ictérica
                </label>
                <label>
                  <input
                    type="radio"
                    name="esclera"
                    value="anicterica"
                    checked={dados.esclera === "anicterica"}
                    onChange={handleChange}
                  />
                  Anictérica
                </label>
              </div>

              <div className="pupilas">
                <label>Pupilas:</label>
                <label>
                  <input
                    type="radio"
                    name="pupilas"
                    value="anisocoricas"
                    checked={dados.pupilas === "anisocoricas"}
                    onChange={handleChange}
                  />
                  Anisocóricas
                </label>
                <label>
                  <input
                    type="radio"
                    name="pupilas"
                    value="isocoricas"
                    checked={dados.pupilas === "isocoricas"}
                    onChange={handleChange}
                  />
                  Isocóricas
                </label>
              </div>
            </div>

            <div className="nariz">
              <h3>Nariz</h3>
              <br />
              <div className="secrecaoNariz">
                <label>Secreção:</label>
                <label>
                  <input
                    type="radio"
                    name="secrecaoNariz"
                    value="sim"
                    checked={dados.secrecaoNariz === "sim"}
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="secrecaoNariz"
                    value="nao"
                    checked={dados.secrecaoNariz === "nao"}
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="batimentosNariz">
                <label>Batimentos das asas do nariz:</label>
                <label>
                  <input
                    type="radio"
                    name="batimentosNariz"
                    value="sim"
                    checked={dados.batimentosNariz === "sim"}
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="batimentosNariz"
                    value="nao"
                    checked={dados.batimentosNariz === "nao"}
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="obstrucaoNariz">
                <label>Obstrução nasal:</label>
                <label>
                  <input
                    type="radio"
                    name="obstrucaoNariz"
                    value="sim"
                    checked={dados.obstrucaoNariz === "sim"}
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="obstrucaoNariz"
                    value="nao"
                    checked={dados.obstrucaoNariz === "nao"}
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>
            </div>

            <div className="boca">
              <h3>Boca</h3>
              <br />
              <div className="palatoIntegro">
                <label>Palato íntegro:</label>
                <label>
                  <input
                    type="radio"
                    name="palatoIntegro"
                    value="sim"
                    checked={dados.palatoIntegro === "sim"}
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="palatoIntegro"
                    value="nao"
                    checked={dados.palatoIntegro === "nao"}
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="fendaLabial">
                <label>Fenda labial:</label>
                <label>
                  <input
                    type="radio"
                    name="fendaLabial"
                    value="sim"
                    checked={dados.fendaLabial === "sim"}
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="fendaLabial"
                    value="nao"
                    checked={dados.fendaLabial === "nao"}
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="tamanhoLingua">
                <label>Tamanho da língua:</label>
                <label>
                  <input
                    type="radio"
                    name="tamanhoLingua"
                    value="normal"
                    checked={dados.tamanhoLingua === "normal"}
                    onChange={handleChange}
                  />
                  Normal
                </label>
                <label>
                  <input
                    type="radio"
                    name="tamanhoLingua"
                    value="macroglossia"
                    checked={dados.tamanhoLingua === "macroglossia"}
                    onChange={handleChange}
                  />
                  Macroglossia
                </label>
              </div>

              <div className="freioLingual">
                <label>Freio lingual:</label>
                <label>
                  <input
                    type="radio"
                    name="freioLingual"
                    value="normal"
                    checked={dados.freioLingual === "normal"}
                    onChange={handleChange}
                  />
                  Normal
                </label>
                <label>
                  <input
                    type="radio"
                    name="freioLingual"
                    value="curto"
                    checked={dados.freioLingual === "curto"}
                    onChange={handleChange}
                  />
                  Curto
                </label>
              </div>

              <div className="mucosa">
                <label>Mucosa:</label>
                <label>
                  <input
                    type="radio"
                    name="mucosaCor"
                    value="corada"
                    checked={dados.mucosaCor === "corada"}
                    onChange={handleChange}
                  />
                  Corada
                </label>
                <label>
                  <input
                    type="radio"
                    name="mucosaCor"
                    value="palida"
                    checked={dados.mucosaCor === "palida"}
                    onChange={handleChange}
                  />
                  Pálida
                </label>
                <label>
                  <input
                    type="radio"
                    name="mucosaCor"
                    value="icterica"
                    checked={dados.mucosaCor === "icterica"}
                    onChange={handleChange}
                  />
                  Ictérica
                </label>
                <label>
                  <input
                    type="radio"
                    name="mucosaCor"
                    value="anictericas"
                    checked={dados.mucosaCor === "anictericas"}
                    onChange={handleChange}
                  />
                  Anictéricas
                </label>
                <label>
                  <input
                    type="radio"
                    name="mucosaCor"
                    value="cianoticas"
                    checked={dados.mucosaCor === "cianoticas"}
                    onChange={handleChange}
                  />
                  Cianóticas
                </label>
                <label>
                  <input
                    type="radio"
                    name="mucosaCor"
                    value="acianoticas"
                    checked={dados.mucosaCor === "acianoticas"}
                    onChange={handleChange}
                  />
                  Acianóticas
                </label>
              </div>

              <div className="mucosaHidratacao">
                <label>Hidratação:</label>
                <label>
                  <input
                    type="radio"
                    name="mucosaHidratacao"
                    value="umida"
                    checked={dados.mucosaHidratacao === "umida"}
                    onChange={handleChange}
                  />
                  Úmida
                </label>
                <label>
                  <input
                    type="radio"
                    name="mucosaHidratacao"
                    value="seca"
                    checked={dados.mucosaHidratacao === "seca"}
                    onChange={handleChange}
                  />
                  Seca
                </label>
              </div>
            </div>
            <div className="orelhas-ouvidos">
              <label>Orelhas/ouvidos:</label>
              <br />
              <label>
                <input
                  type="radio"
                  name="secrecaoOrelhas"
                  value="sim"
                  checked={dados.secrecaoOrelhas === "sim"}
                  onChange={handleChange}
                />
                Secreção: Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="secrecaoOrelhas"
                  value="nao"
                  checked={dados.secrecaoOrelhas === "nao"}
                  onChange={handleChange}
                />
                Secreção: Não
              </label>
              <br />

              <label>
                <input
                  type="radio"
                  name="linfonodoRetroauricular"
                  value="sim"
                  checked={dados.linfonodoRetroauricular === "sim"}
                  onChange={handleChange}
                />
                Linfonodo Retroauricular Palpável: Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="linfonodoRetroauricular"
                  value="nao"
                  checked={dados.linfonodoRetroauricular === "nao"}
                  onChange={handleChange}
                />
                Linfonodo Retroauricular Palpável: Não
              </label>
              <br />

              <label>
                <input
                  type="radio"
                  name="movelOrelhas"
                  value="sim"
                  checked={dados.movelOrelhas === "sim"}
                  onChange={handleChange}
                />
                Móvel
              </label>
              <label>
                <input
                  type="radio"
                  name="movelOrelhas"
                  value="nao"
                  checked={dados.movelOrelhas === "nao"}
                  onChange={handleChange}
                />
                Fixo
              </label>
              <br />

              <label>
                <input
                  type="radio"
                  name="fibroblasticoOrelhas"
                  value="amolecido"
                  checked={dados.fibroblasticoOrelhas === "amolecido"}
                  onChange={handleChange}
                />
                Fibroblástico: Amolecido
              </label>
              <label>
                <input
                  type="radio"
                  name="fibroblasticoOrelhas"
                  value="endurecido"
                  checked={dados.fibroblasticoOrelhas === "endurecido"}
                  onChange={handleChange}
                />
                Fibroblástico: Endurecido
              </label>
            </div>
          </fieldset>
          <hr className="hr" />
          <fieldset className="pescoco">
            <h3>Pescoço e Tórax</h3>
            <div className="torcicolo">
              <label>Torcicolo congênito:</label>
              <label>
                <input
                  type="radio"
                  name="torcicoloCongenito"
                  value="Sim"
                  onChange={handleChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="torcicoloCongenito"
                  value="Não"
                  checked
                  onChange={handleChange}
                />
                Não
              </label>
            </div>

            <div>
              <h5>Tórax:</h5>
              <div className="torax">
                <label>Simetria:</label>
                <label>
                  <input
                    type="radio"
                    name="toraxSimetria"
                    value="Assimétrico"
                    onChange={handleChange}
                  />
                  Assimétrico
                </label>
                <label>
                  <input
                    type="radio"
                    name="toraxSimetria"
                    value="Simétrico"
                    checked
                    onChange={handleChange}
                  />
                  Simétrico
                </label>
              </div>

              <div className="deformidades">
                <label>Deformidades:</label>
                <label>
                  <input
                    type="radio"
                    name="toraxDeformidades"
                    value="Sim"
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="toraxDeformidades"
                    value="Não"
                    checked
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>
            </div>

            <div className="palpeavel">
              <label>Linfonodo palpável supraclavicular:</label>
              <label>
                <input
                  type="radio"
                  name="linfonodoSupraclavicular"
                  value="Sim"
                  onChange={handleChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="linfonodoSupraclavicular"
                  value="Não"
                  checked
                  onChange={handleChange}
                />
                Não
              </label>
            </div>

            <div className="axilar">
              <label>Linfonodo palpável axilar:</label>
              <label>
                <input
                  type="radio"
                  name="linfonodoAxilar"
                  value="Sim"
                  onChange={handleChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="linfonodoAxilar"
                  value="Não"
                  checked
                  onChange={handleChange}
                />
                Não
              </label>
            </div>

            <div>
              <h5>Mamilos:</h5>
              <div className="mamilos">
                <label>Broto Mamário:</label>
                <label>
                  <input
                    type="radio"
                    name="brotoMamario"
                    value="Sim"
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="brotoMamario"
                    value="Não"
                    checked
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>
            </div>

            <div>
              <h5>Ausculta Pulmonar:</h5>
              <div className="pulmonar">
                <label>Tiragem:</label>
                <label>
                  <input
                    type="radio"
                    name="auscultaPulmonarTiragem"
                    value="Sim"
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="auscultaPulmonarTiragem"
                    value="Não"
                    checked
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="retracao">
                <label>Retração Xifoidiana:</label>
                <label>
                  <input
                    type="radio"
                    name="auscultaPulmonarRetração"
                    value="Sim"
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="auscultaPulmonarRetração"
                    value="Não"
                    checked
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="gemidos">
                <label>Gemidos:</label>
                <label>
                  <input
                    type="radio"
                    name="auscultaPulmonarGemidos"
                    value="Sim"
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="auscultaPulmonarGemidos"
                    value="Não"
                    checked
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="estridor">
                <label>Estridor:</label>
                <label>
                  <input
                    type="radio"
                    name="auscultaPulmonarEstridor"
                    value="Sim"
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="auscultaPulmonarEstridor"
                    value="Não"
                    checked
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="reforco">
                <label>Sinais de esforço respiratório:</label>
                <label>
                  <input
                    type="radio"
                    name="auscultaPulmonarSinaisEsforco"
                    value="Sim"
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="auscultaPulmonarSinaisEsforco"
                    value="Não"
                    checked
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>
            </div>

            <div className="asculta">
              <label>Ausculta Cardíaca:</label>
              <label>
                <input
                  type="radio"
                  name="auscultaCardiacaSopro"
                  value="Bulhas cardíacas"
                  onChange={handleChange}
                />
                Bulhas cardíacas
              </label>
              <label>
                <input
                  type="radio"
                  name="auscultaCardiacaSopro"
                  value="Com Sopro"
                  onChange={handleChange}
                />
                Com Sopro
              </label>
              <label>
                <input
                  type="radio"
                  name="auscultaCardiacaSopro"
                  value="Sem Sopro"
                  checked
                  onChange={handleChange}
                />
                Sem Sopro
              </label>
            </div>
          </fieldset>
          <hr className="hr" />
          <fieldset className="abdome">
            <h3>Abdome</h3>
            <div className="abs">
              <label>Abdome:</label>
              <label>
                <input
                  type="radio"
                  name="abdome"
                  value="Dilatado"
                  checked
                  onChange={handleChange}
                />
                Dilatado
              </label>
              <label>
                <input
                  type="radio"
                  name="abdome"
                  value="Escavado"
                  onChange={handleChange}
                />
                Escavado
              </label>
              <label>
                <input
                  type="radio"
                  name="abdome"
                  value="Globoso"
                  onChange={handleChange}
                />
                Globoso
              </label>
            </div>

            <div className="hernia">
              <label>Hérnia umbilical:</label>
              <label>
                <input
                  type="radio"
                  name="herniaUmbilical"
                  value="Sim"
                  onChange={handleChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="herniaUmbilical"
                  value="Não"
                  checked
                  onChange={handleChange}
                />
                Não
              </label>
            </div>

            <div className="ruidos">
              <label>Ruídos hidroaéreos:</label>
              <label>
                <input
                  type="radio"
                  name="ruidosHidroaereos"
                  value="Presentes"
                  onChange={handleChange}
                />
                Presentes
              </label>
              <label>
                <input
                  type="radio"
                  name="ruidosHidroaereos"
                  value="Ausentes"
                  checked
                  onChange={handleChange}
                />
                Ausentes
              </label>
            </div>

            <div className="coto">
              <label>Coto umbilical:</label>
              <label>
                <input
                  type="radio"
                  name="cotoUmbilical"
                  value="Desidratado"
                  onChange={handleChange}
                />
                Desidratado
              </label>
              <label>
                <input
                  type="radio"
                  name="cotoUmbilical"
                  value="Mumificado"
                  checked
                  onChange={handleChange}
                />
                Mumificado
              </label>
              <label>
                <input
                  type="radio"
                  name="cotoUmbilical"
                  value="Em Cicatrização"
                  onChange={handleChange}
                />
                Em Cicatrização
              </label>
            </div>

            <div className="secrecao">
              <label>Secreção:</label>
              <label>
                <input
                  type="radio"
                  name="secrecaoUmbilical"
                  value="Sim"
                  onChange={handleChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="secrecaoUmbilical"
                  value="Não"
                  checked
                  onChange={handleChange}
                />
                Não
              </label>
            </div>

            <div className="hiperemia">
              <label>Hiperemia:</label>
              <label>
                <input
                  type="radio"
                  name="hiperemiaUmbilical"
                  value="Sim"
                  onChange={handleChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="hiperemiaUmbilical"
                  value="Não"
                  checked
                  onChange={handleChange}
                />
                Não
              </label>
            </div>

            <div className="odor">
              <label>Odor:</label>
              <label>
                <input
                  type="radio"
                  name="odorUmbilical"
                  value="Sim"
                  onChange={handleChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="odorUmbilical"
                  value="Não"
                  checked
                  onChange={handleChange}
                />
                Não
              </label>
            </div>

            <div className="granuloma">
              <label>Granuloma:</label>
              <label>
                <input
                  type="radio"
                  name="granulomaUmbilical"
                  value="Sim"
                  onChange={handleChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="granulomaUmbilical"
                  value="Não"
                  checked
                  onChange={handleChange}
                />
                Não
              </label>
            </div>

            <div className="dorap">
              <label>Dor à palpação:</label>
              <label>
                <input
                  type="radio"
                  name="dorPalpacaoAbdome"
                  value="Sim"
                  onChange={handleChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="dorPalpacaoAbdome"
                  value="Não"
                  checked
                  onChange={handleChange}
                />
                Não
              </label>
            </div>
          </fieldset>
          <hr className="hr" />
          <fieldset className="membros">
            <h3>Membros</h3>

            <div className="membros-superiores">
              <h5>Membros Superiores:</h5>

              <div className="deformidadess">
                <label>Deformidades:</label>
                <label>
                  <input
                    type="radio"
                    name="deformidadesMS"
                    value="Sim"
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="deformidadesMS"
                    value="Não"
                    checked
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="malformacao">
                <label>Malformação:</label>
                <label>
                  <input
                    type="radio"
                    name="malformacaoMS"
                    value="Sim"
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="malformacaoMS"
                    value="Não"
                    checked
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="linha-palmar">
                <label>Linha Palmar:</label>
                <label>
                  <input
                    type="radio"
                    name="linhaPalmarMS"
                    value="Sim"
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="linhaPalmarMS"
                    value="Não"
                    checked
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>
            </div>

            <div className="membros-inferiores">
              <h5>Membros Inferiores:</h5>

              <div className="deformidades">
                <label>Deformidades:</label>
                <label>
                  <input
                    type="radio"
                    name="deformidadesMI"
                    value="Sim"
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="deformidadesMI"
                    value="Não"
                    checked
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="malformacao">
                <label>Malformação:</label>
                <label>
                  <input
                    type="radio"
                    name="malformacaoMI"
                    value="Sim"
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="malformacaoMI"
                    value="Não"
                    checked
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="pe-torto">
                <label>Pé Torto:</label>
                <label>
                  <input
                    type="radio"
                    name="peTortoMI"
                    value="Sim"
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="peTortoMI"
                    value="Não"
                    checked
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="polidactilia">
                <label>Polidactilia:</label>
                <label>
                  <input
                    type="radio"
                    name="polidactiliaMI"
                    value="Sim"
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="polidactiliaMI"
                    value="Não"
                    checked
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>
            </div>
          </fieldset>

          <hr className="hr" />
          <fieldset className="genitalia">
            <h3>Genitália</h3>

            <div className="genital-feminina">
              <h5>Feminina:</h5>

              <div className="pequenos-labios">
                <label>Pequenos lábios e clitóris proeminentes:</label>
                <label>
                  <input
                    type="radio"
                    name="gfLabios"
                    value="Sim"
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="gfLabios"
                    value="Não"
                    checked
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="secrecao">
                <label>Secreção:</label>
                <label>
                  <input
                    type="radio"
                    name="gfSecrecao"
                    value="Sim"
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="gfSecrecao"
                    value="Não"
                    checked
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="sinequia">
                <label>Sinéquia:</label>
                <label>
                  <input
                    type="radio"
                    name="gfSinequia"
                    value="Sim"
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="gfSinequia"
                    value="Não"
                    checked
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="hernia-inguinal">
                <label>Hérnia inguinal:</label>
                <label>
                  <input
                    type="radio"
                    name="gfHernia"
                    value="Sim"
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="gfHernia"
                    value="Não"
                    checked
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>
            </div>

            <div className="genital-masculina">
              <h5>Masculina:</h5>

              <div className="hernia-inguinal">
                <label>Hérnia inguinal:</label>
                <label>
                  <input
                    type="radio"
                    name="gmHernia"
                    value="Sim"
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="gmHernia"
                    value="Não"
                    checked
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="hidrocele">
                <label>Hidrocele:</label>
                <label>
                  <input
                    type="radio"
                    name="gmHidrocele"
                    value="Sim"
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="gmHidrocele"
                    value="Não"
                    checked
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="fimose">
                <label>Fimose fisiológica:</label>
                <label>
                  <input
                    type="radio"
                    name="gmFimose"
                    value="Sim"
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    name="gmFimose"
                    value="Não"
                    checked
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>

              <div className="testiculos">
                <label>Testículos:</label>
                <label>
                  <input
                    type="radio"
                    name="gmTesticulos"
                    value="Ectópicos"
                    onChange={handleChange}
                  />
                  Ectópicos
                </label>
                <label>
                  <input
                    type="radio"
                    name="gmTesticulos"
                    value="Criptorquidia"
                    checked
                    onChange={handleChange}
                  />
                  Criptorquidia
                </label>
              </div>

              <div className="meato-urinario">
                <label>Meato urinário:</label>
                <label>
                  <input
                    type="radio"
                    name="gmMeato"
                    value="Visualizado"
                    onChange={handleChange}
                  />
                  Visualizado
                </label>
                <label>
                  <input
                    type="radio"
                    name="gmMeato"
                    value="Não Visualizado"
                    checked
                    onChange={handleChange}
                  />
                  Não Visualizado
                </label>
                <label>
                  <input
                    type="radio"
                    name="gmMeato"
                    value="Hipospádia"
                    onChange={handleChange}
                  />
                  Hipospádia
                </label>
                <label>
                  <input
                    type="radio"
                    name="gmMeato"
                    value="Epispádia"
                    onChange={handleChange}
                  />
                  Epispádia
                </label>
              </div>
            </div>
          </fieldset>

          <hr className="hr" />
          <fieldset className="orificio">
            <h3>Orifício Anal</h3>

            <div className="anomalias">
              <label>Anomalias:</label>
              <label>
                <input
                  type="radio"
                  name="oaAnomalias"
                  value="Sim"
                  onChange={handleChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="oaAnomalias"
                  value="Não"
                  checked
                  onChange={handleChange}
                />
                Não
              </label>
            </div>

            <div className="fissuras">
              <label>Fissuras:</label>
              <label>
                <input
                  type="radio"
                  name="oaFissuras"
                  value="Sim"
                  onChange={handleChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="oaFissuras"
                  value="Não"
                  checked
                  onChange={handleChange}
                />
                Não
              </label>
            </div>

            <div className="assaduras">
              <label>Assaduras:</label>
              <label>
                <input
                  type="radio"
                  name="oaAssaduras"
                  value="Sim"
                  onChange={handleChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="oaAssaduras"
                  value="Não"
                  checked
                  onChange={handleChange}
                />
                Não
              </label>
            </div>
          </fieldset>

          <hr className="hr" />
          <fieldset>
            <h3>Reflexos</h3>
            <div className="reflexo">
              <label>Busca:</label>
              <label>
                <input
                  type="radio"
                  name="reflexoBusca"
                  value="Presente"
                  checked={dados.reflexoBusca === "Presente"}
                  onChange={handleChange}
                />
                Presente
              </label>
              <label>
                <input
                  type="radio"
                  name="reflexoBusca"
                  value="Ausente"
                  checked={dados.reflexoBusca === "Ausente"}
                  onChange={handleChange}
                />
                Ausente
              </label>
            </div>

            <div className="reflexo">
              <label>Sucção:</label>
              <label>
                <input
                  type="radio"
                  name="reflexoSuccao"
                  value="Presente"
                  checked={dados.reflexoSuccao === "Presente"}
                  onChange={handleChange}
                />
                Presente
              </label>
              <label>
                <input
                  type="radio"
                  name="reflexoSuccao"
                  value="Ausente"
                  checked={dados.reflexoSuccao === "Ausente"}
                  onChange={handleChange}
                />
                Ausente
              </label>
            </div>

            <div className="reflexo">
              <label>Moro:</label>
              <label>
                <input
                  type="radio"
                  name="reflexoMoro"
                  value="Presente"
                  checked={dados.reflexoMoro === "Presente"}
                  onChange={handleChange}
                />
                Presente
              </label>
              <label>
                <input
                  type="radio"
                  name="reflexoMoro"
                  value="Ausente"
                  checked={dados.reflexoMoro === "Ausente"}
                  onChange={handleChange}
                />
                Ausente
              </label>
            </div>

            <div className="reflexo">
              <label>Babinski:</label>
              <label>
                <input
                  type="radio"
                  name="reflexoBabinski"
                  value="Presente"
                  checked={dados.reflexoBabinski === "Presente"}
                  onChange={handleChange}
                />
                Presente
              </label>
              <label>
                <input
                  type="radio"
                  name="reflexoBabinski"
                  value="Ausente"
                  checked={dados.reflexoBabinski === "Ausente"}
                  onChange={handleChange}
                />
                Ausente
              </label>
            </div>

            <div className="reflexo">
              <label>Preensão Palmar:</label>
              <label>
                <input
                  type="radio"
                  name="reflexoPreensaoPalmar"
                  value="Presente"
                  checked={dados.reflexoPreensaoPalmar === "Presente"}
                  onChange={handleChange}
                />
                Presente
              </label>
              <label>
                <input
                  type="radio"
                  name="reflexoPreensaoPalmar"
                  value="Ausente"
                  checked={dados.reflexoPreensaoPalmar === "Ausente"}
                  onChange={handleChange}
                />
                Ausente
              </label>
            </div>

            <div className="reflexo">
              <label>Preensão Plantar:</label>
              <label>
                <input
                  type="radio"
                  name="reflexoPreensaoPlantar"
                  value="Presente"
                  checked={dados.reflexoPreensaoPlantar === "Presente"}
                  onChange={handleChange}
                />
                Presente
              </label>
              <label>
                <input
                  type="radio"
                  name="reflexoPreensaoPlantar"
                  value="Ausente"
                  checked={dados.reflexoPreensaoPlantar === "Ausente"}
                  onChange={handleChange}
                />
                Ausente
              </label>
            </div>

            <div className="reflexo">
              <label>Marcha:</label>
              <label>
                <input
                  type="radio"
                  name="reflexoMarcha"
                  value="Presente"
                  checked={dados.reflexoMarcha === "Presente"}
                  onChange={handleChange}
                />
                Presente
              </label>
              <label>
                <input
                  type="radio"
                  name="reflexoMarcha"
                  value="Ausente"
                  checked={dados.reflexoMarcha === "Ausente"}
                  onChange={handleChange}
                />
                Ausente
              </label>
            </div>
          </fieldset>
        </div>
        <button className="copiar" type="submit">
          Copiar
        </button>
      </div>
    </form>
  );
}

export default FormularioH;
