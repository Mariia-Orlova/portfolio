import {When,Then, And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";

When ('Check first condition of Navigation Expertise tab', () => {
    cy.get(suppleDemandElements.NavigationExpertiseTab1Condition)
        .should('contain',' 2 ');

});



Then ('Check navigation Expertise tab', () => {

    cy.get(suppleDemandElements.NavigationExpertiseTabCheck)
        .should('contain','check_circle');
});