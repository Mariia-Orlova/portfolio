import {When,Then,And } from "cypress-cucumber-preprocessor/steps";
import {loggedElements} from "../../../support/patterns/login/LoggedElements";



    When('Set username {string}', (email) => {
    cy.get(loggedElements.usernameInput)
        .type(email)
        .should('have.value', email);

});

    And('Set password {string}', (password) => {
        cy.get(loggedElements.passwordInput)
            .type(password)
            .should('have.value', password);
    });

    And('Check Remember Me', () => {
        cy.get(loggedElements.rememberCheckbox)
            .click({force:true});
});

    And('Click on log in button', () => {
    cy.get(loggedElements.loginButton)
        .click({force:true});

});


Then('Auth is successfully', () =>{
    cy.url({timeout:5000})
        .should('include', '/implicit/callback');
   // cy.wait(4000);
    cy.url({timeout:5000})
        .should('include', '/dashboard')

});
