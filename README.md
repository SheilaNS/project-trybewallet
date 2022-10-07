# :moneybag: Projeto TrybeWallet :dollar:

## :page_facing_up: Sobre

Projeto do Bloco 15 - Gerenciamento de estado com Redux do curso de Desenvolvimento Web da [Trybe](https://www.betrybe.com).<br>
É uma aplicação que computa gastos em diferentes moedas e converte tudo para uma única moeda, que pode ser escolhida pelo usuário.<br>
Tudo isso usando o Redux para compartilhar o estado da sua aplicação entre seus vários componentes.<br>
A API de cotações de moedas usada neste projeto está disponível neste [link](https://docs.awesomeapi.com.br/api-de-moedas).<br><br>
Quantidade de requisitos: 10<br>
Requisitos feitos: 9<br><br>
URL do projeto: https://sheilans.github.io/project-trybewallet/

## :computer: Habilidades desenvolvidas

- Criar um store, reducers, actions, actions assíncronas e dispatchers no Redux em uma aplicação React
- Conectar O Redux aos componentes React

## :speaking_head: Stacks utilizadas
<div align="left">
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" display="block" title="HTML5"><img alt="HTML5 icon" height="20px" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />HTML</a>
  <a href="https://developer.ozilla.org/pt-BR/docs/Web/CSS" title="CSS3"><img alt="CSS3 icon" height="20px" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />CSS</a>
  <a href="https://reactjs.org/" title="React"><img alt="React.Js icon" height="20px" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />React</a>
  <a href="https://redux.js.org/" title="Redux"><img alt="Redux icon" height="20px" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />Redux</a>
</div>

## :woman_technologist: No seu computador
Para rodar esse projeto no seu computador, abra o terminal e siga o passo-a-passo a seguir:

1. Clone o repositório `git clone git@github.com:SheilaNS/project-trybewallet.git`
2. Entre na pasta do repositório que você acabou de clonar `cd project-trybewallet`
3. Instale as dependências `npm install`
4. Inicialize o projeto `npm start`
5. O navegador vai abrir uma nova aba com a página do projeto 

## :building_construction: Estrutura do projeto
```
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── actions
│   │   ├── index.js
│   │   ├── rates.js
│   │   ├── user.js
│   │   └── wallet.js
│   ├── assets
│   │   ├── Form.css
│   │   ├── Login.css
│   │   ├── Table.css
│   │   └── Wallet.css
│   ├── components
│   │   ├── Form.js
│   │   └── Table.js
│   ├── pages
│   │   ├── Login.js
│   │   └── Wallet.js
│   ├── reducers
│   │   ├── index.js
│   │   ├── user.js
│   │   └── wallet.js
│   ├── service
│   │   └── quotationAPI.js
│   ├── store
│   │   └── index.js
│   ├── App.css
│   ├── App.js
│   ├── Routes.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── serviceWorker.js
│   └── setupTests.js
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .npmrc
├── .stylelintignore
├── .stylelintrc.json
├── README.md
├── package-lock.json
└── package.json
 ```
 #### Autora: Sheila Nakashima dos Santos
<a href="https://wa.me/+5511995985416?text=Sheila%20Dev" target="_blank" rel="external"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" height="25px" /></a>
<a href="https://www.linkedin.com/in/sheila-nakashima-dos-santos/" target="_blank" rel="external"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" height="25px"></a>
<a href="mailto:shei.nsantos@gmail.com" target="_blank" rel="external"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" height="25px"></a>
