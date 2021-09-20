import {When, Then} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";

When('Upload Txt file for NDA Protection', () => {
   cy.get (suppleDemandElements.NDASlideToggle)
       .click({force:true});

   cy.get(suppleDemandElements.NewFileUpload)
        .attachFile(suppleDemandElements.filepathTxt)
   cy.get(suppleDemandElements.BrowseUploadFile)
        .click({force:true})
   cy.get(suppleDemandElements.RequestFileUpload)
        .contains('TestUploadFile.txt');


});

Then('Upload Jpg file for NDA Protection', () => {
   cy.get (suppleDemandElements.NDASlideToggle)
       .click({force:true});

   cy.get(suppleDemandElements.NewFileUpload)
       .attachFile(suppleDemandElements.filepathJpg)
   cy.get(suppleDemandElements.BrowseUploadFile)
       .click({force:true})
   cy.get(suppleDemandElements.RequestFileUpload)
       .contains('TestJpg.jpg');


});

