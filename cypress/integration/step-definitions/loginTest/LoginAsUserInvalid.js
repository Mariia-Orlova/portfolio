import { When,Then,And } from "cypress-cucumber-preprocessor/steps";
import {loggedElements} from "../../../support/patterns/login/LoggedElements";



    When('Set username invalid', () => {
    loggedElements
        .setUsernameInvalid();
});

    And('Set password invalid', () => {
    loggedElements
        .setPasswordInvalid();

});


    Then('Auth is unsuccessfully', () =>{
     loggedElements
         .showErrorMessage();

});


    Then('Validation is shown on screen', () =>{
    loggedElements
        .showErrorMessageNull();

});
