
import {When,Then} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";


When('Open Supple and Demand page', () => {
    cy.xpath(suppleDemandElements.navSuppleAndDemandLink)
        .click({force:true});
});


Then('Supple and Demand page is opened', () => {
    cy.url()
        .should('contain', '/supply-demand');
    cy.title()
        .should('eq', 'TECH - Supply & Demand List');


});

