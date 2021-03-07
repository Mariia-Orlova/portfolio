import {When,Then,And} from "cypress-cucumber-preprocessor/steps";
import {loggedElements} from "../../../support/patterns/login/LoggedElements";



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

    loggedElements
        .checkForm();
    cy.contains('Recover your password');
    loggedElements
        .titleForgetPasswordLabel();
    loggedElements
        .inputEmailForgetPassword();
    loggedElements
        .forgetPasswordButtonReset();
    loggedElements
        .goBackToLoginLink();

});

When('Fill email {string}', (email) => {
    cy.get(loggedElements.emailForgetPassword)
        .type(email)
        .should('have.value', email);
});

And('Click on Reset button', () => {
    cy.get (loggedElements.forgetPasswordButtonResetElement)
        .click({force:true});
});

And('Message was sent to mailbox', () => {
    cy.get (loggedElements.form)
        .find(loggedElements.titleForgetPassword);
    cy.get ('.form-sent')
        .should ('contain', 'An email has been sent to techb2bdemochalkostechnology@gmail.com With instructions on how to reset your password');
    loggedElements
        .goBackToLoginLink();
});

And('Clear email field', () => {
    cy.get(loggedElements.emailForgetPassword)
        .clear()
        .should ('be.empty');
});


When('Set email {string}', (EmailForForget) => {
    cy.get(loggedElements.emailForgetPassword)
        .type(EmailForForget)
        .should('have.value', EmailForForget);
});


Then('Show Please enter a valid email address message', () => {
    cy.get ('#mat-error-1')
        .should('contain',' Please enter a valid email address ');
});


Then('Show User with email test@test.com is not registered message', () => {
    cy.xpath ('//div[contains(text(),\'User with email test@test.com is not registered\')]')
        .should('contain','User with email test@test.com is not registered');
});

Then('Show Email is required message', () => {
    cy.contains (' Email is required ');
});

