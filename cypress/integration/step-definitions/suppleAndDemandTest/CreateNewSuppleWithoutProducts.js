import {When,Then} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";




When('Select Supple radiobutton', () => {
    suppleDemandElements
        .selectSuppleRadioButton();

});


Then('New supple is displayed on screen {string}', (Title) => {
    cy.get('[data-cy="sales-request-row"]')
        .first()
        .should('contain',Title);
});