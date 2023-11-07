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
    milliumSebaceo: "Não",
    hemangioma: "Não",
    manchaMongolica: "Não",
    eritemaToxico: "Não",
    fontenelas: "Abauladas",
    bossa: "Não",
    cefalohematoma: "Não",
    linfonodosCervicais: "Não",
    faceSimetria: "Simétrica",
    aparenciaSindromica: "Não",
    malformacaoFace: "Não",
    olhosSimetria: "Simétricos",
    olhosSecrecao: "Não",
    olhosEstrabismo: "Não",
    esclera: "Anictérica",
    pupilas: "Isocóricas",
    narizSecrecao: "Não",
    narizBatimentos: "Não",
    narizObstrucao: "Não",
    palatoIntegro: "Sim",
    fendaLabial: "Não",
    tamanhoLingua: "Normal",
    freioLingual: "Normal",
    mucosaCor: "Corada",
    mucosaPálida: "Não",
    mucosaIctérica: "Não",
    mucosaCianótica: "Não",
    mucosaAcianótica: "Não",
    mucosaÚmida: "Não",
    mucosaSeca: "Não",
    ouvidosSecrecao: "Não",
    linfonodoRetroauricular: "Não",
    torcicoloCongenito: "Não",
    toraxSimetria: "Simétrico",
    toraxDeformidades: "Não",
    linfonodoSupraclavicular: "Não",
    linfonodoAxilar: "Não",
    brotoMamario: "Não",
    auscultaPulmonarTiragem: "Não",
    auscultaPulmonarRetração: "Não",
    auscultaPulmonarGemidos: "Não",
    auscultaPulmonarEstridor: "Não",
    auscultaPulmonarSinaisEsforco: "Não",
    auscultaCardiacaSopro: "Não",
    abdomenDilatado: "Não",
    abdomenEscavado: "Não",
    abdomenGloboso: "Não",
    herniaUmbilical: "Não",
    ruidosHidroaereos: "Não",
    cotoUmbilical: "Não",
    cotoUmbilicalSecrecao: "Não",
    cotoUmbilicalHiperemia: "Não",
    cotoUmbilicalOdor: "Não",
    cotoUmbilicalGranuloma: "Não",
    cotoUmbilicalDorPalpacao: "Não",
    membrosSuperioresDeformidades: "Não",
    membrosSuperioresMalformacao: "Não",
    membrosSuperioresLinhaPalmar: "Não",
    membrosInferioresDeformidades: "Não",
    membrosInferioresMalformacao: "Não",
    membrosInferioresPéTorto: "Não",
    membrosInferioresPolidactilia: "Não",
    genitaliaFemininaLábiosClitóris: "Não",
    genitaliaFemininaSecrecao: "Não",
    genitaliaFemininaSinequia: "Não",
    genitaliaFemininaHerniaInguinal: "Não",
    genitaliaMasculinaHerniaInguinal: "Não",
    genitaliaMasculinaHidrocele: "Não",
    genitaliaMasculinaFimoseFisiologica: "Não",
    genitaliaMasculinaTesticulos: "Não",
    genitaliaMasculinaMeatoUrinario: "Não",
    genitaliaMasculinaOrificioVisualizado: "Não",
    genitaliaMasculinaHipospadia: "Não",
    genitaliaMasculinaEpispadia: "Não",
    orificioAnalAnomalias: "Não",
    orificioAnalFissuras: "Não",
    orificioAnalAssaduras: "Não",
    reflexoBusca: "Não",
    reflexoSuccao: "Não",
    reflexoMoro: "Não",
    reflexoBabinski: "Não",
    reflexoPreensaoPalmar: "Não",
    reflexoPreensaoPlantar: "Não",
    reflexoMarcha: "Não",
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
          <Menu/>
        </div>
        <hr className="hr" />
        <div>
          <h2 className="anamnase">Anamnese</h2>
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
                <label className="fr"> FR (irpm):</label>
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
                    value="Outro"
                    checked={dados.estgeral === "Outro"}
                    onChange={handleChange}
                  />
                  <label>Outro</label>
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
                    value="Outro"
                    checked={dados.estpele === "Outro"}
                    onChange={handleChange}
                  />
                  <label>Outro</label>
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
                </div>
                <div className="millium">
                  <label>Millium:</label>
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
                  <label>Manchas Mongólicas:</label>
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
            </div>
          </fieldset>
          <hr className="hr" />
          <fieldset className="exameFisico">
            <h2>Exame Físico</h2>
            <div className="cabeca">
              <h3>Cabeça</h3>
              <br />
              <div className="fontenelas">
                <label>Fontenelas:</label>
                <label>
                  <input
                    type="radio"
                    name="fontenelas"
                    value="abauladas"
                    checked={dados.fontenelas === "abauladas"}
                    onChange={handleChange}
                  />
                  Abauladas
                </label>
                <label>
                  <input
                    type="radio"
                    name="fontenelas"
                    value="deprimidas"
                    checked={dados.fontenelas === "deprimidas"}
                    onChange={handleChange}
                  />
                  Deprimidas
                </label>
                <label>
                  <input
                    type="radio"
                    name="fontenelas"
                    value="planas"
                    checked={dados.fontenelas === "planas"}
                    onChange={handleChange}
                  />
                  Planas
                </label>
              </div>
            </div>

            <div className="bossa">
              <label>Bossa serossanguinolenta:</label>
              <label>
                <input
                  type="radio"
                  name="bossa"
                  value="sim"
                  checked={dados.bossa === "sim"}
                  onChange={handleChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="bossa"
                  value="nao"
                  checked={dados.bossa === "nao"}
                  onChange={handleChange}
                />
                Não
              </label>
            </div>

            <div className="cefalo">
              <label>Cefalohematoma:</label>
              <label>
                <input
                  type="radio"
                  name="cefalohematoma"
                  value="sim"
                  checked={dados.cefalohematoma === "sim"}
                  onChange={handleChange}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="cefalohematoma"
                  value="nao"
                  checked={dados.cefalohematoma === "nao"}
                  onChange={handleChange}
                />
                Não
              </label>
            </div>

            <div className="linfonodos">
              <label>Linfonodos cervicais palpáveis:</label>
              <label>
                <input
                  type="radio"
                  name="linfonodosCervicais"
                  value="movel"
                  checked={dados.linfonodosCervicais === "movel"}
                  onChange={handleChange}
                />
                Móvel
              </label>
              <label>
                <input
                  type="radio"
                  name="linfonodosCervicais"
                  value="fixo"
                  checked={dados.linfonodosCervicais === "fixo"}
                  onChange={handleChange}
                />
                Fixo
              </label>
              <label>
                <input
                  type="radio"
                  name="linfonodosCervicais"
                  value="fibrobastico"
                  checked={dados.linfonodosCervicais === "fibrobastico"}
                  onChange={handleChange}
                />
                Fibrobástico
              </label>
              <label>
                <input
                  type="radio"
                  name="linfonodosCervicais"
                  value="amolecido"
                  checked={dados.linfonodosCervicais === "amolecido"}
                  onChange={handleChange}
                />
                Amolecido
              </label>
              <label>
                <input
                  type="radio"
                  name="linfonodosCervicais"
                  value="endurecido"
                  checked={dados.linfonodosCervicais === "endurecido"}
                  onChange={handleChange}
                />
                Endurecido
              </label>
              <label>
                <input
                  type="radio"
                  name="linfonodosCervicais"
                  value="nao"
                  checked={dados.linfonodosCervicais === "nao"}
                  onChange={handleChange}
                />
                Não Apresenta
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
                <label>Meato Urinário:</label>
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
