import {Then, When} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";


When ('Create Request for Quotation page is opened', () => {
    cy.url()
        .should('contain', '/create/request');
    cy.title()
        .should('eq', 'TECH2B - Create Request');
    suppleDemandElements
        .checkTitleAndSecondTextForCreateSuppleAndDemand();
    suppleDemandElements
        .checkFillOutTheFormLabel();
    suppleDemandElements
        .checkGeneralText();
    suppleDemandElements
        .checkSuppleOrDemandText();
    suppleDemandElements
        .checkDoYouWantToOutsource();
});

Then('Requests page is opened', () => {
    cy.url()
        .should('contain','/requests');
    cy.title()
        .should('eq', 'TECH2B - Request List');
});