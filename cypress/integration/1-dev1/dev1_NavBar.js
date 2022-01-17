import { Main } from '../../page-objects/components/main'
import { testInputID } from '../../page-objects/components/input_utillities'

describe('Login and run Meeting', () => {
    const main = new Main()

    beforeEach(function () {

        cy.viewport(1440, 1080)
        cy.visit('https://dev-1.traction.tools/')
        cy.url().should('include', '/Account/Login')

        Cypress.on('uncaught:exception', (err, runnable, promise) => {
            // when the exception originated from an unhandled promise
            // rejection, the promise is provided as a third argument
            // you can turn off failing the test in this case
            if (promise) {
                // returning false here prevents Cypress from
                // failing the test
                return false
            }
        })
        main.loginInput().type('carlos.cuadra@smbssolutions.com')
        main.passInput().type('Carlos420#$')

        main.loginButton().click()
        cy.url().should('include', '/Dashboard')
    });

    it('Navigation bar pages', () => {

       
    })

});
