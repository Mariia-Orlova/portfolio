const selectImagesCards = '[data-drupal-selector="edit-add-more-button-images-cards"]';
const fillTitleImageCard = '[data-drupal-selector="edit-field-widgets-3-subform-field-image-card-0-subform-field-title-0-value"]';
const fillDescriptionImagesCard = '[data-drupal-selector="edit-field-widgets-3-subform-field-image-card-0-subform-field-description-0-value"]';
const clickOnAddMediaButtonImagesCard = '[data-drupal-selector="edit-field-widgets-3-subform-field-image-card-0-subform-field-image-open-button"]';
const fillLocationsTextImagesCard = '[data-drupal-selector="edit-field-widgets-3-subform-field-image-card-0-subform-field-locations-text-0-value"]';
const fillUrlImagesCard = '[data-drupal-selector="edit-field-widgets-3-subform-field-image-card-0-subform-field-button-discover-0-uri"]';
const fillLinkTextImagesCard = '[data-drupal-selector="edit-field-widgets-3-subform-field-image-card-0-subform-field-button-discover-0-title"]';
//Add image card 2
const addImageCardButton = '#field-widgets-3-subform-field-image-card-image-card-add-more';
const checkIncludeToScrollMenuImagesCard = '[data-drupal-selector="edit-field-widgets-3-subform-field-include-to-scroll-menu-value"]';
const fillScrollMenuLabelImagesCard = '[data-drupal-selector="edit-field-widgets-3-subform-field-scroll-menu-label-0-value"]';

beforeEach('Use json before starting',() => {
    cy.fixture('widgets/ImagesCard.json').as('imagesCardValues');
});

export class ImagesCardValues{
    selectImagesCards() {
        cy.get(selectImagesCards)
            .scrollIntoView()
            .click({force: true} )


    }

    fillTitleImageCard(){
        cy.get('@imagesCardValues')
            .then( imagesCard => {
                cy.get(fillTitleImageCard)
                    .should('be.visible')
                    .type(imagesCard.titleImagesCard, {force: true})
                    .should('have.value', imagesCard.titleImagesCard)
            });
    }

    fillDescriptionImagesCard(){
        cy.get('@imagesCardValues')
            .then(imagesCard => {
                cy.get(fillDescriptionImagesCard)
                    .should('be.visible')
                    .type(imagesCard.descriptionImagesCard, {force: true})
                    .should('have.value', imagesCard.descriptionImagesCard)
            });
    }
    clickOnAddMediaButtonImagesCard() {
        cy.get(clickOnAddMediaButtonImagesCard)
            .should('be.visible')
            .click({force: true});
    }

    fillLocationsTextImagesCard(){
        cy.get('@imagesCardValues')
            .then(imagesCard => {
                cy.get(fillLocationsTextImagesCard)
                    .should('be.visible')
                    .type(imagesCard.locationsTextImagesCard, {force: true})
                    .should('have.value', imagesCard.locationsTextImagesCard)
            });

    }

    fillUrlImagesCard(){
        cy.get('@imagesCardValues')
            .then(imagesCard => {
                cy.get(fillUrlImagesCard)
                    .should('be.visible')
                    .type(imagesCard.urlImagesCard, {force: true})
                    .should('have.value', imagesCard.urlImagesCard)
            });
    }

    fillLinkTextImagesCard(){
        cy.get('@imagesCardValues')
            .then(imagesCard => {
                cy.get(fillLinkTextImagesCard)
                    .should('be.visible')
                    .type(imagesCard.linkTextImagesCard, {force: true})
                    .should('have.value', imagesCard.linkTextImagesCard)
            });
    }

    addImageCardButton(){
        cy.get(addImageCardButton)
            .scrollIntoView()
            .should('be.visible')
            .click({force: true});


    }


    checkIncludeToScrollMenuImagesCard() {
        cy.get(checkIncludeToScrollMenuImagesCard)
            .should('be.visible')
            .check({force: true});
    }

    fillScrollMenuLabelImagesCard() {
        cy.get('@imagesCardValues')
            .then(imagesCard => {
                cy.get(fillScrollMenuLabelImagesCard)
                    .should('be.visible')
                    .type(imagesCard.scrollMenuLabelImagesCard, {force: true})
                    .should('have.value', imagesCard.scrollMenuLabelImagesCard)
            });
    }



}

export const imagesCardValues = new ImagesCardValues();