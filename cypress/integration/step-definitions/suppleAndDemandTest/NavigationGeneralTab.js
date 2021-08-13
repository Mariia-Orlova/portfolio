import {When,Then} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";

When ('Check first condition of Navigation General tab', () => {
    cy.get(suppleDemandElements.NavigationGeneralTab1Condition)
        .should('contain',' 1 ');

});



Then ('Check navigation General tab', () => {

    cy.get(suppleDemandElements.NavigationGeneralTabCheck)
        .should('contain','check_circle');
});