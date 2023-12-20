![image](https://github.com/LeonardoMessias98/star-wars-planets/assets/55189046/130e3f6b-8d0c-4c53-9088-2f0af0892832)


#### Acesse aqui -> [https://planets-starwars.vercel.app](https://planets-starwars.vercel.app/)

## Funcionalidades

A aplicação desenvolvida contém duas telas
 * Página Inicial (Home): Esta tela proporciona ao usuário a capacidade de realizar pesquisas rápidas sobre planetas no universo de Star Wars. Facilita a busca por informações específicas sobre os diferentes planetas disponíveis no sistema, proporcionando uma experiência intuitiva e eficiente.
    * Filtragem: Na aplicação é possível filtrar os planetas por nome e população, por padrão a busca funciona pesquisando os planetas por nome. Para ativar a busca por população é necessário escolher uma das 3 opções no filtro de população.
    ![Gravação de tela de 20-12-2023 14_01_54 (1)](https://github.com/LeonardoMessias98/star-wars-planets/assets/55189046/aa340223-6e56-4648-8150-9b75ce9eb173)


 * Página de Planeta Individual (Single Planet): Esta tela foi projetada para exibir detalhes específicos sobre o planeta selecionado. Os dados apresentados abrangem tanto as características geológicas quanto as informações populacionais do planeta escolhido, oferecendo uma visão abrangente e detalhada para o usuário explorar.

## Arquitetura do código

A decisão de selecionar a arquitetura do código foi um desafio considerável, uma vez que me vi diante da difícil escolha entre adotar o novo padrão proposto pela Vercel ou seguir a abordagem habitual que emprego em meu trabalho e projetos pessoais. No final, optei por utilizar a arquitetura com a qual já tenho maior familiaridade. Essa escolha foi influenciada pela minha experiência prévia, visando otimizar a eficiência e a coesão do desenvolvimento, proporcionando um ambiente em que me sinto mais confortável e capaz de alcançar resultados consistentes.
  * `src` – Esta pasta abriga todo o código-fonte da minha aplicação.
    *  `pages` – Contém as páginas da aplicação, incluindo as paginas de api.
    *  `modules` – Aqui estão os módulos específicos das minhas páginas.
    *  `shared` – Esta pasta contém elementos compartilhados tanto entre páginas quanto entre componentes.
        * `assets` – Nesta pasta estão armazenadas todas as imagens e ícones utilizados na aplicação.
        * `components` – Aqui são mantidos os componentes reutilizáveis. Adotei o padrão de componentes chamado Atomic Design, onde separo os componentes em pastas denominadas atoms / molecules / organisms / templates, visando facilitar a estrutura para escalabilidade do projeto.
        * `providers` –  Esta pasta abriga os provedores da minha aplicação, como Contextos, Redux, Layouts, entre outros.
        * `types` –  Aqui são definidas as interfaces utilizadas globalmente na aplicação.
        * `styles` –  Nesta pasta estão os estilos globais da aplicação.
        * `utils` –  Aqui são armazenadas as funções úteis que são utilizadas em diversos pontos da aplicação.


## Requisitos para rodar o projeto
- [Npm](https://www.npmjs.com/)
- [NodeJs](https://nodejs.org/en/)

## Como rodar o projeto

Para rodar é essencial que tenha o [node](https://nodejs.org/en/) instalado, caso não tenha siga o passo a passo logo abaixo

#### Ubuntu 
```
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Debian, as root
```
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs
```

#### [Outra distribuição Linux](https://nodejs.org/en/download/package-manager/)

#### Windows
Acesse o site do [NodeJs](https://nodejs.org/en/) e instale a versão LTS

Com tudo já instalado primeiro faça o clone deste repositório
```
https://github.com/LeonardoMessias98/star-wars-planets.git
```

Acesse a pasta do repositório pelo terminal
```
  cd star-wars-planets
```

Agora instale as dependencias do projeto
```yarn``` ou ```npm install```

Apos ter instalado as dependencias do projeto é necessário rodar o servidor local do projeto
```
yarn dev
```
ou
```
npm start
```

A aplicação rodará na porta 3000 do seu localhost -> [http://localhost:3000](http://localhost:3000/)

## Tecnologias e bibliotecas
* [`react`](https://pt-br.reactjs.org/)
* [`nextjs`](https://nextjs.org/)
* [`typescript`](https://www.typescriptlang.org/)
* [`styled-components`](https://styled-components.com/)
* [`eslint`](https://eslint.org/)
* [`jest`](https://jestjs.io/pt-BR/)
* [`contextApi`](https://pt-br.reactjs.org/docs/context.html)
* [`react-icons`](https://react-icons.github.io/react-icons/)
* [`axios`](https://github.com/axios/axios)

## Duvidas
  Para qualquer duvida estou a total disposição para explicar melhor o meu código e as decisões que tomei de arquitetura. <img src="https://freepngimg.com/thumb/cartoon/87237-plant-fathers-greeting-yoda-green-day-card.png" width="50px" height="40px"/>
