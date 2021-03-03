const form ='#form';
const  logo = '//body/t2b-app[1]/t2b-layout[1]/div[1]/div[1]/div[1]/div[1]/t2b-content[1]/t2b-login[1]/div[1]/div[1]/div[1]/div[1]/img[1]';
const rememberCheckbox ='.custom-checkbox > label';
const usernameInput = '#okta-signin-username'; //input username
const passwordInput = '#okta-signin-password';//input password
const loginButton = '#okta-signin-submit';//Log in button
const forgetPassword = '.forgot-password';
const registerBlock = '.register';
const errorMessage = '.okta-form-infobox-error';


beforeEach(() => {
    cy.fixture('user').as('userCredential');
});


export class LoggedElements {



    openSite() {
        cy.visit('/');

    };

    checkElementsInForm(){
        cy.get(form)
             .should ('be.visible');

        cy.contains('Login to your account');

        cy.xpath(logo)
            .should ('be.visible')
            .should ('have.attr', 'src', 'assets/images/logos/t2b-logo-text.svg');

        cy.get(usernameInput)
            .should ('be.visible')
            .should ('be.empty');

        cy.get (passwordInput)
            .should ('be.visible')
            .should ('be.empty');

        cy.get (rememberCheckbox)
            .should ('be.visible');

        cy.get (loginButton)
            .should ('be.visible');

        cy.get (forgetPassword)
            .should ('be.visible')
            .should ('contain', ' Forgot Password ');

        cy.get (registerBlock)
            .should ('be.visible')
            .should ('contain', 'Don\'t have an account?')
            .should ('contain', 'Create an account');

    }

    setUsername(){
        cy.get('@userCredential').then(user => {
        cy.get(usernameInput)
            .type(user.username)
            .should('have.value', user.username);
})
    }
    setUsernameInvalid(){
        cy.get('@userCredential').then(user => {
            cy.get(usernameInput)
                .type(user.usernameInvalid)
                .should('have.value', user.usernameInvalid);
        })
    }

    setPassword(){
        cy.get('@userCredential').then(user => {
            cy.get(passwordInput)
                .type(user.password)
                .should ('have.value', user.password)
        })
    }
    setPasswordInvalid(){
        cy.get('@userCredential').then(user => {
            cy.get(passwordInput)
                .type(user.passwordInvalid)
                .should ('have.value', user.passwordInvalid)
        })
    }

    rememberMe(){

        cy.get(rememberCheckbox)
            .should ('be.visible')
            .click();
    };

    clickLoginButton() {
        cy.get(loginButton)
            .click({force:true});
    }


    showErrorMessage(){
        cy.get (errorMessage)
            .should ('be.visible')
            .should ('contain', '')
    }
    showErrorMessageNull(){
        cy.contains ('Ввести имя пользователя');
        cy.contains ('Ввести пароль');
    }


}
export const loggedElements = new LoggedElements();
