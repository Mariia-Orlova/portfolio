import {When,Then, And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";

When ('Fill fields for General tab: Title {string}', (Title) => {

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


Then('Fill fields for General tab: InternalID {string}', (InternalID) => {

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
        .click({force:true})
        .scrollIntoView()
        .type(Maximumnumberofquotations)
        .should ('have.value' , Maximumnumberofquotations);
});

And('Fill fields for General tab: Description {string}', (Description) => {
    suppleDemandElements
        .inputTextDescriptionValue();
    suppleDemandElements
        .descriptionLabelText();

    cy.get (suppleDemandElements.inputTextDescription)
        .scrollIntoView()
        .click({force:true})
        .type(Description)
        .should ('have.text' , Description);


});


And('Fill fields for General tab: Contact', () => {
    cy.contains('Contact')
        .should('contain', 'Contact');

    suppleDemandElements
        .contactLabelText();
});

And('Fill fields for General tab: Contact preferences', () => {
    cy.contains('Contact preferences ')
        .should('contain', 'Contact preferences ');

    suppleDemandElements
        .contactPreferences();
});

And('Fill fields for General tab: Delivery date', () => {
    cy.contains('Delivery date*')
        .should('contain', 'Delivery date*');

    cy.get(suppleDemandElements.deliveryDateValue)
        .should('not.have.value', '');
    //.clear({force:true})
    //.type('06/04/2021')
    //.should('have.value', '06/04/2021');
});

And('Fill fields for General tab: Quotation deadline', () => {
    cy.contains('Quotation deadline*')
        .should('contain', 'Quotation deadline*');

    cy.get(suppleDemandElements.quotationDeadline)
        .should('not.have.value', '');
    //.clear({force:true})
    //.type('30/03/2021')
    //.should('have.value', '30/03/2021');
});

And('Fill fields for General tab: Delivery condition',() => {
    cy.contains('Delivery preference*')
        .should('contain', 'Delivery preference*');
    suppleDemandElements
        .selectDeliveryCondition();
});




And ('Fill Advanced options', () =>{
    suppleDemandElements
        .selectAdvancedOptions();

    suppleDemandElements
        .labelProductionSize();
    suppleDemandElements
        .selectProductionSize();

    suppleDemandElements
        .labelProductionPlanning();
    suppleDemandElements
        . selectProductionPlanning();

    suppleDemandElements
        .labelCertificate();
    suppleDemandElements
        .selectCertificate();

    suppleDemandElements
        .labelIndustries();
    suppleDemandElements
        .selectIndustries();

    suppleDemandElements
        .labelTolerance();
    suppleDemandElements
        . selectTolerances();
});

And('Fill Terms and conditions',() => {
    cy.get(suppleDemandElements.termsAndConditionsTitle)
        .should('contain', 'Terms and conditions');
     cy.get(suppleDemandElements.termsAndConditionSlide)
        .click({force:true});
    cy.get(suppleDemandElements.NewFileUpload)
        .attachFile(suppleDemandElements.filepath)
    cy.get(suppleDemandElements.RequestFileUpload)
        .contains('TestUploadFile.txt');

});

And('Fill General files',() => {
    cy.get(suppleDemandElements.generalFilesTitle)
        .should('contain', 'General files');
    cy.get(suppleDemandElements.generalFilesSlide)
        .click({force:true});

    cy.get(suppleDemandElements.NewFileUpload)
        .attachFile(suppleDemandElements.filepath)
    cy.get(suppleDemandElements.RequestFileUpload)
        .contains('TestUploadFile.txt');
});