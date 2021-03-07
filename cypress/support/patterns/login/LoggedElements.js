

beforeEach(() => {
    cy.fixture('user').as('userCredential');
});


export class LoggedElements {
    //Login page
   form ='#form';
   logo = '//body/t2b-app[1]/t2b-layout[1]/div[1]/div[1]/div[1]/div[1]/t2b-content[1]/t2b-login[1]/div[1]/div[1]/div[1]/div[1]/img[1]';
   rememberCheckbox ='.custom-checkbox > label';
   userNameLabel = '//label[contains(text(),\'Username\')]';
   passwordLabel = '//label[contains(text(),"Password")]';
   usernameInput = '#okta-signin-username'; //input username
   passwordInput = '#okta-signin-password';//input password
   loginButton = '#okta-signin-submit';//Log in button
   forgetPassword = '.forgot-password';
   registerBlock = '.register';
   createAnAccountLink = '//a[contains(text(),\'Create an account\')]';
   errorMessageNull = '[data-se="o-form-error-container"]';
   //Forget password page
    titleForgetPassword = '.title';
    emailForgetPassword = '#mat-input-0';

    openSite() {
        cy.visit('/');

    };

    checkElementsInForm(){
        cy.get(this.form)
             .should ('be.visible');

        cy.contains('Login to your account');

        cy.xpath(this.logo)
            .should ('be.visible')
            .should ('have.attr', 'src', 'assets/images/logos/t2b-logo-text.svg');

        cy.xpath(this.userNameLabel)
            .should( 'be.visible')
            .should ('contain', 'Username');

        cy.xpath(this.passwordLabel)
            .should( 'be.visible')
            .should ('contain', 'Password');

        cy.get(this.usernameInput)
            .should ('be.visible')
            .should ('be.empty');

        cy.get (this.passwordInput)
            .should ('be.visible')
            .should ('be.empty');

        cy.get (this.rememberCheckbox)
            .should ('be.visible');

        cy.get (this.loginButton)
            .should ('be.visible');

        cy.get (this.forgetPassword)
            .should ('be.visible')
            .should ('contain', ' Forgot Password ')
            .should ('have.attr','href', '/reset-password');

        cy.get (this.registerBlock)
            .should ('be.visible')
            .should ('contain', 'Don\'t have an account?')
            .should ('contain', 'Create an account');
         cy.xpath (this.createAnAccountLink)
            .should ('have.attr','href', '/signup');

    };

    rememberMe(){

        cy.get(this.rememberCheckbox)
            .should ('be.visible')
            .click();
    };

    clickLoginButton() {
        cy.get(this.loginButton)
            .click({force:true});
    }


    showErrorMessageNull(){
        cy.get (this.errorMessageNull)
            .should ('be.visible')
            .contains('We found some errors. Please review the form and make corrections.');
        cy.contains('Please enter a username');
        cy.contains( 'Please enter a password');
    }

    checkElementsInForgetPassword(){
        cy.get(this.form)
            .should ('be.visible');
        cy.get (this.titleForgetPassword)
            .should ('be.visible')
            .should ('contain' , 'Recover your password');
        cy.get (this.emailForgetPassword)
            .should ('be.visible')
            .should ('be.empty');
        cy.get (':button')
            .should('be.visible')
            .should('be.disabled')
            .should ('contain', ' Reset ');

    }
}
export const loggedElements = new LoggedElements();
