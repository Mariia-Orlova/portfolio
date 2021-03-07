import {Given,Then,And} from "cypress-cucumber-preprocessor/steps";
import {loggedElements} from "../../../support/patterns/login/LoggedElements";

Given('Open login page', () => {
    loggedElements
        .openSite();
});

Then('Login page is opened', () => {
    cy.url()
        .should('include', '/login');
    cy.title()
        .should('eq', 'TECH2B - Login');
});


And('Check elements form', () => {
    loggedElements
        .checkElementsInForm();
});
