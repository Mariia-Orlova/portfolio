import {When,Then} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";

When('Fill Manually data add existing product for Products tab', () => {
    //Check product tab
    suppleDemandElements
        .productTab();
    cy.xpath(suppleDemandElements.CheckProductTabAddProduct)
        .should('contain', 'Add your product files relevant to your request');
    cy.xpath(suppleDemandElements.CheckProductTabSelectOptions)
        .should('contain', 'Select 1 of the 3 options to add products below');
    //Manual button
    cy.xpath(suppleDemandElements.manualButton).scrollIntoView()
        .should('contain', 'Manually')
        .click({force: true});
    //Click on
    cy.get(suppleDemandElements.ClickOnAddProduct)
        .find('.mat-button-wrapper')
        .should('contain', ' Add product ')
        .click({force: true});

    //Check on elements
    cy.get(suppleDemandElements.AddNewProduct)
        .should('contain', 'Add new product');

    cy.get(suppleDemandElements.addExistingProduct)
        .should('contain', 'Add existing product')
        .click({force: true});


    // Add existing product
    cy.xpath (suppleDemandElements.TitleChooseExistingProduct)
        .should ('contain', 'Choose existing products');


   cy.xpath (suppleDemandElements.FieldSearchInput)
        .should ('be.visible')
        .and ('be.empty');



    cy.get (suppleDemandElements.GenerateProductCheckbox).first()
        .click({force:true});


    cy.get(suppleDemandElements.SelectProduct)
        .should('contain', 'Ok')
        .and ('be.enabled')
        .click({force:true});


});