import {When,Then, And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";


And('Fill Manually data for Products tab', () => {
    //Check product tab
    suppleDemandElements
        .productTab();
    cy.xpath('//h4[contains(text(),\'Add your product files relevant to your request\')]')
        .should('contain', 'Add your product files relevant to your request');
    cy.xpath ('//p[contains(text(),\'Select 1 of the 3 options to add products below\')]')
        .should ('contain' ,'Select 1 of the 3 options to add products below');
    //Manual button
    cy.xpath ('//h3[contains(text(),\'Manually\')]').scrollIntoView()
        .should ('contain', 'Manually')
        .click({force:true});
    //Click on
    cy.get ('[data-cy=add-product]')
        .find('.mat-button-wrapper')
        .should ('contain', ' Add product ')
        .click({force:true});

    //Check on elements
    cy.get ('[data-cy="add-existing-product"]')
        .should ('contain', 'Add existing product');

    cy.get ('[data-cy="add-new-product"]')
        .should ('contain', 'Add new product')
        .click({force:true});



    // Add file
    cy.get ('.create-button')
        .should('contain', ' Add file ')
        .click({force:true});
   // cy.get ('[class="mat-menu-content"]')
     //   .should('be.visible');

   // cy.contains ('Add new documents')
      //  .should('contain', 'Add existing documents');

    //cy.contains ('Add existing documents')
      //  .should('contain', 'Add existing documents')
      //  .click({force:true});

   //Title input
    cy.contains ('Title')
        .should ('contain', 'Title');
    cy.get ('[data-cy="title-input"]')
        .should ('be.empty')
        .type ('New product',{force:true})
        .should ('have.value', 'New product');

    //Quantity field
        cy.contains ('Quantity')
            .should ('contain', 'Quantity');

        cy.get ('[data-cy="quantity-input"]')
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
        .selectMaterial();

    //Description product
    cy.get(suppleDemandElements.inputTextDescription)
        .eq(1)
        .type('Description for product',{force:true})
        .should('have.value', '');

});

    And('Click on Save button', () => {
    cy.get('.save-create-request-button')
        .should('be.enabled')
        .click({force:true});
});