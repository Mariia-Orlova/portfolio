import {When,Then,And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";


When('Check Filters General', (Title) => {
    cy.get(suppleDemandElements.FiltersGeneralTitle)
        .should('contain','General');

    cy.get(suppleDemandElements.FiltersGeneralButtonS)
        .should('contain',' Supply ');

    cy.get(suppleDemandElements.FiltersGeneralButtonD)
        .should('contain',' Demand ');

    cy.get(suppleDemandElements.FiltersGeneralShowMine)
        .should('contain',' Show mine ');

    cy.get(suppleDemandElements.FiltersGeneralCalculate)
        .should ('contain' ,' Calculate ');
});

Then('Check Filters Categories', (Title) => {
    cy.get(suppleDemandElements.FiltersCategoriesTitle)
        .should('contain','Categories');


    cy.get(suppleDemandElements.FiltersCategoriesEngeening)
        .should('contain',' Engineering');

    cy.get(suppleDemandElements.FiltersCategoriesTechnologies)
        .and ('contain' ,' Technologies');

    cy.get(suppleDemandElements.FiltersCategoriesSurfaceTreatment)
        .should('contain',' Surface treatment');

    cy.get(suppleDemandElements.FiltersCategoriesElectricalEngeneering)
        .should('contain',' Electrical engineering');

    cy.get(suppleDemandElements.FiltersCategoriesTransport)
        .should('contain',' Transport');

    cy.get(suppleDemandElements.FiltersCategoriesSoftware)
        .should('contain',' Software');

    cy.get(suppleDemandElements.FiltersCategoriesOthers)
        .should('contain',' Others');

    cy.get(suppleDemandElements.FiltersCategoriesArticles)
        .should('contain',' Articles');


});


And('Check Filters Status', (Title) => {
    cy.get('#mat-expansion-panel-header-2 > .mat-content > .mat-expansion-panel-header-title')
        .should('contain','Status');

    cy.get(':nth-child(1) > [data-cy=marketplace-status-filter] > .mat-checkbox-layout > .mat-checkbox-label')
        .should('contain',' Active');

    cy.get(':nth-child(2) > [data-cy=marketplace-status-filter] > .mat-checkbox-layout > .mat-checkbox-label')
        .should('contain',' Closed');

    cy.get(':nth-child(3) > [data-cy=marketplace-status-filter] > .mat-checkbox-layout > .mat-checkbox-label')
        .should('contain',' Pause');

    cy.get(':nth-child(4) > [data-cy=marketplace-status-filter] > .mat-checkbox-layout > .mat-checkbox-label')
        .and ('contain' ,' Match');

    cy.get(':nth-child(5) > [data-cy=marketplace-status-filter] > .mat-checkbox-layout > .mat-checkbox-label')
        .and ('contain' ,' Completed');
});


And('Check Filters Countries', (Title) => {
    cy.get('#mat-expansion-panel-header-3 > .mat-content > .mat-expansion-panel-header-title')
        .should('contain','Countries');

    cy.get('#mat-checkbox-225 > .mat-checkbox-layout > .mat-checkbox-label')
        .should('contain',' The Netherlands ');

    cy.get('#mat-checkbox-226 > .mat-checkbox-layout > .mat-checkbox-label')
        .should('contain',' England ');

    cy.get('#mat-checkbox-227 > .mat-checkbox-layout > .mat-checkbox-label')
        .should('contain',' Germany ');

    cy.get('#mat-checkbox-228 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,' Belgium ');

    cy.get('#mat-checkbox-229 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,' Ireland ');

    cy.get('#mat-checkbox-230 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,' Northern Ireland ');

    cy.get('#mat-checkbox-231 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,' Scotland ');

    cy.get('#mat-checkbox-232 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,' Wales ');
});



And('Check Filters Offered since', (Title) => {

    cy.get('#mat-expansion-panel-header-4 > .mat-content > .mat-expansion-panel-header-title')
        .should('contain','Offered since');

    cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content')
        .should('contain',' Today ');

    cy.get('#mat-radio-3 > .mat-radio-label > .mat-radio-label-content')
        .should('contain',' Yesterday ');

    cy.get('#mat-radio-4 > .mat-radio-label > .mat-radio-label-content')
        .should('contain',' A week ');

    cy.get('#mat-radio-5 > .mat-radio-label > .mat-radio-label-content')
        .should('contain',' Always ');


});


And('Check Filters Quotation count', (Title) => {

    cy.get('#mat-expansion-panel-header-5 > .mat-content > .mat-expansion-panel-header-title')
        .should('contain','Quotation count');


   // cy.get('.mat-slider')
       // .should ('be.enabled');

});


And('Check Filters Production planning', (Title) => {

    cy.get('#mat-expansion-panel-header-7 > .mat-content > .mat-expansion-panel-header-title')
        .should('contain','Production planning');

    cy.get('#mat-checkbox-241 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,'Does not apply');

    cy.get('#mat-checkbox-242 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,'Make-to-Stock');

    cy.get('#mat-checkbox-243 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,'Make-to-Order');

    cy.get('#mat-checkbox-244 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,'Engineer-to-Order');
});


And('Check Filters Production size', (Title) => {

    cy.get('#mat-expansion-panel-header-8 > .mat-content > .mat-expansion-panel-header-title')
        .should('contain','Production size');

    cy.get('#mat-checkbox-246 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,'Does not apply');

    cy.get('#mat-checkbox-247 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,'Prototypes');

    cy.get('#mat-checkbox-248 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,'Single Pieces');

    cy.get('#mat-checkbox-249 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,'Large Series');

});

And('Check Filters Industries', (Title) => {

    cy.get('#mat-expansion-panel-header-9 > .mat-content > .mat-expansion-panel-header-title')
        .should('contain','Industries');

    cy.get('#mat-checkbox-253 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,'Drive and gear technology');

    cy.get('#mat-checkbox-254 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,'Additive manufacturing');

    cy.get('#mat-checkbox-255 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,'Agro-industry');

    cy.get('#mat-checkbox-256 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,'Automotive');

});

And('Check Filters Certificate', (Title) => {

    cy.get('#mat-expansion-panel-header-10 > .mat-content > .mat-expansion-panel-header-title')
        .should('contain','Certificate');

    cy.get('#mat-checkbox-263 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,'AS9100');

    cy.get('#mat-checkbox-264 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,'DIN 18800-7:2008 Class A-C');

    cy.get('#mat-checkbox-265 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,'DIN 18800-7:2008 Class D/E');

});

And('Check Filters Tolerance', (Title) => {

    cy.get('#mat-expansion-panel-header-11 > .mat-content > .mat-expansion-panel-header-title')
        .should('contain','Tolerance');

    cy.get('#mat-checkbox-273 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,'< 0,0009');

    cy.get('#mat-checkbox-274 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,'± 0,001');

    cy.get('#mat-checkbox-275 > .mat-checkbox-layout > .mat-checkbox-label')
        .should ('contain' ,'± 0,005');

});