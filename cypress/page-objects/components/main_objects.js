import { replaceSubstitutionTransformer } from "common-tags"

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
    modalSaveBtn() { return cy.get('#modalOk') }
    modalCancelBtn() { return cy.get('#modalCancel') }


    //Login  page objects
    loginInput() { return cy.get('#email') }
    passInput() { return cy.get('#password') }
    loginButton() { return cy.get('.Login-btn') }


};

