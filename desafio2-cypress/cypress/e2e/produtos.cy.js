describe('Testes de Modal de Produto', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/produtos.html');
  });
  it('1.exibir modal de criação de produto ao clicar em "criar", resultado: sucesso', () => {
    cy.get('#btn-adicionar').click();
    cy.get('#cadastro-produto').should('be.visible');
    cy.wait(500);
  });

  it('2.fechar o modal de criação de produto ao clicar no botão "sair", resultado: erro', () => {
    cy.get('#btn-adicionar').click();
    cy.get('#cadastro-produto').should('be.visible');
    cy.get('#btn-sair').click();
    cy.get('#cadastro-produto').should('not.be.visible');
    cy.wait(500);
  });

  it('3.exibir uma mensagem de erro ao tentar salvar um produto com campos vazios, resultado: erro', () => {
    cy.get('#btn-adicionar').click();
    cy.get('#btn-salvar').click();
    cy.get('#cadastro-produto .alert-danger').should('be.visible').and('contain', 'Todos os campos são obrigatórios!');
  });

  it('4.adicionar um novo produto com sucesso ao preencher dados válidos, resultado: sucesso', () => {
    cy.get('#btn-adicionar').click();
    cy.get('#codigo').type('PROD001');
    cy.get('#nome').type('Produto Teste 1');
    cy.get('#quantidade').type('10');
    cy.get('#valor').type('99.99');
    cy.get('#data').type('2025-06-21');
    cy.get('#btn-salvar').click();
    cy.get('table tbody tr').should('have.length', 1);
    cy.get('table tbody tr').first().should('contain', 'PROD001').and('contain', 'Produto Teste 1');
  });

  it('5.exibir muitiplos produtos na tabela, resultado: sucesso', () => {
    // Add first product
    cy.get('#btn-adicionar').click();
    cy.get('#codigo').type('PROD001');
    cy.get('#nome').type('Produto Teste 1');
    cy.get('#quantidade').type('10');
    cy.get('#valor').type('99.99');
    cy.get('#data').type('2025-06-21');
    cy.get('#btn-salvar').click();
    });
    // Add second product
    it('resultado: sucesso', () => {
    cy.get('#btn-adicionar').click();
    cy.get('#codigo').type('PROD002');
    cy.get('#nome').type('Produto Teste 2');
    cy.get('#quantidade').type('20');
    cy.get('#valor').type('199.99');
    cy.get('#data').type('2025-06-22');
    cy.get('#btn-salvar').click();
  });

  it('6.adiciona um 3° produto, resultado: sucesso', () => {
    cy.get('#btn-adicionar').click();
    cy.get('#codigo').type('PROD003');
    cy.get('#nome').type('Produto Teste 3');
    cy.get('#quantidade').type('30');
    cy.get('#valor').type('299.99');
    cy.get('#data').type('2025-06-23');
    cy.get('#btn-salvar').click();
    });
    it('após criação do 3° produto, ele apaga os dados escritos e fica em branco, resultado: sucesso', () => {
    cy.get('#btn-adicionar').click();
    cy.get('#codigo').should('have.value', '');
    cy.get('#nome').should('have.value', '');
    cy.get('#quantidade').should('have.value', '');
    cy.get('#valor').should('have.value', '');
    cy.get('#data').should('have.value', '');
  });

  it('7.validar apenas números no campo de quantidade, resultado: erro', () => {
    cy.get('#btn-adicionar').click();
    cy.get('#quantidade').type('abc');
    cy.get('#quantidade').should('have.value', '');
  });

  it('8.validar apenas números no campo de valor, resultado: erro', () => {
    cy.get('#btn-adicionar').click();
    cy.get('#valor').type('xyz');
    cy.get('#valor').should('have.value', '');
  });

  it('9.manter os dados do produto ao fechar e reabrir o modal, resultado: erro - não manteve os dados', () => {
    cy.get('#btn-adicionar').click();
    cy.get('#codigo').type('PROD001');
    cy.get('#nome').type('Produto Teste 1');
    cy.get('#quantidade').type('10');
    cy.get('#valor').type('99.99');
    cy.get('#data').type('2025-06-21');
    cy.get('#btn-sair').click();
    cy.get('#btn-adicionar').click();
    cy.get('#codigo').should('have.value');
  });

  it('10.navegar de volta ao clicar no botão "voltar", resultado: erro', () => {
    cy.get('a.nav-link').contains('Voltar').click();
    cy.url().should('not.include', 'http://127.0.0.1:5500/produtos.html#');
  });
});