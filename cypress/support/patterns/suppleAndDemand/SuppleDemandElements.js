export class SuppleDemandElements {

    // Elements of Page
     createButton = '.document-add';


    //
    createRequestForQuotationLabel= '//h1[contains(text(),\'Create Request for Quotation\')]';
    fillOutTheFormLabel = '//h4[contains(text(),\'Fill out the form as precisely as possible. Fields\')]';
    generalLabel='//h1[contains(text(),\'General\')]';
    suppleOrDemandLabel = '//h2[contains(text(),\'Supply or Demand\')]';
    doYouWantToOutsource = '//h4[contains(text(),\'Do you want to outsource work or do you have an of\')]';
    selectMatRadioButtonTrue = '[ng-reflect-checked="true"]';
    //Supple Block
    supplySelection ='.supply-selection';
    suppleTextInBlock = '.supply-selection > .p-12 > .w-100-p > .m-0';
    areYouLookingText = '//span[contains(text(),\'You are looking for companies that want to make a \')]';
    // Title field
    inputTitleText = '[data-cy="title"]';
    titlePlaceholder= '[placeholder="Title"]';
    titleLabel = '//h4[contains(text(),\'Title *\')]';
    //Internal ID
    inputInternalProjectNumberText ='[data-cy="internalProjectNumber"]';
    internalIdLabel = '//h4[contains(text(),\'Internal ID\')]';
    internalIdPlaceholder =  '[placeholder="Internal ID"]';
    //Maximum Number of Quotations
    inputTextMaximumNumberOfQuotations ='[data-cy="quotation-limit"]';
    maximumNumberLabel ='//h4[contains(text(),\'Maximum number of quotations\')]';
    maximumNumberPlaceholder ='[placeholder="Internal ID"]';
    //Description
    inputTextDescription ='[class="nw-editor__res"]';
    descriptionLabel ='//h4[contains(text(),\'Description*\')]';
    descriptionPlaceholder ='//div[contains(text(),\'Add your description here\')]';
    //Contact
    matSelect ='.mat-select';
    contactLabel ='[class="mat-option-text"]';
    //Delivery date
    deliveryDateValue = '[data-cy="delivery-date-input"]';
    quotationDeadline ='[data-cy="closure-date-input"]';
    // Expertise tab
    expertiseLabel = '//h1[contains(text(),\'Expertise\')]';

    //Product tab
    productTabLabel ='//h1[contains(text(),\'Products\')]';

    //Publication
    publicationLabel = '//h1[contains(text(),\'Publication\')]';

    //Matchmaker
    matchmakerLabel = '//h1[contains(text(),\'Matchmaker\')]';


    checkTitleAndSecondTextForCreateSuppleAndDemand (){
        cy.xpath (this.createRequestForQuotationLabel)
            .should ('be.visible')
            .and ('contain' , 'Create Request for Quotation')
    };

    checkFillOutTheFormLabel(){
        cy.xpath (this.fillOutTheFormLabel)
            .should ('be.visible')
            .and ('contain' , ' Fill out the form as precisely as possible. Fields marked with a * star are mandatory ')
    };


    checkGeneralText(){
        cy.xpath(this.generalLabel)
            .should ('be.visible')
            .and ('contain', 'General')
    };

    checkSuppleOrDemandText(){
        cy.xpath(this.suppleOrDemandLabel)
            .should ('be.visible')
            .and ('contain', 'Supply or Demand')
    };

    checkDoYouWantToOutsource(){
        cy.xpath(this.doYouWantToOutsource)
            .should ('be.visible')
            .and ('contain', 'Do you want to outsource work or do you have an offer, a service, article or other?')

    }

    /*checkTextInSuppleBlock(){
        cy.get (this.suppleTextInBlock)
            .should ('be.visible')
            .and( 'contain', 'Supple');

        cy.xpath (this.areYouLookingText)
            .should ('be.visible')
            .contains('You are looking for companies that want to make a quotation');
    }*/

    selectSuppleRadioButton(){
        cy.get (this.supplySelection)
            .find (this.selectMatRadioButtonTrue);

    }


    fillTitleText (){
        cy.get (this.inputTitleText)
            .should ('be.visible')
            .and ('be.empty');
    }

    titlePlaceholderText(){
    cy.get(this.titlePlaceholder)
            .should ('contain' , 'Title');
    }

    titleLabelText(){
        cy.xpath(this.titleLabel)
            .should ('contain' , 'Title *');
    }

    internalProjectNumberValue(){
        cy.get (this.inputInternalProjectNumberText)
            .should ('be.visible')
            .and ('be.empty');
    }

    internalProjectNumberPlaceholder(){
        cy.get(this.internalIdPlaceholder)
            .should ('contain' , 'Internal ID');
    };

    internalProjectIdLabelText(){
        cy.xpath(this.internalIdLabel)
            .should ('contain' , 'Internal ID ');
    }


    inputTextMaximumNumberOfQuotationsValue(){
        cy.get (this.inputTextMaximumNumberOfQuotations)
            .should ('be.visible')
            .and ('be.empty');
    }

    maximumNumberPlaceholderText(){
        cy.get(this.maximumNumberPlaceholder)
            .should ('contain' , 'Maximum number of quotations');
    };

    maximumNumberLabelText(){
        cy.xpath(this.maximumNumberLabel)
            .should ('contain' , 'Maximum number of quotations');
    }

    inputTextDescriptionValue(){
        cy.get (this.inputTextDescription)
            .should ('be.visible')
            .and ('be.empty');
    }


    descriptionLabelText(){
        cy.xpath(this.descriptionLabel)
            .should ('contain' , 'Description*');
    }

    contactLabelText(){
        cy.get('mat-select[formcontrolname="contactUser"]')
            .click();
        cy.get('mat-option')
            .should('contain','Nikos  Chalkos')
            .click();
    }

    selectDeliveryCondition(){
        cy.get('mat-select[formcontrolname="deliveryCondition"]')
            .click({force:true});
        cy.get('mat-option')
            .should('contain',' Cost and freight')
            .and ('contain', ' Cost insurance and freight')
            .and ('contain',' Carriage and insurance paid to')
            .and('contain', ' Carriage paid to')
            .and ('contain', ' Delivered at place')
            .and ('contain',' Delivered at terminal')
            .and ('contain' ,' Delivered duty paid')
            .and ('contain' , ' Ex works')
            .and ('contain' , ' Free alongside ship')
            .and ('contain' , ' Free carrier')
            .and ('contain' , ' Free on board')
            .and ('contain' , ' Others')
    }

    contactPreferences(){
        cy.get('mat-select[formcontrolname="contactPreference"]')
            .click({force:true});
        cy.get('mat-option')
            .should('contain','Only through Tech2B')
            .and ('contain', ' Also through Email ')
            .and ('contain', ' Also through Phone ')
            .click({ multiple: true });


    }
    contactPreferencesAlsoEmail(){
        cy.get('mat-select[formcontrolname="contactPreference"]')
            .click({force:true});
        cy.get('mat-option')
            .should('contain',' Also through Email ')
            .click({ force:true});
    }

    contactPreferencesAlsoPhone(){
        cy.get('mat-select[formcontrolname="contactPreference"]')
            .click({force:true});
        cy.get('mat-option')
            .should('contain',' Also through Phone ')
            .click({force:true});
    }

    expertiseLabelText(){
        cy.xpath(this.expertiseLabel)
            .should ('contain' , 'Expertise');
    }

    productTab(){
        cy.xpath(this.productTabLabel)
            .should ('contain' , 'Products');
    }

    publicationTab(){
        cy.xpath(this.publicationLabel)
            .should ('contain' , 'Publication');
    }

    matchmakerTab(){
        cy.xpath(this.matchmakerLabel)
            .should ('contain' , 'Matchmaker');
    }
}
export const suppleDemandElements = new SuppleDemandElements();