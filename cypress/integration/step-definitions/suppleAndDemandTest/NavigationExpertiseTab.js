import {When,Then, And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";

When ('Check first condition of Navigation Expertise tab', () => {
    cy.get(':nth-child(2) > .step-icon > .w-32')
        .should('contain',' 2 ');

});



Then ('Check navigation Expertise tab', () => {

    cy.get(':nth-child(2) > .mat-icon')
        .should('contain','check_circle');
});