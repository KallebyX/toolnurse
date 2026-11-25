import React from 'react';
import { Link } from 'react-router-dom';
import AssessmentLayout from '../components/AssessmentLayout';
import InformationIcon from './InformationIcon';
import '../styles/information.css';

const steps = [
  {
    title: 'Selecione a faixa etária',
    text: <>A página inicial abre o roteiro de <strong>Recém-nascido</strong>. Para outro atendimento, escolha a idade no menu lateral. No celular, toque no seletor <strong>Faixa etária</strong> para ver os roteiros disponíveis.</>,
  },
  {
    title: 'Preencha a avaliação',
    text: <>Percorra as seções e registre as medidas e os achados do atendimento. Observe as unidades indicadas nos campos. Algumas respostas abrem campos complementares: preencha-os quando se aplicarem à avaliação.</>,
  },
  {
    title: 'Revise e copie os dados',
    text: <>Confira as respostas e, ao final do roteiro, selecione <strong>Copiar Dados</strong> ou <strong>Copiar</strong>. Aguarde a confirmação do navegador de que os dados foram copiados.</>,
  },
  {
    title: 'Cole e confira o registro',
    text: <>Abra o prontuário ou documento utilizado no seu serviço e cole o texto. Revise o conteúdo, a formatação e os dados da criança antes de concluir o registro.</>,
  },
];

export default function ComoUtilizar() {
  return <AssessmentLayout
    title="Como utilizar"
    eyebrow="Um guia para começar"
    description="Do preenchimento ao registro: conheça o passo a passo para usar os roteiros do ToolNurse no seu atendimento."
    informational
  >
    <section className="tn-info-panel" aria-labelledby="tn-guide-steps">
      <div className="tn-info-section-heading"><span className="tn-info-icon"><InformationIcon name="clipboard" /></span><h2 id="tn-guide-steps">Seu atendimento em quatro passos</h2></div>
      <ol className="tn-info-steps">
        {steps.map((step, index) => <li key={step.title}>
          <span className="tn-info-step-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <div><h3>{step.title}</h3><p>{step.text}</p></div>
        </li>)}
      </ol>
    </section>

    <aside className="tn-info-callout" aria-labelledby="tn-guide-save">
      <InformationIcon name="info" />
      <div><h2 id="tn-guide-save">Antes de sair do roteiro</h2><p>O preenchimento não é salvo automaticamente. Copie e guarde o registro antes de trocar de faixa etária, atualizar a página ou fechar a aba.</p></div>
    </aside>

    <section className="tn-info-panel" aria-labelledby="tn-guide-questions">
      <div className="tn-info-section-heading"><span className="tn-info-icon"><InformationIcon name="book" /></span><h2 id="tn-guide-questions">Dúvidas durante o uso</h2></div>
      <div className="tn-info-questions">
        <details><summary>Posso usar pelo celular?</summary><p>Sim. Abra o seletor de faixa etária, escolha o roteiro e percorra o formulário. Para colar o registro em outro aplicativo, toque e segure no campo de texto de destino e selecione “Colar”.</p></details>
        <details><summary>O texto não foi copiado. O que fazer?</summary><p>Confira se está no endereço seguro <a href="https://toolnurse.ufn.edu.br">toolnurse.ufn.edu.br</a>. Se o navegador solicitar acesso à área de transferência, permita a ação e tente copiar novamente. Confirme que o texto foi colado antes de sair da avaliação.</p></details>
        <details><summary>Como navegar usando o teclado?</summary><p>Use Tab para avançar entre links e campos e Shift + Tab para voltar. Use as setas para percorrer as opções de um grupo e Espaço para selecioná-las. No celular, o seletor de faixa etária também pode ser aberto com Enter ou Espaço e fechado com Esc.</p></details>
        <details><summary>Como iniciar outro atendimento?</summary><p>Primeiro, copie e guarde o registro atual. Depois, atualize a página para limpar os campos ou escolha o roteiro da faixa etária do próximo atendimento.</p></details>
      </div>
    </section>

    <div className="tn-info-actions">
      <Link className="tn-info-button" to="/recem">Abrir roteiro de recém-nascido<InformationIcon name="arrow" /></Link>
      <Link className="tn-info-text-link" to="/sobre">Conhecer o projeto<InformationIcon name="arrow" /></Link>
    </div>
  </AssessmentLayout>;
}
