import {When,Then,And} from "cypress-cucumber-preprocessor/steps";

import {globalMenu} from "../../../support/patterns/globalElements/GlobalMenu";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";
import {companiesElements} from "../../../support/patterns/companies/CompaniesElements";


When('Open Company form', () => {
    cy.get(companiesElements.ClickOnCompany)
        .click({force:true});
});


Then('Check General Tab', () => {
    cy.get(companiesElements.CheckTitleEmail)
        .should('contain', ' Email ');
    cy.get(companiesElements.CheckEmail)
        .should('not.be.empty');

    cy.get(companiesElements.CheckTitlePhone)
        .should('contain', ' Phone');
    cy.get(companiesElements.CheckPhone)
        .should('not.be.empty');

    cy.get(companiesElements.CheckTitleLastActive)
        .should('contain', ' Last active');
    cy.get(companiesElements.CheckLastActive)
        .should('not.be.empty');

    cy.get(companiesElements.CheckTitleActiveSince)
        .should('contain', ' Active since');
    cy.get(companiesElements.CheckActiveSince)
        .should('not.be.empty');

    cy.get(companiesElements.CheckTitleConections)
        .should('contain', ' Connections ');
    cy.get(companiesElements.CheckConnections)
        .should('not.be.empty');

    cy.get(companiesElements.CheckTitleType)
        .should('contain', ' Type');
    cy.get(companiesElements.CheckType)
        .should('not.be.empty');

    cy.get(companiesElements.CheckTitleEmployees)
        .should('contain', ' Employees');
    cy.get(companiesElements.CheckEmployees)
        .should('not.be.empty');

    cy.get(companiesElements.CheckTitleBankAccountNumber)
        .should('contain', ' Bank account number ');
    cy.get(companiesElements.CheckBankAccountNumber)
        .should('not.be.empty');

    cy.get(companiesElements.CheckTitleCompanyNumber)
        .should('contain', ' Company Number ');
    cy.get(companiesElements.CheckCompanyNumber)
        .should('not.be.empty');

    cy.get(companiesElements.CheckTitleTitleVATNumber)
        .should('contain', ' VAT number ');
    cy.get(companiesElements.CheckVATNumber)
        .should('not.be.empty');

    cy.get(companiesElements.CheckTitleYearOfEstablishment)
        .should('contain', ' Year of establishment ');
    cy.get(companiesElements.CheckYearOfEstablishment)
        .should('not.be.empty');

    cy.get(companiesElements.CheckTitleProductionSize)
        .should('contain', ' Production size ');
    cy.get(companiesElements.CheckProductionSize)
        .should('not.be.empty');

    cy.get(companiesElements.CheckTitleProductionPlanning)
        .should('contain', ' Production planning ');
    cy.get(companiesElements.CheckProductionPlanning)
        .should('not.be.empty');




});

And('Check Description', () => {
    cy.get(companiesElements.CheckTitleDescription)
        .should('contain', ' Description ');
    cy.get(companiesElements.CheckDescription)
        .should('not.be.empty');
});
