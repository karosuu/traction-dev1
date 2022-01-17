export class Main {

    //Getstarted page objects
    getStartFname() { return cy.get('#firstName') }
    getStartLname() { return cy.get('#lastName') }
    getStartEmail() { return cy.get('#email') }
    getStartPassword() { return cy.get('#password') }
    getStartCompany () { return cy.get('#companyName') }
    getStartCoach() { return cy.get('#implementerNo') }
    getStartReferral() { return cy.get('#referralSource') }
    getStartSignUpBtn() { return cy.get('.Login-btn') }
    consetOkBtn() {  return cy.get('form button.btn-primary') }
    consentNoBtn() { return cy.get('form button.btn-link') }
    
    //Login  page objects
    loginInput() { return cy.get('#email') }
    passInput() { return cy.get('#password') }
    loginButton() { return cy.get('.Login-btn') }

    //Metting page objects
    navMeeting() { return cy.get('#header-tab-l10') }
    gotoMeetingBtn() { return cy.get('tr:nth-of-type(1) > .hidden-xs.l10-row-cell.view-meeting-cell > .go-indicator.label.label-default') }
    startMeetingBtn() { return cy.get('#l10-meeting-startbutton') }
    concludeBtn() { return cy.get('input#conclude_meeting_button') }


};

