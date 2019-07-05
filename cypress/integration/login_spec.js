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
    it('redirect to /dashboard on success', () => {
      cy.get('input[name=username]').type(username)
      cy.get('input[name=password]').type(password)
      cy.get('form').submit()
      cy.url().should('include', 'dashboard')
    })
  })
})
