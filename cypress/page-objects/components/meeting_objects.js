export class meetingOb  { 
    //Metting page objects
    gotoMeetingBtn() { return cy.get('tr:nth-of-type(1) > .hidden-xs.l10-row-cell.view-meeting-cell > .go-indicator.label.label-default') }
    startMeetingBtn() { return cy.get('#l10-meeting-startbutton') }
    concludeBtn() { return cy.get('input#conclude_meeting_button') }

    //Inside meeting pages objects
    issuesPage() { return cy.get('.c-list-item.page-item.pagetype-ids > a') }
    rockPage() { return cy.get('.c-list-item.page-item.pagetype-rocks > a') }
    headlinePage() { return cy.get('.c-list-item.page-item.pagetype-headlines > a') }
    todoPage() { return cy.get('.c-list-item.page-item.pagetype-todo > a') }
    saguePage() { return cy.get('.c-list-item.page-item.pagetype-segue > a') }
    concludePage() { return cy.get('.c-list-item.page-item.pagetype-conclude > a') }
}