import React, { useState } from 'react';
import toolNurseImage from '../../assets/toolNurse.jpg';
import Menu from '../Menu';

function Formulario2a3Meses() {
    const [dados, setDados] = useState({
      peso: '',
      estatura: '',
      pc: '',
      estadoGeral: '',
      peleTextura: [],
      peleSensacao: [],
      peleCor: [],
      peleHidratacao: '',
      fontanelasAnterior: '',
      fontanelasPosteriorFechada: '',
      linfonodosCervicaisPalpaveis: '',
      olhosSecrecao: '',
      olhosEstrabismo: '',
      apTiragem: '',
      acBulhasCardiacas: '',
      abdomeEstado: '',
      herniaUmbilical: '',
      femininaLabiosClitorisProeminentes: '',
      masculinaTesticulos: '',
      orificioAnalAnomalias: '',
      sorri2Meses: '',
      abreMaos2Meses: '',
      movimentaMembros2Meses: '',
      emiteSons2Meses: '',
      respondeContatoSocial3Meses: '',
      seguraObjetos3Meses: '',
      emiteSonsRiAlto3Meses: '',
      levantaCabeca3Meses: '',
    });
  
    const formatarDados = () => {
      let formattedData = "**Avaliação de Desenvolvimento - 2 a 3 Meses**\n\n";
    
      formattedData += "**Anamnese**\n";
      formattedData += `- Peso: ${dados.peso} Kg\n`;
      formattedData += `- Estatura: ${dados.estatura} cm\n`;
      formattedData += `- PC: ${dados.pc} cm\n`;
      formattedData += `- Estado Geral: ${dados.estadoGeral}\n\n`;
    
      formattedData += "**Pele**\n";
      dados.peleTextura.forEach(textura => formattedData += `- Textura: ${textura}\n`);
      dados.peleSensacao.forEach(sensacao => formattedData += `- Sensação ao Toque: ${sensacao}\n`);
      dados.peleCor.forEach(cor => formattedData += `- Cor: ${cor}\n`);
      formattedData += `- Hidratação: ${dados.peleHidratacao}\n\n`;
    
      formattedData += "**Cabeça**\n";
      formattedData += `- Fontanelas Anterior: ${dados.fontanelasAnterior}\n`;
      formattedData += `- Fontanelas Posterior Fechada: ${dados.fontanelasPosteriorFechada}\n`;
      formattedData += `- Linfonodos cervicais palpáveis: ${dados.linfonodosCervicaisPalpaveis}\n`;
      formattedData += `- Olhos - Secreção: ${dados.olhosSecrecao}\n`;
      formattedData += `- Olhos - Estrabismo: ${dados.olhosEstrabismo}\n\n`;
    
      formattedData += "**Tórax**\n";
      formattedData += `- AP - Tiragem: ${dados.apTiragem}\n`;
      formattedData += `- AC - Bulhas cardíacas: ${dados.acBulhasCardiacas}\n\n`;
    
      formattedData += "**Abdome**\n";
      formattedData += `- Estado: ${dados.abdomeEstado}\n`;
      formattedData += `- Hérnia umbilical: ${dados.herniaUmbilical}\n\n`;
    
      formattedData += "**Genitália Feminina**\n";
      formattedData += `- Pequenos lábios e clitóris proeminentes: ${dados.femininaLabiosClitorisProeminentes}\n\n`;
    
      formattedData += "**Genitália Masculina**\n";
      formattedData += `- Testículos: ${dados.masculinaTesticulos}\n\n`;
    
      formattedData += "**Orifício Anal**\n";
      formattedData += `- Anomalias: ${dados.orificioAnalAnomalias}\n\n`;
    
      formattedData += "**Marcos do Desenvolvimento - 2 Meses**\n";
      formattedData += `- Sorri quando estimulada: ${dados.sorri2Meses}\n`;
      formattedData += `- Abre as mãos: ${dados.abreMaos2Meses}\n`;
      formattedData += `- Movimenta os membros: ${dados.movimentaMembros2Meses}\n`;
      formattedData += `- Emite sons: ${dados.emiteSons2Meses}\n\n`;
    
      formattedData += "**Marcos do Desenvolvimento - 3 Meses**\n";
      formattedData += `- Responde ativamente ao contato social: ${dados.respondeContatoSocial3Meses}\n`;
      formattedData += `- Segura objetos: ${dados.seguraObjetos3Meses}\n`;
      formattedData += `- Emite sons, ri alto: ${dados.emiteSonsRiAlto3Meses}\n`;
      formattedData += `- Levanta a cabeça e apoia-se nos antebraços, de bruços: ${dados.levantaCabeca3Meses}\n`;
    
      return formattedData;
    };
    
    const handleChange = (event) => {
      const { name, value } = event.target;
      setDados({ ...dados, [name]: value });
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
                {/* Seção Anamnese */}
                <div>
  <h3>Anamnese - 2 a 3 Meses</h3>
  <label>Peso (Kg):<input type="text" name="peso" onChange={handleChange} /></label>
  <label>Estatura (cm):<input type="text" name="estatura" onChange={handleChange} /></label>
  <label>PC (cm):<input type="text" name="pc" onChange={handleChange} /></label>
  <div>Estado geral:
    <label><input type="radio" name="estadoGeral" value="ativo" onChange={handleChange} /> Ativo</label>
    <label><input type="radio" name="estadoGeral" value="hipoativo" onChange={handleChange} /> Hipoativo</label>
    <label><input type="radio" name="estadoGeral" value="letargico" onChange={handleChange} /> Letárgico</label>
    <label><input type="radio" name="estadoGeral" value="calmo" onChange={handleChange} /> Calmo</label>
    <label><input type="radio" name="estadoGeral" value="choroso" onChange={handleChange} /> Choroso</label>
  </div>
</div>


                {/* Seção Pele */}
            
                <div className="pele">
    <h3>Pele</h3>
    <div>Textura:
        <label><input type="radio" name="peleTextura" value="lisa" onChange={handleChange} /> Lisa</label>
        <label><input type="radio" name="peleTextura" value="irregular" onChange={handleChange} /> Irregular</label>
    </div>
    <div>Sensação ao Toque:
        <label><input type="radio" name="peleSensacao" value="macia" onChange={handleChange} /> Macia</label>
        <label><input type="radio" name="peleSensacao" value="aspera" onChange={handleChange} /> Áspera</label>
    </div>
    <div>Cor:
        <label><input type="radio" name="peleCor" value="rosea" onChange={handleChange} /> Rósea</label>
        <label><input type="radio" name="peleCor" value="palida" onChange={handleChange} /> Pálida</label>
        <label><input type="radio" name="peleCor" value="cianotica" onChange={handleChange} /> Cianótica</label>
        <label><input type="radio" name="peleCor" value="icterica" onChange={handleChange} /> Ictérica</label>
    </div>
    <div>Hidratação:
        <label><input type="radio" name="peleHidratacao" value="hidratada" onChange={handleChange} /> Hidratada</label>
        <label><input type="radio" name="peleHidratacao" value="desidratada" onChange={handleChange} /> Desidratada</label>
    </div>
</div>

<div className="cabeca">
    <h3>CABEÇA</h3>
    <div>
    <div>Fontanelas Anterior:</div>
    <label>
        <input type="radio" name="fontanelasAnterior" value="abauladas" onChange={handleChange} /> Abauladas
    </label>
    <label>
        <input type="radio" name="fontanelasAnterior" value="deprimidas" onChange={handleChange} /> Deprimidas
    </label>
    <label>
        <input type="radio" name="fontanelasAnterior" value="planas" onChange={handleChange} /> Planas
    </label>
</div>

    <div>Fontanelas Posterior Fechada:
        <input type="radio" name="fontanelasPosteriorFechada" value="sim" onChange={handleChange} /> Sim
        <input type="radio" name="fontanelasPosteriorFechada" value="nao" onChange={handleChange} /> Não
    </div>
    <div>Linfonodos cervicais palpáveis:
        <input type="radio" name="linfonodosCervicaisPalpaveis" value="sim" onChange={handleChange} /> Sim
        <input type="radio" name="linfonodosCervicaisPalpaveis" value="nao" onChange={handleChange} /> Não
        {/* Adicionar campos para características se "Sim" */}
    </div>
    <div>Olhos - Secreção:
        <input type="radio" name="olhosSecrecao" value="sim" onChange={handleChange} /> Sim
        <input type="radio" name="olhosSecrecao" value="nao" onChange={handleChange} /> Não
    </div>
    <div>Olhos - Estrabismo:
        <input type="radio" name="olhosEstrabismo" value="sim" onChange={handleChange} /> Sim
        <input type="radio" name="olhosEstrabismo" value="nao" onChange={handleChange} /> Não
    </div>
    {/* Outros campos da seção CABEÇA conforme necessário */}
</div>
<div className="torax">
          <h3>TÓRAX</h3>
          <label>AP - Tiragem: <input type="text" name="apTiragem" onChange={handleChange} /></label>
          <div>
            AC - Bulhas cardíacas:
            <label><input type="radio" name="acBulhasCardiacas" value="semSopro" onChange={handleChange} /> Sem Sopro</label>
            <label><input type="radio" name="acBulhasCardiacas" value="comSopro" onChange={handleChange} /> Com Sopro</label>
          </div>
        </div>

        {/* Seção Abdome */}
        <div className="abdome">
          <h3>ABDOME</h3>
          <div>
            Estado:
            <label><input type="radio" name="abdomeEstado" value="plano" onChange={handleChange} /> Plano</label>
            <label><input type="radio" name="abdomeEstado" value="globoso" onChange={handleChange} /> Globoso</label>
            <label><input type="radio" name="abdomeEstado" value="rigido" onChange={handleChange} /> Rígido</label>
            <label><input type="radio" name="abdomeEstado" value="flacido" onChange={handleChange} /> Flácido</label>
          </div>
          <div>
            Hérnia umbilical:
            <label><input type="radio" name="herniaUmbilical" value="sim" onChange={handleChange} /> Sim</label>
            <label><input type="radio" name="herniaUmbilical" value="nao" onChange={handleChange} /> Não</label>
          </div>
        </div>
<div className="genitalia">
    <h3>GENITÁLIA</h3>
    <div className="feminina">
        <h4>Feminina</h4>
        {/* Campos específicos para a genitália feminina */}
        <div>Pequenos lábios e clitóris proeminentes:
            <input type="radio" name="femininaLabiosClitorisProeminentes" value="sim" onChange={handleChange} /> Sim
            <input type="radio" name="femininaLabiosClitorisProeminentes" value="nao" onChange={handleChange} /> Não
        </div>
        {/* Outros campos */}
    </div>
    <div className="masculina">
        <h4>Masculina</h4>
        {/* Campos específicos para a genitália masculina */}
        <div>
    <div>Testículos:</div>
    <label>
        <input type="radio" name="masculinaTesticulos" value="ectopicos" onChange={handleChange} /> Ectópicos
    </label>
    <label>
        <input type="radio" name="masculinaTesticulos" value="criptorquidia" onChange={handleChange} /> Criptorquidia
    </label>
</div>

        {/* Outros campos */}
    </div>
</div>
<div className="orificioAnal">
    <h3>Orifício Anal</h3>
    {/* Campos específicos para orifício anal */}
    <div>Anomalias:
        <input type="radio" name="orificioAnalAnomalias" value="sim" onChange={handleChange} /> Sim
        <input type="radio" name="orificioAnalAnomalias" value="nao" onChange={handleChange} /> Não
    </div>
    {/* Outros campos */}
</div>

<div className="marcosDesenvolvimento">
    <h3>Marcos do Desenvolvimento</h3>
    <h4>2 Meses</h4>
    <div>Sorri quando estimulada:
        <input type="radio" name="sorri2Meses" value="presente" onChange={handleChange} /> Presente
        <input type="radio" name="sorri2Meses" value="ausente" onChange={handleChange} /> Ausente
        <input type="radio" name="sorri2Meses" value="naoVerificado" onChange={handleChange} /> Não verificado
    </div>
    <div>Abre as mãos:
        <input type="radio" name="abreMaos2Meses" value="presente" onChange={handleChange} /> Presente
        <input type="radio" name="abreMaos2Meses" value="ausente" onChange={handleChange} /> Ausente
        <input type="radio" name="abreMaos2Meses" value="naoVerificado" onChange={handleChange} /> Não verificado
    </div>
    <div>Movimenta os membros:
        <input type="radio" name="movimentaMembros2Meses" value="presente" onChange={handleChange} /> Presente
        <input type="radio" name="movimentaMembros2Meses" value="ausente" onChange={handleChange} /> Ausente
        <input type="radio" name="movimentaMembros2Meses" value="naoVerificado" onChange={handleChange} /> Não verificado
    </div>
    <div>Emite sons:
        <input type="radio" name="emiteSons2Meses" value="presente" onChange={handleChange} /> Presente
        <input type="radio" name="emiteSons2Meses" value="ausente" onChange={handleChange} /> Ausente
        <input type="radio" name="emiteSons2Meses" value="naoVerificado" onChange={handleChange} /> Não verificado
    </div>

    <h4>3 Meses</h4>
    <div>Responde ativamente ao contato social:
        <input type="radio" name="respondeContatoSocial3Meses" value="presente" onChange={handleChange} /> Presente
        <input type="radio" name="respondeContatoSocial3Meses" value="ausente" onChange={handleChange} /> Ausente
        <input type="radio" name="respondeContatoSocial3Meses" value="naoVerificado" onChange={handleChange} /> Não verificado
    </div>
    <div>Segura objetos:
        <input type="radio" name="seguraObjetos3Meses" value="presente" onChange={handleChange} /> Presente
        <input type="radio" name="seguraObjetos3Meses" value="ausente" onChange={handleChange} /> Ausente
        <input type="radio" name="seguraObjetos3Meses" value="naoVerificado" onChange={handleChange} /> Não verificado
    </div>
    <div>Emite sons, ri alto:
        <input type="radio" name="emiteSonsRiAlto3Meses" value="presente" onChange={handleChange} /> Presente
        <input type="radio" name="emiteSonsRiAlto3Meses" value="ausente" onChange={handleChange} /> Ausente
        <input type="radio" name="emiteSonsRiAlto3Meses" value="naoVerificado" onChange={handleChange} /> Não verificado
    </div>
    <div>Levanta a cabeça e apoia-se nos antebraços, de bruços:
        <input type="radio" name="levantaCabeca3Meses" value="presente" onChange={handleChange} /> Presente
        <input type="radio" name="levantaCabeca3Meses" value="ausente" onChange={handleChange} /> Ausente
        <input type="radio" name="levantaCabeca3Meses" value="naoVerificado" onChange={handleChange} /> Não verificado
    </div>
</div>
                <button className="copiar" type="submit">Copiar</button>
            </div>
        </form>
    );
}

export default Formulario2a3Meses;
