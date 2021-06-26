import 'cypress-file-upload';

/// <reference types="Cypress" />


//-----------------------------------------------------------------------------------------SignUp----------------------------------------------------------------------------------
Cypress.Commands.add('signUp', (userName, email, password) => {
    if(userName !== "")
    {   
        cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[1]/input').should('be.visible').should('be.enabled').clear().type(userName)
    }
    if(email !== "")
    {   
        cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[2]/input').should('be.visible').should('be.enabled').clear().type(email)
    }
    if(password !== "")
    {   
        cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[3]/input').should('be.visible').should('be.enabled').clear().type(password)
    }
    cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/button').click()
})

//-----------------------------------------------------------------------------------------Signin------------------------------------------------------------------------------------
Cypress.Commands.add('signin', (email, password) => 
{ 
    if(email !== "")
    {   
        cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[1]/input').should('be.visible').should('be.enabled').clear().type(email)
    }
    if(password !== "")
    {   
        cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[2]/input').should('be.visible').should('be.enabled').clear().type(password)
    }
    cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/button').click()
})

//----------------------------------------------------------------------------------------Signout----------------------------------------------------------------------------------
Cypress.Commands.add('SignOut', () => {

    cy.xpath('/html/body/div/div/nav/div/ul/li[3]/a').click() // Click on Setting Button
    cy.wait(2000)
    cy.xpath("/html/body/div/div/div/div/div/div/button").click()
    cy.wait(5000)
})

//---------------------------------------------------------------------------------------Post Article--------------------------------------------------------------------------------
Cypress.Commands.add('postArticles', (articleTitle, articleAbout, articleBody, articleTags) => 
{
    if(articleTitle !== "")
    {   
        cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[1]/input').should('be.visible').should('be.enabled').clear().type(articleTitle)    //articleTitle
    }
    if(articleAbout !== "")
    {   
        cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[2]/input').should('be.visible').should('be.enabled').clear().type(articleAbout)    //articleAbout
    }
    if(articleBody !== "")
    {   
        cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[3]/textarea').should('be.visible').should('be.enabled').clear().type(articleBody)  //articleBody
    }
    if(articleTags !== "")
    {   
        cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[4]/input').should('be.visible').should('be.enabled').clear().type(articleTags) //articleTags
    }
    //cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[1]/input').should('be.visible').should('be.enabled').clear().invoke('val', articleTitle)   
    cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/button').click() //Publish Button
    cy.wait(5000)
})

//-----------------------------------------------------------------------------------Comment on Article-----------------------------------------------------------------------------
Cypress.Commands.add('addComment', (articleComments) => 
{
    if(articleComments !== "")
    {   
        cy.xpath('/html/body/div/div/div/div[2]/div[3]/div/div[1]/form/div[1]/textarea').should('be.visible').should('be.enabled').clear().type(articleComments)    //articleComment
    }
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
    if(profilePicUrl !== "")
    {   
        cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[1]/input').should('be.visible').should('be.enabled').clear().type(profilePicUrl)    // Edit Profile Picture

    }
    if(userName !== "")
    {   
        cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[2]/input').should('be.visible').should('be.enabled').clear().type(userName)    // Edit Username
    }
    if(userBio !== "")
    {   
        cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[3]/textarea').should('be.visible').should('be.enabled').clear().type(userBio)    // Edit User Bio
    }
    if(newPassword !== "")
    {   
        cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/fieldset[5]/input').should('be.visible').should('be.enabled').clear().type(newPassword)    // Edit Password
    }
    
    cy.xpath('/html/body/div/div/div/div/div/div/form/fieldset/button').click() //cick on Update  Button
    cy.wait(5000)
})







