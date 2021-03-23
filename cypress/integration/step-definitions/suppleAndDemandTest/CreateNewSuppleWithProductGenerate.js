import {When,Then, And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";


And('Fill Generate data for Products tab', () => {
    //Check product tab
    suppleDemandElements
        .productTab();
    cy.xpath('//h4[contains(text(),\'Add your product files relevant to your request\')]')
        .should('contain', 'Add your product files relevant to your request');
    cy.xpath ('//p[contains(text(),\'Select 1 of the 3 options to add products below\')]')
        .should ('contain' ,'Select 1 of the 3 options to add products below');

    // Generate
    cy.xpath('//h3[contains(text(),\'Generate\')]')
       .should ('contain', 'Generate')
        .click({force:true});


    //No Products

   // cy.xpath ('//h3[contains(text(),\'No Products\')]')
    //    .should ('contain', 'No Products');



});
