const clickOnAddGalleryButton = '[data-drupal-selector="edit-add-more-button-gallery"]';
const selectGallery = '[data-drupal-selector="edit-field-widgets-4-subform-field-gallery-0-target-id"]';
const fillTitleGallery = '[data-drupal-selector="edit-field-widgets-4-subform-field-title-0-value"]';
const fillSubtitleGallery = '[data-drupal-selector="edit-field-widgets-4-subform-field-subtitle-0-value"]';
const checkIncludeToScrollMenuGallery ='[data-drupal-selector="edit-field-widgets-4-subform-field-include-to-scroll-menu-value"]';
const fillScrollMenuLabelGallery = '[data-drupal-selector="edit-field-widgets-4-subform-field-scroll-menu-label-0-value"]';



    beforeEach('Use json before starting',() => {
        cy.fixture('widgets/gallery.json').as('galleryValues');
});


export class GalleryValues {

    clickOnAddGalleryButton(){
        cy.get(clickOnAddGalleryButton)
            .scrollIntoView()
            .click({force: true});
    }

    selectGallery(){
        cy.get('@galleryValues')
            .then(gallery => {
                cy.get(selectGallery)
                    .should('be.visible')
                    .type(gallery.gallery, {force: true})
                    .should('have.value', gallery.gallery)
            });

    }

    fillTitleGallery() {
        cy.get('@galleryValues')
            .then(gallery => {
                cy.get(fillTitleGallery)
                    .should('be.visible')
                    .click({force: true})
                    .type(gallery.titleGallery)
                    .should('have.value', gallery.titleGallery)

            });
    }

    fillSubtitleGallery(){
        cy.get('@galleryValues')
            .then(gallery => {
                cy.get(fillSubtitleGallery)
                    .should('be.visible')
                    .click({force: true})
                    .type(gallery.subtitleGallery)
                    .should('have.value', gallery.subtitleGallery)

            });

    }

    checkIncludeToScrollMenuGallery() {
        cy.get(checkIncludeToScrollMenuGallery)
            .should('be.visible')
            .check({force: true});
    }

    fillScrollMenuLabelGallery() {
        cy.get('@galleryValues')
            .then(gallery => {
                cy.get(fillScrollMenuLabelGallery)
                    .should('be.visible')
                    .type(gallery.scrollMenuLabelGallery, {force: true})
                    .should('have.value', gallery.scrollMenuLabelGallery)
            });
    }



}

export const galleryValues = new GalleryValues();