# A3-Usabilidade-Web-Mooca-2026

## Descrição do Projeto
Este projeto é uma aplicação web front-end responsiva que simula um catálogo de produtos dinâmico ("Catálogo de produtos"). O sistema consome dados reais através da API pública DummyJSON e os exibe em uma interface limpa e amigável. O foco do projeto é proporcionar uma boa experiência de usabilidade, permitindo que o usuário interaja facilmente com a vitrine e gerencie suas escolhas.

## Funcionalidades
* **Catálogo Dinâmico:** Os produtos são carregados via requisição assíncrona (Fetch API) e renderizados na tela utilizando templates.
* **Busca em Tempo Real:** Uma barra de pesquisa permite filtrar instantaneamente os produtos pelo nome digitado.
* **Ordenação de Preços:** É possível ordenar a lista de produtos exibida alternando entre do "Menor para o Maior" preço e vice-versa.
* **Sistema de Favoritos:** Os usuários podem favoritar (e desfavoritar) produtos clicando no ícone de estrela. Essa escolha é salva no `localStorage` do navegador, mantendo os dados salvos mesmo se a página for recarregada.
* **Página de Favoritos Dedicada:** Uma tela exclusiva que lê o armazenamento local e exibe apenas os itens que o usuário demonstrou interesse, com opção de removê-los diretamente por lá.

## Tecnologias Utilizadas
* **HTML5 e CSS3:** Para a marcação e estilos complementares.
* **JavaScript:** Lógica de consumo de API, filtros e manipulação do DOM.
* **Bootstrap 5:** Framework CSS utilizado para garantir a responsividade (sistema de grid) e componentização (navbar, botões, cards).
* **Handlebars.js:** Biblioteca de motor de templates (template engine) utilizada para criar e preencher os *cards* de produtos de forma dinâmica.
* **Iconify:** Utilizado para a renderização eficiente de ícones em SVG.

---

## Integrantes do Projeto
* **[Gabriel Dias de Moraes Ferreira]** - RA: [825157250]
* **[Gustavo de Cássio Gomes Perez]** - RA: [823116201]
* **[Heloisy Aparecida Fernandes Pereira]** - RA: [82320268]