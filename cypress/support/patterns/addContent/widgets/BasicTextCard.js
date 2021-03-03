const titleDescriptionBasicTextCard =  '[data-drupal-selector="edit-field-widgets-0-subform-field-description-0-value"]';
const fillTitleBasicTextCard = '[data-drupal-selector="edit-field-widgets-0-subform-field-title-0-value"]';
const selectBasicTextCard ='[data-drupal-selector="edit-add-more-button-basic-text"]';
const clickOnAddParagraph = '[data-drupal-selector="edit-field-widgets-add-more-browse"]';
const openWidgetsTab =  '.horizontal-tab-button-2 > a';
const checkIncludeToScrollMenuBasicTextCard = '[data-drupal-selector="edit-field-widgets-0-subform-field-include-to-scroll-menu-value"]';
const fillScrollMenuLabelBasicTextCard ='[data-drupal-selector="edit-field-widgets-0-subform-field-scroll-menu-label-0-value"]';



beforeEach('Use json before starting',() => {
    cy.fixture('widgets/BasicTextCard.json').as('basicTextCardValues');

});


export class BasicTextCardValues{

    openWidgetsTab() {
        cy.get(openWidgetsTab)
            .should('be.visible')
            .click({force: true})
            .should('contain', 'Widgets');

    }

    clickOnAddParagraph() {
        cy.get(clickOnAddParagraph)
            .should('be.visible')
            .click({force: true});
    }

    selectBasicTextCard() {
        cy.get(selectBasicTextCard)
            .should('be.visible')
            .click({force: true});

    }

    fillTitleBasicTextCard() {
        cy.get('@basicTextCardValues')
            .then(basicTextCard => {
                cy.get(fillTitleBasicTextCard)
                    .should('be.visible')
                    .click({force: true})
                    .type(basicTextCard.titleBasicTextCard)
                    .should('have.value', basicTextCard.titleBasicTextCard)

            });
    }

    fillDescriptionBasicTextCard() {
        cy.get('@basicTextCardValues')
            .then(basicTextCard => {
                cy.get(titleDescriptionBasicTextCard)
                    .should('be.visible')
                    .type(basicTextCard.descriptionBasicTextCard, {force: true})
                    .should('have.value', basicTextCard.descriptionBasicTextCard)
            });
    }

    checkIncludeToScrollMenuBasicTextCard() {
        cy.get(checkIncludeToScrollMenuBasicTextCard)
            .should('be.visible')
            .check({force: true});
    }

    fillScrollMenuLabelBasicTextCard() {
        cy.get('@basicTextCardValues')
            .then(basicTextCard => {
                cy.get(fillScrollMenuLabelBasicTextCard)
                    .should('be.visible')
                    .type(basicTextCard.scrollMenuLabelBasicTextCard, {force: true})
                    .should('have.value', basicTextCard.scrollMenuLabelBasicTextCard)
            });
    }

}
export const basicTextCardValues = new BasicTextCardValues();