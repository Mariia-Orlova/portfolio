import {When,Then,And} from "cypress-cucumber-preprocessor/steps";
import {companiesElements} from "../../../support/patterns/companies/CompaniesElements";


When('Check Filters View mode', (Title) => {
    cy.get(companiesElements.CompaniesViewMode)
        .should('contain','View mode');

    cy.get(companiesElements.CompaniesButtonCard)
        .should('contain',' Card ');

    cy.get(companiesElements.CompaniesButtonMap)
        .should('contain',' Map ');

    cy.get(companiesElements.CompaniesCheckPartners)
        .should('contain','Partners');


});

Then('Check Filters Categories on Companies page', (Title) => {
    cy.get(companiesElements.CompaniesCategoriesTitle)
        .should('contain','Categories');

    companiesElements.checkCaregories();

});


And('Check Filters Last active on Companies page', (Title) => {
    cy.get(companiesElements.CompaniesLastActiveTitle)
        .and ('contain' ,'Last active');

    companiesElements.checkLastActive();
});

And('Check Filters Distance on Companies page', (Title) => {
    cy.get(companiesElements.CompaniesDistanceTitle)
        .should('contain','Distance');

});

And('Check Filters City on Companies page', (Title) => {
    cy.get(companiesElements.CompaniesCityTitle)
        .should('contain','City');

});

And('Check Filters Countries on Companies page', (Title) => {
    cy.get(companiesElements.CompaniesCountriesTitle)
        .should('contain','Countries');

    companiesElements.checkCountries();
});



And('Check Filters Materials on Companies page', (Title) => {

    cy.get(companiesElements.CompaniesMaterialsTitle)
        .should('contain','Materials');

    companiesElements.checkMaterials();


});



And('Check Filters Industries on Companies page', (Title) => {

    cy.get(companiesElements.CompaniesIndustriesTitle)
        .should('contain','Industries');

    companiesElements.checkIndustries();

});

And('Check Filters Certificate on Companies page', (Title) => {

    cy.get(companiesElements.CompaniesCertificateTitle)
        .should('contain','Certificate');

    companiesElements.checkParamCertificate();

});

And('Check Filters Memberships on Companies page', (Title) => {

    cy.get(companiesElements.CompaniesMembershipsTitle)
        .should('contain','Memberships');

    cy.get(companiesElements.CompaniesMembership)
        .should ('contain' ,' SjorsHooijen ');

});

And('Check Filters Review score on Companies page', (Title) => {

    cy.get(companiesElements.CompaniesReviewScoreTitle)
        .should('contain','Review score');

});

And('Check Filters Company type on Companies page', (Title) => {

    cy.get(companiesElements.CompaniesCompanyTypeTitle)
        .should('contain','Company type');

    cy.get(companiesElements.CompaniesCompanyTypeSelf)
        .should ('contain' ,'Self Employed');

});

And('Check Filters Employees on Companies page', (Title) => {

    cy.get(companiesElements.CompaniesEmployeesTitle)
        .should('contain','Employees');

  //  cy.get(companiesElements.CompaniesEmployeesSelf)
  //      .should ('contain' ,'Self Employed');

});

And('Check Filters Relationships on Companies page', (Title) => {

    cy.get(companiesElements.CompaniesRelationshipTitle)
        .should('contain','Relationship');


});

And('Check Filters Production planning on Companies page', (Title) => {
    cy.get(companiesElements.CompaniesProductionPlanningTitle)
        .should('contain','Production planning');

    companiesElements.checkProductionPlanning();
});


And('Check Filters Production size on Companies page', (Title) => {
    cy.get(companiesElements.CompaniesProductionSizeTitle)
        .should('contain','Production size');
    companiesElements.checkProductionSize();

});