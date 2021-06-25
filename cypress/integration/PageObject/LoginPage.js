/// <reference types="Cypress" />

class LoginPage
{
    visit()
    {
        cy.visit("https://admin-demo.nopcommerce.com/login")
    }

    fillEmail(value)
    {
        const loginField = cy.xpath('//*[@id="Email"]')
        loginField.clear()
        loginField.type(value)
        return this
    }

    fillPassword(value)
    {
        const passField = cy.xpath('//*[@id="Password"]')
        passField.clear()
        passField.type(value)
        return this
    }

    loginButton()
    {
        const loginBtn = cy.xpath('/html/body/div[6]/div/div/div/div/div[2]/div[1]/div/form/div[3]/button')
        loginBtn.click()
    }
}

export default LoginPage



