import {When,Then, And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";


And('Fill No Products data for Products tab', () => {
    //No Products
    cy.xpath ('//h3[contains(text(),\'No Products\')]')
        .should ('contain', 'No Products').
        click({force:true});

    cy.get ('.show-add-product-button > .mat-focus-indicator')
        .should('be.enabled')
        .click({force:true});

    //Click on
    cy.get ('[data-cy=add-product]')
        .find('.mat-button-wrapper')
        .should ('contain', ' Add product ')
        .click({force:true});
    cy.get ('[data-cy="add-new-product"]')
        .should ('contain', 'Add new product')
        .click({force:true});
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
        .selectMaterialMetal();
    suppleDemandElements
        .selectMaterialWood();
    suppleDemandElements
        .selectMaterialPlastic();
    suppleDemandElements
        .selectMaterialOthers();

    //Description product
    cy.get(suppleDemandElements.inputTextDescription)
        .eq(1)
        .type('Description for product',{force:true})
        .should('have.value', '');
});
