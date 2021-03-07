

beforeEach(() => {
    cy.fixture('user').as('userCredential');
});


export class LoggedElements {
    //Login page
   form ='#form';
   rememberCheckbox ='[name=\'remember\']';
   rememberMeLabel = '[data-se-for-name="remember"]';
   userNameLabel = '//label[contains(text(),\'Username\')]';
   passwordLabel = '//label[contains(text(),"Password")]';
   usernameInput = '#okta-signin-username'; //input username
   passwordInput = '#okta-signin-password';//input password
   loginButton = '#okta-signin-submit';//Log in button
   forgetPassword = '.forgot-password';
   createAnAccountLink = '//a[contains(text(),\'Create an account\')]';
   errorMessageNull = '[data-se="o-form-error-container"]';
   //Forget password page
    titleForgetPassword = '.title';
    emailForgetPassword = '#mat-input-0';
    link = '.link';
    forgetPasswordButtonResetElement =':button';

    openSite() {
        cy.visit('/');

    };

    checkForm() {
        cy.get(this.form)
            .should('be.visible');
    };

    checkLogo(){
        cy.get('img')
            .should ('be.visible')
            .should ('have.attr', 'src', 'assets/images/logos/t2b-logo-text.svg');
    };

    userNameLabelDisplay() {
        cy.xpath(this.userNameLabel)
            .should('be.visible')
            .should('contain', 'Username');
    };

    passwordLabelDisplay() {
        cy.xpath(this.passwordLabel)
            .should('be.visible')
            .should('contain', 'Password');
    };

    userNameInput() {
        cy.get(this.usernameInput)
            .should('be.visible')
            .should('be.empty');
    };

    passWordInput() {
        cy.get(this.passwordInput)
            .should('be.visible')
            .should('be.empty');
    };

    rememberMeCheckbox() {
        cy.get(this.rememberCheckbox)
            .uncheck();
    };

    rememberMeLabelTitle(){
        cy.get(this.rememberMeLabel)
            .should('be.visible')
            .should ('contain', 'Remember me')

    }

    logInButton() {
        cy.get(this.loginButton)
            .should('be.visible')
            .should('be.not.disabled')
            .should('contain', 'Sign In');
    };

    forgetPasswordLink() {
        cy.get(this.forgetPassword)
            .should('be.visible')
            .should('contain', ' Forgot Password ')
            .should('have.attr', 'href', '/reset-password');
    };

    createAccountLink(){
         cy.xpath (this.createAnAccountLink)
            .should ('contain', 'Create an account')
            .should ('have.attr','href', '/signup');

    };

    dontHaveAnAccount() {
        cy.contains('Don\'t have an account?')

    };


    showErrorMessageNull(){
        cy.get (this.errorMessageNull)
            .should ('be.visible')
            .contains('We found some errors. Please review the form and make corrections.');
        cy.contains('Please enter a username');
        cy.contains( 'Please enter a password');
    }


// Forget Password page

    titleForgetPasswordLabel(){
        cy.get(this.titleForgetPassword)
            .should('be.visible')
            .should('contain', 'Recover your password');

    };

    inputEmailForgetPassword(){
        cy.get(this.emailForgetPassword)
            .should('be.visible')
            .should('be.empty');

    };

    forgetPasswordButtonReset(){
        cy.get(this.forgetPasswordButtonResetElement)
            .should('be.visible')
            .should('be.disabled')
            .should('contain', ' Reset ');
    };

    goBackToLoginLink(){
        cy.get (this.link)
            .should ('be.visible')
            .should ('contain' , ' Go back to login ')
            .should ('have.attr','href', '/login');

    }
}
export const loggedElements = new LoggedElements();
