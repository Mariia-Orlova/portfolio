const addButtonMembership = '[data-drupal-selector="edit-add-more-button-membership"]';
const titleMembership = '[data-drupal-selector="edit-field-widgets-9-subform-field-title-0-value"]';
const descriptionMembership = '[data-drupal-selector="edit-field-widgets-9-subform-field-description-0-value"]';
const urlCtaButtonMembership ='[data-drupal-selector="edit-field-widgets-9-subform-field-cta-button-0-uri"]';
const linkCtaButtonTextMembership ='[data-drupal-selector="edit-field-widgets-9-subform-field-cta-button-0-title"]';
const urlMembershipPageLink = '[data-drupal-selector="edit-field-widgets-9-subform-field-membership-page-link-0-uri"]';
const linkTextMembershipPageLink = '[data-drupal-selector="edit-field-widgets-9-subform-field-membership-page-link-0-title"]';
const tabSlider ='//strong[contains(text(),\'Slider\')]';
const titleSliderMembership='[data-drupal-selector="edit-field-widgets-9-subform-field-slider-0-subform-field-slide-0-subform-field-title-0-value"]';
const addMediaSliderMembership='[data-drupal-selector="edit-field-widgets-9-subform-field-slider-0-subform-field-slide-0-subform-field-image-open-button"]';
const descriptionSlider= '[data-drupal-selector="edit-field-widgets-9-subform-field-slider-0-subform-field-slide-0-subform-field-description-0-value"]';
const urlCtaButtonSlider ='[data-drupal-selector="edit-field-widgets-9-subform-field-slider-0-subform-field-slide-0-subform-field-cta-button-0-uri"]';
const linkTextSlider = '[data-drupal-selector="edit-field-widgets-9-subform-field-slider-0-subform-field-slide-0-subform-field-cta-button-0-title"]';
const dateSlider = '[data-drupal-selector="edit-field-widgets-9-subform-field-slider-0-subform-field-slide-0-subform-field-date-0-value-date"]';
const timeSlider = '[data-drupal-selector="edit-field-widgets-9-subform-field-slider-0-subform-field-slide-0-subform-field-date-0-value-time"]';
const includeToScrollMenu ='[data-drupal-selector="edit-field-widgets-9-subform-field-include-to-scroll-menu-value"]';
const scrollMenuLabel ='[data-drupal-selector="edit-field-widgets-9-subform-field-scroll-menu-label-0-value"]'

beforeEach('Use json before starting',() => {
    cy.fixture('widgets/membership.json').as('membershipValues');
});


export class MembershipValues {

    addButtonMembership(){
        cy.get(addButtonMembership)
            .scrollIntoView()
            .click({force: true});

    };

    titleMembership(){
        cy.get('@membershipValues')
            .then( membership => {
                cy.get(titleMembership)
                    .should('be.visible')
                    .type(membership.titleMembership, {force:true})
                    .should('have.value', membership.titleMembership)
            });
    }

    descriptionMembership(){
        cy.get('@membershipValues')
            .then( membership => {
                cy.get(descriptionMembership)
                    .should('be.visible')
                    .type(membership.descriptionMembership, {force:true})
                    .should('have.value', membership.descriptionMembership)
            });
    }
    urlCtaButtonMembership(){
        cy.get('@membershipValues')
            .then( membership => {
                cy.get(urlCtaButtonMembership)
                    .should('be.visible')
                    .type(membership.urlCtaButtonMembership, {force:true})
                    .should('have.value', membership.urlCtaButtonMembership)
            });
    }
    linkCtaButtonTextMembership(){
        cy.get('@membershipValues')
            .then( membership => {
                cy.get(linkCtaButtonTextMembership)
                    .should('be.visible')
                    .type(membership.linkCtaButtonTextMembership, {force:true})
                    .should('have.value', membership.linkCtaButtonTextMembership)
            });
    }

    urlMembershipPageLink(){
        cy.get('@membershipValues')
            .then( membership => {
                cy.get(urlMembershipPageLink)
                    .should('be.visible')
                    .type(membership.urlMembershipPageLink, {force:true})
                    .should('have.value', membership.urlMembershipPageLink)
            });
    }

    linkTextMembershipPageLink(){
        cy.get('@membershipValues')
            .then( membership => {
                cy.get(linkTextMembershipPageLink)
                    .should('be.visible')
                    .type(membership.linkTextMembershipPageLink, {force:true})
                    .should('have.value', membership.linkTextMembershipPageLink)
            });
    }

    includeToScrollMenu(){
        cy.get(includeToScrollMenu)
            .should('be.visible')
            .click({force:true})

    }

    scrollMenuLabel(){
        cy.get('@membershipValues')
            .then( membership => {
                cy.get(scrollMenuLabel)
                    .should('be.visible')
                    .type(membership.scrollMenuLabel, {force:true})
                    .should('have.value', membership.scrollMenuLabel)
            });
    }


    tabSlider(){
        cy.xpath(tabSlider)
            .click({force: true});
    }

    addMediaSliderMembership(){
        cy.get(addMediaSliderMembership)
            .should('be.visible')
            .click({force:true})
    }

    titleSliderMembership(){
        cy.get('@membershipValues')
            .then( membership => {
                cy.get(titleSliderMembership)
                    .should('be.visible')
                    .type(membership.titleSliderMembership, {force:true})
                    .should('have.value', membership.titleSliderMembership)
            });
    }

    descriptionSlider(){
        cy.get('@membershipValues')
            .then( membership => {
                cy.get(descriptionSlider)
                    .should('be.visible')
                    .type(membership.descriptionSlider, {force:true})
                    .should('have.value', membership.descriptionSlider)
            });
    }


    urlCtaButtonSlider(){
        cy.get('@membershipValues')
            .then( membership => {
                cy.get(urlCtaButtonSlider)
                    .should('be.visible')
                    .type(membership.urlCtaButtonSlider, {force:true})
                    .should('have.value', membership.urlCtaButtonSlider)
            });
    }

    linkTextSlider(){
        cy.get('@membershipValues')
            .then( membership => {
                cy.get(linkTextSlider)
                    .should('be.visible')
                    .type(membership.linkTextSlider, {force:true})
                    .should('have.value', membership.linkTextSlider)
            });
    }

    dateSlider(){
        cy.get('@membershipValues')
            .then( membership => {
                cy.get(dateSlider)
                    .should('be.visible')
                    .type(membership.dateSlider, {force:true})
                    .should('have.value', membership.dateSlider)
            });
    }

    timeSlider(){
        cy.get('@membershipValues')
            .then( membership => {
                cy.get(timeSlider)
                    .should('be.visible')
                    .type(membership.timeSlider, {force:true})
                    .should('have.value', membership.timeSlider)
            });
    }

}

export const membershipValues = new MembershipValues();