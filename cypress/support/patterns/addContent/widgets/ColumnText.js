const selectColumnText = '[data-drupal-selector="edit-add-more-button-column-text-expandable"]';
const fillTitleColumnText = '[data-drupal-selector="edit-field-widgets-1-subform-field-title-0-value"]';
const fillDescriptionColumnText = '[data-drupal-selector="edit-field-widgets-1-subform-field-description-0-value"]';
const checkIncludeToScrollMenuColumnText = '[data-drupal-selector="edit-field-widgets-1-subform-field-include-to-scroll-menu-value"]';
const fillScrollMenuLabelColumnText ='[data-drupal-selector="edit-field-widgets-1-subform-field-scroll-menu-label-0-value"]';

beforeEach('Use json before starting',() => {
    cy.fixture('widgets/ColumnText.json').as('columnTextValues');
});

export class ColumnTextValues {

    selectColumnText() {
        cy.get(selectColumnText)
            .should('be.visible')
            .click({force: true});
    }

    fillTitleColumnText(){
        cy.get('@columnTextValues')
            .then(columnText => {
                cy.get(fillTitleColumnText)
                    .should('be.visible')
                    .type(columnText.titleColumnText, {force: true})
                    .should('have.value', columnText.titleColumnText)
            });
    }
    fillDescriptionColumnText(){
        cy.get('@columnTextValues')
            .then(columnText => {
                cy.get(fillDescriptionColumnText)
                    .should('be.visible')
                    .type(columnText.descriptionColumnText, {force: true})
                    .should('have.value', columnText.descriptionColumnText)
            });
    }

    checkIncludeToScrollMenuColumnText() {
        cy.get(checkIncludeToScrollMenuColumnText)
            .should('be.visible')
            .check({force: true});
    }

    fillScrollMenuLabelColumnText() {
        cy.get('@columnTextValues')
            .then(columnText => {
                cy.get(fillScrollMenuLabelColumnText)
                    .should('be.visible')
                    .type(columnText.scrollMenuLabelColumnText, {force: true})
                    .should('have.value', columnText.scrollMenuLabelColumnText)
            });
    }
}

export const columnTextValues = new ColumnTextValues();