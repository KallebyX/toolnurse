import React, { useState } from 'react';
import toolNurseImage from '../../assets/toolNurse.jpg'; // Ajuste o caminho conforme necessário
import Menu from '../Menu'; // Ajuste o caminho conforme necessário

function Formulario6Meses() {
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
    estrabismo: '',
    mucosa: '',
    umidadeMucosa: '',
    denteIncisivoCentralInferior: '',
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
      .then(() => {
        alert('Dados formatados copiados para a área de transferência!');
        limparDados();
      })
      .catch((error) => console.error('Erro ao copiar os dados: ', error));
  };

  const formatarDados = () => {
    return `**Avaliação de Desenvolvimento - 6 Meses**\n\n` +
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
      `**Boca:**\n` +
      `- Mucosa: ${dados.mucosa}\n` +
      `- Umidade da Mucosa: ${dados.umidadeMucosa}\n\n` +
      `**Dentição:**\n` +
      `- Dente incisivo central inferior: ${dados.denteIncisivoCentralInferior}\n\n` +
      `**Tórax:**\n` +
      `- Tiragem: ${dados.tiragem}\n` +
      `- Murmúrios vesiculares: ${dados.murmVesiculares}\n` +
      `- Bulhas cardíacas: ${dados.bulhasCardiacas}\n\n` +
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
      `**Marcos do Desenvolvimento - 6 Meses:**\n` +
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
      <hr className="hr" />
      </div>
      <div className="formulario">
        {/* Campos do formulário */}
<div className="form-section">
  <h3>Anamnese - 6 Meses</h3>
  <div className="form-group">
    <label>Peso (Kg):</label>
    <input type="number" name="peso" value={dados.peso} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label>Estatura (cm):</label>
    <input type="number" name="estatura" value={dados.estatura} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label>PC (cm):</label>
    <input type="number" name="pc" value={dados.pc} onChange={handleChange} />
  </div>
  <div className="form-section">
        <h3>Estado Geral:</h3>
        <label>
          <input type="radio" name="estadoGeral" value="Ativo" checked={dados.estadoGeral === 'Ativo'} onChange={handleChange} />
          Ativo
        </label>
        <label>
          <input type="radio" name="estadoGeral" value="Hipoativo" checked={dados.estadoGeral === 'Hipoativo'} onChange={handleChange} />
          Hipoativo
        </label>
        <label>
          <input type="radio" name="estadoGeral" value="Letargico" checked={dados.estadoGeral === 'Letargico'} onChange={handleChange} />
          Letárgico
        </label>
        <label>
          <input type="radio" name="estadoGeral" value="Calmo" checked={dados.estadoGeral === 'Calmo'} onChange={handleChange} />
          Calmo
        </label>
        <label>
          <input type="radio" name="estadoGeral" value="Choroso" checked={dados.estadoGeral === 'Choroso'} onChange={handleChange} />
          Choroso
        </label>
      </div>
</div>

<div className="form-section">
  <h3>Pele</h3>
  
  <div className="form-group">
    <label>Textura:</label>
    <label>
      <input type="radio" name="texturaPele" value="Lisa" checked={dados.texturaPele === 'Lisa'} onChange={handleChange} />
      Lisa
    </label>
    <label>
      <input type="radio" name="texturaPele" value="Irregular" checked={dados.texturaPele === 'Irregular'} onChange={handleChange} />
      Irregular
    </label>
  </div>
  
  <div className="form-group">
    <label>Sensação ao Toque:</label>
    <label>
      <input type="radio" name="sensacaoPele" value="Macia" checked={dados.sensacaoPele === 'Macia'} onChange={handleChange} />
      Macia
    </label>
    <label>
      <input type="radio" name="sensacaoPele" value="Áspera" checked={dados.sensacaoPele === 'Áspera'} onChange={handleChange} />
      Áspera
    </label>
  </div>
  
  <div className="form-group">
    <label>Cor:</label>
    <label>
      <input type="radio" name="corPele" value="Rósea" checked={dados.corPele === 'Rósea'} onChange={handleChange} />
      Rósea
    </label>
    <label>
      <input type="radio" name="corPele" value="Pálida" checked={dados.corPele === 'Pálida'} onChange={handleChange} />
      Pálida
    </label>
    <label>
      <input type="radio" name="corPele" value="Cianótica" checked={dados.corPele === 'Cianótica'} onChange={handleChange} />
      Cianótica
    </label>
    <label>
      <input type="radio" name="corPele" value="Ictérica" checked={dados.corPele === 'Ictérica'} onChange={handleChange} />
      Ictérica
    </label>
  </div>
  
  <div className="form-group">
    <label>Hidratação:</label>
    <label>
      <input type="radio" name="hidratacaoPele" value="Hidratada" checked={dados.hidratacaoPele === 'Hidratada'} onChange={handleChange} />
      Hidratada
    </label>
    <label>
      <input type="radio" name="hidratacaoPele" value="Desidratada" checked={dados.hidratacaoPele === 'Desidratada'} onChange={handleChange} />
      Desidratada
    </label>
  </div>

</div>


<div className="form-section">
  <h3>Cabeça</h3>
  
  <div className="form-group">
    <label>Fontanela Anterior:</label>
    <label>
      <input type="radio" name="fontanelaAnterior" value="Abauladas" checked={dados.fontanelaAnterior === 'Abauladas'} onChange={handleChange} />
      Abauladas
    </label>
    <label>
      <input type="radio" name="fontanelaAnterior" value="Deprimidas" checked={dados.fontanelaAnterior === 'Deprimidas'} onChange={handleChange} />
      Deprimidas
    </label>
    <label>
      <input type="radio" name="fontanelaAnterior" value="Planas" checked={dados.fontanelaAnterior === 'Planas'} onChange={handleChange} />
      Planas
    </label>
  </div>
  
  <div className="form-group">
    <label>Linfonodos cervicais palpáveis:</label>
    <label>
      <input type="radio" name="linfonodosCervicaisPalpaveis" value="Sim" checked={dados.linfonodosCervicaisPalpaveis === 'Sim'} onChange={handleChange} />
      Sim
    </label>
    <label>
      <input type="radio" name="linfonodosCervicaisPalpaveis" value="Nao" checked={dados.linfonodosCervicaisPalpaveis === 'Nao'} onChange={handleChange} />
      Não
    </label>
  </div>
  <div className="form-section">
  <h3>Olhos</h3>
  
  <div className="form-group">
    <label>Secreção:</label>
    <label><input type="radio" name="secrecaoOlhos" value="Sim" checked={dados.secrecaoOlhos === 'Sim'} onChange={handleChange} />Sim</label>
    <label><input type="radio" name="secrecaoOlhos" value="Nao" checked={dados.secrecaoOlhos === 'Nao'} onChange={handleChange} />Não</label>
  </div>
  
  <div className="form-group">
    <label>Estrabismo:</label>
    <label><input type="radio" name="estrabismo" value="Sim" checked={dados.estrabismo === 'Sim'} onChange={handleChange} />Sim</label>
    <label><input type="radio" name="estrabismo" value="Nao" checked={dados.estrabismo === 'Nao'} onChange={handleChange} />Não</label>
  </div>
</div>

<div className="form-section">
  <h3>Boca</h3>
  
  <div className="form-group">
    <label>Mucosa:</label>
    <label><input type="radio" name="mucosa" value="Corada" checked={dados.mucosa === 'Corada'} onChange={handleChange} />Corada</label>
    <label><input type="radio" name="mucosa" value="Pálida" checked={dados.mucosa === 'Pálida'} onChange={handleChange} />Pálida</label>
  </div>
  
  <div className="form-group">
    <label>Umidade:</label>
    <label><input type="radio" name="umidadeMucosa" value="Úmida" checked={dados.umidadeMucosa === 'Úmida'} onChange={handleChange} />Úmida</label>
    <label><input type="radio" name="umidadeMucosa" value="Seca" checked={dados.umidadeMucosa === 'Seca'} onChange={handleChange} />Seca</label>
  </div>
</div>

<div className="form-section">
  <h3>Dentição</h3>
  
  <div className="form-group">
    <label>Dente incisivo central inferior:</label>
    <label><input type="radio" name="denteIncisivoCentralInferior" value="Presença" checked={dados.denteIncisivoCentralInferior === 'Presença'} onChange={handleChange} />Presença</label>
    <label><input type="radio" name="denteIncisivoCentralInferior" value="Ausência" checked={dados.denteIncisivoCentralInferior === 'Ausência'} onChange={handleChange} />Ausência</label>
    <label><input type="radio" name="denteIncisivoCentralInferior" value="NãoVisualizado" checked={dados.denteIncisivoCentralInferior === 'NãoVisualizado'} onChange={handleChange} />Não visualizado</label>
  </div>
</div>

</div>


<div className="form-section">
  <h3>Tórax</h3>
  
  <div className="form-group">
    <label>AP - Tiragem:</label>
    <label>
      <input type="radio" name="tiragem" value="Sim" checked={dados.tiragem === 'Sim'} onChange={handleChange} />
      Sim
    </label>
    <label>
      <input type="radio" name="tiragem" value="Nao" checked={dados.tiragem === 'Nao'} onChange={handleChange} />
      Não
    </label>
  </div>
  
  <div className="form-group">
    <label>Murmúrio Vesicular:</label>
    <label>
      <input type="radio" name="murmVesiculares" value="Presente" checked={dados.murmVesiculares === 'Presente'} onChange={handleChange} />
      Presente
    </label>
    <label>
      <input type="radio" name="murmVesiculares" value="Ausente" checked={dados.murmVesiculares === 'Ausente'} onChange={handleChange} />
      Ausente
    </label>
  </div>
  
  <div className="form-group">
    <label>AC - Bulhas Cardíacas:</label>
    <label>
      <input type="radio" name="bulhasCardiacas" value="SemSopro" checked={dados.bulhasCardiacas === 'SemSopro'} onChange={handleChange} />
      Sem Sopro
    </label>
    <label>
      <input type="radio" name="bulhasCardiacas" value="ComSopro" checked={dados.bulhasCardiacas === 'ComSopro'} onChange={handleChange} />
      Com Sopro
    </label>
  </div>
  
</div>



<div className="form-section">
  <h3>Genitália</h3>

  <h4>Feminina</h4>
  <div className="form-group">
    <label>Pequenos lábios e clitóris proeminentes:</label>
    <label><input type="radio" name="labiosClitorisProeminentes" value="Sim" checked={dados.labiosClitorisProeminentes === 'Sim'} onChange={handleChange} />Sim</label>
    <label><input type="radio" name="labiosClitorisProeminentes" value="Nao" checked={dados.labiosClitorisProeminentes === 'Nao'} onChange={handleChange} />Não</label>
  </div>
  
  <div className="form-group">
    <label>Secreção:</label>
    <label><input type="radio" name="secrecaoFeminina" value="Sim" checked={dados.secrecaoFeminina === 'Sim'} onChange={handleChange} />Sim</label>
    <label><input type="radio" name="secrecaoFeminina" value="Nao" checked={dados.secrecaoFeminina === 'Nao'} onChange={handleChange} />Não</label>
  </div>
  
  <div className="form-group">
    <label>Sinéquia:</label>
    <label><input type="radio" name="sinequia" value="Sim" checked={dados.sinequia === 'Sim'} onChange={handleChange} />Sim</label>
    <label><input type="radio" name="sinequia" value="Nao" checked={dados.sinequia === 'Nao'} onChange={handleChange} />Não</label>
  </div>
  
  <div className="form-group">
    <label>Hérnia inguinal:</label>
    <label><input type="radio" name="herniaInguinalFem" value="Sim" checked={dados.herniaInguinalFem === 'Sim'} onChange={handleChange} />Sim</label>
    <label><input type="radio" name="herniaInguinalFem" value="Nao" checked={dados.herniaInguinalFem === 'Nao'} onChange={handleChange} />Não</label>
  </div>

  <h4>Masculina</h4>
  <div className="form-group">
    <label>Hérnia inguinal:</label>
    <label><input type="radio" name="herniaInguinalMas" value="Sim" checked={dados.herniaInguinalMas === 'Sim'} onChange={handleChange} />Sim</label>
    <label><input type="radio" name="herniaInguinalMas" value="Nao" checked={dados.herniaInguinalMas === 'Nao'} onChange={handleChange} />Não</label>
  </div>
  
  <div className="form-group">
    <label>Hidrocele:</label>
    <label><input type="radio" name="hidrocele" value="Sim" checked={dados.hidrocele === 'Sim'} onChange={handleChange} />Sim</label>
    <label><input type="radio" name="hidrocele" value="Nao" checked={dados.hidrocele === 'Nao'} onChange={handleChange} />Não</label>
  </div>
  
  <div className="form-group">
    <label>Fimose fisiológica:</label>
    <label><input type="radio" name="fimose" value="Sim" checked={dados.fimose === 'Sim'} onChange={handleChange} />Sim</label>
    <label><input type="radio" name="fimose" value="Nao" checked={dados.fimose === 'Nao'} onChange={handleChange} />Não</label>
  </div>
  
  <div className="form-group">
    <label>Testículos:</label>
    <label><input type="radio" name="testiculos" value="Ectopicos" checked={dados.testiculos === 'Ectopicos'} onChange={handleChange} />Ectópicos</label>
    <label><input type="radio" name="testiculos" value="Criptorquidia" checked={dados.testiculos === 'Criptorquidia'} onChange={handleChange} />Criptorquidia</label>
  </div>
  
  <div className="form-group">
    <label>Meato urinário:</label>
    <label><input type="radio" name="meatoUrinario" value="Visualizado" checked={dados.meatoUrinario === 'Visualizado'} onChange={handleChange} />Visualizado</label>
    <label><input type="radio" name="meatoUrinario" value="NaoVisualizado" checked={dados.meatoUrinario === 'NaoVisualizado'} onChange={handleChange} />Não Visualizado</label>
  </div>
</div>

<div className="form-section">
  <h3>Orifício Anal</h3>
  
  <div className="form-group">
    <label>Anomalias:</label>
    <label><input type="radio" name="anomaliasAnal" value="Sim" checked={dados.anomaliasAnal === 'Sim'} onChange={handleChange} />Sim</label>
    <label><input type="radio" name="anomaliasAnal" value="Nao" checked={dados.anomaliasAnal === 'Nao'} onChange={handleChange} />Não</label>
  </div>
  
  <div className="form-group">
    <label>Fissuras:</label>
    <label><input type="radio" name="fissuras" value="Sim" checked={dados.fissuras === 'Sim'} onChange={handleChange} />Sim</label>
    <label><input type="radio" name="fissuras" value="Nao" checked={dados.fissuras === 'Nao'} onChange={handleChange} />Não</label>
  </div>
  
  <div className="form-group">
    <label>Assaduras:</label>
    <label><input type="radio" name="assaduras" value="Sim" checked={dados.assaduras === 'Sim'} onChange={handleChange} />Sim</label>
    <label><input type="radio" name="assaduras" value="Nao" checked={dados.assaduras === 'Nao'} onChange={handleChange} />Não</label>
  </div>
</div>


<div className="form-section">
  <h3>Marcos do Desenvolvimento - 6 Meses</h3>
  <div className="form-group">
    <label>
      <input type="radio" name="brincaEscondeAchou" value="Presente" checked={dados.brincaEscondeAchou === "Presente"} onChange={handleChange} />
      Brinca de esconde-achou
    </label>
    <label>
      <input type="radio" name="brincaEscondeAchou" value="Ausente" checked={dados.brincaEscondeAchou === "Ausente"} onChange={handleChange} />
      Não brinca de esconde-achou
    </label>
    <label>
      <input type="radio" name="brincaEscondeAchou" value="NaoVerificado" checked={dados.brincaEscondeAchou === "NaoVerificado"} onChange={handleChange} />
      Não verificado
    </label>
  </div>
  <div className="form-group">
    <label>
      <input type="radio" name="transfereObjetos" value="Presente" checked={dados.transfereObjetos === "Presente"} onChange={handleChange} />
      Transfere objetos de uma mão para outra
    </label>
    <label>
      <input type="radio" name="transfereObjetos" value="Ausente" checked={dados.transfereObjetos === "Ausente"} onChange={handleChange} />
      Não transfere objetos de uma mão para outra
    </label>
    <label>
      <input type="radio" name="transfereObjetos" value="NaoVerificado" checked={dados.transfereObjetos === "NaoVerificado"} onChange={handleChange} />
      Não verificado
    </label>
  </div>
  <div className="form-group">
    <label>
      <input type="radio" name="duplicaSilabas" value="Presente" checked={dados.duplicaSilabas === "Presente"} onChange={handleChange} />
      Duplica sílabas
    </label>
    <label>
      <input type="radio" name="duplicaSilabas" value="Ausente" checked={dados.duplicaSilabas === "Ausente"} onChange={handleChange} />
      Não duplica sílabas
    </label>
    <label>
      <input type="radio" name="duplicaSilabas" value="NaoVerificado" checked={dados.duplicaSilabas === "NaoVerificado"} onChange={handleChange} />
      Não verificado
    </label>
  </div>
  <div className="form-group">
    <label>
      <input type="radio" name="sentaSemApoio" value="Presente" checked={dados.sentaSemApoio === "Presente"} onChange={handleChange} />
      Senta-se sem apoio
    </label>
    <label>
      <input type="radio" name="sentaSemApoio" value="Ausente" checked={dados.sentaSemApoio === "Ausente"} onChange={handleChange} />
      Não senta-se sem apoio
    </label>
    <label>
      <input type="radio" name="sentaSemApoio" value="NaoVerificado" checked={dados.sentaSemApoio === "NaoVerificado"} onChange={handleChange} />
      Não verificado
    </label>
  </div>
</div>


        {/* Incluir outros campos seguindo o padrão acima */}
      </div>
      <button className='copiar' type="submit">Copiar</button>
    </form>
    </div>
  );
}

export default Formulario6Meses;
