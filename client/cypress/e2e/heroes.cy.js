describe('Listagem de heróis', () => {

  beforeEach(() => {
    cy.login('admin@test.com', 'test123')
    cy.visit('/heroes')
  })

  it('Listar herois apos login', () => {
    cy.get("[data-cy='name']").eq('6').should('exist')
    cy.contains("The Smoker").should('be.visible')
    cy.get("[data-cy='hero-card']").should('have.length', 7)
  })

  it.only('Criar novo heroi', () => {
    cy.get("[href='/heroes/new']").click()
    cy.get("[data-cy='nameInput']").type('CatWoman')
    cy.get("[data-cy='priceInput']").type('100')
    cy.get("[data-cy='fansInput']").type('500')
    cy.get("[data-cy='savesInput']").type('300')
    cy.get("[data-cy='powersSelect']").select(['Flying', 'Invisibility'])
    cy.get("[data-cy='avatarFile']").selectFile('cypress/fixtures/avatar.jpg')
    cy.contains('Button', 'Submit').click()
    cy.url().should('include', '/heroes')
    cy.contains('CatWoman').should('be.visible')
  })

})