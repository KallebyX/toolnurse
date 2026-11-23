import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import logo from '../assets/toolNurse.jpg';

export default function AssessmentLayout({ title, children }) {
  return <div className="tn-app-shell">
    <a href="#assessment-content" className="tn-skip-link">Ir para a avaliação</a>
    <header className="tn-site-header"><div className="tn-site-header-inner">
      <Link to="/" className="tn-brand" aria-label="ToolNurse — página inicial"><img src={logo} alt="ToolNurse" width="904" height="332" /></Link>
      <div className="tn-header-caption"><span className="tn-caption-icon" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v5a4 4 0 0 0 8 0V3M4 3h4M12 3h4M10 12v3a5 5 0 0 0 10 0v-1" /><circle cx="20" cy="11" r="2" /></svg></span><span>Puericultura na<br /><strong>Atenção Primária à Saúde</strong></span></div>
    </div></header>
    <div className="tn-workspace">
      <aside className="tn-sidebar"><Menu /></aside>
      <main id="assessment-content" className="tn-assessment" tabIndex={-1}>
        <header className="tn-assessment-heading"><p className="tn-eyebrow">Roteiro de avaliação de enfermagem</p><div className="tn-title-row"><h1>{title}</h1><span className="tn-assessment-tag"><span aria-hidden="true" />Puericultura</span></div><p className="tn-assessment-description">Preencha os campos da avaliação. Ao finalizar, use <strong>Copiar Dados</strong> para copiar o registro.</p></header>
        <div className="tn-form-content"><h2 className="tn-sr-only">Dados da avaliação</h2>{children}</div>
      </main>
    </div>
  </div>;
}
