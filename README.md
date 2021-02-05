# Sobre o projeto

## Pastas
* Basicamente todo o código importante se encontra na pasta **src**
* A pasta **pages** é onde se encontram as telas do app
* Na pasta **components** é possível encontrar componentes que se repetem mais de uma vez em uma page ou é compartilhado entre várias pages, como campos de input e botões.
* A pasta **colors** é onde encontram as cores usadas nos arquivos _styles.ts_.

## Estrutura de pages e components
Toda page ou component é constituído por uma pasta com seu nome. Essa pasta sempre possuirá 2 arquivos, _index.tsx_ e _styles.ts_.

### Index.tsx
Esses arquivos são onde o TSX está. TSX pode ser comparado com HTML, então, é como se fosse a estrutura da page/component

### Styles.ts
Arquivos contendo os estilos de uma page/component. No React Native, é preciso estilizar praticamente todo componente, já que nesse não é possível ter hierarquia de estilos como no css normal. 