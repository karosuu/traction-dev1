import { Main } from '../../page-objects/components/main'
import { emailInputID, testInputID } from '../../page-objects/components/input_utillities'


describe('Register a new user and Organization', () => {
    const main = new Main()

    beforeEach(function () {

        cy.viewport(1440, 1080)

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
    });

    it('Enter user details', () => {
        cy.visit('https://dev-1.traction.tools/getstarted')
        //cy.url().should('include', '/OnBoarding')
        // cy.title().should('eq', 'Sign Up - Traction Tools')

        main.getStartFname().type('Test')
        main.getStartLname().type(testInputID('User '))
        main.getStartEmail().type(emailInputID('carlos.cuadra+', '@smbssolutions.com'))
        main.getStartPassword().type('Testuser12345#')
        main.getStartCompany().type(testInputID('Test Carlos: New Company '))
        main.getStartCoach().click()
        main.getStartReferral().select('I Found You Online').should('have.value', 'online')
        main.getStartSignUpBtn().click()


    })
    it('Approve consent', () => {
        cy.url().should('include', '/Account/Consent')
        main.consetOkBtn().click()
        //main.consentNoBtn().click()

    })
    it('Close modal', () => {
        cy.url().should('include', '/Dashboard')
        cy.get('#pendo-close-guide-4657e67b').click()
    })
});