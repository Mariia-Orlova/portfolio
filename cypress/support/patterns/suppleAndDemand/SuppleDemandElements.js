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
    suppleTextInBlock = '//h3[contains(text(),\'Supply\')]';
    areYouLookingText = '//span[contains(text(),\'You are looking for companies that want to make a \')]';

    titleBlock = '[data-cy="title"]';
    titlePlaceholder= '[placeholder="Title"]';



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
            .and ('contain' , 'General')
    };

    checkSuppleOrDemandText(){
        cy.xpath(this.suppleOrDemandLabel)
            .should ('be.visible')
            .and ('contain' , 'Supply or Demand')
    };

    checkDoYouWantToOutsource(){
        cy.xpath(this.doYouWantToOutsource)
            .should ('be.visible')
            .and ('contain' , 'Do you want to outsource work or do you have an offer, a service, article or other?')

    }

    checkTextInSuppleBlock(){
        cy.xpath (this.suppleTextInBlock)
            .should ('be.visible')
            .and ('contain' , 'Supple');
        cy.get (this.areYouLookingText)
            .should ('be.visible')
            .and ('contain' , 'You are looking for companies that want to make a quotation');
    }

    selectSuppleRadioButton(){
        cy.get (this.supplySelection)
            .find (this.selectMatRadioButtonTrue);

    }



}
export const suppleDemandElements = new SuppleDemandElements();