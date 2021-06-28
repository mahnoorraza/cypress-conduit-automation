describe('Example to Demostrate the use of skip in cypress', () => 
{
    before(() => {
        cy.visit('https://wikipedia.org')
        cy.wait(5000)
    })

    it.skip('Validate Page Title', () => {
        cy.title().should('eq', 'Wikipedia')
    })

    it('Search for Google Wiki Page', () => {
        cy.get('#searchInput').type('google')
        cy.get('button[type="submit"]').click()
    })

    it.only('Validate Google Wiki Page has opened', () => {
        cy.get('h1#firstHeading').contains('Google')
        cy.title().should('eq', 'Google - Wikipedia')
    })
})