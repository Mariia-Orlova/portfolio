const addButtonWysiwyg ='[data-drupal-selector="edit-add-more-button-wysiwyg"]';
const fillDescriptionWysiwyg ='#cke_151_contents > .cke_wysiwyg_frame';
const includeToScrollMenuWysiwyg ='[data-drupal-selector="edit-field-widgets-6-subform-field-include-to-scroll-menu-value"]';
const scrollMenuLabelWysiwyg ='[data-drupal-selector="edit-field-widgets-6-subform-field-scroll-menu-label-0-value"]';



beforeEach('Use json before starting',() => {
    cy.fixture('widgets/wysiwyg.json').as('wysiwygValues');

});


export class WysiwygValues {
    addButtonWysiwyg(){
     cy.get(addButtonWysiwyg)
         .scrollIntoView()
         .click({force: true});

            };

    fillDescriptionWysiwyg(){
        cy.get('@wysiwygValues')
            .then( wysiwyg => {
                cy.get(fillDescriptionWysiwyg)
                    .iframe('body')
                    .should('not.exist')
                    .type(wysiwyg.descriptionWysiwyg, {force:true})
                    .should('have.value', wysiwyg.descriptionWysiwyg)
            });
    }

    includeToScrollMenuWysiwyg() {
        cy.get(includeToScrollMenuWysiwyg)
            .should('be.visible')
            .check({force: true});
    }

    scrollMenuLabelWysiwyg(){
        cy.get('@wysiwygValues')
            .then( wysiwyg => {
                cy.get(scrollMenuLabelWysiwyg)
                    .should('be.visible')
                    .type(wysiwyg.scrollMenuLabelWysiwyg, {force: true})
                    .should('have.value', wysiwyg.scrollMenuLabelWysiwyg)
            });
    }
}


export const wysiwyg = new WysiwygValues();