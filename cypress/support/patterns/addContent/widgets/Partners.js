const clickAddButtonPartners='[data-drupal-selector="edit-add-more-button-partners"]';
const linkPartners='[data-drupal-selector="edit-field-widgets-7-subform-field-partner-0-subform-field-partner-link-0-uri"]';
const addMediaButtonPartners = '[data-drupal-selector="edit-field-widgets-7-subform-field-partner-0-subform-field-image-open-button"]';
const addPartnerButton = 'Add Partner';
const addMediaButton2Partners = '[data-drupal-selector="edit-field-widgets-7-subform-field-partner-1-subform-field-image-open-button"]';
const linkPartners2='[data-drupal-selector="edit-field-widgets-7-subform-field-partner-1-subform-field-partner-link-0-uri"]';
const addMediaButton3Partners = '[data-drupal-selector="edit-field-widgets-7-subform-field-partner-2-subform-field-image-open-button"]';
const linkPartners3='[data-drupal-selector="edit-field-widgets-7-subform-field-partner-2-subform-field-partner-link-0-uri"]';
const includeToScrollMenuPartner = '[data-drupal-selector="edit-field-widgets-7-subform-field-include-to-scroll-menu-value"]';
const scrollMenuLabelPartner = '[data-drupal-selector="edit-field-widgets-7-subform-field-scroll-menu-label-0-value"]';

beforeEach('Use json before starting',() => {
    cy.fixture('widgets/partners.json').as('partnersValues');

});


export class PartnersValues {

    clickAddButtonPartners(){
        cy.get(clickAddButtonPartners)
            .scrollIntoView()
            .click({force: true});
    }

    linkPartners(){
        cy.get('@partnersValues')
            .then( partners => {
                cy.get(linkPartners)
                    .should('be.visible')
                    .type(partners.linkPartners, {force: true})
                    .should('have.value', partners.linkPartners)
            });
    }

    addMediaButtonPartners(){
         cy.get(addMediaButtonPartners)
             .click({force:true});
    }

    addPartnerButton(){
        cy.contains(addPartnerButton)
            .click({force: true});
    }
    addMediaButton2Partners(){
        cy.get(addMediaButton2Partners)
            .click({force: true});
    }

    linkPartners2(){
        cy.get('@partnersValues')
            .then( partners => {
                cy.get(linkPartners2)
                    .should('be.visible')
                    .type(partners.linkPartners2, {force: true})
                    .should('have.value', partners.linkPartners2)
            });
}

    addMediaButton3Partners(){
        cy.get(addMediaButton3Partners)
            .click({force: true});
    }

    linkPartners3(){
        cy.get('@partnersValues')
            .then( partners => {
                cy.get(linkPartners3)
                    .should('be.visible')
                    .type(partners.linkPartners3, {force: true})
                    .should('have.value', partners.linkPartners3)
            });
    }

    includeToScrollMenuPartner(){
        cy.get(includeToScrollMenuPartner)
            .click({force: true});
    }

    scrollMenuLabelPartner(){
        cy.get('@partnersValues')
            .then( partners => {
                cy.get(scrollMenuLabelPartner)
                    .should('be.visible')
                    .type(partners.scrollMenuLabelPartner, {force: true})
                    .should('have.value', partners.scrollMenuLabelPartner)
            });
    }
}
export const partners = new PartnersValues();