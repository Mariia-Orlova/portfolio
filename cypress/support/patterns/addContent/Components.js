const clickContentButton = '[data-drupal-link-system-path="node/add"]';
const addMediaButton = '[data-drupal-selector="edit-field-teaser-image-open-button"]';
const selectImage ='[data-drupal-selector="edit-media-library-select-form-0"]';
const clickOnInsert = '.ui-dialog-buttonset > .media-library-select';
const openMainBannerTab = '.horizontal-tab-button-1 > a';
const addMediaButtonMainBanner = '[data-drupal-selector="edit-field-main-banner-0-subform-field-image-open-button"]';
const openDetailsInformation = '.horizontal-tab-button-3 > a';
const openSubscriptionTab = '.horizontal-tab-button-5 > a';
const clickOnSaveButton = '#edit-submit';





export class AddComponents {

    clickContentButton() {
        cy.get(clickContentButton)
            .eq(0)
            .click({force: true});
        cy.url()
            .should('include', '/node/add');
    }

    addMediaButton() {
        cy.get(addMediaButton)
            .should('be.visible')
            .click({force: true});
    }

    selectImage() {
        cy.get(selectImage)
            .should('be.visible')
            .check({force: true});
    }

    clickOnInsert() {
        cy.get(clickOnInsert)
            .should('be.visible')
            .click({force: true});
    }

    openMainBannerTab() {
        cy.get(openMainBannerTab)
            .should('be.visible')
            .click({force: true})
            .should('contain', 'Main Banner')
    }

    addMediaButtonMainBanner() {
        cy.get(addMediaButtonMainBanner)
            .should('be.visible')
            .click({force: true});
    }

    openDetailsInformation(){
         cy.get(openDetailsInformation)
            .should('be.visible')
            .click({force: true})
             .should('contain', 'Details information')
    }
    openSubscriptionTab (){
        cy.get(openSubscriptionTab)
            .should('be.visible')
            .click({force: true})
            .should('contain', 'Subscription');
    }

    clickOnSaveButton(){
        cy.get(clickOnSaveButton)
            .should('be.visible')
            .click({force: true});
    }

}

export const components = new AddComponents();