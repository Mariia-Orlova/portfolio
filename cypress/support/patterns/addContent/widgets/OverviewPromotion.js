const clickOnAddGOverviewPromotion = '[data-drupal-selector="edit-add-more-button-promotion"]';
const fillTitleOverviewPromotion ='[data-drupal-selector="edit-field-widgets-5-subform-field-title-0-value"]';
const fillDescriptionOverviewPromotion = '[data-drupal-selector="edit-field-widgets-5-subform-field-description-0-value"]';
const selectPromotionTypeOverviewPromotion='[data-drupal-selector="edit-field-widgets-5-subform-field-promotion-type"]'
const promotionTextOverviewPromotion ='[data-drupal-selector="edit-field-widgets-5-subform-field-promotion-text-0-value"]';
const listPageLinkOverviewPromotion ='[data-drupal-selector="edit-field-widgets-5-subform-field-list-page-link-0-uri"]';
const promotionalItemReferenceOverviewPromotion ='[data-drupal-selector="edit-field-widgets-5-subform-field-promotional-items-0-subform-field-promotional-item-reference-0-target-id"]';

const selectOverviewPromotionalItem ='#edit-field-widgets-5-subform-field-promotional-items-0-subform > .field-group-tabs-wrapper > .horizontal-tabs > .horizontal-tabs-list > .horizontal-tab-button-1 > a > strong';
const titlePromotionalItemOverviewPromotion ='[data-drupal-selector="edit-field-widgets-5-subform-field-promotional-items-0-subform-field-title-0-value"]';
const descriptionPromotionalItemOverviewPromotion ='[data-drupal-selector="edit-field-widgets-5-subform-field-promotional-items-0-subform-field-description-0-value"]';
const ctaButtonPromotionalItemOverviewPromotion ='[data-drupal-selector="edit-field-widgets-5-subform-field-promotional-items-2-subform-field-cta-button-0-uri"]';



beforeEach('Use json before starting',() => {
    cy.fixture('widgets/overviewPromotion.json').as('overviewPromotionValues');

});


export class OverviewPromotionValues {


    clickOnAddGOverviewPromotion() {
        cy.get(clickOnAddGOverviewPromotion)
            .scrollIntoView()
            .click({force: true});
    }

    fillTitleOverviewPromotion(){
        cy.get('@overviewPromotionValues')
            .then( overviewPromotion => {
                cy.get(fillTitleOverviewPromotion)
                    .should('be.visible')
                    .type(overviewPromotion.titleOverviewPromotion, {force: true})
                    .should('have.value', overviewPromotion.titleOverviewPromotion)
            });
    }

    fillDescriptionOverviewPromotion(){
        cy.get('@overviewPromotionValues')
            .then( overviewPromotion => {
                cy.get(fillDescriptionOverviewPromotion)
                    .should('be.visible')
                    .type(overviewPromotion.descriptionOverviewPromotion, {force: true})
                    .should('have.value', overviewPromotion.descriptionOverviewPromotion)
            });
    }
    selectPromotionTypeOverviewPromotion() {
        cy.get('@overviewPromotionValues')
            .then(overviewPromotion => {
                cy.get(selectPromotionTypeOverviewPromotion)
                    .should('be.visible')
                    .select(overviewPromotion.promotionTypeOverviewPromotion, {force: true})
                    .invoke('val')
                    .should('deep.equal', overviewPromotion.promotionTypeOverviewPromotion);
            });
    }

    promotionTextOverviewPromotion(){
        cy.get('@overviewPromotionValues')
            .then( overviewPromotion => {
                cy.get(promotionTextOverviewPromotion)
                    .should('be.visible')
                    .type(overviewPromotion.promotionTextOverviewPromotion, {force: true})
                    .should('have.value', overviewPromotion.promotionTextOverviewPromotion)
            });
    }

    listPageLinkOverviewPromotion(){
        cy.get('@overviewPromotionValues')
            .then( overviewPromotion => {
                cy.get(listPageLinkOverviewPromotion)
                    .should('be.visible')
                    .type(overviewPromotion.listPageLinkOverviewPromotion, {force: true})
                    .should('have.value', overviewPromotion.listPageLinkOverviewPromotion)
            });
    }
    promotionalItemReferenceOverviewPromotion(){
        cy.get('@overviewPromotionValues')
            .then( overviewPromotion => {
                cy.get(promotionalItemReferenceOverviewPromotion)
                    .should('be.visible')
                    .type(overviewPromotion.promotionalItemReferenceOverviewPromotion, {force: true})
                    .should('have.value', overviewPromotion.promotionalItemReferenceOverviewPromotion)
            });
    }

    selectOverviewPromotionalItem(){
        cy.get(selectOverviewPromotionalItem)
            .should('be.visible')
            .click({force:true});
    }

    titlePromotionalItemOverviewPromotion(){
        cy.get('@overviewPromotionValues')
            .then( overviewPromotion => {
                cy.get(titlePromotionalItemOverviewPromotion)
                    .should('be.visible')
                    .type(overviewPromotion.titlePromotionItem, {force: true})
                    .should('have.value', overviewPromotion.titlePromotionItem)
            });
    }
    descriptionPromotionalItemOverviewPromotion(){
        cy.get('@overviewPromotionValues')
            .then( overviewPromotion => {
                cy.get(descriptionPromotionalItemOverviewPromotion)
                    .should('be.visible')
                    .type(overviewPromotion.descriptionPromotionItem, {force: true})
                    .should('have.value', overviewPromotion.descriptionPromotionItem)
            });
    }
    ctaButtonPromotionalItemOverviewPromotion(){
        cy.get('@overviewPromotionValues')
            .then( overviewPromotion => {
                cy.get(ctaButtonPromotionalItemOverviewPromotion)
                    .should('be.visible')
                    .type(overviewPromotion.urlButtonPromotionItem, {force: true})
                    .should('have.value', overviewPromotion.urlButtonPromotionItem)
            });
    }

}
export const overviewPromotionValues = new OverviewPromotionValues();