import {And, When} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";


When('Select Demand radiobutton', () => {
    cy.contains ('Demand')
        .should('contain','Demand');
    suppleDemandElements
        .selectDemandRadioButton();
});


And('New Demand is displayed on screen {string}', (Title) => {
    cy.get('[data-cy="sales-request-row"]')
        .first();
});