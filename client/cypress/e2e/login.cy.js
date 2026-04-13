describe('Cypress Heroes -Tests', () => {

  it('Login com usuário válido', () => {
    cy.visit('http://localhost:3000')
    cy.contains('button', 'Login').click()
    cy.get('[data-cy="email"]').type("test@test.com")
    cy.get("[data-cy='password']").type('test123')
     cy.get('button').contains('Sign in').click();
  })

  it('Login invalido', () => {
    
  })
})
