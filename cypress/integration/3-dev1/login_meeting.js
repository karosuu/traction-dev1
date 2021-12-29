import { Main } from '../../page-objects/components/main'

describe('Login and run Meeting', () => {
    


    beforeEach(function () {
        const main = new Main()

        cy.viewport(1440, 1080) 
        cy.visit('https://dev-1.traction.tools/')
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
    })



    it('Select Meetings', () => {
   
      cy.get('#header-tab-l10').click()
      cy.get('tr:nth-of-type(1) > .hidden-xs.l10-row-cell.view-meeting-cell > .go-indicator.label.label-default').click()
      cy.get('#l10-meeting-startbutton').click()
      cy.wait(2000).get('.page-615331 > .c-text-pantone-light2 > .c-list-item.current.page-615331.page-item.pagetype-conclude > a').trigger('mouseover')
      cy.get('.page-615331 > .c-text-pantone-light2 > .c-list-item.current.page-615331.page-item.pagetype-conclude > a').click()
    })

});
