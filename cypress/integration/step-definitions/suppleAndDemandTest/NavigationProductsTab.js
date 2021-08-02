import {When,Then, And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";

When ('Check first condition of Navigation Products tab', () => {
    cy.get(':nth-child(3) > .step-icon > .w-32')
        .should('contain',' 3 ');

});



Then ('Check navigation Products tab', () => {

    cy.get(':nth-child(3) > .mat-icon')
        .should('contain','check_circle');
});