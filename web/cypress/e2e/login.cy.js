///<reference types="cypress" />

describe('Login', () => {

  it('Deve logar com sucesso', () => {
    cy.Iniciar()
    cy.loginSuccess('papito@webdojo.com', 'katana123')
    cy.get('[data-cy="user-name"]')
      .should('have.text', 'Fernando Papito')
      .and('be.visible')
    cy.get('[data-cy="welcome-message"]')
      .should('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
      .and('be.visible')
  })

  it('Não deve logar com senha inválida', () => {
    cy.Iniciar()
    cy.loginSuccess('papito@webdojo.com', 'katana1234')
    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })

it('Não deve logar com email inválido', () => {
  cy.Iniciar()
    cy.loginSuccess('404papito@webdojo.com', 'katana123')
  cy.contains('Acesso negado! Tente novamente.')
    .should('be.visible')
})
})