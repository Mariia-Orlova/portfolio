import {When,Then, And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";


And('Fill Generate data for Products tab', () => {
    //Check product tab
    suppleDemandElements
        .productTab();
    cy.xpath(suppleDemandElements.CheckProductTabAddProduct)
        .should('contain', 'Add your product files relevant to your request');
    cy.xpath (suppleDemandElements.CheckProductTabSelectOptions)
        .should ('contain' ,'Select 1 of the 3 options to add products below');

    // Generate
    cy.xpath(suppleDemandElements.ProductTabGenerate)
       .should ('contain', 'Generate')
        .click({force:true});

    cy.get (suppleDemandElements.GenerateAddProduct)
        .should('contain', ' Add products ')
        .click ({force:true});

    cy.get (suppleDemandElements.GenerateProductCheckbox)
        .eq(0)
        .click({force:true});

    //click OK
    cy.get (suppleDemandElements.SelectProduct)
        .should('contain', 'Ok')
        .and ('be.enabled')
        .click({force:true});






});
