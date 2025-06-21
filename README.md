# Projeto de Automação com Cypress DESAFIO 2

Este projeto contém testes automatizados para as páginas de Login e Produtos, utilizando o Cypress.

## Pré-requisitos

- Node.js (versão 16 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Configuração do Projeto

1. Clone este repositório (ou crie a estrutura de pastas manualmente):
   ```bash
   mkdir cypress-automation
   cd cypress-automation
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Certifique-se de que os arquivos `login.html` e `produtos.html` estejam sendo servidos em `http://127.0.0.1:5500/`.
   Você pode usar uma extensão de servidor local para VS Code, como o "Live Server", ou qualquer outro servidor HTTP simples.

## Executando os Testes

Para executar os testes em modo interativo (abrir a interface do Cypress):

```bash
npx cypress open
```

Para executar os testes em modo headless (via linha de comando):

```bash
npx cypress run
```

## Casos de Teste

### Login Page (`login.html`)

Foram criados 10 casos de teste para a página de login:

1.  **Login bem-sucedido com credenciais válidas:** Verifica se o usuário consegue fazer login com e-mail (`admin@admin.com`) e senha (`admin@123`) corretos e é redirecionado para a página de produtos.
2.  **Mensagem de erro para e-mail inválido:** Verifica se uma mensagem de erro é exibida ao tentar fazer login com um e-mail não registrado.
3.  **Mensagem de erro para senha inválida:** Verifica se uma mensagem de erro é exibida ao tentar fazer login com uma senha incorreta.
4.  **Mensagem de erro para e-mail vazio:** Verifica se uma mensagem de erro é exibida ao tentar fazer login com o campo de e-mail vazio.
5.  **Mensagem de erro para senha vazia:** Verifica se uma mensagem de erro é exibida ao tentar fazer login com o campo de senha vazio.
6.  **Mensagem de erro para ambos os campos vazios:** Verifica se uma mensagem de erro é exibida ao tentar fazer login com ambos os campos (e-mail e senha) vazios.
7.  **Fechar mensagem de erro:** Verifica se a mensagem de erro desaparece ao clicar no botão de fechar.
8.  **Não navegar após falha no login:** Verifica se a página não é redirecionada após uma tentativa de login falha.
9.  **Foco no campo de e-mail ao carregar a página:** Verifica se o campo de e-mail está focado automaticamente ao carregar a página de login.
10. **Limpar campos após tentativa de login falha:** Verifica se os campos de e-mail e senha são limpos após uma tentativa de login falha.

### Products Page (`produtos.html`)

Foram criados 10 casos de teste para a página de produtos:

1.  **Exibir modal de criação de produto:** Verifica se o modal de criação de produto é exibido ao clicar no botão "Criar".
2.  **Fechar modal de criação de produto:** Verifica se o modal de criação de produto é fechado ao clicar no botão "Sair".
3.  **Mensagem de erro ao tentar salvar produto vazio:** Verifica se uma mensagem de erro é exibida ao tentar salvar um produto com campos vazios.
4.  **Adicionar novo produto com dados válidos:** Verifica se um novo produto é adicionado com sucesso à tabela com dados válidos.
5.  **Exibir múltiplos produtos na tabela:** Verifica se múltiplos produtos são exibidos corretamente na tabela após serem adicionados.
6.  **Limpar campos do formulário após criação bem-sucedida:** Verifica se os campos do formulário são limpos após a criação bem-sucedida de um produto.
7.  **Validar entrada numérica para o campo de quantidade:** Verifica se o campo de quantidade aceita apenas entradas numéricas.
8.  **Validar entrada numérica para o campo de valor:** Verifica se o campo de valor aceita apenas entradas numéricas.
9.  **Manter dados do produto ao fechar e reabrir o modal (se não salvo):** Verifica se os dados inseridos no formulário são mantidos ao fechar e reabrir o modal, caso o produto não tenha sido salvo.
10. **Navegar de volta ao clicar em "Voltar":** Verifica se a página navega para a página anterior ou inicial ao clicar no botão "Voltar".


