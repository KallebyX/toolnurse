import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return <footer className="tn-footer"><div className="tn-footer-inner">
    <div className="tn-footer-about">
      <p className="tn-footer-brand"><strong>ToolNurse</strong><span>Apoio ao cuidado em cada etapa.</span></p>
      <nav className="tn-footer-nav" aria-label="Sobre a plataforma">
        <NavLink to="/recem">Iniciar avaliação</NavLink>
        <NavLink to="/como-utilizar">Como utilizar</NavLink>
        <NavLink to="/sobre">Sobre o projeto</NavLink>
      </nav>
    </div>
    <p className="tn-footer-credit">Feito com <span role="img" aria-label="amor">❤️</span> pela <a href="https://www.oryumtech.com.br/" target="_blank" rel="noopener noreferrer">Oryum Tech</a> para a <a href="https://site.ufn.edu.br/" target="_blank" rel="noopener noreferrer">Universidade Franciscana</a>.</p>
  </div></footer>;
}
