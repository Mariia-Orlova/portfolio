import {When,Then, And} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";

When ('Select Contact preferences Email', (Title) => {

    suppleDemandElements.contactPreferencesAlsoEmail();

});

Then ('Select Contact preferences Phone', (Title) => {

    suppleDemandElements.contactPreferencesAlsoPhone();

});