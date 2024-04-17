import React, { useState } from 'react';
import toolNurseImage from '../../assets/toolNurse.jpg'; // Ajuste o caminho conforme necessário
import Menu from '../Menu'; // Ajuste o caminho conforme necessário

function FormularioQuatroCincoMeses() {
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
    semLinfonodosCervicaisPalpaveis: '',
    linfonodosCervicais: '',
    secrecaoOlhos: '',
    estrabismo: '',
    mucosa: '',
    secrecaoOrelhas: '',
    linfonodoRetroauricular: '',
    tiragem: false,
    murmurioVesiculares: '',
    bulhasCardiacas: '',
    estadoAbdome: '',
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
    hipospadia: '',
    epispadia: '',
    anomaliasAnal: '',
    fissuras: '',
    assaduras: '',
    respondeContatoSocial: '',
    seguraObjetos: '',
    riAlto: '',
    levantaCabeca: '',
    buscaAtivaObjetos: '',
    levaObjetosBoca: '',
    localizaSom: '',
    mudaPosicaoRola: ''
});

const handleChange = (event) => {
  const { name, value, type, checked } = event.target;
  if (type === 'checkbox') {
    setDados({ ...dados, [name]: checked });
  } else {
    setDados({ ...dados, [name]: value });
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const formattedData = formatarDados();
  console.log(formattedData);
  // Aqui você pode fazer algo com os dados formatados, como enviar para um servidor
};


    const formatarDados = () => {
      return `
        4-5 Meses
        
        Peso: ${dados.peso} Kg
        Estatura: ${dados.estatura} cm
        PC: ${dados.pc} cm
    
        Estado Geral: ${dados.estadoGeral}
        Pele:
          - Textura: ${dados.texturaPele}
          - Sensação: ${dados.sensacaoPele}
          - Cor: ${dados.corPele}
          - Hidratação: ${dados.hidratacaoPele}
    
        Cabeça:
          - Fontanela Anterior: ${dados.fontanelaAnterior}
          - Sem Linfonodos Cervicais Palpáveis: ${dados.semLinfonodosCervicaisPalpaveis}
          - Linfonodos Cervicais: ${dados.linfonodosCervicaisPalpaveis}
    
        Olhos:
          - Secreção: ${dados.secrecaoOlhos}
          - Estrabismo: ${dados.estrabismo}
          - Mucosa: ${dados.mucosa}
    
        Orelhas/Ouvidos:
          - Secreção: ${dados.secrecaoOrelhas}
          - Linfonodo Retroauricular: ${dados.linfonodoRetroauricular}
    
        Tórax:
          - Tiragem: ${dados.tiragem ? 'Sim' : 'Não'}
          - Murmúrio Vesiculares: ${dados.murmurioVesiculares}
          - Bulhas Cardíacas: ${dados.bulhasCardiacas}
    
        Abdome:
          - Estado: ${dados.estadoAbdome}
          - Presença de Hérnia Umbilical: ${dados.herniaUmbilical}
    
        Genitália:
          - Feminina:
            - Pequenos Lábios e Clitóris Proeminentes: ${dados.labiosClitorisProeminentesFem}
            - Secreção: ${dados.secrecaoFeminina}
            - Sinéquia: ${dados.sinequia}
            - Hérnia Inguinal: ${dados.herniaInguinalFem}
          - Masculina:
            - Hérnia Inguinal: ${dados.herniaInguinalMas}
            - Hidrocele: ${dados.hidrocele}
            - Fimose Fisiológica: ${dados.fimoseFisiologica}
            - Testículos: ${dados.testiculos}
            - Meato Urinário: ${dados.meatoUrinario}
    
        Orifício Anal:
          - Anomalias: ${dados.anomaliasAnal}
          - Fissuras: ${dados.fissuras}
          - Assaduras: ${dados.assaduras}
    
        Marcos do Desenvolvimento:
          - Responde Ativamente ao Contato Social: ${dados.respondeContatoSocial}
          - Segura Objetos: ${dados.seguraObjetos}
          - Emite Sons, Ri Alto: ${dados.riAlto}
          - Levanta a Cabeça: ${dados.levantaCabeca}
          - Busca Ativa de Objetos: ${dados.buscaAtivaObjetos}
          - Leva Objetos à Boca: ${dados.levaObjetosBoca}
          - Localiza o Som: ${dados.localizaSom}
          - Muda de Posição: ${dados.mudaPosicaoRola}
      `.trim();
    };
    

    return (
        <div className="tudo">
            <div className="cabecalho">
                <img className="img" src={toolNurseImage} alt="Tool Nurse Logo" />
                <Menu />
            </div>
            <h3>4-5 Meses</h3>
            <form onSubmit={handleSubmit}>
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

      <div className="form-section">
        <h3>Estado Geral</h3>
        {["Ativo", "Hipoativo", "Letárgico", "Calmo", "Choroso"].map((estado) => (
          <label key={estado}>
            <input
              type="radio"
              name="estadoGeral"
              value={estado}
              checked={dados.estadoGeral === estado}
              onChange={handleChange}
            />
            {estado}
          </label>
        ))}
      </div>

      <div className="form-section">
        <h3>Pele</h3>
        <div className="form-group">
          <label>Textura:</label>
          {["Lisa", "Irregular"].map((textura) => (
            <label key={textura}>
              <input
                type="radio"
                name="texturaPele"
                value={textura}
                checked={dados.texturaPele === textura}
                onChange={handleChange}
              />
              {textura}
            </label>
          ))}
        </div>
        <div className="form-group">
          <label>Sensação:</label>
          {["Macia", "Áspera"].map((sensacao) => (
            <label key={sensacao}>
              <input
                type="radio"
                name="sensacaoPele"
                value={sensacao}
                checked={dados.sensacaoPele === sensacao}
                onChange={handleChange}
              />
              {sensacao}
            </label>
          ))}
        </div>
        <div className="form-group">
          <label>Cor:</label>
          {["Rósea", "Pálida", "Cianótica", "Ictérica"].map((cor) => (
            <label key={cor}>
              <input
                type="radio"
                name="corPele"
                value={cor}
                checked={dados.corPele === cor}
                onChange={handleChange}
              />
              {cor}
            </label>
          ))}
        </div>
        <div className="form-group">
          <label>Hidratação:</label>
          {["Hidratada", "Desidratada"].map((hidratacao) => (
            <label key={hidratacao}>
              <input
                type="radio"
                name="hidratacaoPele"
                value={hidratacao}
                checked={dados.hidratacaoPele === hidratacao}
                onChange={handleChange}
              />
              {hidratacao}
            </label>
          ))}
        </div>
      </div>
      <div className="form-section">
  <h3>Cabeça</h3>
  <div className="form-group">
    <label>Fontanela Anterior:</label>
    {["Abauladas", "Deprimidas", "Planas"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="fontanelaAnterior"
          value={option}
          checked={dados.fontanelaAnterior === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>

  <div className="form-group">
    <label>Sem linfonodos cervicais palpáveis:</label>
    {["Sim", "Não"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="semLinfonodosCervicaisPalpaveis"
          value={option}
          checked={dados.semLinfonodosCervicaisPalpaveis === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>

  <div className="form-group">
    <label>Linfonodos cervicais palpáveis:</label>
    <label>
      <input
        type="radio"
        name="linfonodosCervicaisPalpaveis"
        value="Não"
        checked={dados.linfonodosCervicaisPalpaveis === "Não"}
        onChange={handleChange}
      />
      Não
    </label>
    {["Sim - Móvel", "Sim - Fixo", "Sim - Fibrobástico", "Sim - Amolecido", "Sim - Endurecido"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="linfonodosCervicaisPalpaveis"
          value={option}
          checked={dados.linfonodosCervicaisPalpaveis === option}
          onChange={handleChange}
        />
        {option.split(" - ")[1]}
      </label>
    ))}
  </div>
</div>
<div className="form-section">
  <div className="form-group">
    <label>Secreção:</label>
    {["sim", "não"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="secrecaoOlhos"
          value={option}
          checked={dados.secrecaoOlhos === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>
  <div className="form-group">
    <label>Estrabismo:</label>
    {["sim", "não"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="estrabismo"
          value={option}
          checked={dados.estrabismo === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>
  <div className="form-group">
    <label>Mucosa:</label>
    {["Corada", "Pálida", "Úmida", "Seca"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="mucosa"
          value={option}
          checked={dados.mucosa === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>
</div>

<div className="form-section">
  <div className="form-group">
    <label>Secreção:</label>
    {["sim", "não"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="secrecaoOrelhas"
          value={option}
          checked={dados.secrecaoOrelhas === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>
  <div className="form-group">
    <label>Linfonodo retroauricular palpável:</label>
    <label>
      <input
        type="radio"
        name="linfonodoRetroauricular"
        value="Não"
        checked={dados.linfonodoRetroauricular === "Não"}
        onChange={handleChange}
      />
      Não
    </label>
    {["Sim - Móvel", "Sim - Fixo", "Sim - Fibroblástico", "Sim - Amolecido", "Sim - Endurecido"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="linfonodoRetroauricular"
          value={option}
          checked={dados.linfonodoRetroauricular === option}
          onChange={handleChange}
        />
        {option.split(" - ")[1]}
      </label>
    ))}
  </div>
</div>
<div className="form-section">
  <h3>Tórax</h3>
  <div className="form-group">
    <label>AP - Tiragem:</label>
    <input
      type="checkbox"
      name="tiragem"
      checked={dados.tiragem}
      onChange={(e) => setDados({ ...dados, tiragem: e.target.checked })}
    />
  </div>
  <div className="form-group">
    <label>Murmúrio vesiculares:</label>
    {["Sem ruídos adventícios", "Com ruídos adventícios"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="murmurioVesiculares"
          value={option}
          checked={dados.murmurioVesiculares === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>
  <div className="form-group">
    <label>Bulhas Cardíacas:</label>
    {["Sem sopro", "Com sopro"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="bulhasCardiacas"
          value={option}
          checked={dados.bulhasCardiacas === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>
</div>
<div className="form-section">
  <h3>Abdome</h3>
  <div className="form-group">
    <label>Estado do Abdome:</label>
    {["Plano", "Globoso", "Rígido", "Flácido"].map((estado) => (
      <label key={estado}>
        <input
          type="radio"
          name="estadoAbdome"
          value={estado}
          checked={dados.estadoAbdome === estado}
          onChange={handleChange}
        />
        {estado}
      </label>
    ))}
  </div>
  <div className="form-group">
    <label>Presença de hérnia umbilical:</label>
    <label>
      <input
        type="radio"
        name="herniaUmbilical"
        value="Sim"
        checked={dados.herniaUmbilical === 'Sim'}
        onChange={handleChange}
      />
      Sim
    </label>
    <label>
      <input
        type="radio"
        name="herniaUmbilical"
        value="Não"
        checked={dados.herniaUmbilical === 'Não'}
        onChange={handleChange}
      />
      Não
    </label>
  </div>
</div>
<div className="form-section">
  <h3>Genitália</h3>
  
  <h4>Feminina</h4>
  <div className="form-group">
    <label>Pequenos lábios e clitóris proeminentes:</label>
    <label>
      <input
        type="radio"
        name="labiosClitorisProeminentesFem"
        value="Sim"
        checked={dados.labiosClitorisProeminentesFem === 'Sim'}
        onChange={handleChange}
      />
      Sim
    </label>
    <label>
      <input
        type="radio"
        name="labiosClitorisProeminentesFem"
        value="Não"
        checked={dados.labiosClitorisProeminentesFem === 'Não'}
        onChange={handleChange}
      />
      Não
    </label>
  </div>

  <div className="form-group">
    <label>Secreção:</label>
    <label>
      <input
        type="radio"
        name="secrecaoFeminina"
        value="Sim"
        checked={dados.secrecaoFeminina === 'Sim'}
        onChange={handleChange}
      />
      Sim
    </label>
    <label>
      <input
        type="radio"
        name="secrecaoFeminina"
        value="Não"
        checked={dados.secrecaoFeminina === 'Não'}
        onChange={handleChange}
      />
      Não
    </label>
  </div>

  <div className="form-group">
    <label>Sinéquia:</label>
    <label>
      <input
        type="radio"
        name="sinequia"
        value="Sim"
        checked={dados.sinequia === 'Sim'}
        onChange={handleChange}
      />
      Sim
    </label>
    <label>
      <input
        type="radio"
        name="sinequia"
        value="Não"
        checked={dados.sinequia === 'Não'}
        onChange={handleChange}
      />
      Não
    </label>
  </div>

  <div className="form-group">
    <label>Hérnia inguinal:</label>
    <label>
      <input
        type="radio"
        name="herniaInguinalFem"
        value="Sim"
        checked={dados.herniaInguinalFem === 'Sim'}
        onChange={handleChange}
      />
      Sim
    </label>
    <label>
      <input
        type="radio"
        name="herniaInguinalFem"
        value="Não"
        checked={dados.herniaInguinalFem === 'Não'}
        onChange={handleChange}
      />
      Não
    </label>
  </div>

  <h4>Masculina</h4>
  <div className="form-group">
    <label>Hérnia inguinal:</label>
    <label>
      <input
        type="radio"
        name="herniaInguinalMas"
        value="Sim"
        checked={dados.herniaInguinalMas === 'Sim'}
        onChange={handleChange}
      />
      Sim
    </label>
    <label>
      <input
        type="radio"
        name="herniaInguinalMas"
        value="Não"
        checked={dados.herniaInguinalMas === 'Não'}
        onChange={handleChange}
      />
      Não
    </label>
  </div>

  <div className="form-group">
    <label>Hidrocele:</label>
    <label>
      <input
        type="radio"
        name="hidrocele"
        value="Sim"
        checked={dados.hidrocele === 'Sim'}
        onChange={handleChange}
      />
      Sim
    </label>
    <label>
      <input
        type="radio"
        name="hidrocele"
        value="Não"
        checked={dados.hidrocele === 'Não'}
        onChange={handleChange}
      />
      Não
    </label>
  </div>

  <div className="form-group">
    <label>Fimose fisiológica:</label>
    <label>
      <input
        type="radio"
        name="fimoseFisiologica"
        value="Sim"
        checked={dados.fimoseFisiologica === 'Sim'}
        onChange={handleChange}
      />
      Sim
    </label>
    <label>
      <input
        type="radio"
        name="fimoseFisiologica"
        value="Não"
        checked={dados.fimoseFisiologica === 'Não'}
               onChange={handleChange}
      />
      Não
    </label>
  </div>

  <div className="form-group">
    <label>Testículos:</label>
    <label>
      <input
        type="radio"
        name="testiculos"
        value="Ectópicos"
        checked={dados.testiculos === 'Ectópicos'}
        onChange={handleChange}
      />
      Ectópicos
    </label>
    <label>
      <input
        type="radio"
        name="testiculos"
        value="Criptorquidia"
        checked={dados.testiculos === 'Criptorquidia'}
        onChange={handleChange}
      />
      Criptorquidia
    </label>
  </div>

  <div className="form-group">
    <label>Meato urinário:</label>
    <label>
      <input
        type="radio"
        name="meatoUrinario"
        value="Visualizado"
        checked={dados.meatoUrinario === 'Visualizado'}
        onChange={handleChange}
      />
      Visualizado
    </label>
    <label>
      <input
        type="radio"
        name="meatoUrinario"
        value="Não visualizado"
        checked={dados.meatoUrinario === 'Não visualizado'}
        onChange={handleChange}
      />
      Não visualizado
    </label>
    <label>
      <input
        type="radio"
        name="meatoUrinario"
        value="Hipospadia"
        checked={dados.meatoUrinario === 'Hipospadia'}
        onChange={handleChange}
      />
      Hipospadia
    </label>
    <label>
      <input
        type="radio"
        name="meatoUrinario"
        value="Epispádia"
        checked={dados.meatoUrinario === 'Epispádia'}
        onChange={handleChange}
      />
      Epispádia
    </label>
  </div>
</div>
<div className="form-section">
  <h3>Orifício Anal</h3>
  <div className="form-group">
    <label>Anomalias:</label>
    <label>
      <input
        type="radio"
        name="anomaliasAnal"
        value="Sim"
        checked={dados.anomaliasAnal === 'Sim'}
        onChange={handleChange}
      />
      Sim
    </label>
    <label>
      <input
        type="radio"
        name="anomaliasAnal"
        value="Não"
        checked={dados.anomaliasAnal === 'Não'}
        onChange={handleChange}
      />
      Não
    </label>
  </div>

  <div className="form-group">
    <label>Fissuras:</label>
    <label>
      <input
        type="radio"
        name="fissuras"
        value="Sim"
        checked={dados.fissuras === 'Sim'}
        onChange={handleChange}
      />
      Sim
    </label>
    <label>
      <input
        type="radio"
        name="fissuras"
        value="Não"
        checked={dados.fissuras === 'Não'}
        onChange={handleChange}
      />
      Não
    </label>
  </div>

  <div className="form-group">
    <label>Assaduras:</label>
    <label>
      <input
        type="radio"
        name="assaduras"
        value="Sim"
        checked={dados.assaduras === 'Sim'}
        onChange={handleChange}
      />
      Sim
    </label>
    <label>
      <input
        type="radio"
        name="assaduras"
        value="Não"
        checked={dados.assaduras === 'Não'}
        onChange={handleChange}
      />
      Não
    </label>
  </div>
</div>
<div className="form-section">
  <h3>Marcos do Desenvolvimento - 4 Meses</h3>
  <div className="form-group">
    <label>Responde ativamente ao contato social:</label>
    {["Presente", "Ausente", "Não verificado"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="respondeContatoSocial"
          value={option}
          checked={dados.respondeContatoSocial === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>

  <div className="form-group">
    <label>Segura objetos:</label>
    {["Presente", "Ausente", "Não verificado"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="seguraObjetos"
          value={option}
          checked={dados.seguraObjetos === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>

  <div className="form-group">
    <label>Emite sons, ri alto:</label>
    {["Presente", "Ausente", "Não verificado"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="emiteSons"
          value={option}
          checked={dados.emiteSons === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>

  <div className="form-group">
    <label>Levanta a cabeça e apoia-se nos antebraços, de bruços:</label>
    {["Presente", "Ausente", "Não verificado"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="levantaCabeca"
          value={option}
          checked={dados.levantaCabeca === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>
</div>
<div className="form-section">
  <h3>Marcos do Desenvolvimento - 5 Meses</h3>
  <div className="form-group">
    <label>Busca ativa de objetos:</label>
    {["Presente", "Ausente", "Não verificado"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="buscaAtivaObjetos"
          value={option}
          checked={dados.buscaAtivaObjetos === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>

  <div className="form-group">
    <label>Leva objetos à boca:</label>
    {["Presente", "Ausente", "Não verificado"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="levaObjetosBoca"
          value={option}
          checked={dados.levaObjetosBoca === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>

  <div className="form-group">
    <label>Localiza o som:</label>
    {["Presente", "Ausente", "Não verificado"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="localizaSom"
          value={option}
          checked={dados.localizaSom === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>

  <div className="form-group">
    <label>Muda de posição (rola):</label>
    {["Presente", "Ausente", "Não verificado"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="mudaPosicaoRola"
          value={option}
          checked={dados.mudaPosicaoRola === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>
</div>

                {/* Inclua os campos do formulário aqui */}
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

export default FormularioQuatroCincoMeses;
