import {When,Then, And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";

When ('Check first condition of Navigation Products tab', () => {
    cy.get(suppleDemandElements.NavigationProductsTab1Condition)
        .should('contain',' 3 ');

});



Then ('Check navigation Products tab', () => {

    cy.get(suppleDemandElements.NavigationProductsTabCheck)
        .should('contain','check_circle');
});