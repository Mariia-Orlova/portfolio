import {When,Then,And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";


When('Click on Supple on Supple and Demand Page', (Title) => {
    cy.get('[data-cy="marketplace-card-container"]')
        .first()
        .click({forse:true});
});


Then('Check field Supple  {string}', (Title) => {
    cy.get('[class="t2b-title text-color-accent text-bold m-0 ng-tns-c356-7346"]')
        .should ('have.value', Title);
});



And('Check field Supple  {string}', (Description) => {
    cy.get('[class="px-16 text-normal overflow-auto thin-scrollbar w-100-p details-description"]')
        .should('have.value', Description);
});