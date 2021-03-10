import {Then,And} from "cypress-cucumber-preprocessor/steps";
import {globalMenu} from "../../../support/patterns/globalElements/GlobalMenu";


Then('Check logo', () => {
   globalMenu
       .checklogo();
});

And('Check Main Menu block', () => {
    globalMenu
        .checkNavBarVerticalMenuBlock();
});

And('Check Supple and Demand link', () => {
    globalMenu
        .checkNavSuppleAndDemandLink();
});

And('Check Companies link', () => {
    globalMenu
        .checkNavCompaniesLink();
});

And('Check Dashboard link', () => {
    globalMenu
        .checkNavDashboardLink();
});

And('Check Request link', () => {
    globalMenu
        .checkNavRequestLink();
});

And('Check Quotation link', () => {
    globalMenu
        .checkNavQuotation();
});

And('Check Order link', () => {
    globalMenu
        .checkNavOrderLink();
});

And('Check Invoice link', () => {
    globalMenu
        .checkNavInvoiceLink();
});

And('Check Messages link', () => {
    globalMenu
        .checkNavMessageLink();
});

And('Check My company link', () => {
    globalMenu
        .checkNavMyCompanyLink();
});

And('Check Files link', () => {
    globalMenu
        .checkNavFilesLink();
});

And('Check Products link', () => {
    globalMenu
        .checkNavProductsLink();
});
