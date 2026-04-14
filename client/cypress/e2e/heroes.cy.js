describe('Listagem de heróis', () => {

    beforeEach(() => {
    cy.login('test@test.com', 'test123')
    cy.visit('/heroes')
  })

  it('Listar herois apos login', () => {
    cy.get("[data-cy='name']").eq('6')
    cy.contains("The Smoker").should('be.visible')
  })


})