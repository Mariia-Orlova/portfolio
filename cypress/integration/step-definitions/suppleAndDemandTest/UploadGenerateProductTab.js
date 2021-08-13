import {When,Then} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";

When('Upload Generate data for Products tab', () => {
    cy.get (suppleDemandElements.ProductTabGenerate)
        .click({force:true});

    cy.get(suppleDemandElements.NewFileUpload)
        .attachFile(suppleDemandElements.filepath)
    cy.get(suppleDemandElements.RequestFileUploadGenerate)
        .contains('TestUploadFile.txt');


});