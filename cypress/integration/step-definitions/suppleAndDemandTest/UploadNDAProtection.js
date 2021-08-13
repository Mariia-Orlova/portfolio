import {When} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";

When('Upload file for NDA Protection', () => {
   cy.get (suppleDemandElements.NDASlideToggle)
       .click({force:true});

   cy.get(suppleDemandElements.NewFileUpload)
        .attachFile(suppleDemandElements.filepath)
   cy.get(suppleDemandElements.BrowseUploadFile)
        .click({force:true})
   cy.get(suppleDemandElements.RequestFileUpload)
        .contains('TestUploadFile.txt');


});