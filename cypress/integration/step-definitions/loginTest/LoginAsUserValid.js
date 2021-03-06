import {When,Then,And } from "cypress-cucumber-preprocessor/steps";
import {LoggedElements} from "../../../support/patterns/login/LoggedElements";

const loggedElements = new LoggedElements();
const usernameInput = '#okta-signin-username'; //input username
const passwordInput = '#okta-signin-password';//input password

    When('Set username {string}', (email) => {
    cy.get(usernameInput)
        .type(email)
        .should('have.value', email);

});

    And('Set password {string}', (password) => {
        cy.get(passwordInput)
            .type(password)
            .should('have.value', password);
    });

    And('Check Remember Me', () => {
        loggedElements
            .rememberMe();
});

    And('Click on log in button', () => {
    loggedElements
        .clickLoginButton();

});


Then('Auth is successfully', () =>{
    cy.url()
        .should('include', '/implicit/callback');
    cy.wait(4000);
    cy.url()
        .should('include', '/dashboard')

});
