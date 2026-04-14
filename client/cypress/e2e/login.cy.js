describe('Cypress Heroes -Tests', () => {

   beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.contains('button', 'Login').click()
  })

  it('Login com usuário válido', () => {
    cy.get('[data-cy="email"]').type("test@test.com")
    cy.get("[data-cy='password']").type('test123')
    cy.contains('button', 'Sign in').click();
    cy.contains('Logout').should('be.visible')
  })

  it('Login inválido', () => {
    cy.get('[data-cy="email"]').type("test@invalid.com")
    cy.get("[data-cy='password']").type('test123')
    cy.contains('button', 'Sign in').click();
    cy.contains("Invalid email or password").should('be.visible')
  })

  it('Login incompleto', () => {
    cy.get('[data-cy="email"]').type("test@invalid.com")
    cy.contains('button', 'Sign in').click();
    cy.get('.text-red-500').should('be.visible')
  })
})
