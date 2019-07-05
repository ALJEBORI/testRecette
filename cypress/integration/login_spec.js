describe('Login test', () => {
  const username = 'admin'
  const password = 'password123'

  context('unauthorized', () => {
    it('is redirected to /unauthorized when not logged in ', () => {
      cy.visit('/dashboard')
      cy.url().should('include', 'unauthorized')
      cy.get('h3').should('contain', 'You are not logged in')
      cy.get('a')
        .should('have.attr', 'href')
        .then(href => cy.visit(href))
    })
  })

  context('login', () => {
    beforeEach(() => {
      cy.visit('/login')
    })
  })
})
