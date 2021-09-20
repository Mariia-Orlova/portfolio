import {When} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";


When('Fill No Products data for Products tab', () => {
    //No Products
    cy.xpath (suppleDemandElements.NoProducts)
        .should ('contain', 'No Products').
        click({force:true});
});
