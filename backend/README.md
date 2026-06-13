# Backend — Projeto Evol

Este diretório contém a API e a lógica de backend do Projeto Evol.

## Convenções de nomenclatura

- **Banco de dados:** Nomes em SNAKE_CASE (MAIÚSCULO) para tabelas e colunas (ex.: `USERS`, `USER_ID`).
- **Projeto / Código:** Identificadores em camelCase para variáveis, funções e propriedades (ex.: `userId`, `createdAt`).

## Desenvolvimento local (pré-requisitos)

- Docker e Docker Compose (recomendado)
- Node.js (versão compatível com o `package.json`)

## Próximos passos

- Adicionar `docker-compose.yml` com Postgres para desenvolvimento local
- Criar `.env.example` com variáveis de conexão
- Incluir migrations iniciais com `BIGINT` como PK sequencial
# projeto_evol
Projeto para aprendizado de programação web. Site gameficado com controle de metas para o usuário. O intuito é ajudar as pessoas a terem mais foco.
