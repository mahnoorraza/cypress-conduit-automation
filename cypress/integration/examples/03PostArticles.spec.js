/// <reference types="Cypress" />

const tests = require('../../fixtures/articlesData.json')

describe('Verify Post Article Functionality', function()
{
    //--------------------------------------------------------------------------------Hook-------------------------------------------------------------------------------------
    before(() =>
    {   
        cy.visit("https://react-redux.realworld.io/")
        cy.wait(5000)
    })
    
    beforeEach(() => 
    {
        // load example.json fixture file and storein the test context object
          cy.fixture('articlesData.json').as('articlesData')
    })

    //----------------------------------------------------------------------------Signin Site----------------------------------------------------------------------------------
    it("Signin with valid user", function()
    {   
        cy.xpath("/html/body/div/div/nav/div/ul/li[2]/a").click()
        cy.wait(2000)
        cy.signin("mtester7@gmail.com", "Trees123")
        cy.wait(5000)
    })

    //----------------------------------------------------------------------Multiple Articles Pulish---------------------------------------------------------------------------
    // tests.forEach(test => 
    // {
    //     it("Verify Post article functionality", function(){
    //         cy.xpath("/html/body/div/div/nav/div/ul/li[2]/a").click()
    //         cy.postArticles(test.articleTitle, test.articleAbout, test.articleBody, test.articleTags)
    //         cy.wait(5000)
    //     })
    // })

    //----------------------------------------------------------------------Single Articles Pulish-----------------------------------------------------------------------------
    it("Verify Post Article Functionality", function(){
        cy.xpath("/html/body/div/div/nav/div/ul/li[2]/a").click()
        cy.postArticles(tests[0].articleTitle, tests[0].articleAbout, tests[0].articleBody, tests[0].articleTags)
        cy.wait(5000)
    })

    //------------------------------------------------------------- -Publish same Articles Multiple Times----------------------------------------------------------------------
    // it("Post Same article Multiple time", function()
    // {
    //     for(let i=0; i<10; i++)
    //     {
    //         cy.xpath("/html/body/div/div/nav/div/ul/li[2]/a").click()
    //         cy.postArticles(tests[0].articleTitle, tests[0].articleAbout, tests[0].articleBody, tests[0].articleTags)
    //         cy.wait(5000)
    //     }
    //     cy.xpath("/html/body/div/div/nav/div/ul/li[1]/a").click()
    //     cy.wait(2000)
    //     cy.xpath("/html/body/div/div/nav/div/ul/li[4]/a").click()
    //     cy.wait(2000)
    //     cy.scrollTo('bottom')
    // })

    //----------------------------------------------------------------------Add Comment on Article----------------------------------------------------------------------------
    it("Verify Add Comment on Article functionality", function(){
        //cy.xpath("/html/body/div/div/nav/div/ul/li[2]/a").click()
        cy.addComment("Lorem ipsum sed immit")
        cy.wait(5000)
    })

    //----------------------------------------------------------------------Edit Published Article----------------------------------------------------------------------------
    it("Verify Edit Article Functionality", function(){
        cy.xpath("/html/body/div/div/nav/div/ul/li[2]/a").click()
        cy.postArticles("This is Edited title", "This is edited about", "This is edited Body", "Brain")
        cy.wait(5000)
    })

    //--------------------------------------------------------------------Delete Published Article----------------------------------------------------------------------------
    it("Verify Delete Article functionality", function(){
        cy.xpath("/html/body/div/div/div/div[1]/div/div/span/button").click()   // Click on Delete Article Button
        cy.wait(5000)
    })

    //---------------------------------------------------------------------------- Signout------------------------------------------------------------------------------------
    it("Verify Signout functionality", function(){
        cy.SignOut()
    })   
})