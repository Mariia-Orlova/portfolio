import {When,Then, And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";



When('Click on Create button in Supple in Supple and Demand page', () => {
   cy.get (suppleDemandElements.createButton)
       .click({force:true})
});

Then('Create Request for Quotation page is opened', () => {
    cy.url({timeout:5000})
        .should('include', '/create/request',);
    cy.title()
        .should('eq', 'TECH2B - Create Request');
    suppleDemandElements
        .checkTitleAndSecondTextForCreateSuppleAndDemand();
    suppleDemandElements
        .checkFillOutTheFormLabel();
    suppleDemandElements
        .checkGeneralText();
    suppleDemandElements
        .checkSuppleOrDemandText();
    suppleDemandElements
        .checkDoYouWantToOutsource();
});
When('Select Supple radiobutton', () => {
    suppleDemandElements
        .selectSuppleRadioButton();

});

And('Fill fields for General tab: Title {string}', (Title) => {

    suppleDemandElements
        .titleLabelText();
    suppleDemandElements
        .fillTitleText();
    //suppleDemandElements
      //  .titlePlaceholderText();

    cy.get(suppleDemandElements.inputTitleText)
        .type(Title)
        .should('have.value', Title);
});


And('Fill fields for General tab: InternalID {string}', (InternalID) => {

    suppleDemandElements
        .internalProjectIdLabelText();
    //suppleDemandElements
     //   .internalProjectNumberPlaceholder();
    suppleDemandElements
        .internalProjectNumberValue();


    cy.get(suppleDemandElements.inputInternalProjectNumberText)
        .type(InternalID)
        .should('have.value', InternalID);
});


And('Fill fields for General tab: Maximum number of quotations {string}', (Maximumnumberofquotations) => {
    suppleDemandElements
        .inputTextMaximumNumberOfQuotationsValue();
    //suppleDemandElements
       // .maximumNumberPlaceholderText();
    suppleDemandElements
        .maximumNumberLabelText();

    cy.get (suppleDemandElements.inputTextMaximumNumberOfQuotations)
        .type(Maximumnumberofquotations)
        .should ('have.value' , Maximumnumberofquotations);
});

And('Fill fields for General tab: Description,Contact,Contact preferences,Delivery date,Delivery condition,Quotation deadline', () => {

    suppleDemandElements
        .inputTextDescriptionValue();
    //  suppleDemandElements
    //  .DescriptionPlaceholder();
    suppleDemandElements
        .descriptionLabelText();

    cy.get(suppleDemandElements.inputTextDescription)
        .type('Description')
        .should('have.value', '');

    cy.contains('Contact')
        .should('contain', 'Contact');

    suppleDemandElements
        .contactLabelText();

    cy.contains('Contact preferences ')
        .should('contain', 'Contact preferences ');

   suppleDemandElements
       .contactPreferences();

    cy.contains('Delivery date*')
        .should('contain', 'Delivery date*');

    cy.get(suppleDemandElements.deliveryDateValue)
        .should('not.have.value', '');
        //.clear({force:true})
        //.type('06/04/2021')
        //.should('have.value', '06/04/2021');

    cy.contains('Quotation deadline *')
        .should('contain', 'Quotation deadline *');

    cy.get(suppleDemandElements.quotationDeadline)
        .should('not.have.value', '');
        //.clear({force:true})
        //.type('30/03/2021')
        //.should('have.value', '30/03/2021');

    cy.contains('Delivery condition')
        .should('contain', 'Delivery condition');
    suppleDemandElements
        .selectDeliveryCondition();
});

And('Fill data for Expertise tab', () => {
    suppleDemandElements
        .expertiseLabelText();
    suppleDemandElements
        .selectCategoryText();
    suppleDemandElements
        .selectCategoryEngineering();
    suppleDemandElements
        .selectCategoryTechnologies();
    suppleDemandElements
        .selectCategoryElectricalEngineering();
    suppleDemandElements
        .selectCategoryTransport();
    suppleDemandElements
        .selectCategorySoftware();
    suppleDemandElements
        .selectCategoryOthers();
    suppleDemandElements
        .selectCategoryArticles();
    suppleDemandElements
        .selectCategorySurfaceTreatment();

    cy.xpath(suppleDemandElements.categoryEngineering)
        .click({force:true});
    cy.contains ('Advice')
        .should ('contain', 'Advice')
        .click({force:true});
    cy.contains ('Calculation')
        .should ('contain' , 'Calculation')
        .click({force:true});
    cy.contains ('Hydraulic engineering')
        .should('contain' , 'Hydraulic engineering')
        .click({force:true});
    cy.contains ('Mechanical engineering')
        .should ('contain', 'Mechanical engineering')
        .click({force:true});
    cy.contains ('Pneumatic engineering')
        .should ('contain', 'Pneumatic engineering')
        .click({force:true});
    cy.contains ('Technical parts')
        .should ('contain' , 'Technical parts')
        .click({force:true});
    cy.contains (' Others')
        .should ('contain', ' Others')
        .click({force:true});
    cy.contains (' Construction')
        .should ('contain', ' Construction')
        .click({force:true});



});


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

And('Fill data for Publication tab', () => {
    suppleDemandElements
        .publicationTab();
    cy.contains('Choose how you want to share the publication below')
        .should('contain', 'Choose how you want to share the publication below');
    cy.contains('Public')
        .should('contain', 'Public');
    cy.contains('Tender area')
        .should('contain', 'Tender area');
    cy.contains('You can choose the countries that your request will be public to (default is all countries)')
        .should('contain', 'You can choose the countries that your request will be public to (default is all countries)');

    cy.get('.mat-checkbox-inner-container')
        .find('input')
        .should('be.checked');

   suppleDemandElements
        .selectNetherlandsTab();
   cy.get(suppleDemandElements.selectNetherlands)
       .eq(0)
       .click({force:true});
    cy.get(suppleDemandElements.selectNetherlands)
       .eq(1)
       .click({force:true});
    cy.get(suppleDemandElements.selectNetherlands)
       .eq(2)
       .click({force:true});
    cy.get(suppleDemandElements.selectNetherlands)
       .eq(3)
       .click({force:true});
    cy.get(suppleDemandElements.selectNetherlands)
       .eq(4)
       .click({force:true});
    cy.get(suppleDemandElements.selectNetherlands)
       .eq(5)
       .click({force:true});
    cy.get(suppleDemandElements.selectNetherlands)
       .eq(6)
       .click({force:true});
    cy.get(suppleDemandElements.selectNetherlands)
       .eq(7)
       .click({force:true});
    suppleDemandElements
        .selectTenderArea();

    //Invite

    cy.get(suppleDemandElements.clickOnInviteButton)
        .scrollIntoView()
        .should('be.visible')
        .and ('contain', ' Invite ')
        .and('not.be.disabled')
        .click({force:true});
    cy.get ('[class="w-100-p h-100-p dialog-container"]')
        .should ('be.visible');
    //select company
    cy.get ('[mat-raised-button]')
        .eq(0)
        .click({force:true});
    //click on Ok button
    cy.get ('[data-cy="select-company-button"]')
        .should('contain', 'Ok')
        .click({force:true});

    cy.xpath('//span[contains(text(),\'Create\')]')
        .should('contain' , 'Create')
        .click({force:true});
});


And('Fill Matchmaker tab', () => {
    suppleDemandElements
        .matchmakerTab();
    cy.get('[class="p-24 pb-12 matchmaker-company-list"]')
        .should('be.visible');
})

And('Click on Create button', () => {
    cy.get('class="verify-create-request-button mat-raised-button mat-button-base mat-accent"')
        .click({force:true});
});