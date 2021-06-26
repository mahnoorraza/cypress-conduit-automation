/// <reference types="Cypress" />

const tests = require('../../fixtures/userData.json')

describe('Verify SignUp Functionality', function()
{
    //--------------------------------------------------------------------------------Hook--------------------------------------------------------------------------------------
    beforeEach(() => 
    {
        // load example.json fixture file and storein the test context object
          cy.fixture('userdata.json').as('userData')
          cy.wait(3000)
          cy.visit("https://react-redux.realworld.io/")

    })

    //----------------------------------------------------------------------------Signup Site--------------------------------------------------------------------------------------

    tests.forEach(test => 
    {
        it(test.testScenerio, function()
        {   
            cy.wait(5000)
            cy.xpath("/html/body/div/div/nav/div/ul/li[3]/a").click()
            cy.wait(2000)
            cy.signUp(test.userName, test.email, test.password)
        })
    })
})