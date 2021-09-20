import {When} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";

When ('Fill Manually data for Products tab', () => {
    //Check product tab
    suppleDemandElements
        .productTab();
    cy.xpath(suppleDemandElements.CheckProductTabAddProduct)
        .should('contain', 'Add your product files relevant to your request');
    cy.xpath (suppleDemandElements.CheckProductTabSelectOptions)
        .should ('contain' ,'Select 1 of the 3 options to add products below');
    //Manual button
    cy.xpath (suppleDemandElements.manualButton).scrollIntoView()
        .should ('contain', 'Manually')
        .click({force:true});
    //Click on
    cy.get (suppleDemandElements.ClickOnAddProduct)
        .find('.mat-button-wrapper')
        .should ('contain', ' Add product ')
        .click({force:true});

    //Check on elements
    cy.get (suppleDemandElements.addExistingProduct)
        .should ('contain', 'Add existing product');

    cy.get (suppleDemandElements.AddNewProduct)
        .should ('contain', 'Add new product')
        .click({force:true});



    // Add file
    cy.get ('.create-button')
        .should('contain', ' Add file ')
        .click({force:true});


    //Title input
    cy.contains ('Title')
        .should ('contain', 'Title');
    cy.get (suppleDemandElements.TitleInput)
        .should ('be.empty')
        .type ('New product',{force:true})
        .should ('have.value', 'New product');

    //Quantity field
    cy.contains ('Quantity')
        .should ('contain', 'Quantity');

    cy.get (suppleDemandElements.QuantityInput)
        .should ('be.empty')
        .type ('2',{force:true})
        .should ('have.value', '2');

    //Product field
    cy.contains ('Product number')
        .should ('contain', 'Product number');

    cy.get ('#mat-input-9')
        .should ('be.empty')
        .type ('2',{force:true})
        .should ('have.value', '2');

    //Length field
    cy.contains ('Length')
        .should ('contain', 'Length');
    cy.get ('#mat-input-10')
        .should ('be.empty')
        .type ('2',{force:true})
        .should ('have.value', '2');

    //Width field
    cy.contains ('Width')
        .should ('contain', 'Width');
    cy.get ('#mat-input-11')
        .should ('be.empty')
        .type ('2',{force:true})
        .should ('have.value', '2');

    //Height field
    cy.contains ('Height')
        .should ('contain', 'Height');
    cy.get ('#mat-input-12')
        .should ('be.empty')
        .type ('2',{force:true})
        .should ('have.value', '2');

    //Material
    cy.contains ('Material')
        .should ('contain', 'Material');
    suppleDemandElements
        .selectMaterialMetal();
    suppleDemandElements
        .selectMaterialPlastic();
    suppleDemandElements
        .selectMaterialWood();
    suppleDemandElements
        .selectMaterialOthers();

    //Description product
    cy.get(suppleDemandElements.inputTextDescription)
        .eq(1)
        .type('Description for product',{force:true})
        .should('have.value', '');

});