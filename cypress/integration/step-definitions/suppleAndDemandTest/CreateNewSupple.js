import {When,Then} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";



When('Click on Create button in Supple in Supple and Demand page', () => {
   cy.get (suppleDemandElements.createButton)
       .click({force:true})
});

Then('Create Request for Quotation page is opened', () => {
    cy.url()
        .should('include', '/create/request');
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
When('Select Supple radiobutton', () => {
    suppleDemandElements
        .selectSuppleRadioButton();
});