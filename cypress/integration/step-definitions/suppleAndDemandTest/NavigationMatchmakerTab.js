import {When,Then, And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";

When ('Check first condition of Navigation Publication tab', () => {
    cy.get(suppleDemandElements.NavigationMatchmakerTab1Condition)
        .should('contain',' 5 ');

});



Then ('Check navigation Publication tab', () => {

  // cy.get(suppleDemandElements.NavigationMatchmakerTabCheck)
 //       .should('contain','check_circle');
});