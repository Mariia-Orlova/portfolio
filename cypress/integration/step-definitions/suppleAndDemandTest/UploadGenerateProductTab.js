import {When,Then} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";

When('Upload Txt Generate data for Products tab', () => {
    cy.get (suppleDemandElements.ProductTabGenerate)
        .click({force:true});

    cy.get(suppleDemandElements.NewFileUpload)
        .attachFile(suppleDemandElements.filepathTxt)
    cy.get(suppleDemandElements.RequestFileUploadGenerate)
        .contains('TestUploadFile.txt');


});