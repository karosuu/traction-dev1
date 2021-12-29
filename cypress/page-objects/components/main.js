//Login objects
export class Main {
loginInput() { return cy.get('#UserName') }
passInput() { return cy.get('#Password') }
loginButton() { return  cy.get('input[type=submit]') }
}