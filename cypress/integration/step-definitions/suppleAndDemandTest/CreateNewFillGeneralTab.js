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
        .click({force:true})
        .scrollIntoView()
        .type(Maximumnumberofquotations)
        .should ('have.value' , Maximumnumberofquotations);
});

And('Fill fields for General tab: Description {string}', (Description) => {
    suppleDemandElements
        .inputTextDescriptionValue();


    cy.get (suppleDemandElements.inputTextDescription)
        .click({force:true})
        .scrollIntoView()
        .type(Description)
        .should ('have.value' , Description);
});

And('Fill fields for General tab: Contact,Contact preferences,Delivery date,Delivery condition,Quotation deadline', () => {

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

    cy.contains('Quotation deadline*')
        .should('contain', 'Quotation deadline*');

    cy.contains('Delivery condition')
        .should('contain', 'Delivery condition');
    suppleDemandElements
        .selectDeliveryCondition();

    cy.get(suppleDemandElements.quotationDeadline)
        .should('not.have.value', '');
    //.clear({force:true})
    //.type('30/03/2021')
    //.should('have.value', '30/03/2021');

    suppleDemandElements
        .inputTextDescriptionValue();
    //  suppleDemandElements
    //  .DescriptionPlaceholder();
    suppleDemandElements
        .descriptionLabelText();

    cy.get(suppleDemandElements.inputTextDescription)
        .click({force:true})
        .scrollIntoView()
        .type('Description')
        .should('have.value', '');

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