import {When,Then,And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";


When('Click on Supple on Request page', (Title) => {
    cy.get('[data-cy="sales-request-row"]')
        .first()
        .click({forse:true});
});


Then('Check Supple on Request field  {string}', (Title) => {
    cy.get('[class="t2b-title text-color-accent text-bold m-0 mb-16 ng-tns-c360-7891"]')
        .should ('have.value', Title);
});



And('Check field Supple  {string}', (Description) => {
    cy.get('[class="px-16 text-normal overflow-auto thin-scrollbar w-100-p details-description"]')
        .should('have.value', Description);
});

