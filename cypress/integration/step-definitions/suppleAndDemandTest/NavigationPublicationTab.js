import {When,Then, And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";

When ('Check first condition of Navigation Publication tab', () => {
    cy.get(':nth-child(4) > .step-icon > .w-32')
        .should('contain',' 4 ');

});



Then ('Check navigation Publication tab', () => {

 //   cy.get(':nth-child(4) > .mat-icon')
 //       .should('contain','check_circle');
});