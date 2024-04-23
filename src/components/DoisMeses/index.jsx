import React, { useState } from 'react';
import toolNurseImage from '../../assets/toolNurse.jpg'; // Ajuste o caminho conforme necessário
import Menu from '../Menu'; // Ajuste o caminho conforme necessário

function FormularioDoisTresMeses() {
    const [dados, setDados] = useState({
        peso: '',
        estatura: '',
        pc: '',
        estadoGeral: '',
        texturaPele: '',
        sensacaoPele: '',
        corPele: '',
        hidratacaoPele: '',
        fontanelasAnterior: '',
        fontanelasPosteriorFechada: '',
        linfonodosCervicais: '',
        linfonodosCervicaisDetalhes: '',
        secrecaoOlhos: '',
        estrabismo: '',
        mucosa: '',
        secrecaoNariz: '',
        batimentosNariz: '',
        murmurioVesiculares: '',
        obstrucaoNasal: '',
        secrecaoOrelhas: '',
        linfonodoRetroauricular: '',
        linfonodoRetroauricularDetalhes: '',
        tiragem: '',
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
        anomaliasAnal: '',
        fissuras: '',
        assaduras: '',
        sorriEstimulada: '',
        abreMaos: '',
        movimentaMembros: '',
        emiteSons: '',
        contatoSocial: '',
        seguraObjetos: '',
        riAlto: '',
        levantaCabeca: ''
      });
      const formatarDados = () => {
        return `
          **Avaliação 2-3 Meses**
      
          **Peso:** ${dados.peso} Kg
          **Estatura:** ${dados.estatura} cm
          **PC:** ${dados.pc} cm
      
          **Estado Geral:**
          - ${dados.estadoGeral}
      
          **Pele:**
          - Textura: ${dados.texturaPele}
          - Sensação: ${dados.sensacaoPele}
          - Cor: ${dados.corPele}
          - Hidratação: ${dados.hidratacaoPele}
      
          **Cabeça:**
          - Fontanelas Anterior: ${dados.fontanelasAnterior}
          - Fontanelas Posterior Fechada: ${dados.fontanelasPosteriorFechada ? 'Sim' : 'Não'}
          -Linfonodos Cervicais Palpáveis: ${dados.linfonodosCervicaisPalpaveis} ${dados.linfonodosCervicaisPalpaveis === 'SIM' ? `(${dados.tipoLinfonodoCervical})` : ''}
      
          **Olhos:**
          - Secreção: ${dados.secrecaoOlhos}
          - Estrabismo: ${dados.estrabismo}
      
          **Mucosa:** ${dados.mucosa}
      
          **Nariz:**
          - Secreção: ${dados.secrecaoNariz}
          - Batimentos das asas do nariz: ${dados.batimentosNariz}
          - Obstrução nasal: ${dados.obstrucaoNasal}
      
          **Orelhas/Ouvidos:**
          - Secreção: ${dados.secrecaoOrelhas}
          - Linfonodo Retroauricular Palpável: ${dados.linfonodoRetroauricular} ${dados.linfonodoRetroauricular === 'sim' ? `(${dados.tipoLinfonodoRetroauricular})` : ''}
      
          **Tórax:**
          - AP:
          ${dados.apTiragem ? 'Tiragem' : ''}
          ${dados.apMurmurioVesiculares ? 'Murmúrio Vesiculares' : ''}
          ${dados.apSemRuidos ? 'Sem Ruídos Adventícios' : ''}
        - AC: ${dados.acBulhas} 
      
          **Abdome:**
          - Estado: ${dados.estadoAbdome}
          - Hérnia Umbilical: ${dados.herniaUmbilical}
      
          **Genitália Feminina:**
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
          - Fissuras: ${dados.fissuras}
          - Assaduras: ${dados.assaduras}
      
          **Marcos do Desenvolvimento:**
          - Sorri quando estimulada: ${dados.sorriEstimulada}
          - Abre as mãos: ${dados.abreMaos}
          - Movimenta os membros: ${dados.movimentaMembros}
          - Emite sons: ${dados.emiteSons}
          - Responde ativamente ao contato social: ${dados.contatoSocial}
          - Segura objetos: ${dados.seguraObjetos}
          - Emite sons, ri alto: ${dados.riAlto}
          - Levanta a cabeça e apoia-se nos antebraços, de bruços: ${dados.levantaCabeca}
        `.trim();
      };
      

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
      
      return (
<div className="tudo">
                <div className="cabecalho">
      <img className="img" src={toolNurseImage} alt="Tool Nurse Logo" />
      <Menu />
    </div>
          <div className="cabecalho">
    
          </div>
          <h3>2 - 3 Meses</h3>
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
              <div className="form-group">
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
    <label>Fontanelas Anterior:</label>
    {["Abauladas", "Deprimidas", "Plana"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="fontanelasAnterior"
          value={option}
          checked={dados.fontanelasAnterior === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>
  <div className="form-group">
    <label>Fontanelas Posterior Fechada:</label>
    {["Sim", "Não"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="fontanelasPosteriorFechada"
          value={option}
          checked={dados.fontanelasPosteriorFechada === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>
  <div className="form-group">
  <label>Linfonodos cervicais palpáveis:</label><br />
  <input type="radio" id="linfonodosSim" name="linfonodosCervicaisPalpaveis" value="SIM" checked={dados.linfonodosCervicaisPalpaveis === 'SIM'} onChange={handleChange} /> SIM<br />
  <input type="radio" id="linfonodosNao" name="linfonodosCervicaisPalpaveis" value="NÃO" checked={dados.linfonodosCervicaisPalpaveis === 'NÃO'} onChange={handleChange} /> NÃO<br />

  {dados.linfonodosCervicaisPalpaveis === 'SIM' && (
    <div>
      <input type="radio" name="tipoLinfonodoCervical" value="Móvel" checked={dados.tipoLinfonodoCervical === 'Móvel'} onChange={handleChange} /> Móvel<br />
      <input type="radio" name="tipoLinfonodoCervical" value="Fixo" checked={dados.tipoLinfonodoCervical === 'Fixo'} onChange={handleChange} /> Fixo<br />
      <input type="radio" name="tipoLinfonodoCervical" value="Fibrobástico" checked={dados.tipoLinfonodoCervical === 'Fibrobástico'} onChange={handleChange} /> Fibrobástico<br />
      <input type="radio" name="tipoLinfonodoCervical" value="Amolecido" checked={dados.tipoLinfonodoCervical === 'Amolecido'} onChange={handleChange} /> Amolecido<br />
      <input type="radio" name="tipoLinfonodoCervical" value="Endurecido" checked={dados.tipoLinfonodoCervical === 'Endurecido'} onChange={handleChange} /> Endurecido<br />
    </div>
  )}
</div>
<label htmlFor="">Olhos:</label>
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
    {["corada", "pálida", "cianóticas", "acianóticas", "úmida", "seca"].map((option) => (
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
          name="secrecaoNariz"
          value={option}
          checked={dados.secrecaoNariz === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>
  <div className="form-group">
    <label>Batimentos das asas do nariz:</label>
    {["sim", "não"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="batimentosNariz"
          value={option}
          checked={dados.batimentosNariz === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>
  <div className="form-group">
    <label>Obstrução nasal:</label>
    {["sim", "não"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="obstrucaoNasal"
          value={option}
          checked={dados.obstrucaoNasal === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>
</div>

<div className="form-section">
  <label htmlFor="">Orelhas/ouvidos:</label>
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
  <label>Linfonodo retroauricular palpável:</label><br />
  <label>
    <input type="radio" id="linfonodoRetroauricularSim" name="linfonodoRetroauricular" value="sim" checked={dados.linfonodoRetroauricular === 'sim'} onChange={handleChange} />
    Sim
  </label>
  <label>
    <input type="radio" id="linfonodoRetroauricularNao" name="linfonodoRetroauricular" value="não" checked={dados.linfonodoRetroauricular === 'não'} onChange={handleChange} />
    Não
  </label><br />

  {dados.linfonodoRetroauricular === 'sim' && (
    <div>
      <label>
        <input type="radio" name="tipoLinfonodoRetroauricular" value="Móvel" checked={dados.tipoLinfonodoRetroauricular === 'Móvel'} onChange={handleChange} />
        Móvel
      </label>
      <label>
        <input type="radio" name="tipoLinfonodoRetroauricular" value="Fixo" checked={dados.tipoLinfonodoRetroauricular === 'Fixo'} onChange={handleChange} />
        Fixo
      </label>
      <label>
        <input type="radio" name="tipoLinfonodoRetroauricular" value="Fibrobástico" checked={dados.tipoLinfonodoRetroauricular === 'Fibrobástico'} onChange={handleChange} />
        Fibrobástico
      </label>
      <label>
        <input type="radio" name="tipoLinfonodoRetroauricular" value="Amolecido" checked={dados.tipoLinfonodoRetroauricular === 'Amolecido'} onChange={handleChange} />
        Amolecido
      </label>
      <label>
        <input type="radio" name="tipoLinfonodoRetroauricular" value="Endurecido" checked={dados.tipoLinfonodoRetroauricular === 'Endurecido'} onChange={handleChange} />
        Endurecido
      </label>
    </div>
  )}
</div>
</div>
<h3>TÓRAX</h3>

<div className="form-group">
  <label>AP:</label><br />
  <input type="checkbox" id="apTiragem" name="apTiragem" checked={dados.apTiragem} onChange={handleChange} />
  <label htmlFor="apTiragem">Tiragem</label><br />
  <input type="checkbox" id="apMurmurioVesiculares" name="apMurmurioVesiculares" checked={dados.apMurmurioVesiculares} onChange={handleChange} />
  <label htmlFor="apMurmurioVesiculares">Murmúrio vesiculares</label><br />
  <input type="checkbox" id="apSemRuidos" name="apSemRuidos" checked={dados.apSemRuidos} onChange={handleChange} />
  <label htmlFor="apSemRuidos">Sem ruídos adventícios</label><br />
</div>

<div className="form-group">
  <label>AC:</label><br />
  <input type="radio" id="acSemSopro" name="acBulhas" value="Sem sopro" checked={dados.acBulhas === 'Sem sopro'} onChange={handleChange} />
  <label htmlFor="acSemSopro">Sem sopro</label><br />
  <input type="radio" id="acComSopro" name="acBulhas" value="Com sopro" checked={dados.acBulhas === 'Com sopro'} onChange={handleChange} />
  <label htmlFor="acComSopro">Com sopro</label><br />
</div>

<div className="form-section">
  <h3>Abdome</h3>
  <div className="form-group">
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
    <label>Hérnia Umbilical:</label>
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
  <h3>Marcos do Desenvolvimento - 2 Meses</h3>
  <div className="form-group">
    <label>Sorri quando estimulada:</label>
    {["Presente", "Ausente", "Não verificado"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="sorriEstimulada"
          value={option}
          checked={dados.sorriEstimulada === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>

  <div className="form-group">
    <label>Abre as mãos:</label>
    {["Presente", "Ausente", "Não verificado"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="abreMaos"
          value={option}
          checked={dados.abreMaos === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>

  <div className="form-group">
    <label>Movimenta os membros:</label>
    {["Presente", "Ausente", "Não verificado"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="movimentaMembros"
          value={option}
          checked={dados.movimentaMembros === option}
          onChange={handleChange}
        />
        {option}
      </label>
    ))}
  </div>

  <div className="form-group">
    <label>Emite sons:</label>
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
</div>
<div className="form-section">
  <h3>Marcos do Desenvolvimento - 3 Meses</h3>
  <div className="form-group">
    <label>Responde ativamente ao contato social:</label>
    {["Presente", "Ausente", "Não verificado"].map((option) => (
      <label key={option}>
        <input
          type="radio"
          name="contatoSocial"
          value={option}
          checked={dados.contatoSocial === option}
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
          name="riAlto"
          value={option}
          checked={dados.riAlto === option}
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


            {/* Adicionar mais campos conforme necessário */}
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

export default FormularioDoisTresMeses;
