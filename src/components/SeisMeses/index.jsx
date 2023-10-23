import React, { useState } from "react";
import toolNurseImage from "../../assets/toolNurse.jpg";
import Menu from "../Menu";

const formData = new FormData();

function FormularioS() {
  const [dados, setDados] = useState({
    peso: "",
    estatura: "",
    pc: "",
    temperatura: "",
    fr: "",
    estadoGeral: "",
    estadoPele: "",
    krammerZone: "",
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
    reflexosBusca: "Não",
    reflexosSucção: "Não",
    reflexosMoro: "Não",
    reflexosBabinski: "Não",
    reflexosPreensaoPalmar: "Não",
    reflexosPreensaoPlantar: "Não",
    reflexosMarcha: "Não",
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
            <h2>Identificação da criança de 6 meses</h2>
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
                  value={formData.peso}
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
                  value={formData.estatura}
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
                  value={formData.pc}
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
                  value={formData.tempaux}
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
                  value={formData.fr}
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
                    checked={formData.estgeral === "Ativo"}
                    onChange={handleChange}
                  />
                  <label>Ativo</label>
                  <input
                    type="radio"
                    name="estgeral"
                    value="Outro"
                    checked={formData.estgeral === "Outro"}
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
                    checked={formData.estpele === "Lisa"}
                    onChange={handleChange}
                  />
                  <label>Lisa</label>
                  <input
                    type="radio"
                    name="estpele"
                    value="Outro"
                    checked={formData.estpele === "Outro"}
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
                    checked={formData.krammer === "1"}
                    onChange={handleChange}
                  />
                  <label>1</label>
                  <input
                    type="radio"
                    name="krammer"
                    value="2"
                    checked={formData.krammer === "2"}
                    onChange={handleChange}
                  />
                  <label>2</label>
                  <input
                    type="radio"
                    name="krammer"
                    value="3"
                    checked={formData.krammer === "3"}
                    onChange={handleChange}
                  />
                  <label>3</label>
                  <input
                    type="radio"
                    name="krammer"
                    value="4"
                    checked={formData.krammer === "4"}
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
                    checked={formData.millium === "nao"}
                    onChange={handleChange}
                  />
                  <label>Não</label>
                  <input
                    type="radio"
                    name="millium"
                    value="sim"
                    checked={formData.millium === "sim"}
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
                    checked={formData.hemangioma === "nao"}
                    onChange={handleChange}
                  />
                  <label>Não</label>
                  <input
                    type="radio"
                    name="hemangioma"
                    value="sim"
                    checked={formData.hemangioma === "sim"}
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
                    checked={formData.mancham === "nao"}
                    onChange={handleChange}
                  />
                  <label>Não</label>
                  <input
                    type="radio"
                    name="mancham"
                    value="sim"
                    checked={formData.mancham === "sim"}
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
                    checked={formData.eritema === "nao"}
                    onChange={handleChange}
                  />
                  <label>Não</label>
                  <input
                    type="radio"
                    name="eritema"
                    value="sim"
                    checked={formData.eritema === "sim"}
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
        </div>
        <button className="copiar" type="submit">
          Copiar
        </button>
      </div>
    </form>
  );
}

export default FormularioS;
