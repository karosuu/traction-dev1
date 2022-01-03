export class Main {

    //Login objects
    loginInput() { return cy.get('#UserName') }
    passInput() { return cy.get('#Password') }
    loginButton() { return cy.get('input[type=submit]') }

    //Metting objects
    navMeeting() { return cy.get('#header-tab-l10') }
    concludeBtn() { return cy.get('#conclude_meeting_button') }
    gotoMeetingBtn() { return cy.get('tr:nth-of-type(1) > .hidden-xs.l10-row-cell.view-meeting-cell > .go-indicator.label.label-default') }
    startMeetingBtn() { return cy.get('#l10-meeting-startbutton') }

};

