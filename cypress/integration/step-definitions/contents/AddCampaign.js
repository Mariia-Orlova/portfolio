import { When,Then,And } from "cypress-cucumber-preprocessor/steps";
import {components} from "../../../support/patterns/addContent/Components";
import {campaignValue} from "../../../support/patterns/addContent/Campaign";


When('Click on Add content button', () => {
        components.clickContentButton();
});

And('Click on Campaign link', () => {
    cy.contains('Campaign')
        .contains('Campaign')
        .click({force: true});
    cy.url()
        .should('include', '/node/add/campaign')
});

And('Fill General tab for Campaign content', () => {
    campaignValue
        .fillTitle();
    campaignValue
        .fillSummary();
    campaignValue
        .fillDescription();
    campaignValue
        .fillAdditionalLabel();
    campaignValue
        .fillAdditionalDescription();

    //Add media
    components
        .addMediaButton();
    components
        .selectImage();
    components
        .clickOnInsert();

});
    And('Fill Main banner tab for Campaign content', () => {
        components
            .openMainBannerTab();
        campaignValue
            .fillTitleMainBanner();
        components
            .addMediaButtonMainBanner();
        components
            .selectImage();
        components
            .clickOnInsert();
        campaignValue
            .fillDescriptionMainBanner();
        campaignValue
            .fillUrlMainBanner();
        campaignValue
            .fillLinkTextMainBanner();
        campaignValue
            .fillDateMainBanner();
        campaignValue
            .fillTimeMainBanner();
        campaignValue
            .fillTabNameMainBanner();
    });

    And('Fill Details information tab for Campaign content', () => {
       components
           .openDetailsInformation();
        campaignValue
            .fillCampaignTypeInDetailsInformation();
        campaignValue
            .fillDrawDateInDetailsInformation();
        campaignValue
            .fillStartDateInDetailsInformation();
        campaignValue
            .fillEndDateMainBannerDetailsInformation();
    });

    And('Fill Subscription tab for Campaign content', () => {
            components
                .openSubscriptionTab();
            campaignValue
                .fillCampaignNameSubscription();
});

   And('Click on Save button', () => {
            components
                .clickOnSaveButton();
        });

   Then('Open front page', () => {
            cy.url()
                .should('include', '/campaign/testik');
            //cy.get('#iframe')
               // .should ('not.contain', '502 Bad Gateway')
        });