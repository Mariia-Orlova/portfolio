import { When,Then,And } from "cypress-cucumber-preprocessor/steps";
import {loggedElements} from "../../../support/patterns/login/LoggedElements";


const usernameInput = '#okta-signin-username'; //input username
const passwordInput = '#okta-signin-password';//input password


    When('Set username {string} invalid', (UserName)=>  {
        cy.get(usernameInput)
            .type(UserName)
            .should('have.value', UserName);
});

    And('Set password {string} invalid', (PassWord) => {
        cy.get(passwordInput)
            .type(PassWord)
            .should('have.value', PassWord);
});

    Then('Auth is unsuccessfully because is displayed error message', () => {
     cy.get('p')
         .should (($p) =>{
          expect ($p.first()).to.contain('Sign in failed!');
         })
});


    Then('Validation is shown on screen', () =>{
    loggedElements
        .showErrorMessageNull();
});
