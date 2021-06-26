/// <reference types="Cypress" />

const tests = require('../../fixtures/articlesData.json')

describe('Verify Post Article Functionality', function()
{
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

    //--------------------------------------------------------------------------Explore Article-----------------------------------------------------------------------------------
    it("Update Profile Functionality", function()
    {
         let _profileUrl = "https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg";
         let _userName = "mtester7"
         let _userBio = "This is new Bio"
         let _newPassword = "Trees123" 
        cy.updateProfile(_profileUrl,_userName,_userBio,_newPassword)
    })
})