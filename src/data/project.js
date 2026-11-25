// Credits verified against the dissertation and the publications linked below.
export const researchSources = {
  dissertation: 'https://bdtd.ibict.br/vufind/Record/UFN-1_bd4f30eca750a8f398567f665571f776',
  cbeb: 'https://sbeb.org.br/wp-content/uploads/2024/10/SBEB-CBEB2024-ProceedingsFinal.pdf#page=237',
  review: 'https://www.ufn.edu.br/eventos/maiseventos/Edicaoatual.aspx?qtd=26747',
};

export const projectTeam = [
  { name: 'Laura Taís Loureiro Simas', role: 'Pesquisa em enfermagem e autoria da dissertação que originou o ToolNurse.' },
  { name: 'Mara Regina Caino Teixeira Marchiori', role: 'Orientação da pesquisa e coautoria das publicações.' },
  { name: 'Luiz Fernando Rodrigues Júnior', role: 'Coorientação da pesquisa e colaboração em engenharia biomédica.' },
  { name: 'Kalleby Evangelho Mota', role: 'Desenvolvimento da aplicação web e coautoria do artigo do CBEB.' },
  { name: 'Renato Moessner Loureiro', role: 'Colaboração em design e coautoria do artigo do CBEB.' },
  { name: 'Sylvio André Garcia Vieira', role: 'Colaboração em computação e coautoria do artigo do CBEB.' },
  { name: 'Gina de Souza Castro Hammel', role: 'Coautoria da revisão integrativa sobre a consulta de enfermagem em puericultura.' },
];

export const publications = [
  {
    id: 'cbeb-2024',
    title: 'Desenvolvimento de uma Ferramenta Web para Consulta Eficiente de Enfermagem em Puericultura',
    kind: 'Artigo em anais de congresso',
    year: '2024',
    authors: ['Kalleby Evangelho Mota', 'Laura Taís Loureiro Simas', 'Mara Regina Caino Teixeira Marchiori', 'Renato Moessner Loureiro', 'Sylvio André Garcia Vieira', 'Luiz Fernando Rodrigues Júnior'],
    venue: 'XXIX Congresso Brasileiro de Engenharia Biomédica (CBEB) · Sociedade Brasileira de Engenharia Biomédica',
    description: 'Apresenta o desenvolvimento da aplicação ToolNurse para apoiar as consultas de enfermagem em puericultura.',
    url: researchSources.cbeb,
    linkLabel: 'Ler artigo nos anais (PDF, 25 MB)',
  },
  {
    id: 'revisao-2023',
    title: 'Consulta de enfermagem de puericultura na atenção primária à saúde: revisão integrativa',
    kind: 'Revisão integrativa em anais',
    year: '2023',
    authors: ['Laura Taís Loureiro Simas', 'Gina de Souza Castro Hammel', 'Mara Regina Caino Teixeira Marchiori'],
    venue: 'XIII Fórum Nacional dos Mestrados e Doutorados Profissionais em Enfermagem · DOI: 10.48195/fnmdpe2023.26747',
    description: 'Estudo sobre a produção científica em puericultura na Atenção Primária à Saúde, relacionado à base de pesquisa do projeto.',
    url: researchSources.review,
    linkLabel: 'Ler revisão integrativa (PDF)',
  },
  {
    id: 'dissertacao-2023',
    title: 'ToolNurse: uma ferramenta web para consulta de enfermagem de puericultura',
    kind: 'Dissertação de mestrado',
    year: '2023',
    authors: ['Laura Taís Loureiro Simas'],
    venue: 'Universidade Franciscana · Mestrado Profissional em Saúde Materno-Infantil',
    description: 'Pesquisa que originou a plataforma, sob orientação de Mara Regina Caino Teixeira Marchiori e coorientação de Luiz Fernando Rodrigues Júnior.',
    url: researchSources.dissertation,
    linkLabel: 'Consultar dissertação',
  },
];
