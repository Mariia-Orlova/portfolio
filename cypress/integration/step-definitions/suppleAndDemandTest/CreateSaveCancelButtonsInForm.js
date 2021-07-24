import {Then, When, And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";

When('Click on Cancel button', () => {
    cy.get (suppleDemandElements.cancelButtonInForm)
        .should('be.visible');
     //   .should('be.enabled');
    //    .click({force:true});
});

Then('Click on Create button', () => {
    cy.get(suppleDemandElements.createButtonInForm)
        .should('be.enabled')
        .click({force:true});
});

And ('Click on Save button', () => {
    cy.get(suppleDemandElements.saveButtonInForm)
        .should('be.enabled')
        .click({force:true});
});