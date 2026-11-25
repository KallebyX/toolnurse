import React from 'react';
import { Link } from 'react-router-dom';
import AssessmentLayout from '../components/AssessmentLayout';
import InformationIcon from './InformationIcon';
import '../styles/information.css';

export default function SobreProjeto() {
  return <AssessmentLayout
    title="Sobre o projeto"
    eyebrow="Tecnologia a serviço do cuidado"
    description="O ToolNurse apoia profissionais de enfermagem na organização da avaliação infantil durante os atendimentos de puericultura na Atenção Primária à Saúde."
    informational
  >
    <section className="tn-info-panel" aria-labelledby="tn-about-purpose">
      <div className="tn-info-section-heading"><span className="tn-info-icon"><InformationIcon name="care" /></span><h2 id="tn-about-purpose">Um roteiro para cada etapa</h2></div>
      <p>Da avaliação do recém-nascido ao acompanhamento aos dois anos, a plataforma reúne roteiros por faixa etária para facilitar o preenchimento das informações e a preparação do registro de enfermagem.</p>
      <p>Os campos são organizados em seções e algumas respostas apresentam opções complementares. Ao terminar, é possível copiar o conteúdo para revisão e inclusão no registro utilizado pelo serviço.</p>
      <div className="tn-info-facts">
        <div><strong>9 roteiros</strong><span>Organizados por faixa etária</span></div>
        <div><strong>Do nascimento aos 2 anos</strong><span>Acompanhamento infantil</span></div>
        <div><strong>No celular e no computador</strong><span>Acesso direto pelo navegador</span></div>
      </div>
    </section>

    <section className="tn-info-panel" aria-labelledby="tn-about-origin">
      <div className="tn-info-section-heading"><span className="tn-info-icon"><InformationIcon name="book" /></span><h2 id="tn-about-origin">Origem e desenvolvimento</h2></div>
      <p>O projeto foi desenvolvido no contexto da Iniciação Tecnológica em Saúde Materno-Infantil, com apoio da <a href="https://site.ufn.edu.br/" target="_blank" rel="noopener noreferrer">Universidade Franciscana (UFN)</a>. A proposta aproxima tecnologia, educação e cuidado na atenção à saúde.</p>
      <dl className="tn-info-credits">
        <div><dt>Desenvolvimento</dt><dd>Kalleby Evangelho Mota</dd></div>
        <div><dt>Contexto acadêmico</dt><dd>Universidade Franciscana</dd></div>
      </dl>
    </section>

    <aside className="tn-info-callout" aria-labelledby="tn-about-practice">
      <InformationIcon name="info" />
      <div><h2 id="tn-about-practice">Apoio à prática profissional</h2><p>O ToolNurse auxilia na organização das informações. A avaliação, a revisão do registro e as decisões de cuidado permanecem sob responsabilidade do profissional, conforme o contexto do atendimento e as orientações do serviço.</p></div>
    </aside>

    <div className="tn-info-actions">
      <Link className="tn-info-button" to="/como-utilizar">Ver como utilizar<InformationIcon name="arrow" /></Link>
      <Link className="tn-info-text-link" to="/recem">Iniciar uma avaliação<InformationIcon name="arrow" /></Link>
    </div>
  </AssessmentLayout>;
}
