import { Main } from '../../page-objects/components/main_objects'
import { testInputID } from '../../page-objects/components/input_utillities'
import { meetingOb } from '../../page-objects/components/meeting_objects'
import { navBarOb } from '../../page-objects/components/navbar_objects'


describe('Login & create items in Sague page', () => {
    const main = new Main()
    const navBar = new navBarOb()
    const meeting = new  meetingOb()

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
    it('Run Meeting: Create a new issue & To-do', () => {
        cy.url().should('include', '/Dashboard')
        navBar.navMeeting().click()
        cy.get('h1').contains('Meetings')
        meeting.gotoMeetingBtn().click().wait(2000)
        meeting.startMeetingBtn().click().wait(2000)
        cy.get('.c-list-item.page-item.pagetype-segue > a').click().wait(3000)
        
        //Create new issue
        cy.get('.collapse.navbar-collapse.navbar-right .btn.btn-default.btn-sm.issuesModal').click().wait(3000)
        cy.get('#modalForm .modal-body #Message').type(testInputID('Automated Issue '))
        main.modalSaveBtn().click()
        //cy.get('#modalCancel').click().wait(2000)

        //Create new To-Do
        navBar.navBarCreateissue().click().wait(1000)
        navBar.navModalTitle().type(testInputID('Automated To-Do '))
        main.modalSaveBtn().click()
        cy.get('.c-list-item.page-item.pagetype-conclude > a').click()
        meeting.concludeBtn().click().wait(2000)
        cy.get('.c-stats-title').contains('ISSUES SOLVED')
    })
});
