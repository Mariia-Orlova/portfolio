import {When} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";




When('New supple is displayed on screen {string}', (Title) => {
    cy.get('[data-cy="sales-request-row"]')
        .first()
        .should('contain',Title);
});