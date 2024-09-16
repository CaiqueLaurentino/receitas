# Introdução
Este projeto é uma aplicação web desenvolvida utilizando AdonisJS, um framework Node.js. A aplicação oferece autenticação de usuários e realiza scraping de dados de receitas retiradas do site [Tudo Receitas](https://www.tudoreceitas.com).

# Instalação
Siga os passos abaixo para configurar e executar o projeto localmente:

1. Clone este repositório para seu ambiente local:
    ```bash
    git clone https://github.com/CaiqueLaurentino/receitas.git
    ```

2. Navegue até o diretório:
    ```bash
    cd receitas
    ```

3. Instale as dependências com Yarn:
    ```bash
    yarn install
    ```

4. Configure as variáveis de ambiente:
   Crie o arquivo `.env` com as variáveis apropriadas.

5. Execute as migrações do banco de dados:
    ```bash
    node ace migration:run
    ```

6. Inicie o servidor:
    ```bash
    node ace serve --watch
    ```

7. Acesse a aplicação:
    [http://localhost:3333](http://localhost:3333)

# Funcionalidades
Este projeto oferece as seguintes funcionalidades:

- **Autenticação de usuários**: Os usuários podem se cadastrar, fazer login e logout na aplicação.
- **Listagem de receitas**: A aplicação realiza scraping dos dados do site [Tudo Receitas](https://www.tudoreceitas.com) para listar receitas.

# Tecnologias Utilizadas
- **AdonisJS**: Framework Node.js para construção de aplicações web.
- **Edge**: Template engine padrão do AdonisJS.
- **Axios**: Cliente HTTP utilizado para fazer scraping dos dados de receitas.
- **MySQL**: Banco de dados relacional para armazenamento de dados dos usuários e receitas.
