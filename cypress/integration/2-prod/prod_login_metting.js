import { Main } from '../../page-objects/components/main'

describe('Login and run Meeting', () => {
    const main = new Main()

    beforeEach(function () {

        cy.viewport(1440, 1080)
        cy.visit('https://traction.tools/Account/Login')
        cy.url().should('include', '/Account/Login')

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })        
        main.loginInput().type('carlos.cuadra@smbssolutions.com')
        main.passInput().type('Carlos420#$')

        main.loginButton().click()
        cy.url().should('include', '/Dashboard')
    })

    it('Select first meeting and load all the pages', () => {

        main.navMeeting().click()
        main.gotoMeetingBtn().click()
        main.startMeetingBtn().click().wait(10000)
        main.issuesPage().click().wait(10000)
        main.rockPage().click().wait(10000)
        main.headlinePage().click().wait(10000)
        main.todoPage().click().wait(10000)
        main.saguePage().click().wait(2000)
        main.concludePage().click()
        main.concludeBtn().click()
        cy.get('.c-stats-title').contains('ISSUES SOLVED')
    })

});
