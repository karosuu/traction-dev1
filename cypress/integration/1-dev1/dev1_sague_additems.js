import { Main } from '../../page-objects/components/main'
import { testInputID } from '../../page-objects/components/input_utillities'

describe('Login and create item in Sague page', () => {
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
    })

    it('Login', () => {
        cy.visit('https://dev-1.traction.tools/')
        cy.url().should('include', '/Account/Login')
        main.loginInput().type('carlos.cuadra@smbssolutions.com')
        main.passInput().type('Carlos420#$')
        main.loginButton().click()

    })
    it('Navigate & Run Meeting', () => {
        cy.url().should('include', '/Dashboard')
        main.navMeeting().click()
        cy.get('h1').contains('Meetings')
        main.gotoMeetingBtn().click().wait(2000)
        main.startMeetingBtn().click().wait(2000)

    })
    it('Create a new issue & To-do', () => {
        
        cy.get('.c-list-item.page-item.pagetype-segue > a').click().wait(2000)
        cy.get('.collapse.navbar-collapse.navbar-right .btn.btn-default.btn-sm.issuesModal > .btn-text.btn-text-create_mtngitem').click().wait(2000)

        //Create new issue
        cy.get('#modalForm .modal-body .input-control#Message').type(testInputID('Issue test cy '))
        //cy.get('#modalOk').click()
        cy.get('#modalCancel').click().wait(2000)

        //Create new To-Do
        cy.get('.collapse.navbar-collapse.navbar-right .btn.btn-default.btn-sm.todoModal').click().wait(1000)
        cy.get('#modalForm .modal-body .input-control#Message').type(testInputID('To-Do test cy '))
        cy.get('#modalCancel').click()
    })
    it('Conclude Meeting', () => {
        cy.get('.c-list-item.page-item.pagetype-conclude > a').click()
        main.concludeBtn().click().wait(2000)
        cy.get('.c-stats-title').contains('ISSUES SOLVED')
    })
});
