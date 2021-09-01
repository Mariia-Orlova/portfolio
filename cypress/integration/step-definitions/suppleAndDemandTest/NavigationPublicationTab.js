import {When,Then, And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";

When ('Check first condition of Navigation Publication tab', () => {
    cy.get(suppleDemandElements.NavigationPublicationTab1Condition)
        .should('contain',' 4 ');

});



Then ('Check navigation Publication tab', () => {

   cy.get(suppleDemandElements.NavigationPublicationTabCheck)
        .should('contain','check_circle');
});