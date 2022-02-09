import { Main } from '../../page-objects/components/main_objects'
import { testInputID } from '../../page-objects/components/input_utillities'
import { navBarOb } from '../../page-objects/components/navbar_objects'


describe('Workspace menu', () => {
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
        main.loginInput().type('carlos.cuadra+1983@smbssolutions.com')
        cy.url().should('include', '/Account/Login')
        main.passInput().type('Carlos4200#$')
        main.loginButton().click()
    })
    it('workspace', () => {
        cy.url().should('include', '/Dashboard')
        cy.get('.icon-clock').trigger('mouseover')
        cy.get('.c-sidebar-nav.c-sidebar-nav--root > li:nth-of-type(3) > .c-sidebar-nav-link.nav-link-arrow').trigger('mouseover')
        .wait(1500)
        cy.get('.li:nth-of-type(1) > .c-sidebar-nav-link.nav-link-arrow')
    })
});