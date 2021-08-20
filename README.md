# DS-Deliver
[![NPM](https://img.shields.io/npm/l/express)](https://github.com/brunocesaromax/dsdeliver-sds2/blob/main/LICENSE)

# Sobre o projeto

Aplicação web: https://bruno-cesar-sds2.netlify.app/

DS-Deliver é uma aplicação full stack web e mobile construída durante o acompanhamento do evento __Semana DevSuperior 2.0__ organizado pela DevSuperior.

A aplicação consiste em pedidos e entrega de comida pela internet.

__Observação:__ Aplicação mobile não está em produção.

## Layout Web

![Img 1](https://github.com/brunocesaromax/dsdeliver-sds2/blob/main/backend/src/main/resources/static/images/ds-img1.png)
![Img 2](https://github.com/brunocesaromax/dsdeliver-sds2/blob/main/backend/src/main/resources/static/images/ds-img2.png)
![Img 3](https://github.com/brunocesaromax/dsdeliver-sds2/blob/main/backend/src/main/resources/static/images/ds-img3.png)

## Modelo Conceitual

![Modelo Conceitual](https://github.com/brunocesaromax/dsdeliver-sds2/blob/main/backend/src/main/resources/static/images/class-diagram.png)

## Modelo de banco de dados

![Modelo bd](https://github.com/brunocesaromax/dsdeliver-sds2/blob/main/backend/src/main/resources/static/images/entity-diagram.png)

## Tecnologias utilizadas

### Back end
- Java 11
- Spring Boot 2.4.1
- JPA/ Hibernate
- H2 [test] (database: testdb | username: sa)
- PostgreSql (database: dsdeliver | username: postgres  | password: 1234567)
- Maven 

### Front end
- HTML / CSS / JS / Typescript
- React / Axios / API Mapbox

### Mobile
- React Native / Axios / Expo / Typescript

## Como executar o projeto

### Back end

Pré-requisitos: Java 11

  1 - Clonar o repositório: 
  
  ```bash 
  git clone https://github.com/brunocesaromax/dsdeliver-sds2.git
  ```
  
  
  2 - Entrar na pasta do projeto back end: 
  
  ```bash 
  cd backend
  ```
  
  3 - Executar o projeto:
  
  
  ```bash 
  ./mvnw spring-boot:run
  ```

### Front end web

Pré-requisitos: node >= 10.16, npm >= 5.6 

  1 - Clonar o repositório: 
  
  ```bash 
  git clone https://github.com/brunocesaromax/lancamentos.git
  ```
  
  
  2 - Entrar na pasta do projeto front end: 
  
  ```bash 
  cd front-web
  ```
  
  3 - Instalar dependências
  
  ```bash 
  npm install
  ```
  
  4 - Executar o projeto:
  
  
  ```bash
  npm start
  ```
  
### Front end mobile

Pré-requisitos: node >= 10.16, npm >= 5.6, expo-cli >= 4

  1 - Clonar o repositório: 
  
  ```bash 
  git clone https://github.com/brunocesaromax/lancamentos.git
  ```
  
  
  2 - Entrar na pasta do projeto front end: 
  
  ```bash 
  cd front-mobile
  ```
  
  3 - Instalar dependências
  
  ```bash 
  npm install
  ```
  
  4 - Executar o projeto:
  
  
  ```bash
  expo start
  ```
  
# Autor

Bruno César Vicente

 <a href="https://www.linkedin.com/in/bruno-cesar-vicente" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
