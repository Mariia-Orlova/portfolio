const clickOnAddCampaignSubscription = '[data-drupal-selector="edit-add-more-button-campaign-subscription"]';
const fillTextCampaignSubscription ='[data-drupal-selector="edit-field-widgets-8-subform-field-text-0-value"]'
const fillTitleCampaignSubscription = '[data-drupal-selector="edit-field-widgets-8-subform-field-title-0-value"]';
const buttonCampaignSubscription ='[data-drupal-selector="edit-field-widgets-8-subform-field-button-text-0-value"]';
const subtitleCampaignSubscription='[data-drupal-selector="edit-field-widgets-8-subform-field-subtitle-0-value"]';
const includeToScrollMenu = '[data-drupal-selector="edit-field-widgets-8-subform-field-include-to-scroll-menu-value"]';
const buttonMenuLabelCampaignSubscription ='[data-drupal-selector="edit-field-widgets-8-subform-field-scroll-menu-label-0-value"]';
beforeEach('Use json before starting',() => {
    cy.fixture('widgets/campaignSubscription.json').as('campaignSubscriptionValues');

});

export class CampaignSubscriptionValues{

    clickOnAddCampaignSubscription(){
    cy.get(clickOnAddCampaignSubscription)
        .scrollIntoView()
        .click({force: true});

};
    fillTextCampaignSubscription(){
        cy.get('@campaignSubscriptionValues')
            .then( campaignSubscription => {
                cy.get(fillTextCampaignSubscription)
                    .should('be.visible')
                    .type(campaignSubscription.textCampaignSubscription, {force:true})
                    .should('have.value', campaignSubscription.textCampaignSubscription)
            });
    }
    fillTitleCampaignSubscription(){
        cy.get('@campaignSubscriptionValues')
            .then( campaignSubscription => {
                cy.get(fillTitleCampaignSubscription)
                    .should('be.visible')
                    .type(campaignSubscription.textCampaignSubscription, {force:true})
                    .should('have.value', campaignSubscription.textCampaignSubscription)
            });
    }

    buttonCampaignSubscription(){
        cy.get('@campaignSubscriptionValues')
            .then( campaignSubscription => {
                cy.get(buttonCampaignSubscription)
                    .should('be.visible')
                    .type(campaignSubscription.buttonCampaignSubscription, {force:true})
                    .should('have.value', campaignSubscription.buttonCampaignSubscription)
            });
    }
    subtitleCampaignSubscription(){
        cy.get('@campaignSubscriptionValues')
            .then( campaignSubscription => {
                cy.get(subtitleCampaignSubscription)
                    .should('be.visible')
                    .type(campaignSubscription.subtitleCampaignSubscription, {force:true})
                    .should('have.value', campaignSubscription.subtitleCampaignSubscription)
            });
    }

    includeToScrollMenu() {
        cy.get(includeToScrollMenu)
            .should('be.visible')
            .check({force: true});
    }

    buttonMenuLabelCampaignSubscription(){
        cy.get('@campaignSubscriptionValues')
            .then( campaignSubscription => {
                cy.get(buttonMenuLabelCampaignSubscription)
                    .should('be.visible')
                    .type(campaignSubscription.buttonMenuLabelCampaignSubscription, {force:true})
                    .should('have.value', campaignSubscription.buttonMenuLabelCampaignSubscription)
            });
}
}
export const campaignSubscriptionValues = new CampaignSubscriptionValues();