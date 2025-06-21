describe('Login Page Tests', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/login.html');
    });
    it('1. email inválido, resultado: sucesso', () => {
      cy.get('#email').type('invalid@teste.com');
      cy.get('#senha').type('admin@123');
      cy.get('#btn-entrar').click();
      cy.get('.alert-danger').should('be.visible').and('contain', 'E-mail ou senha inválidos');
    });
  
    it('2.senha inválida, resultado: sucesso', () => {
      cy.get('#email').type('admin@admin.com');
      cy.get('#senha').type('wrongpassword');
      cy.get('#btn-entrar').click();
      cy.get('.alert-danger').should('be.visible').and('contain', 'E-mail ou senha inválidos');
    });
  
    it('3.campo email vazio, resultado: erro, pq o campo de email está vazio!', () => {
      cy.get('#senha').type('admin@123');
      cy.get('#btn-entrar').click();
      cy.get('.alert-danger').should('be.visible').and('contain', 'E-mail ou senha inválidos');
    });
  
    it('4.campo senha vazio, resultado: erro, pq o campo de senha está vazio!', () => {
      cy.get('#email').type('admin@admin.com');
      cy.get('#btn-entrar').click();
      cy.get('.alert-danger').should('be.visible').and('contain', 'E-mail ou senha inválidos');
    });
  
    it('5.compos email e senha vazios, resultado: erro', () => {
      cy.get('#btn-entrar').click();
      cy.get('.alert-danger').should('be.visible').and('contain', 'E-mail ou senha inválidos');
    });
  
    it('6.oculta a mensagem de erro no botão fechar, resultado: sucesso, a mensagem foi ocultada', () => {
      cy.get('#email').type('invalid@teste.com');
      cy.get('#senha').type('wrongpassword');
      cy.get('#btn-entrar').click();
      cy.get('.alert-danger').should('be.visible');
      cy.get('.alert-danger .close').click();
      cy.get('.alert-danger').should('not.be.visible');
    });
  
    it('7.login invalido email e senha (incorretos), resultado: sucesso', () => {
      cy.get('#email').type('invalid@teste.com');
      cy.get('#senha').type('wrongpassword');
      cy.get('#btn-entrar').click();
      cy.url().should('include', 'http://127.0.0.1:5500/login.html');
    });
    it('8.digitar um email e senha inválidos, resultado: sucesso', () => {
      cy.get('#email').type('invalid@teste.com');
      cy.get('#senha').type('wrongpassword');
      cy.get('#btn-entrar').click();
       });
    it('8.limpar o campo de entrada após tentativa de login inválida, resultado: sucesso', () => {
      cy.get('#email').should('have.value', '');
      cy.get('#senha').should('have.value', '');
    });
    it('9.login com sucesso, resultado: sucesso e após login foi redirecionado para a tela de produtos', () => {
      cy.get('#email').type('admin@admin.com');
      cy.get('#senha').type('admin@123');
      cy.get('#btn-entrar').click();
      cy.url().should('include', 'http://127.0.0.1:5500/produtos.html?teste=123');
    });
  });

