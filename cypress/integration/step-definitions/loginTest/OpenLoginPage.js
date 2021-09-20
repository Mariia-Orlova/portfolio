import {Given,Then,And} from "cypress-cucumber-preprocessor/steps";
import {loggedElements} from "../../../support/patterns/login/LoggedElements";

Given('Open login page', () => {
    loggedElements
        .openSite();
});

Then('Login page is opened', () => {
    cy.visit('/');
    cy.url()
      .should('include', '/login');
    cy.title()
      .should('eq', 'TECH - Login');
});


And('Check elements form', () => {
    loggedElements
        .checkForm();
    cy.get('.title')
        .should('contain', 'LOGIN TO YOUR ACCOUNT');
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
