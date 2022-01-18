export class Main {

    //Getstarted page objects
    getStartFname() { return cy.get('#firstName') }
    getStartLname() { return cy.get('#lastName') }
    getStartEmail() { return cy.get('#email') }
    getStartPassword() { return cy.get('#password') }
    getStartCompany() { return cy.get('#companyName') }
    getStartNoCoach() { return cy.get('#implementerNo') }
    getStartWithCoach() { return cy.get('#implementerYes') }
    getStartImpName() { return cy.get('#implementerName') }
    getStartHear() { return cy.get('#referralSource') }
    getStartSignUpBtn() { return cy.get('.Login-btn') }

    consetOkBtn() { return cy.get('form button.btn-primary') }
    consentNoBtn() { return cy.get('form button.btn-link') }

    //Dashboard modal Objects
    dashCloseModal() { return cy.get('#pendo-close-guide-4657e67b') }


    //Login  page objects
    loginInput() { return cy.get('#email') }
    passInput() { return cy.get('#password') }
    loginButton() { return cy.get('.Login-btn') }

    //Metting page objects
    navMeeting() { return cy.get('#header-tab-l10') }
    gotoMeetingBtn() { return cy.get('tr:nth-of-type(1) > .hidden-xs.l10-row-cell.view-meeting-cell > .go-indicator.label.label-default') }
    startMeetingBtn() { return cy.get('#l10-meeting-startbutton') }
    concludeBtn() { return cy.get('input#conclude_meeting_button') }

    //Inside meeting pages objects
    issuesPage() { return cy.get('.c-list-item.page-item.pagetype-ids > a') }
    rockPage() { return cy.get('.c-list-item.page-item.pagetype-rocks > a') }
    headlinePage() { return cy.get('.c-list-item.page-item.pagetype-headlines > a') }
    todoPage() { return cy.get('.c-list-item.page-item.pagetype-todo > a') }
    saguePage() { return  cy.get('.c-list-item.page-item.pagetype-segue > a') }
    concludePage() { return  cy.get('.c-list-item.page-item.pagetype-conclude > a') }

};

