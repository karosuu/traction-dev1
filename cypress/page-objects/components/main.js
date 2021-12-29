//Login objects
export class Main {
loginInput() { return cy.get('#UserName') }
passInput() { return cy.get('#Password') }
loginButton() { return  cy.get('input[type=submit]') }

//Metting objects
menuMeeting() { return cy.get('#header-tab-l10') }
concludeBtn() { return cy.get('#conclude_meeting_button') }
gotoMeeting() { return cy.get('tr:nth-of-type(1) > .hidden-xs.l10-row-cell.view-meeting-cell > .go-indicator.label.label-default') }
}
