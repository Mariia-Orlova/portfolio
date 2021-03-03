const fillTitle = '[data-drupal-selector="edit-title-0-value"]';
const fillSummary = '[data-drupal-selector="edit-body-0-summary"]';
const fillDescription = '#cke_1_contents > .cke_wysiwyg_frame';
const fillAdditionalLabel ='[data-drupal-selector="edit-field-additional-label-0-value"]';
const fillAdditionalDescription = '#cke_2_contents > .cke_wysiwyg_frame';
const fillTitleMainBanner  ='#edit-field-main-banner-0-subform-field-title-0-value';
const fillDescriptionMainBanner = '#edit-field-main-banner-0-subform-field-description-0-value';
const fillUrlMainBanner = '[data-drupal-selector="edit-field-main-banner-0-subform-field-cta-button-0-uri"]';
const fillLinkTextMainBanner = '[data-drupal-selector="edit-field-main-banner-0-subform-field-cta-button-0-title"]';
const fillDateMainBanner = '[data-drupal-selector="edit-field-main-banner-0-subform-field-date-0-value-date"]';
const fillTimeMainBanner = '[data-drupal-selector="edit-field-main-banner-0-subform-field-date-0-value-time"]';
const fillTabNameMainBanner = '[data-drupal-selector="edit-field-main-banner-0-subform-field-tab-name-0-value"]';
const fillCampaignTypeInDetailsInformation = '[data-drupal-selector="edit-field-campaign-type"]';
const fillDrawDateInDetailsInformation = '[data-drupal-selector="edit-field-draw-date-0-value"]';
const fillStartDateInDetailsInformation = '[data-drupal-selector="edit-field-date-range-0-value-date"]';
const fillEndDateMainBannerDetailsInformation  ='[data-drupal-selector="edit-field-date-range-0-end-value-date"]';
const fillCampaignNameSubscription = '[data-drupal-selector="edit-field-campaign-name-0-value"]';

beforeEach(() => {
    cy.fixture('campaign.json').as('campaignValues')
});

export class CampaignValue {
    fillTitle() {
        cy.get('@campaignValues')
            .then(campaign => {
                cy.get(fillTitle)
                    .should('be.visible')
                    .click({force: true})
                    .type(campaign.title)
                    .should('have.value', campaign.title)
            })
    }

    fillSummary() {
        cy.get('@campaignValues')
            .then(campaign => {
                cy.get(fillSummary)
                    .should('be.visible')
                    .click({force: true})
                    .type(campaign.summary)
                    .should('have.value', campaign.summary)
            });
    }

    fillDescription() {
        cy.get('@campaignValues')
            .then(campaign => {
                cy.get(fillDescription)
                    .iframe('body')
                    .should('exist')
                    .type(campaign.description, {force: true})
            });
    }

    fillAdditionalLabel(){
        cy.get('@campaignValues')
            .then(campaign => {
        cy.get(fillAdditionalLabel)
            .should('be.visible')
            .click({force: true})
            .type(campaign.additionalLabel)
            .should('have.value', campaign.additionalLabel)
            });

    }

    fillAdditionalDescription(){
        cy.get('@campaignValues')
            .then(campaign => {
                cy.get(fillAdditionalDescription)
                    .iframe('body')
                    .should('exist')
                    .type(campaign.additionalDescription, {force: true})
            });
    }

    fillTitleMainBanner() {
        cy.get('@campaignValues')
            .then(campaign => {
                cy.get(fillTitleMainBanner)
                    .should('be.visible')
                    .type(campaign.titleMainBanner, {force: true})
            });
    }

    fillDescriptionMainBanner() {
        cy.get('@campaignValues')
            .then(campaign => {
                cy.get(fillDescriptionMainBanner)
                    .should('be.visible')
                    .type(campaign.descriptionMainBanner,{force: true} )
                    .should('have.value', campaign.descriptionMainBanner)
            });
    }

    fillUrlMainBanner(){
        cy.get('@campaignValues')
            .then(campaign => {
                cy.get(fillUrlMainBanner)
                    .should('be.visible')
                   // .click({force: true})
                    .type(campaign.urlMainBanner,{force: true} )
                    .should('have.value', campaign.urlMainBanner)
            });
    }

    fillLinkTextMainBanner(){
        cy.get('@campaignValues')
            .then(campaign => {
               cy.get(fillLinkTextMainBanner)
                   .should('be.visible')
                   .click({force: true})
                   .type(campaign.linkTextMainBanner)
                   .should('have.value', campaign.linkTextMainBanner)
            });
    }

    fillDateMainBanner(){
        cy.get('@campaignValues')
            .then(campaign => {
                cy.get(fillDateMainBanner)
                    .should('be.visible')
                    .click({force: true})
                    .type(campaign.dateMainBanner)
                    .should('have.value', campaign.dateMainBanner)
            });
    }

    fillTimeMainBanner(){
        cy.get('@campaignValues')
            .then(campaign => {
               cy.get(fillTimeMainBanner)
                   .should('be.visible')
                   .click({force: true})
                   .type(campaign.timeMainBanner)
                   .should('have.value', campaign.timeMainBanner)
            });
    }

    fillTabNameMainBanner(){
        cy.get('@campaignValues')
            .then(campaign => {
                cy.get(fillTabNameMainBanner)
                    .should('be.visible')
                    .click({force: true})
                    .type(campaign.tabNameMainBanner)
                    .should('have.value', campaign.tabNameMainBanner)
            });
    }

    fillCampaignTypeInDetailsInformation() {
        cy.get('@campaignValues')
            .then(campaign => {
                cy.get(fillCampaignTypeInDetailsInformation)
                    .should('be.visible')
                    .select(campaign.campaignTypeDetailsInformation, {force: true})
                    .invoke('val')
                    .should('deep.equal', campaign.campaignTypeDetailsInformation);
            });
    }

    fillDrawDateInDetailsInformation() {
        cy.get('@campaignValues')
            .then(campaign => {
                cy.get(fillDrawDateInDetailsInformation)
                    .should('be.visible')
                    .click({force: true})
                    .type(campaign.drawDateDetailsInformation)
                    .should('have.value', campaign.drawDateDetailsInformation )

            });
    }

    fillStartDateInDetailsInformation(){
        cy.get('@campaignValues')
            .then(campaign => {
                cy.get(fillStartDateInDetailsInformation)
                    .should('be.visible')
                    .click({force: true})
                    .type(campaign.startDateMainBannerDetailsInformation)
                    .should('have.value', campaign.startDateMainBannerDetailsInformation)
            });

    }

    fillEndDateMainBannerDetailsInformation() {
        cy.get('@campaignValues')
            .then(campaign => {
                cy.get(fillEndDateMainBannerDetailsInformation)
                    .should('be.visible')
                    .click({force: true})
                    .type(campaign.endDateMainBannerDetailsInformation)
                    .should('have.value', campaign.endDateMainBannerDetailsInformation)

    });
}

    fillCampaignNameSubscription(){
        cy.get('@campaignValues')
            .then(campaign => {
        cy.get(fillCampaignNameSubscription)
            .should('be.visible')
            .click({force: true})
            .type(campaign.campaignNameSubscription)
            .should('have.value', campaign.campaignNameSubscription )
        });
    }

}
export const campaignValue = new CampaignValue();