import { Main } from '../../page-objects/components/main_objects'
import { testInputID } from '../../page-objects/components/input_utillities'
import { navBarOb } from '../../page-objects/components/navbar_objects'


describe('Login & create items in Sague page', () => {
    const main = new Main()
    const navBar = new navBarOb()
    

    beforeEach(function () {

        cy.viewport(1440, 1080)
      
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
    it('Login', () => {
        cy.visit('https://dev-1.traction.tools/')
        main.loginInput().type('carlos.cuadra+jane@smbssolutions.com')
        cy.url().should('include', '/Account/Login')
        main.passInput().type('Carlos420#$')
        main.loginButton().click()
    })
    it('Navigate Pages', () => {
        cy.url().should('include', '/Dashboard')
        navBar.navMeeting().click().wait(1000)
        cy.url().should('include', '/L10')
        navBar.navDocsPage().click().wait(1000)
        cy.url().should('include', '/Documents')
        navBar.navVtoPage().click()
        cy.url().should('include', '/VTO')

      // cy.get('.CustomNavbar-link dropdown-toggle').find('li').first().should('have.text', 'Accountability Chart')
    })
});