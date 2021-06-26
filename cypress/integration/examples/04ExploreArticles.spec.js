/// <reference types="Cypress" />

const tests = require('../../fixtures/articlesData.json')

describe('Verify Post Article Functionality', function(){

    //--------------------------------------------------------------------------------Hook--------------------------------------------------------------------------------------
    before(() =>
    {   
        cy.visit("https://react-redux.realworld.io/")
        cy.wait(5000)
        cy.xpath("/html/body/div/div/nav/div/ul/li[2]/a").click()
        cy.wait(2000)
        cy.signin("mtester7@gmail.com", "Trees123")
        cy.wait(5000)
    })

    after(() =>
    {
        cy.SignOut()
    })
    
    beforeEach(() => 
    {
        // load example.json fixture file and storein the test context object
          cy.fixture('articlesData.json').as('articlesData')
    })

    //----------------------------------------------------------------------------Signin Site--------------------------------------------------------------------------------------
    // it("Signin with valid user", function()
    // {   
    //     cy.xpath("/html/body/div/div/nav/div/ul/li[2]/a").click()
    //     cy.wait(2000)
    //     cy.signin("mtester7@gmail.com", "Trees123")
    //     cy.wait(5000)
    // })

    //--------------------------------------------------------------------------Explore Article-----------------------------------------------------------------------------------
    it("Explore Article", function()
    {
        cy.xpath("/html/body/div/div/div/div/div/div[1]/div[1]/ul/li[2]/a").should('be.visible').click() // Goto Global feed
        cy.wait(5000)
        cy.xpath("/html/body/div/div/div/div/div/div[1]/div[2]/div[1]/a/h1").should('be.visible').click()    // Open Article
        cy.wait(5000)
        cy.addComment("This is my comment") // Add Comment on opened article
        cy.wait(5000)
        cy.xpath("/html/body/div/div/div/div[1]/div/div/div/a").should('be.visible').click() // Open Writer Profile
        cy.wait(5000)
    })

    it("Verify Follow Writer Functionality ", function()
    {
        cy.xpath("/html/body/div/div/div/div[1]/div/div/div/button").should('be.visible').should('be.enabled').click()    // follow writer by clicking on follow button
        cy.wait(5000)
        cy.xpath("/html/body/div/div/nav/div/ul/li[1]/a").should('be.visible').click()   // Goto your feed tab to check followed writer articles on your feed
        cy.wait(5000)
    })

    it("Verify Like Article Functionality", function()
    {
        cy.wait(3000)
        cy.go(-1)   // Navigate back to Writer Profile
        cy.wait(3000)
        cy.xpath("/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div/div[2]/button").should('be.visible').click()   // Like Article
        cy.wait(3000)
        cy.xpath("/html/body/div/div/nav/div/ul/li[1]/a").click()
        cy.wait(5000)
        cy.xpath("/html/body/div/div/nav/div/ul/li[4]/a").should('be.visible').click()  // Click on user profile tab
        cy.wait(3000)
        cy.xpath("/html/body/div/div/div/div[2]/div/div/div[1]/ul/li[2]/a").should('be.visible').click() // Goto user favourited articles tab
        cy.wait(3000)
    })

    it("Verify Dislike Article Functionality", function()
    {
        cy.go(-1)
        cy.wait(2000)
        cy.go(-1)   
        cy.wait(2000)
        cy.go(-1)   // Move back to writer profile
        cy.wait(5000)
        cy.xpath("/html/body/div/div/div/div[2]/div/div/div[2]/div[1]/div/div[2]/button").should('be.visible').should('be.enabled').click()   // Dislike Article
        cy.wait(3000)
        cy.xpath("/html/body/div/div/nav/div/ul/li[1]/a").click()
        cy.wait(5000)
        cy.xpath("/html/body/div/div/nav/div/ul/li[4]/a").should('be.visible').click()  // Click on user profile tab
        cy.wait(3000)
        cy.xpath("/html/body/div/div/div/div[2]/div/div/div[1]/ul/li[2]/a").should('be.visible').click() // Goto user favourited articles tab
        cy.wait(3000)
   
    })

    it("Verify Unfollow writer Functionality", function()
    {
        cy.go(-1)
        cy.wait(2000)
        cy.go(-1)   
        cy.wait(2000)
        cy.go(-1)   // Move back to writer profile
        cy.wait(5000)
        cy.xpath("/html/body/div/div/div/div[1]/div/div/div/button").should('be.visible').should('be.enabled').click()    // Unfollow writer
        cy.wait(3000)
        cy.xpath("/html/body/div/div/nav/div/ul/li[1]/a").should('be.visible').click()   // Goto your feed tab to check Unfollowed writer articles on your feed
        cy.wait(5000)
    })

    it('Verify Popular tags Functionality', () => 
    { 
        cy.wait(5000) 
        for(let i=8; i<=20; i++)
        {   
            cy.xpath('//*[@id="main"]/div/div/div/div/div[2]/div/div/a['+ i.toString() +']').should('be.visible').click()
            cy.wait(2000)
        }       
    })

    it('Verify Pagisnation Functionality', () => 
    { 
        cy.xpath("/html/body/div/div/div/div/div/div[1]/div[1]/ul/li[2]/a").should('be.visible').click() // Goto Global feed
        cy.scrollTo('bottom')
        cy.wait(5000)
        for(let i=2; i<=10; i++)
        {      
            cy.xpath('//*[@id="main"]/div/div/div/div/div[1]/div[2]/nav/ul/li['+ i.toString() +']/a').click()   // Click on pagination button
            cy.wait(2000)
        }       
    })

    //------------------------------------------------------------------------------Signout----------------------------------------------------------------------------------------
    // it("Verify Signout functionality", function()
    // {
    //     cy.SignOut()
    // })
})