import 'cypress-file-upload';

/// <reference types="Cypress" />

//-----------------------------------------------------------------------------------input Text Function----------------------------------------------------------------------------------
Cypress.Commands.add('inputTextField', (locatorValue, fieldText) => 
{
    if(fieldText !== "")
    {   
        cy.xpath(locatorValue).should('be.visible').should('be.enabled').clear().type(fieldText)    // Edit Password
    }

})

//-----------------------------------------------------------------------------------------SignUp----------------------------------------------------------------------------------
Cypress.Commands.add('signUp', (userName, email, password) => 
{
    cy.inputTextField('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[1]/input', userName)
    cy.inputTextField('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[2]/input', email)
    cy.inputTextField('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[3]/input', password)
    cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/button').click()
})

//-----------------------------------------------------------------------------------------Signin------------------------------------------------------------------------------------
Cypress.Commands.add('signin', (email, password) => 
{ 
    cy.inputTextField('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[1]/input', email)
    cy.inputTextField('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[2]/input', password)
    cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/button').click()
})

//----------------------------------------------------------------------------------------Signout----------------------------------------------------------------------------------
Cypress.Commands.add('SignOut', () => 
{
    cy.xpath('/html/body/div/div/nav/div/ul/li[3]/a').click() // Click on Setting Button
    cy.wait(2000)
    cy.xpath("/html/body/div/div/div/div/div/div/button").click()
    cy.wait(5000)
})

//---------------------------------------------------------------------------------------Post Article--------------------------------------------------------------------------------
Cypress.Commands.add('postArticles', (articleTitle, articleAbout, articleBody, articleTags) => 
{
    //cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[1]/input').should('be.visible').should('be.enabled').clear().invoke('val', articleTitle) 
    
    cy.inputTextField('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[1]/input', articleTitle)
    cy.inputTextField('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[2]/input', articleAbout)
    cy.inputTextField('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[3]/textarea', articleBody)
    cy.inputTextField('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[4]/input', articleTags)
    cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/button').click() //Publish Button
    cy.wait(5000)
})

//-----------------------------------------------------------------------------------Comment on Article-----------------------------------------------------------------------------
Cypress.Commands.add('addComment', (articleComments) => 
{
    cy.inputTextField('/html/body/div/div/div/div[2]/div[3]/div/div[1]/form/div[1]/textarea', articleComments)
    cy.xpath('/html/body/div/div/div/div[2]/div[3]/div/div[1]/form/div[2]/button').click() //Publish Button
    cy.wait(5000)
})


//------------------------------------------------------------------------------------Edit Article---------------------------------------------------------------------------------
Cypress.Commands.add('editArticle', (articleTitle, articleAbout, articleBody, articleTags) => 
{
    cy.xpath('/html/body/div/div/div/div[1]/div/div/span/a').should('be.visible').should('be.enabled').click() 
    cy.wait(3000)
    //cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[1]/input').should('be.visible').should('be.enabled').clear().type(articleTitle)    //articleTitle
    cy.postArticles(articleTitle, articleAbout, articleBody, articleTags)
})



//-----------------------------------------------------------------------------------Update Profile--------------------------------------------------------------------------------
Cypress.Commands.add('updateProfile', (profilePicUrl, userName, userBio, newPassword) => 
{
    cy.xpath('/html/body/div/div/nav/div/ul/li[3]/a').click() // Goto Settings
 
    cy.inputTextField('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[1]/input', profilePicUrl)
    cy.inputTextField('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[2]/input', userName)
    cy.inputTextField('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[3]/textarea', userBio)
    cy.inputTextField('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[5]/input', newPassword)

    cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/button').click() //cick on Update  Button
    cy.wait(5000)
})














