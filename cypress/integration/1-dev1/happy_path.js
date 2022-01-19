import { Main } from '../../page-objects/components/main_objects'
import { testInputID } from '../../page-objects/components/input_utillities'
import { shortInputID } from '../../page-objects/components/input_utillities'
import { navBarOb} from '../../page-objects/components/navbar_objects'



describe('Register a new user and Organization', () => {
    const main = new Main()
    const navBar = new navBarOb() 

    beforeEach(function () {
        cy.viewport(1440, 1080)

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    });
    it('Enter user details', () => {
        cy.visit('https://dev-1.traction.tools/getstarted')
        //cy.url().should('include', '/OnBoarding')
        // cy.title().should('eq', 'Sign Up - Traction Tools')
        main.getStartFname().type('TEST')
        main.getStartLname().type(testInputID('QA User '))
        main.getStartEmail().type(shortInputID('carlos.cuadra+', '@smbssolutions.com'))
        main.getStartPassword().type('Testuser12345#')
        main.getStartCompany().type(testInputID('TEST-QA Account '))
        main.getStartNoCoach().click()
        main.getStartHear().select('I Found You Online').should('have.value', 'online')
        main.getStartSignUpBtn().click()     
    })
    it('Navigate Pages', () => {
        cy.url().should('include', '/Account/Consent')
        main.consetOkBtn().click()
        //main.consentNoBtn().click() 
        cy.url().should('include', '/Dashboard')
        main.dashCloseModal().click()
        navBar.navMeeting().click().wait(1000)
        cy.url().should('include', '/L10')
        navBar.navDocsPage().click().wait(1000)
        cy.url().should('include', '/Documents')
        navBar.navVtoPage().click()
        cy.url().should('include', '/VTO')

        
    })
});