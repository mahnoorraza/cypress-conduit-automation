import 'cypress-file-upload';



// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('textFieldInput', (xpathValue, text) => { 
    cy.xpath(xpathValue).should('be.visible').should('be.enabled').clear().type(text)
})


Cypress.Commands.add('checkBox', (xpathValue, checkBoxValue) => { 
    cy.xpath(xpathValue).check().should('be.checked').and('have.value', checkBoxValue)
})



// SignUp
Cypress.Commands.add('signUp', (userName, email, password) => {
    cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[1]/input').should('be.visible').should('be.enabled').clear().invoke('val', userName)
    cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[2]/input').should('be.visible').should('be.enabled').clear().invoke('val', email)
    cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[3]/input').should('be.visible').should('be.enabled').clear().invoke('val', password)
    cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/button').click()
})

// Signin
Cypress.Commands.add('signin', (email, password) => {
    cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[1]/input').should('be.visible').should('be.enabled').clear().type(email)
    cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[2]/input').should('be.visible').should('be.enabled').clear().type(password)
    cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/button').click()
})


// Post Article
Cypress.Commands.add('postArticles', (articleTitle, articleAbout, articleBody, articleTags) => {
    //cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[1]/input').should('be.visible').should('be.enabled').clear().invoke('val', articleTitle) 
    cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[1]/input').should('be.visible').should('be.enabled').clear().type(articleTitle)    //articleTitle
    cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[2]/input').should('be.visible').should('be.enabled').clear().type(articleAbout)    //articleAbout
    cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[3]/textarea').should('be.visible').should('be.enabled').clear().type(articleBody)  //articleBody
    cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[4]/input').should('be.visible').should('be.enabled').clear().type(articleTags) //articleTags
    cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/button').click() //Publish Button
    cy.wait(5000)
})

// Comment on Article
Cypress.Commands.add('addComment', (articleComments) => {
    //cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[1]/input').should('be.visible').should('be.enabled').clear().invoke('val', articleTitle) 
    cy.xpath('/html/body/div/div/div/div[2]/div[3]/div/div[1]/form/div[1]/textarea').should('be.visible').should('be.enabled').clear().type(articleComments)    //articleTitle
    cy.xpath('/html/body/div/div/div/div[2]/div[3]/div/div[1]/form/div[2]/button').click() //Publish Button
    cy.wait(5000)
})


// Edit Article
Cypress.Commands.add('editArticle', (articleTitle, articleAbout, articleBody, articleTags) => {
    cy.xpath('/html/body/div/div/div/div[1]/div/div/span/a').should('be.visible').should('be.enabled').click() 
    cy.wait(3000)
    cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[1]/input').should('be.visible').should('be.enabled').clear().type(articleTitle)    //articleTitle
    cy.postArticles(articleTitle, articleAbout, articleBody, articleTags)
})

// Sgnout
Cypress.Commands.add('SignOut', () => {

    cy.xpath('/html/body/div/div/nav/div/ul/li[3]/a').click() // Click on Setting Button
    cy.wait(2000)
    cy.xpath("/html/body/div/div/div/div/div/div/button").click()
    cy.wait(5000)
})










