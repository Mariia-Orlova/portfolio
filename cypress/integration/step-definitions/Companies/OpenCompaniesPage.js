
import {When,Then} from "cypress-cucumber-preprocessor/steps";

import {globalMenu} from "../../../support/patterns/globalElements/GlobalMenu";


When('Open Companies page', () => {
    cy.xpath(globalMenu.navCompaniesLink)
        .click({multiple:true});
});


Then('Companies page is opened', () => {
    cy.url()
        .should('contain', '/companies');
    cy.title()
        .should('eq', 'TECH2B - Company List');


});

