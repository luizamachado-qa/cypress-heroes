describe('Controle de permissão', () => {
    
  it('Visitante não possui permissão para interagir com o sistema', () => {
    cy.visit('/heroes')
    cy.get("[data-cy='like']").first().click()
    cy.get(".gap-4").should('be.visible') 
    cy.contains('Button', 'Ok').click()
    cy.get("[data-cy='money']").should('be.visible') 
    cy.get("[href='/heroes/new']").should('not.exist')
  })

   it('Usuário não pode criar, editar ou deletar heróis', () => {
    cy.login('test@test.com', 'test123')
    cy.visit('/heroes')
    cy.get("[data-cy='like']").first().click()
    cy.get(".gap-4").should('not.exist')
    cy.get("[href='/heroes/new']").should('not.exist')
    cy.get("[data-cy='pencil']").should('not.exist')
    cy.get("[data-cy='trash']").should('not.exist')
    cy.visit('/new')
    cy.contains('Acesso negado')

  })

  it('Admin pode realizar todas as ações', () => {
    cy.login('admin@test.com', 'test123')
    cy.visit('/heroes')
    cy.get("[data-cy='like']").first().click()
    cy.get(".gap-4").should('not.exist')
    cy.get("[data-cy='pencil']").first().click()
    cy.url().should('include', '/edit')
    cy.contains('Button', 'Submit').click()
    cy.get("[data-cy='trash']").first().click()
    cy.contains('Delete Hero?').should('be.visible')
    cy.contains('Button', 'No').click()
    cy.get("[href='/heroes/new']").click()
    cy.contains('Name').should('be.visible')
    cy.url().should('include', '/new')
  })

})


