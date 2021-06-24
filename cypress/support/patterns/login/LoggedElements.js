

beforeEach(() => {
    cy.fixture('user').as('userCredential');
});


export class LoggedElements {
    //Login page
   form ='#form';
   rememberCheckbox ='[name=\'remember\']';
   rememberMeLabel = '[data-se-for-name="remember"]';
   usernameInput = '#okta-signin-username'; //input username
   passwordInput = '#okta-signin-password';//input password
   loginButton = '#okta-signin-submit';//Log in button
   fillInput = 'input';
   createAnAccountLink = '//a[contains(text(),\'Create an account\')]';
   errorMessageNull = '[data-se="o-form-error-container"]';
   //Forget password page
    titleForgetPassword = '.title';
    clickForgetPasswordLink ='.forgot-password';
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
            .and ('have.attr', 'src', 'assets/images/logos/t2b-logo-text.svg');
    };

    userNameLabelDisplay() {
        cy.contains('Username ')
            .should('be.visible');

    };

    passwordLabelDisplay() {
        cy.contains('Password ')
            .should('be.visible');
    };

    userNameInput() {
        cy.get(this.usernameInput)
            .should('be.visible')
            .and('be.empty');
    };

    passWordInput() {
        cy.get(this.passwordInput)
            .should('be.visible')
            .and('be.empty');
    };

    rememberMeCheckbox() {
        cy.get(this.rememberCheckbox)
            .uncheck();
    };

    rememberMeLabelTitle(){
        cy.get(this.rememberMeLabel)
            .should('be.visible')
            .and ('contain', 'Remember me')

    }

    logInButton() {
        cy.get(this.loginButton)
            .should('be.visible')
            .and('be.not.disabled')
            .and('contain', 'Sign In');
    };

    forgetPasswordLink() {
        cy.get(this.clickForgetPasswordLink)
            .should('be.visible')
            .and('contain', ' Forgot Password ')
            .and('have.attr', 'href', '/reset-password');
    };

    createAccountLink(){
         cy.xpath (this.createAnAccountLink)
            .should ('contain', 'Create an account')
            .and ('have.attr','href', '/signup');

    };

    dontHaveAnAccount() {
        cy.contains('Don\'t have an account?')
            .should('be.visible');

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
        cy.contains('Recover your password')
            .should('be.visible')
            .and('contain', 'Recover your password');

    };

    inputEmailForgetPassword(){
        cy.get(this.fillInput)
            .should('be.visible')
            .and('be.empty');

    };

    forgetPasswordButtonReset(){
        cy.get(this.forgetPasswordButtonResetElement)
            .should('be.visible')
            .and('be.disabled')
            .and('contain', ' Reset ');
    };

    goBackToLoginLink(){
        cy.get (this.link)
            .should ('be.visible')
            .and ('contain' , ' Go back to login ')
            .and ('have.attr','href', '/login');

    }
}
export const loggedElements = new LoggedElements();
