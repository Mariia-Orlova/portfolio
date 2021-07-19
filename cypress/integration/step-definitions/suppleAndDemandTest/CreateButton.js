import {When} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";

When('Click on Create button in Supple in Supple and Demand page', () => {
    cy.get (suppleDemandElements.createButton)
        .click({force:true})
});