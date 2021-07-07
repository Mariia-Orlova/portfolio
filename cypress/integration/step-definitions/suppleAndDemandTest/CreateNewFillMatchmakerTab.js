import {When,Then, And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";


When('Fill Matchmaker tab', () => {
    suppleDemandElements
        .matchmakerTab();
    //select Matchmaker
    cy.get (':nth-child(1) > .company-details > .invite-active > .view-invite > .invite-button')
        .should('be.visible')
        .click({force:true});
});

And('Click on Create button', () => {
    cy.get('.verify-create-request-button')
        .should('be.enabled')
        .click({force:true});
});