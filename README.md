# Introdução
Este projeto é uma aplicação web desenvolvida utilizando AdonisJS, um framework Node.js.
Para gerenciamento de autenticação de usuários e consumo de uma API para listar receitas 
retiradas do site Tudo Receitas.

# Instalação
Siga os passos abaixo para configurar e executar o projeto localmente:

# 1. Clone este repositório para seu embiente local:
git clone https://github.com/CaiqueLaurentino/receitas.git

# 2. Navegue até o diretório:
cd receitas

# 3. Instale as dependência com Yarn:
yarn install

# 4. Configure as variáveis de ambiente:
Crie o arquivo .env

# 5. Execute as migrações do banco de dados:
node ace migration:run

# 6. Inicie o servidor:
node ace serve --watch

# 7. Acesse a aplicação:
http://localhost:3333

# Funcionalidades
Este projeto oferece as seguintes funcionalidades:

Autenticação de usuários: 
Os usuários podem se cadastrar, fazer login e logout na aplicação.

Listagem de receitas: 
A aplicação consome uma API para listar receitas do site Tudo Receitas.

# Tecnologias Utilizadas
AdonisJS: Framework Node.js para construção de aplicações web.
Edge: Template engine padrão do AdonisJS.
Axios: Cliente HTTP para consumir a API de listagem de receitas.
MySQL: Banco de dados relacional para armazenamento de dados dos usuários e receitas.
