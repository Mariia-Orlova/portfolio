import {Given} from "cypress-cucumber-preprocessor/steps";
import {components} from "../../../support/patterns/addContent/Components";
import {basicTextCardValues} from "../../../support/patterns/addContent/widgets/BasicTextCard";
import {columnTextValues} from "../../../support/patterns/addContent/widgets/ColumnText";
import {newsLetterSubscriptionValues} from "../../../support/patterns/addContent/widgets/NewsLetterSubscription";
import {imagesCardValues} from "../../../support/patterns/addContent/widgets/ImageCard";
import {galleryValues} from "../../../support/patterns/addContent/widgets/Gallery";
import {overviewPromotionValues} from "../../../support/patterns/addContent/widgets/OverviewPromotion";
import {wysiwyg} from "../../../support/patterns/addContent/widgets/Wysiwyg";
import {partners} from "../../../support/patterns/addContent/widgets/Partners";
import {campaignSubscriptionValues} from "../../../support/patterns/addContent/widgets/CampaignSubscription";
import {membershipValues} from "../../../support/patterns/addContent/widgets/Membership";


Given('Fill Widgets tab', () => {
    basicTextCardValues
        .openWidgetsTab();
    basicTextCardValues
        .clickOnAddParagraph();

    //Basic Text Card widget
    basicTextCardValues
        .selectBasicTextCard();
    basicTextCardValues
        .fillTitleBasicTextCard();
    basicTextCardValues
        .fillDescriptionBasicTextCard();
    basicTextCardValues
        .checkIncludeToScrollMenuBasicTextCard();
    basicTextCardValues
        .fillScrollMenuLabelBasicTextCard();

    //Column Text widget
    basicTextCardValues
        .clickOnAddParagraph();
    columnTextValues
        .selectColumnText();
    columnTextValues
        .fillTitleColumnText();
    columnTextValues
        .fillDescriptionColumnText();
    columnTextValues
        .checkIncludeToScrollMenuColumnText();
    columnTextValues
        .fillScrollMenuLabelColumnText();

    //Newsletter Subscription
    basicTextCardValues
        .clickOnAddParagraph();
    newsLetterSubscriptionValues
        .selectNewsletterSubscription();
    newsLetterSubscriptionValues
        .fillTextNewsletterSubscription();
    newsLetterSubscriptionValues
        .fillTitleNewsletterSubscription();
    newsLetterSubscriptionValues
        .fillButtonNewsletterSubscription();
    newsLetterSubscriptionValues
        .fillSubtitleNewsletterSubscription();
    newsLetterSubscriptionValues
        .checkIncludeToScrollMenuNewsletterSubscription();
    newsLetterSubscriptionValues
        .fillScrollMenuLabelNewsletterSubscription();

    //Images Card
    basicTextCardValues
        .clickOnAddParagraph();
    imagesCardValues
        .selectImagesCards();
    imagesCardValues
        .fillTitleImageCard();
    imagesCardValues
        .fillDescriptionImagesCard();
    imagesCardValues
        .clickOnAddMediaButtonImagesCard();
    components
        .selectImage();
    components
        .clickOnInsert();
    imagesCardValues
        .fillLocationsTextImagesCard();
    imagesCardValues
        .fillUrlImagesCard();
    imagesCardValues
        .fillLinkTextImagesCard();

    // Add image card 2
    //imagesCardValues
      //  .addImageCardButton();
    // Add image card 3

    imagesCardValues
        .checkIncludeToScrollMenuImagesCard();
    imagesCardValues
        .fillScrollMenuLabelImagesCard();

    // Gallery widget
    basicTextCardValues
        .clickOnAddParagraph();
    galleryValues
        .clickOnAddGalleryButton();
    galleryValues
        .selectGallery();
    galleryValues
        .fillTitleGallery();
    galleryValues
        .fillSubtitleGallery();
    galleryValues
        .checkIncludeToScrollMenuGallery();
    galleryValues
        .fillScrollMenuLabelGallery();

    //Overview Promotion widget
    basicTextCardValues
        .clickOnAddParagraph();
    overviewPromotionValues
        .clickOnAddGOverviewPromotion();
    overviewPromotionValues
        .fillTitleOverviewPromotion();
    overviewPromotionValues
        .fillDescriptionOverviewPromotion();
    overviewPromotionValues
         .selectPromotionTypeOverviewPromotion();
    overviewPromotionValues
       .promotionTextOverviewPromotion();
    overviewPromotionValues
        .listPageLinkOverviewPromotion();
    overviewPromotionValues
        .promotionalItemReferenceOverviewPromotion();

    // Wysiwyg widget
   basicTextCardValues
         .clickOnAddParagraph();
     wysiwyg
         .addButtonWysiwyg();
    /*wysiwyg
       .fillDescriptionWysiwyg();*/
    wysiwyg
        .includeToScrollMenuWysiwyg();
    wysiwyg
        .scrollMenuLabelWysiwyg();

    // Partners widget
    basicTextCardValues
        .clickOnAddParagraph();
    partners
        .clickAddButtonPartners();
    partners
        .addMediaButtonPartners();
    components
        .selectImage();
    components
        .clickOnInsert();
    partners
        .linkPartners();

    partners
        .addPartnerButton();
    partners
        .addMediaButton2Partners();
    components
        .selectImage();
    components
        .clickOnInsert();
    partners
        .linkPartners2();

    partners
        .addPartnerButton();
    partners
        .addMediaButton3Partners();
    components
        .selectImage();
    components
        .clickOnInsert();
    partners
        .linkPartners3();
    partners
        .includeToScrollMenuPartner();
    partners
        .scrollMenuLabelPartner();
 // Campaign Subscription widget

    basicTextCardValues
        .clickOnAddParagraph();
    campaignSubscriptionValues
        .clickOnAddCampaignSubscription();
    campaignSubscriptionValues
        .fillTextCampaignSubscription();
    campaignSubscriptionValues
        .fillTitleCampaignSubscription();
    campaignSubscriptionValues
        .buttonCampaignSubscription();
    campaignSubscriptionValues
        .subtitleCampaignSubscription();
    campaignSubscriptionValues
        .includeToScrollMenu();
    campaignSubscriptionValues
        .buttonMenuLabelCampaignSubscription();

    // Membership widget
    basicTextCardValues
        .clickOnAddParagraph();
    membershipValues
        .addButtonMembership();
    membershipValues
        .titleMembership();
    membershipValues
        .descriptionMembership();
    membershipValues
        .urlCtaButtonMembership();
    membershipValues
        .linkCtaButtonTextMembership();
    membershipValues
        . urlMembershipPageLink();
    membershipValues
        .linkTextMembershipPageLink();
    membershipValues
        .includeToScrollMenu();
    membershipValues
        .scrollMenuLabel();
    membershipValues
        .tabSlider();
    membershipValues
        .titleSliderMembership();
    membershipValues
        .addMediaSliderMembership();
    components
        .selectImage();
    components
        .clickOnInsert();
    membershipValues
        .descriptionSlider();
    membershipValues
        .urlCtaButtonSlider();
    membershipValues
        .linkTextSlider();
    membershipValues
        .dateSlider();
    membershipValues
        .timeSlider();

});
