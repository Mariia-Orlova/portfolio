import {When,Then, And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";

When ('Check first condition of Navigation General tab', () => {
    cy.get('.selected > .step-icon > .w-32')
        .should('contain',' 1 ');

});



Then ('Check navigation General tab', () => {

    cy.get('.selected > .mat-icon')
        .should('contain','check_circle');
});