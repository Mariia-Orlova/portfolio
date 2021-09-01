import {When,Then,And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";


When('Click on Supple on Request page', (Title) => {
    cy.get(':nth-child(4) > .cdk-column-status > .mat-row-link')
       .click({force:true});
});


Then('Check Supple on Request field {string}', (Title) => {
    cy.get('.t2b-title')
      .should ('have.text', Title);
});



And('Check field Supple {string}', (Description) => {
    cy.get('[class="px-16 text-normal overflow-auto thin-scrollbar w-100-p details-description"]')
        .should('have.text', Description);
});

