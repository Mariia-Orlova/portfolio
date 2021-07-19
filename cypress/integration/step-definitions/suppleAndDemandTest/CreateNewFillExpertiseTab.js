import {When} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";

When ('Fill data for Expertise tab', () => {
    suppleDemandElements
        .expertiseLabelText();
    suppleDemandElements
        .selectCategoryText();
    suppleDemandElements
        .selectCategoryEngineering();
    suppleDemandElements
        .selectCategoryTechnologies();
    suppleDemandElements
        .selectCategoryElectricalEngineering();
    suppleDemandElements
        .selectCategoryTransport();
    suppleDemandElements
        .selectCategorySoftware();
    suppleDemandElements
        .selectCategoryOthers();
    suppleDemandElements
        .selectCategoryArticles();
    suppleDemandElements
        .selectCategorySurfaceTreatment();

    //cy.get(suppleDemandElements.material)
    // .eq(0)
    //.click({force:true});
    cy.contains ('Advice')
        .should ('contain', 'Advice')
        .click({force:true});
    cy.contains ('Calculation')
        .should ('contain' , 'Calculation')
        .click({force:true});
    cy.contains ('Hydraulic engineering')
        .should('contain' , 'Hydraulic engineering')
        .click({force:true});
    cy.contains ('Mechanical engineering')
        .should ('contain', 'Mechanical engineering')
        .click({force:true});
    cy.contains ('Pneumatic engineering')
        .should ('contain', 'Pneumatic engineering')
        .click({force:true});
    cy.contains ('Technical parts')
        .should ('contain' , 'Technical parts')
        .click({force:true});
    cy.contains (' Others')
        .should ('contain', ' Others')
        .click({force:true});
    cy.contains (' Construction')
        .should ('contain', ' Construction')
        .click({force:true});



});