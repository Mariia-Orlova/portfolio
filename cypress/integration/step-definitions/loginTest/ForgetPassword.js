import {When,Then,And} from "cypress-cucumber-preprocessor/steps";
import {LoggedElements} from "../../../support/patterns/login/LoggedElements";

const loggedElements = new LoggedElements();

When('Click on Forget password', () => {
    cy.get(loggedElements.forgetPassword)
        .click();
});

Then('Forget password page is opened', () => {
    cy.url()
        .should('include', '/reset-password');
    cy.title()
        .should('eq', 'TECH2B - Reset Password');
});

And('Check elements in forget password page', () => {

    loggedElements.checkElementsInForgetPassword();

});
