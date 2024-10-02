# NODE BOILERPLATE

**NODE BOILERPLATE** é um ponto de partida simples para seus projetos em Node.js, com TypeScript já configurado de forma moderna e eficiente. Não perca tempo configurando do zero, use este boilerplate para acelerar o desenvolvimento!

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

### 📦 Dependências

- [TypeScript](https://www.npmjs.com/package/typescript): Superset para desenvolvimento em larga escala com JavaScript.
- [TSX](https://www.npmjs.com/package/tsx): Executa TypeScript (tsx), permitindo que o Node.js rode arquivos TypeScript diretamente.
- [Tsup](https://www.npmjs.com/package/tsup): Empacota sua biblioteca TypeScript sem necessidade de configuração, utilizando esbuild.
- [@types/node](https://www.npmjs.com/package/@types/node): Definições de tipos para Node.js.

### 📄 Arquivos Importantes

- `.gitignore`: Arquivo que ignora pastas como `node_modules`.
- `.env`: Arquivo de variáveis de ambiente.
- `tsconfig.json`: Arquivo de configuração do TypeScript.

### ⚡ Scripts Disponíveis

- `npm run dist`: Compila os arquivos TypeScript para JavaScript na pasta `dist`.
- `npm run start:dev`: Inicia o servidor em modo de desenvolvimento com variáveis de ambiente carregadas do `.env`.
- `npm run start:watch`: Inicia o servidor em modo de desenvolvimento e recarrega automaticamente quando há mudanças no código.
- `npm run start:dist`: Compila o projeto e executa a versão compilada na pasta `dist`.

## 👨‍💻 Como Usar

Para clonar e rodar este projeto, você precisará ter o [Git](https://git-scm.com), [Node.js v20+](https://nodejs.org/en/) e [NPM v10+](https://nodejs.org/en/) instalados em seu computador.

No seu terminal, execute os seguintes comandos:

```bash
# Clone o repositório
$ git clone https://github.com/Lindembergol/minimal-api-formula1-node.js-fastify

# Entre na pasta do projeto
$ cd minimal-api-formula1-node.js-fastify

# Instale as dependências
$ npm install

```

## 🌱 Usos Futuros

Este projeto, embora simples, foi criado para servir como uma base mínima para uma API. Ele pode ser facilmente expandido para projetos maiores e mais complexos, como sistemas de microserviços, APIs REST completas ou mesmo backends para aplicativos web e móveis.

Com sua estrutura inicial já configurada em TypeScript, ele fornece uma base sólida para escalar a aplicação e incluir funcionalidades adicionais conforme necessário. Isso economiza tempo de configuração inicial, permitindo que o foco esteja no desenvolvimento das funcionalidades principais e na construção de um sistema robusto desde o começo.
