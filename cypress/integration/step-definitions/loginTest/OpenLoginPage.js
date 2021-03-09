import {Given,Then,And} from "cypress-cucumber-preprocessor/steps";
import {loggedElements} from "../../../support/patterns/login/LoggedElements";

Given('Open login page', () => {
    loggedElements
        .openSite();
});

Then('Login page is opened', () => {
    cy.visit('/', {
        onBeforeLoad(win) {
            Object.defineProperty(win.navigator, 'language', { value: 'en-GB' });
            Object.defineProperty(win.navigator, 'languages', { value: ['en'] });
            Object.defineProperty(win.navigator, 'accept_languages', { value: ['en'] });
        },
        headers: {
            'Accept-Language': 'en',
        },
    });
        cy.url().should('include', '/login');
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
