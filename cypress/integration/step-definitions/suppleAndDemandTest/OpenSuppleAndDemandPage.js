import {When,Then} from "cypress-cucumber-preprocessor/steps";

import {globalMenu} from "../../../support/patterns/globalElements/GlobalMenu";


When('Open Supple and Demand page', () => {
    cy.xpath(globalMenu.navSuppleAndDemandLink)
        .click({force:true});
});


Then('Supple and Demand page is opened', () => {
    cy.url()
        .should('include', '/supply-demand');
    cy.title()
        .should('eq', 'TECH2B - Supply & Demand List');


});

//And Check display filters
//And Check display Supple and Demand table