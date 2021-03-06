import {Given, Then} from "cypress-cucumber-preprocessor/steps";
import {loggedElements} from "../../../support/patterns/login/LoggedElements";

Given('Open login page', () => {
    loggedElements
        .openSite();
    cy.url()
        .should('include', '/login');
    cy.title()
        .should('eq', 'TECH2B - Login');
});

Then('Check elements form', () => {
    loggedElements
        .checkElementsInForm();
});
