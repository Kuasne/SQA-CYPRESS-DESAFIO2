# 📌 Projeto SQA - Desafio 1 e Desafio 2 | Engenharia de Software - UNIFAA

**Aluno:** Lorenzo
**Matéria:** SQA - Qualidade de Software
**Professor:** Serafim
**Ano:** 2025

---

## 📚 Sobre o Projeto

Este repositório contém os dois desafios desenvolvidos durante a disciplina de SQA (Software Quality Assurance), com foco em automação de testes e boas práticas de validação de software.

---

## ✅ Desafio 1 - Sistema de Login (Frontend HTML + CSS + JS)

### 📋 Descrição:

O primeiro desafio foi o desenvolvimento de uma **tela de Login simples**, utilizando **HTML**, **CSS** e **JavaScript puro**, simulando um fluxo de autenticação básico.

### 🌟 Funcionalidades implementadas:

* Campos de **E-mail** e **Senha**.
* Validação de **login inválido** (usuário ou senha errada).
* Mensagem de erro em caso de falha.
* Redirecionamento para a página de produtos após login bem-sucedido.

### 🔧 Estrutura da pasta:

```
desafio1-login/
├── index.html
├── login.html
├── style.css
└── script.js
```

---

## ✅ Desafio 2 - Automação de Testes E2E com Cypress

### 📋 Descrição:

No segundo desafio, a proposta foi automatizar os testes de **ponta a ponta (E2E)** para as telas criadas no Desafio 1.
Utilizei o framework **Cypress** para validar todas as regras de negócio da tela de **Login** e da tela de **Cadastro de Produtos**.

### 🌟 Funcionalidades testadas:

#### ✔️ Testes da Tela de Login:

* Login com **email inválido**
* Login com **senha inválida**
* Teste de **campos vazios**
* **Exibição e fechamento de mensagens de erro**
* Garantir que o sistema **não navegue após login inválido**
* Limpeza de campos após erro
* Login **bem-sucedido com redirecionamento**

#### ✔️ Testes da Tela de Produtos:

* **Abertura do modal** de cadastro
* **Fechamento do modal**
* Validação de **campos obrigatórios**
* Cadastro de **novo produto**
* Exibição de **múltiplos produtos**
* **Validação de inputs numéricos** (quantidade e valor)
* Verificação se os campos são limpos após cada cadastro
* Teste de **persistência de dados ao reabrir o modal**
* **Botão voltar** da navbar

---

## 👷️ Observações:

* Durante os testes, alguns cenários apresentaram **falhas na automação**, principalmente envolvendo **visibilidade de modal** e **navegação entre telas**.
  Porém, ao testar manualmente, o comportamento estava correto. Isso reforça a importância de testar tanto manual quanto automatizado.

* O Cypress foi executado no ambiente local através da URL:
  `http://127.0.0.1:5500/`

---

## ✅ Como Rodar os Testes Cypress:

1. Navegue até a pasta:

```bash
cd desafio2-cypress
```

2. Instale as dependências (se ainda não tiver feito):

```bash
npm install
```

3. Rode o Cypress:

```bash
npx cypress open
```

4. Selecione os testes E2E na interface do Cypress.

---

## 👨‍💻 Contato:

* Nome: Lorenzo
* Curso: Engenharia de Software - UNIFAA
* Github: [github.com/Kuasne](https://github.com/Kuasne)

---
