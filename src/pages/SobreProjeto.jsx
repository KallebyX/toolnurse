import React from 'react';
import { Link } from 'react-router-dom';
import AssessmentLayout from '../components/AssessmentLayout';
import InformationIcon from './InformationIcon';
import { projectTeam, publications, researchSources } from '../data/project';
import '../styles/information.css';

const sourceUrl = source => typeof source === 'string' ? source : source.url;

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
      <p>O ToolNurse nasceu da dissertação de mestrado de <strong>Laura Taís Loureiro Simas</strong>, defendida em 2023 no Mestrado Profissional em Saúde Materno-Infantil da <a href="https://site.ufn.edu.br/" target="_blank" rel="noopener noreferrer">Universidade Franciscana (UFN)</a>, sob orientação de <strong>Mara Regina Caino Teixeira Marchiori</strong> e coorientação de <strong>Luiz Fernando Rodrigues Júnior</strong>.</p>
      <p>A pesquisa contou com apoio da CAPES e do COFEN, por meio do Edital nº 08/2021. O desenvolvimento reúne contribuições da enfermagem, engenharia biomédica, computação e design para aproximar a tecnologia das necessidades do cuidado infantil.</p>
    </section>

    <section className="tn-info-panel" aria-labelledby="tn-about-team">
      <div className="tn-info-section-heading"><span className="tn-info-icon"><InformationIcon name="people" /></span><h2 id="tn-about-team">Equipe e colaborações</h2></div>
      <p>Conheça as pessoas que contribuíram para a pesquisa e o desenvolvimento do ToolNurse.</p>
      <ul className="tn-team-grid">
        {projectTeam.map(person => <li className="tn-team-card" key={person.name}>
          <h3>{person.name}</h3>
          <p>{person.role}</p>
        </li>)}
      </ul>
      <p className="tn-research-source-note">Créditos e participações descritos na <a href={sourceUrl(researchSources.dissertation)} target="_blank" rel="noopener noreferrer">dissertação de mestrado</a>, no <a href={sourceUrl(researchSources.cbeb)} target="_blank" rel="noopener noreferrer">artigo publicado no CBEB</a> e na <a href={sourceUrl(researchSources.review)} target="_blank" rel="noopener noreferrer">revisão integrativa</a>.</p>
    </section>

    <section className="tn-info-panel" aria-labelledby="tn-about-publications">
      <div className="tn-info-section-heading"><span className="tn-info-icon"><InformationIcon name="book" /></span><h2 id="tn-about-publications">Publicações e pesquisa</h2></div>
      <p>Acesse os trabalhos relacionados à criação e ao desenvolvimento da plataforma.</p>
      <ul className="tn-publication-list">
        {publications.map(publication => <li key={publication.id}>
          <article className="tn-publication-card" aria-labelledby={`tn-publication-${publication.id}`}>
            <div className="tn-publication-meta"><span>{publication.kind}</span><span>{publication.year}</span></div>
            <h3 id={`tn-publication-${publication.id}`}>{publication.title}</h3>
            <p className="tn-publication-authors">{Array.isArray(publication.authors) ? publication.authors.join('; ') : publication.authors}</p>
            <p className="tn-publication-venue">{publication.venue}</p>
            {publication.description && <p className="tn-publication-description">{publication.description}</p>}
            <a className="tn-publication-link" href={publication.url} target="_blank" rel="noopener noreferrer" aria-label={`${publication.linkLabel}: ${publication.title}`}>{publication.linkLabel}<InformationIcon name="external" /></a>
          </article>
        </li>)}
      </ul>
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
