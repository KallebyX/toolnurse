<h1 align="center">🩺 ToolNurse</h1>

<p align="center">
  Plataforma digital para apoio à enfermagem na Atenção Primária à Saúde.
</p>

<p align="center">
  <a href="https://toolnurse.ufn.edu.br" target="_blank"><strong>🔗 Acessar o Site</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-blue" alt="status">
  <img src="https://img.shields.io/github/license/KallebyX/toolnurse" alt="licença">
  <img src="https://img.shields.io/github/languages/top/KallebyX/toolnurse" alt="linguagem">
</p>

---

## ✨ Visão Geral

**ToolNurse** é uma aplicação web desenvolvida para auxiliar profissionais de enfermagem em atendimentos de puericultura e outras ações de saúde da família.  
Com uma interface clara, responsiva e intuitiva, o sistema permite consulta ágil a protocolos, instrumentos e informações relevantes à prática clínica da Atenção Primária.

O ToolNurse teve origem na dissertação de Laura Taís Loureiro Simas, defendida em 2023 no Mestrado Profissional em Saúde Materno-Infantil da Universidade Franciscana (UFN), com orientação de Mara Regina Caino Teixeira Marchiori e coorientação de Luiz Fernando Rodrigues Júnior. O desenvolvimento reuniu contribuições da enfermagem, engenharia biomédica, computação e design. A equipe e as publicações estão disponíveis na [página Sobre o projeto](https://toolnurse.ufn.edu.br/sobre).

---

## 🚀 Tecnologias Utilizadas

- ⚛️ [React](https://reactjs.org/) – Biblioteca para construção de interfaces declarativas.
- ⚡ [Vite](https://vitejs.dev/) – Ferramenta de build moderna e ultra-rápida.
- 🧹 [ESLint](https://eslint.org/) – Linter para manter o código limpo e padronizado.
- 🎨 CSS3 + HTML5 – Estilização responsiva e adaptativa.
- 📦 [npm](https://www.npmjs.com/) – Gerenciador de pacotes utilizado para dependências.

---

## 📁 Estrutura do Projeto

toolnurse/
├── dist/                  # Build final otimizado
├── node_modules/          # Dependências
├── public/                # Arquivos estáticos
├── src/                   # Código-fonte principal
│   ├── components/        # Componentes reutilizáveis (botões, cards etc.)
│   ├── pages/             # Páginas principais (Home, Consulta, etc.)
│   └── App.jsx            # Componente principal da aplicação
├── .eslintrc.cjs          # Configurações do ESLint
├── .gitignore             # Ignorados pelo Git
├── index.html             # HTML principal
├── package.json           # Dependências e scripts
├── vite.config.js         # Configuração do Vite
└── README.md              # Documentação do projeto

---

## ⚙️ Instalação e Execução Local

### Pré-requisitos

- Node.js v18+ (ou superior)
- npm ou yarn

### Passo a passo

1. **Clone o repositório:**

```bash
git clone https://github.com/KallebyX/toolnurse.git
cd toolnurse

	2.	Instale as dependências:

npm install

	3.	Inicie o servidor de desenvolvimento:

npm run dev

	4.	Acesse no navegador:

http://localhost:5173/


⸻

📦 Scripts Disponíveis

Comando	Descrição
npm run dev	Inicia o servidor local de desenvolvimento
npm run build	Gera a versão final de produção
npm run preview	Visualiza a versão de produção localmente
npm run lint	Analisa o código com ESLint


⸻

🤝 Contribuindo

Contribuições são sempre bem-vindas!
	1.	Faça um fork do repositório.
	2.	Crie uma nova branch: git checkout -b minha-feature
	3.	Faça commit das suas alterações: git commit -m 'feat: minha nova feature'
	4.	Faça push para a sua branch: git push origin minha-feature
	5.	Abra um Pull Request.

⸻

📄 Licença

Este projeto está licenciado sob a MIT License.
Consulte o arquivo LICENSE para mais detalhes.

⸻

👨‍💻 Desenvolvido por

Kalleby Evangelho Mota
Estudante de Engenharia Biomédica | Desenvolvedor de Tecnologias Assistivas
E-mail: kalleby.mota@ufn.edu.br
GitHub: @KallebyX

⸻

💡 Agradecimentos

Projeto desenvolvido com apoio da Universidade Franciscana (UFN), no contexto do Mestrado Profissional em Saúde Materno-Infantil e com colaboração interdisciplinar.
Agradecimento especial à equipe envolvida, orientadores e todos os profissionais de saúde que inspiram soluções com propósito.

⸻


<p align="center">
  <strong>Transformando tecnologia em cuidado. Cuidar também é inovar.</strong>
</p>
```
