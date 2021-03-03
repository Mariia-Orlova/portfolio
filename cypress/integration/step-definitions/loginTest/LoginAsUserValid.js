import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import {loggedElements} from "../../../support/patterns/login/LoggedElements";


    Given('Open login page', () => {
    loggedElements
        .openSite();
    cy.url()
        .should('include', '/login');
});

    Then('Check elements form', () => {
    loggedElements
        .checkElementsInForm();
});

    When('Set username', () => {
    loggedElements
        .setUsername();
});

    And('Set password', () => {
    loggedElements
        .setPassword();
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
    cy.wait(2000);
    cy.url()
        .should('include', '/dashboard')

});
