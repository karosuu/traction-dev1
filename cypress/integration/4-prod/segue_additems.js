import { Main } from '../../page-objects/components/main'
import { testInputID } from '../../page-objects/components/input_utillities'

describe('Login and run Meeting', () => {
    const main = new Main()

    beforeEach(function () {

        cy.viewport(1440, 1080)
        cy.visit('https://traction.tools/Account/Login')
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

    it('Create a new issue & To-do', () => {

        main.navMeeting().click()
        main.gotoMeetingBtn().click().wait(2000)
        main.startMeetingBtn().click().wait(2000)
        cy.get('.c-list-item.page-item.pagetype-segue > a').click().wait(2000)
        cy.get('.collapse.navbar-collapse.navbar-right .btn.btn-default.btn-sm.issuesModal > .btn-text.btn-text-create_mtngitem').click().wait(2000)
        
        //Create new issue
        cy.get('#modalForm .modal-body .input-control#Message').type(testInputID('Issue test cy ', '1234567890'))
        //cy.get('#modalOk').click()
        cy.get('#modalCancel').click().wait(2000)

        //Create new To-Do
        cy.get('.collapse.navbar-collapse.navbar-right .btn.btn-default.btn-sm.todoModal').click().wait(1000)
        cy.get('#modalForm .modal-body .input-control#Message').type(testInputID('To-Do test cy ', '1234567890'))
        cy.get('#modalCancel').click()


        cy.get('.c-list-item.page-item.pagetype-conclude > a').click()
        main.concludeBtn().click().wait(2000)
        cy.get('.c-stats-title').contains('ISSUES SOLVED')
    })

});
