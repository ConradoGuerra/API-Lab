# WA Project"

## Tabela de conteúdos

- [Sobre](#Sobre)
- [Instalação](#Instalação)
   * [Como usar](#como-usar)
   * [Testes](#testes)
   * [Desenvolvimento](#desenvolvimento)
   * [Tecnologias](#tecnologias)


Sobre
======

Projeto desenvolvido com o intuito de realizar a prova técnica requerida, o qual será submetido à avaliação técnica.

Esta API possui oito end-poins:
- Criação do laboratório - */laboratory/*
- Atualização do laboratório - */laboratory/:labId*
- Exclusão do laboratório - */laboratory/:labId*
- Busca do laboratório - */laboratory/:labId*
- Busca os laboratórios que possuem o mesmo exame - */examName/:examName*
- Criação do exame - */exam/*
- Atualização do exame - */exam/:examId*
- Exclusão do exame - */exam/:examId*
- Criação de laboratórios em massa - */bulkLaboratory/*
- Atualização de laboratórios em massa - */bulkLaboratory/:labName*
- Criação de exames em massa - */bulkExam/*

Instalação
==========

#### Clone este repositório:
 $ git clone <https://github.com/ConradoGuerra/API-Lab>

#### Você deve possuir instalado o node.js:
 https://nodejs.org/en/

Como usar
=========

No projeto serão criadas duas tabelas, uma para laboratórios (laboratory) e outra para exames (exam).

Ao criar o laboratório e o exame será possibilitado:
- Buscar laboratório ou exame
- Atualizar laboratório ou exame
- Excluir laboratório ou exame
- Buscar laboratório pelo noms do exame
- Criar laboratórios ou exames em massa
- Atualizar laboratórios em massa


Testes
======

Para testar:
- $ npm test

Tecnologias
===========

As tecnologias utilizadas para o projeto foram:
- Node.Js
- Yarn
- Express
- Nodemon
- Jest
- Supertest
- Dotenv
- Sequelize
- Sqlite3
- Express-validator
