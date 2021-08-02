import {When,Then} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";




When('Select Supple radiobutton', () => {
    suppleDemandElements
        .selectSuppleRadioButton();

});


