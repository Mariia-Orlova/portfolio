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
        .checkForm();
    cy.contains('Login to your account');
    loggedElements
        .checkLogo();
    loggedElements
        .userNameLabelDisplay();
    loggedElements
        .passwordLabelDisplay();
    loggedElements
        .userNameInput();
    loggedElements
        .passWordInput();
    loggedElements
        .rememberMeCheckbox();
    loggedElements
        .rememberMeLabelTitle();
    loggedElements
        .logInButton();
    loggedElements
        .forgetPasswordLink();
    loggedElements
        .createAccountLink();
    loggedElements
        .dontHaveAnAccount();
});
