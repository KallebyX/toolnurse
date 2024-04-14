import React, { useState } from "react";
import toolNurseImage from "../../assets/toolNurse.jpg";
import Menu from "../Menu";

function Formulario4a5Meses() {
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
    linfonodosCervicaisPalpaveis: '',
    secrecaoOlhos: '',
    olhosEstrabismo: '',
    mucosa: '',
    secrecaoOrelhas: '',
    linfonodoRetroauricular: '',
    tiragem: '',
    murmVesiculares: '',
    bulhasCardiacas: '',
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
    contatoSocial4m: '',
    seguraObjetos4m: '',
    emiteSons4m: '',
    apoiaBracos4m: '',
    buscaObjetos5m: '',
    levaBoca5m: '',
    localizaSom5m: '',
    mudaPosicao5m: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };

  const formatarDados = () => {
    return `**Avaliação de Desenvolvimento - 4 a 5 Meses**\n\n` +
      `**Peso:** ${dados.peso} Kg\n` +
      `**Estatura:** ${dados.estatura} cm\n` +
      `**PC:** ${dados.pc} cm\n` +
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
      `- Secreção: ${dados.secrecaoOlhos}\n` +
      `- Estrabismo: ${dados.estrabismo}\n\n` +
      `**Mucosa:** ${dados.mucosa}\n\n` +
      `**Orelhas:**\n` +
      `- Secreção: ${dados.secrecaoOrelhas}\n` +
      `- Linfonodo retroauricular palpável: ${dados.linfonodoRetroauricular}\n\n` +
      `**Tórax:**\n` +
      `- Tiragem: ${dados.tiragem}\n` +
      `- Murmúrios vesiculares: ${dados.murmVesiculares}\n` +
      `- Bulhas cardíacas: ${dados.bulhasCardiacas}\n\n` +
      `**Abdome:** ${dados.abdomen}\n` +
      `- Hérnia umbilical: ${dados.herniaUmbilical}\n\n` +
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
      `- Meato urinário: ${dados.meatoUrinario}\n\n` +
      `**Orifício Anal:**\n` +
      `- Anomalias: ${dados.anomaliasAnal}\n` +
      `- Fissuras: ${dados.fissuras}\n` +
      `- Assaduras: ${dados.assaduras}\n\n` +
      `**Marcos do Desenvolvimento - 4 meses:**\n` +
      `- Responde ativamente ao contato social: ${dados.contatoSocial4m}\n` +
      `- Segura objetos: ${dados.seguraObjetos4m}\n` +
      `- Emite sons, ri alto: ${dados.emiteSons4m}\n` +
      `- Levanta a cabeça e apoia-se nos antebraços, de bruços: ${dados.apoiaBracos4m}\n\n` +
      `**Marcos do Desenvolvimento - 5 meses:**\n` +
      `- Busca ativa de objetos: ${dados.buscaObjetos5m}\n` +
      `- Leva objetos à boca: ${dados.levaBoca5m}\n` +
      `- Localiza o som: ${dados.localizaSom5m}\n` +
      `- Muda de posição (rola): ${dados.mudaPosicao5m}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedData = formatarDados();
    navigator.clipboard.writeText(formattedData)
      .then(() => alert("Dados formatados copiados para a área de transferência!"))
      .catch((error) => console.error("Erro ao copiar os dados: ", error));
  };
  return (
    <form onSubmit={handleSubmit}>
       <div className="cabecalho">
        <img className="img" src={toolNurseImage} alt="Tool Nurse Logo" />
        <Menu />
      </div>
      <hr className="hr" />
<div className="tudo">
  <h3>Anamnese - 4 a 5 Meses</h3>
  <div>
  <div className="form-section">
    <label>Peso (Kg):</label>
    <input
      type="number"
      name="peso"
      value={dados.peso}
      onChange={handleChange}
    />
  </div>
  <div className="form-section">
    <label>Estatura (cm):</label>
    <input
      type="number"
      name="estatura"
      value={dados.estatura}
      onChange={handleChange}
    />
  </div>
  <div className="form-section">
    <label>PC (cm):</label>
    <input
      type="number"
      name="pc"
      value={dados.pc}
      onChange={handleChange}
    />
  </div>
  <div className="form-section">
    <label>Estado Geral:</label>
    <div>
      <input
        type="radio"
        name="estadoGeral"
        value="Ativo"
        checked={dados.estadoGeral === "Ativo"}
        onChange={handleChange}
      /> Ativo
      <input
        type="radio"
        name="estadoGeral"
        value="Hipoativo"
        checked={dados.estadoGeral === "Hipoativo"}
        onChange={handleChange}
      /> Hipoativo
      <input
        type="radio"
        name="estadoGeral"
        value="Letárgico"
        checked={dados.estadoGeral === "Letárgico"}
        onChange={handleChange}
      /> Letárgico
      {/* Outros estados */}
    </div>
  </div>
</div>
<div className="pele">
  <h3>Pele</h3>
  <div>
    <label>Textura:</label>
    <input
      type="radio"
      name="texturaPele"
      value="Lisa"
      checked={dados.texturaPele === "Lisa"}
      onChange={handleChange}
    /> Lisa
    <input
      type="radio"
      name="texturaPele"
      value="Irregular"
      checked={dados.texturaPele === "Irregular"}
      onChange={handleChange}
    /> Irregular
  </div>
  <div>
    <label>Sensação ao Toque:</label>
    <input
      type="radio"
      name="sensacaoPele"
      value="Macia"
      checked={dados.sensacaoPele === "Macia"}
      onChange={handleChange}
    /> Macia
    <input
      type="radio"
      name="sensacaoPele"
      value="Áspera"
      checked={dados.sensacaoPele === "Áspera"}
      onChange={handleChange}
    /> Áspera
  </div>
  <div>
    <label>Cor:</label>
    <input
      type="radio"
      name="corPele"
      value="Rósea"
      checked={dados.corPele === "Rósea"}
      onChange={handleChange}
    /> Rósea
    <input
      type="radio"
      name="corPele"
      value="Pálida"
      checked={dados.corPele === "Pálida"}
      onChange={handleChange}
    /> Pálida
    <input
      type="radio"
      name="corPele"
      value="Cianótica"
      checked={dados.corPele === "Cianótica"}
      onChange={handleChange}
    /> Cianótica
    <input
      type="radio"
      name="corPele"
      value="Ictérica"
      checked={dados.corPele === "Ictérica"}
      onChange={handleChange}
    /> Ictérica
  </div>
  <div>
    <label>Hidratação:</label>
    <input
      type="radio"
      name="hidratacaoPele"
      value="Hidratada"
      checked={dados.hidratacaoPele === "Hidratada"}
      onChange={handleChange}
    /> Hidratada
    <input
      type="radio"
      name="hidratacaoPele"
      value="Desidratada"
      checked={dados.hidratacaoPele === "Desidratada"}
      onChange={handleChange}
    /> Desidratada
  </div>
</div>

<div className="cabeca">
  <h3>Cabeça</h3>
  <div>
    <label>Fontanela Anterior:</label>
    <input type="radio" name="fontanelaAnterior" value="Abauladas" onChange={handleChange} /> Abauladas
    <input type="radio" name="fontanelaAnterior" value="Deprimidas" onChange={handleChange} /> Deprimidas
    <input type="radio" name="fontanelaAnterior" value="Planas" onChange={handleChange} /> Planas
  </div>
  <div>
    <label>Sem linfonodos cervicais palpáveis:</label>
    <input type="radio" name="semLinfonodosCervicais" value="Sim" onChange={handleChange} /> Sim
    <input type="radio" name="semLinfonodosCervicais" value="Não" onChange={handleChange} /> Não
  </div>
  <div>
    <label>Linfonodos cervicais palpáveis:</label>
    <input type="radio" name="linfonodosCervicaisPalpaveis" value="Sim" onChange={handleChange} /> Sim
    <input type="radio" name="linfonodosCervicaisPalpaveis" value="Não" onChange={handleChange} /> Não
  </div>
  <div>
    <label>Olhos - Secreção:</label>
    <input type="radio" name="olhosSecrecao" value="Sim" onChange={handleChange} /> Sim
    <input type="radio" name="olhosSecrecao" value="Não" onChange={handleChange} /> Não
  </div>
  <div>
    <label>Olhos - Estrabismo:</label>
    <input type="radio" name="olhosEstrabismo" value="Sim" onChange={handleChange} /> Sim
    <input type="radio" name="olhosEstrabismo" value="Não" onChange={handleChange} /> Não
  </div>
  <div>
    <label>Mucosa:</label>
    <input type="radio" name="mucosa" value="Corada" onChange={handleChange} /> Corada
    <input type="radio" name="mucosa" value="Pálida" onChange={handleChange} /> Pálida
    <input type="radio" name="mucosa" value="Úmida" onChange={handleChange} /> Úmida
    <input type="radio" name="mucosa" value="Seca" onChange={handleChange} /> Seca
  </div>
  <div>
    <label>Orelhas/Ouvidos - Secreção:</label>
    <input type="radio" name="ouvidosSecrecao" value="Sim" onChange={handleChange} /> Sim
    <input type="radio" name="ouvidosSecrecao" value="Não" onChange={handleChange} /> Não
  </div>
  <div>
    <label>Linfonodo retroauricular palpável:</label>
    <input type="radio" name="linfonodoRetroauricular" value="Sim" onChange={handleChange} /> Sim
    <input type="radio" name="linfonodoRetroauricular" value="Não" onChange={handleChange} /> Não
  </div>
</div>
<div className="torax">
  <h3>Tórax</h3>
  <div>
    <label>AP - Tiragem:</label>
    <input type="radio" name="apTiragem" value="Sim" onChange={handleChange} /> Sim
    <input type="radio" name="apTiragem" value="Não" onChange={handleChange} /> Não
  </div>
  <div>
    <label>AC - Bulhas cardíacas:</label>
    <input type="radio" name="acBulhasCardiacas" value="Sem Sopro" onChange={handleChange} /> Sem Sopro
    <input type="radio" name="acBulhasCardiacas" value="Com Sopro" onChange={handleChange} /> Com Sopro
  </div>
</div>

<div className="abdome">
  <h3>Abdome</h3>
  <div>
    <label>Estado:</label>
    <input type="radio" name="abdomeEstado" value="Plano" onChange={handleChange} /> Plano
    <input type="radio" name="abdomeEstado" value="Globoso" onChange={handleChange} /> Globoso
    <input type="radio" name="abdomeEstado" value="Rígido" onChange={handleChange} /> Rígido
    <input type="radio" name="abdomeEstado" value="Flácido" onChange={handleChange} /> Flácido
  </div>
  <div>
    <label>Hérnia umbilical:</label>
    <input type="radio" name="herniaUmbilical" value="Sim" onChange={handleChange} /> Sim
    <input type="radio" name="herniaUmbilical" value="Não" onChange={handleChange} /> Não
  </div>
</div>

<div className="genitalias">
  <h3>Genitália</h3>
  <h4>Feminina</h4>
  <div>
    <label>Pequenos lábios e clitóris proeminentes:</label>
    <input type="radio" name="femininaLabiosClitoris" value="Sim" onChange={handleChange} /> Sim
    <input type="radio" name="femininaLabiosClitoris" value="Não" onChange={handleChange} /> Não
  </div>
  <h4>Masculina</h4>
  <div>
    <label>Hérnia inguinal:</label>
    <input type="radio" name="masculinaHerniaInguinal" value="Sim" onChange={handleChange} /> Sim
    <input type="radio" name="masculinaHerniaInguinal" value="Não" onChange={handleChange} /> Não
  </div>
  <div>
    <label>Hidrocele:</label>
    <input type="radio" name="masculinaHidrocele" value="Sim" onChange={handleChange} /> Sim
    <input type="radio" name="masculinaHidrocele" value="Não" onChange={handleChange} /> Não
  </div>
  <div>
    <label>Fimose fisiológica:</label>
    <input type="radio" name="masculinaFimoseFisiologica" value="Sim" onChange={handleChange} /> Sim
    <input type="radio" name="masculinaFimoseFisiologica" value="Não" onChange={handleChange} /> Não
  </div>
  <div>
    <label>Testículos:</label>
    <input type="radio" name="masculinaTesticulos" value="Ectópicos" onChange={handleChange} /> Ectópicos
    <input type="radio" name="masculinaTesticulos" value="Criptorquidia" onChange={handleChange} /> Criptorquidia
  </div>
</div>
<div className="marcosDesenvolvimento">
  <h3>Marcos do Desenvolvimento - 4 Meses</h3>
  <div>
    <label>Responde ativamente ao contato social:</label>
    <input type="radio" name="respondeContatoSocial4Meses" value="Presente" onChange={handleChange} /> Presente
    <input type="radio" name="respondeContatoSocial4Meses" value="Ausente" onChange={handleChange} /> Ausente
    <input type="radio" name="respondeContatoSocial4Meses" value="Não verificado" onChange={handleChange} /> Não verificado
  </div>
  <div>
    <label>Segura objetos:</label>
    <input type="radio" name="seguraObjetos4Meses" value="Presente" onChange={handleChange} /> Presente
    <input type="radio" name="seguraObjetos4Meses" value="Ausente" onChange={handleChange} /> Ausente
    <input type="radio" name="seguraObjetos4Meses" value="Não verificado" onChange={handleChange} /> Não verificado
  </div>
  <div>
    <label>Emite sons, ri alto:</label>
    <input type="radio" name="emiteSonsRiAlto4Meses" value="Presente" onChange={handleChange} /> Presente
    <input type="radio" name="emiteSonsRiAlto4Meses" value="Ausente" onChange={handleChange} /> Ausente
    <input type="radio" name="emiteSonsRiAlto4Meses" value="Não verificado" onChange={handleChange} /> Não verificado
  </div>
  <div>
    <label>Levanta a cabeça e apoia-se nos antebraços, de bruços:</label>
    <input type="radio" name="levantaCabeca4Meses" value="Presente" onChange={handleChange} /> Presente
    <input type="radio" name="levantaCabeca4Meses" value="Ausente" onChange={handleChange} /> Ausente
    <input type="radio" name="levantaCabeca4Meses" value="Não verificado" onChange={handleChange} /> Não verificado
  </div>
</div>

<div className="marcosDesenvolvimento">
  <h3>Marcos do Desenvolvimento - 5 Meses</h3>
  <div>
    <label>Busca ativa de objetos:</label>
    <input type="radio" name="buscaAtivaObjetos5Meses" value="Presente" onChange={handleChange} /> Presente
    <input type="radio" name="buscaAtivaObjetos5Meses" value="Ausente" onChange={handleChange} /> Ausente
    <input type="radio" name="buscaAtivaObjetos5Meses" value="Não verificado" onChange={handleChange} /> Não verificado
  </div>
  <div>
    <label>Leva objetos à boca:</label>
    <input type="radio" name="levaObjetosBoca5Meses" value="Presente" onChange={handleChange} /> Presente
    <input type="radio" name="levaObjetosBoca5Meses" value="Ausente" onChange={handleChange} /> Ausente
    <input type="radio" name="levaObjetosBoca5Meses" value="Não verificado" onChange={handleChange} /> Não verificado
  </div>
  <div>
    <label>Localiza o som:</label>
    <input type="radio" name="localizaSom5Meses" value="Presente" onChange={handleChange} /> Presente
    <input type="radio" name="localizaSom5Meses" value="Ausente" onChange={handleChange} /> Ausente
    <input type="radio" name="localizaSom5Meses" value="Não verificado" onChange={handleChange} /> Não verificado
  </div>
  <div>
    <label>Muda de posição (rola):</label>
    <input type="radio" name="mudaPosicaoRola5Meses" value="Presente" onChange={handleChange} /> Presente
    <input type="radio" name="mudaPosicaoRola5Meses" value="Ausente" onChange={handleChange} /> Ausente
    <input type="radio" name="mudaPosicaoRola5Meses" value="Não verificado" onChange={handleChange} /> Não verificado
  </div>
</div>

</div>
<button className="copiar" type="submit">
            Copiar
          </button>
    </form>
    
  );
  
}
export default Formulario4a5Meses;
