export class navBarOb {
  
  //Navigation bar objects
  navMeeting() { return cy.get('#header-tab-l10') }
  navDocsPage() { return cy.get('#header-tab-docs') }
  navVtoPage() { return cy.get('#header-tab-vto') }
  navModalTitle() { return cy.get('#modalForm .modal-body .input-control#Message') }
  navBarCreateissue() { return cy.get('.collapse.navbar-collapse.navbar-right .btn.btn-default.btn-sm.todoModal') }
  

};