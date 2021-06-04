# Projeto Base de um ECommerce

<p align="center">Esse projeto tem como base para criação bem basica de um ecommerce, com produtos e usuario/clientes</p>

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js] backend (https://nodejs.org/en/)
- [Vue.js] Framework: Quasar (https://quasar.dev/)

### Features

- [-] Cadastro de usuário / clientes -- ( Parcial / Backend já implementado )
- [x] Exibição dos produtos 
- [-] Cadastro de produtos -- ( Parcial / Backend já implementado )
- [ ] Gerenciamento de login / conta
- [ ] Exibição dos produtos 

## Como executar o projeto

Este projeto é divido em duas partes:
1. Backend (pasta backend) 
2. Frontend (pasta frontend)

💡Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone 

# Acesse a pasta do projeto no terminal/cmd

# Vá para a pasta backend
$ cd backend

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:3000

```

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone 

# Acesse a pasta do projeto no seu terminal/cmd

# Vá para a pasta da aplicação Front End
$ cd frontend/ecommerce

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ quasar dev

# A aplicação será aberta na porta:8080 - acesse http://localhost:8080

```

#### 🧭 Para Incluir novos produtos e novos usuarios (Backend)

```bash
# A aplicação ainda não esta finalizada, então algumas features só podem ser acessadas através das rotas.

#Para cadastrar novos usuarios: 
#Acesse pela rota POST /usuarios , passando JSON no body nesse formato
{
	"nome": "Nome do usuario/cliente",
	"email": "email@email.com",
	"senha": "senha",
	"data_nascimento": "dd/mm/aaaa", // data de nascimento
	"cpf": "123456789101", //cpf
	"id_cargo": 3 // ID do cargo:  1 - Cliente,  2 - Administrador, 3 - Atendente, 4 - Vendedor
}

#Para cadastrar novos produtos: 
#Acesse pela rota POST /produtos , passando JSON no body nesse formato
{
	"id_usuario": 9, // Id do usuario
	"titulo": "Titulo do produto",
	"foto": "link da todo do produto",
	"qtd": 1, // Quantidade de produtos
	"preco": 100, // Preço do produto
	"descricao": "Descrição do produto"
}

#Para consulta de produtos: 
#Acesse pela rota GET /produtos , passando JSON no body nesse formato
# GET /produtos = retorna todos os produtos.
# GET "/produtos/1" ou "/produtos/parte-do-titulo" = Irá retornar o produto especifico ou os produtos que tenham a palavra no titulo.

#Para deletar produto:
# DELETE /produto/id-produto = Deleta o produto.


```

#### 🧭 Para Incluir novos produtos e novos usuarios (Backend)

```bash
# A aplicação ainda não esta finalizada, então algumas features só funcionam acessando as rotas.

#Para cadastrar novos produtos: 
#Acesse pela rota POST /produtos , passando JSON no body nesse formato
{
	"id_usuario": 9, // Id do usuario
	"titulo": "Titulo do produto",
	"foto": "link da todo do produto",
	"qtd": 1, // Quantidade de produtos
	"preco": 100, // Preço do produto
	"descricao": "Descrição do produto"
}

```