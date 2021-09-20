import {When,Then} from "cypress-cucumber-preprocessor/steps";
import {suppleDemandElements} from "../../../support/patterns/suppleAndDemand/SuppleDemandElements";

When ('Fill data for Publication tab', () => {
    suppleDemandElements
        .publicationTab();
    cy.contains('Choose how you want to share the publication below')
        .should('contain', 'Choose how you want to share the publication below')
        .scrollIntoView();
    cy.contains('Public')
        .should('contain', 'Public');
    cy.contains('Tender area')
        .should('contain', 'Tender area');
    cy.contains('You can choose the countries that your request will be public to (default is all countries)')
        .should('contain', 'You can choose the countries that your request will be public to (default is all countries)');

    cy.get(suppleDemandElements.publicationCheckboxInnerContainer)
        .find('input')
        .should('be.checked');

    suppleDemandElements
        .selectNetherlandsTab();
    cy.get(suppleDemandElements.tenderAreaChiplist)
        .eq(0)
        .click({force:true});
    cy.get(suppleDemandElements.tenderAreaChiplist)
        .eq(1)
        .click({force:true});
    cy.get(suppleDemandElements.tenderAreaChiplist)
        .eq(2)
        .click({force:true});
    cy.get(suppleDemandElements.tenderAreaChiplist)
        .eq(3)
        .click({force:true});
    cy.get(suppleDemandElements.tenderAreaChiplist)
        .eq(4)
        .click({force:true});
    cy.get(suppleDemandElements.tenderAreaChiplist)
        .eq(5)
        .click({force:true});
    cy.get(suppleDemandElements.tenderAreaChiplist)
        .eq(6)
        .click({force:true});
    cy.get(suppleDemandElements.tenderAreaChiplist)
        .eq(7)
        .click({force:true});
    suppleDemandElements
        .selectTenderArea();


});

Then ('Invite non Tech Companies for Publication tab: InviteEmails {string}', (InviteEmails) => {

    cy.get (suppleDemandElements.publicateInviteNonTechTitle)
        .should('contain',  ' Invite non Tech companies');


    cy.get(suppleDemandElements.publicateInviteNonTechEmail)
        .scrollIntoView()
        .click({force:true})
        .type(InviteEmails)
        .should('have.value', InviteEmails);

});