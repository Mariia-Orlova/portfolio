import {When,Then, And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";



When('Click on Create button in Supple in Supple and Demand page', () => {
   cy.get (suppleDemandElements.createButton)
       .click({force:true})
});

Then('Create Request for Quotation page is opened', () => {
    cy.url()
        .should('include', '/create/request');
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
        .should('have.value', '04/04/2021')
        .clear({force:true})
        .type('04/04/2021')
        .should('have.value', '04/04/2021');

    cy.contains('Quotation deadline *')
        .should('contain', 'Quotation deadline *');

    cy.get(suppleDemandElements.quotationDeadline)
        .should('have.value', '28/03/2021')
        .clear({force:true})
        .type('28/03/2021')
        .should('have.value', '28/03/2021');

    cy.contains('Delivery condition')
        .should('contain', 'Delivery condition');
    suppleDemandElements
        .selectDeliveryCondition();
});

And('Fill data for Expertise tab', () => {
    suppleDemandElements
        .expertiseLabelText();


});


And('Fill data for Products tab', () => {
    suppleDemandElements
        .productTab();

});

And('Fill data for Publication tab', () => {
    suppleDemandElements
        .publicationTab();

});


And('Fill Matchmaker tab', () => {
    suppleDemandElements
        .matchmakerTab();
});