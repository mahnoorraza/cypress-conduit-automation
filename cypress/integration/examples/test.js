// <reference types="Cypress" />


describe('Verify Post Article Functionality', function(){


    it("Signin with valid user", function()
    {   
        cy.visit("https://www.google.com")
        cy.wait(5000)
        cy.switchToTab("Google")
    })

})





