import { Main } from '../../page-objects/components/main_objects'
import { testInputID } from '../../page-objects/components/input_utillities'
import { navBarOb } from '../../page-objects/components/navbar_objects'
import { meetingOb } from '../../page-objects/components/meeting_objects'

describe('Login and run Meeting', () => {
    const main = new Main()
    const navBar = new navBarOb()
    const meeting = new  meetingOb()

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
        main.passInput().type('Carlos4200#$')

        main.loginButton().click()
        cy.url().should('include', '/Dashboard')
    });
    
    it('Navigation bar pages', () => {
        navBar.navMeeting().click()
        meeting.gotoMeetingBtn().click()
        meeting.startMeetingBtn().click().wait(10000)
        meeting.issuesPage().click().wait(10000)
        meeting.rockPage().click().wait(10000)
        meeting.headlinePage().click().wait(10000)
        meeting.todoPage().click().wait(10000)
        meeting.saguePage().click().wait(2000)
        meeting.concludePage().click()
        meeting.concludeBtn().click()
        cy.get('.c-stats-title').contains('ISSUES SOLVED')

    })

});
