import {When, Then} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";


When('Fill Matchmaker tab', () => {
    suppleDemandElements
        .matchmakerTab();
    //select Matchmaker
    cy.get (suppleDemandElements.matchmakerInviteActiveButton)
        .should('be.visible')
        .click({force:true});
});

Then('Click on Create button', () => {
    cy.get('.verify-create-request-button')
        .should('be.enabled')
        .click({force:true});
});