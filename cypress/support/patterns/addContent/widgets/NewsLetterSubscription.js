import {BasicTextCardValues} from "./BasicTextCard";

const selectNewsletterSubscription = '[data-drupal-selector="edit-add-more-button-email-subscription"]';
const fillTextNewsletterSubscription = '[data-drupal-selector="edit-field-widgets-2-subform-field-text-0-value"]';
const fillTitleNewsletterSubscription = '[data-drupal-selector="edit-field-widgets-2-subform-field-title-0-value"]';
const fillButtonNewsletterSubscription = '[data-drupal-selector="edit-field-widgets-2-subform-field-button-text-0-value"]';
const fillSubtitleNewsletterSubscription = '[data-drupal-selector="edit-field-widgets-2-subform-field-subtitle-0-value"]';
const checkIncludeToScrollMenuNewsletterSubscription ='[data-drupal-selector="edit-field-widgets-2-subform-field-include-to-scroll-menu-value"]';
const fillScrollMenuLabelNewsletterSubscription ='[data-drupal-selector="edit-field-widgets-2-subform-field-scroll-menu-label-0-value"]';

beforeEach('Use json before starting',() => {
    cy.fixture('widgets/NewsLetterSubscription.json').as('newsLetterSubscriptionValues');
});


export class NewsLetterSubscriptionValues{

    selectNewsletterSubscription() {
        cy.get(selectNewsletterSubscription)
            .should('be.visible')
            .click({force: true});

    }

    fillTextNewsletterSubscription(){
        cy.get('@newsLetterSubscriptionValues')
            .then( newsLetterSubscription => {
                cy.get(fillTextNewsletterSubscription)
                    .should('be.visible')
                    .type(newsLetterSubscription.textNewsSubscription, {force: true})
                    .should('have.value', newsLetterSubscription.textNewsSubscription)
            });
    }

    fillTitleNewsletterSubscription(){
        cy.get('@newsLetterSubscriptionValues')
            .then( newsletterSubscription => {
                cy.get(fillTitleNewsletterSubscription)
                    .should('be.visible')
                    .type(newsletterSubscription.titleNewsSubscription, {force: true})
                    .should('have.value', newsletterSubscription.titleNewsSubscription)
            });
    }
    fillButtonNewsletterSubscription(){
        cy.get('@newsLetterSubscriptionValues')
            .then( newsletterSubscription => {
                cy.get(fillButtonNewsletterSubscription)
                    .should('be.visible')
                    .type(newsletterSubscription.buttonNewsSubscription, {force: true})
                    .should('have.value', newsletterSubscription.buttonNewsSubscription)
            });
    }

    fillSubtitleNewsletterSubscription(){
        cy.get('@newsLetterSubscriptionValues')
            .then( newsLetterSubscription => {
                cy.get(fillSubtitleNewsletterSubscription)
                    .should('be.visible')
                    .type(newsLetterSubscription.subtitleNewsSubscription, {force: true})
                    .should('have.value', newsLetterSubscription.subtitleNewsSubscription)
            });
    }

    checkIncludeToScrollMenuNewsletterSubscription() {
        cy.get(checkIncludeToScrollMenuNewsletterSubscription)
            .should('be.visible')
            .check({force: true});
    }

    fillScrollMenuLabelNewsletterSubscription(){
        cy.get('@newsLetterSubscriptionValues')
            .then( newsLetterSubscription => {
                cy.get(fillScrollMenuLabelNewsletterSubscription)
                    .should('be.visible')
                    .type(newsLetterSubscription.scrollMenuLabelNewsSubscription, {force: true})
                    .should('have.value', newsLetterSubscription.scrollMenuLabelNewsSubscription)
            });
    }


}
export const newsLetterSubscriptionValues = new NewsLetterSubscriptionValues();