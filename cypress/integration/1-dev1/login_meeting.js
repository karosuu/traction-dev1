import { Main } from '../../page-objects/components/main'

describe('Login and run Meeting', () => {
    const main = new Main()

    beforeEach(function () {

        cy.viewport(1440, 1080)
        cy.visit('https://dev-1.traction.tools/')
        cy.url().should('include', '/Account/Login')

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        main.loginInput().type('carlos.cuadra@smbssolutions.com')
        main.passInput().type('Carlos420#$')

        main.loginButton().click().wait(1000)
        cy.url().should('include', '/Dashboard')
    })

    it('Select first meeting and load all the pages', () => {

        main.navMeeting().click()
        main.gotoMeetingBtn().click()
        main.startMeetingBtn().click().wait(10000)
        cy.get('.c-list-item.page-item.pagetype-ids > a').click().wait(10000)
        cy.get('.c-list-item.page-item.pagetype-rocks > a').click().wait(10000)
        cy.get('.c-list-item.page-item.pagetype-headlines > a').click().wait(10000)
        cy.get('.c-list-item.page-item.pagetype-todo > a').click().wait(10000)
        cy.get('.c-list-item.page-item.pagetype-segue > a').click().wait(2000)
        cy.get('.c-list-item.page-item.pagetype-conclude > a').click()
        main.concludeBtn().click()
        cy.get('.c-stats-title').contains('ISSUES SOLVED')
    })

});
