export class SuppleDemandElements {

    // Elements of Page
     createButton = '.document-add';


    //
    createRequestForQuotationLabel= '//h1[contains(text(),\'Create Request for Quotation\')]';
    fillOutTheFormLabel = '//h4[contains(text(),\'Fill out the form as precisely as possible. Fields\')]';
    generalLabel='//h1[contains(text(),\'General\')]';
    suppleOrDemandLabel = '//h2[contains(text(),\'Supply or Demand\')]';
    doYouWantToOutsource = '//h4[contains(text(),\'Do you want to outsource work or do you have an of\')]';
    selectMatRadioButtonTrue = 'mat-radio-button';
    //Supple Block
    supplySelection ='.supply-selection';
    demandSelection ='.demand-selection';
    suppleTextInBlock = '.supply-selection > .p-12 > .w-100-p > .m-0';
    areYouLookingText = '//span[contains(text(),\'You are looking for companies that want to make a \')]';
    // Title field
    inputTitleText = '[data-cy="title"]';
    titlePlaceholder= '[placeholder="Title"]';
    titleLabel = '//h4[contains(text(),\'Title*\')]';
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
    descriptionLabel ='//h4[contains(text(),\'Description\')]';
    descriptionPlaceholder ='//div[contains(text(),\'Add your description here\')]';

    // Advanced options

    //Contact
    matSelect ='.mat-select';
    contactLabel ='[class="mat-option-text"]';
    //Delivery date
    deliveryDateValue = '[data-cy="delivery-date-input"]';
    quotationDeadline ='[data-cy="closure-date-input"]';
    // Expertise tab
    expertiseLabel = '//h1[contains(text(),\'Expertise\')]';
    selectCategory = '//h4[contains(text(),\'Please select the categories below that apply to y\')]';
    categoryEngineering = '//mat-chip[contains(text(),\'Engineering\')]';
    categoryTechnologies = '//mat-chip[contains(text(),\'Technologies\')]';
    categoryElectricalEngineering = '//mat-chip[contains(text(),\'Electrical engineering\')]';
    categoryTransport = '//mat-chip[contains(text(),\'Transport\')]';
    categorySoftware ='//mat-chip[contains(text(),\'Software\')]';
    categoryOthers = '//mat-chip[contains(text(),\'Others\')]';
    categoryArticles = '//mat-chip[contains(text(),\'Articles\')]';
    categorySurfaceTreatment = '//mat-chip[contains(text(),\'Surface treatment\')]';

    //Product tab
    productTabLabel ='//h1[contains(text(),\'Products\')]';

    //Publication
    publicationLabel = '//h1[contains(text(),\'Publication\')]';
    selectNetherlands ='[data-cy="tender-area-chiplist"]';
    clickOnInviteButton ='[data-cy="invite-button"]';


    //Matchmaker
    matchmakerLabel = '//h1[contains(text(),\'MatchMaker\')]';

    // advanced option

    selectAdvancedOptions(){
        cy.contains('Advanced options')
            .should('contain', 'Advanced options')
            .click({force:true});
    }

    labelProductionSize(){
    cy.xpath('//h3[contains(text(),\'Production size\')]')
        .should ('contain', 'Production size')
    };

    //select ProductionSize

    selectProductionSize(){
        cy.get('mat-select[formcontrolname="productionSize"]')
            .click({force:true});
        cy.get('mat-option')
            .should('contain',' Does not apply ')
            .and ('contain' ,' Prototypes ')
            .and ('contain', ' Single Pieces ')
            .and ('contain', ' Large Series ')
            .and ('contain', ' Series Work ')
            .and ('contain', ' Urgent Work ')
            .and ('contain', ' Others ')

    }

    labelProductionPlanning(){
        cy.xpath('//h3[contains(text(),\'Production planning\')]')
            .should ('contain', 'Production planning')
    };

    selectProductionPlanning(){
        cy.get('mat-select[formcontrolname="productionPlanning"]')
            .click({force:true});
        cy.get('mat-option')
            .should('contain',' Does not apply ')
            .and ('contain' ,' Make-to-Stock ')
            .and ('contain', ' Make-to-Order ')
            .and ('contain', ' Engineer-to-Order ')
            .and ('contain', ' Others ')
    };

    labelCertificate(){
        cy.xpath('//h3[contains(text(),\'Certificate\')]')
            .should ('contain', 'Certificate')
    };

    selectCertificate(){
        cy.get('mat-select[formcontrolname="certificates"]')
            .click({force:true});
        cy.get('mat-option')
            .should('contain',' AS9100 ')
            .and ('contain' ,' DIN 18800-7:2008 Class A-C ')
            .and ('contain', ' DIN 18800-7:2008 Class D/E ')
    };

    labelIndustries(){
        cy.xpath('//h3[contains(text(),\'Industries\')]')
            .should ('contain', 'Industries')
    };


    selectIndustries(){
        cy.get('mat-select[formcontrolname="industries"]')
            .click({force:true});
        cy.get('mat-option')
            .should('contain',' Drive and gear technology ')
            .and ('contain' ,' Additive manufacturing ')
            .and ('contain', ' Agro-industry ')
    };

    labelTolerance(){
        cy.xpath('//h3[contains(text(),\'Tolerance\')]')
            .should ('contain', 'Tolerance')
    };

    selectTolerances(){
        cy.get('mat-select[formcontrolname="tolerances"]')
            .click({force:true});
        cy.get('mat-option')
            .should('contain',' < 0,0009 ')
            .and ('contain' ,' ± 0,001 ')
            .and ('contain', ' ± 0,005 ')
    };


    //title

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
            .find (this.selectMatRadioButtonTrue)
            .eq(0)

    };

    selectDemandRadioButton(){
        cy.get (this.demandSelection)
            .click({force:true})
    };


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
            .should ('contain' , 'Title*');
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
            .should ('contain' , 'Description');
    }

    contactLabelText(){
        cy.get('mat-select[formcontrolname="contactUser"]')
            .click();
        cy.get('mat-option')
            .eq(0)
            .should('contain','Nikos  Chalkos')
            .click({force:true});
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



    selectMaterial(){
        cy.get('mat-select')
            .eq(3)
            .click({force:true});
        cy.get('mat-option')
            .should('contain',' Aluminium ')
            .and ('contain', ' Brass ')
            .and ('contain', ' Copper ')
            .and ('contain', ' Stainless steel ')
            .and ('contain', ' Wrought iron ')
            .and ('contain', ' Others ')

    }

    selectTenderArea(){
        cy.xpath('//span[contains(text(),\'Belgium, England, Germany, Ireland, The Netherland\')]')
            .should('contain', 'Belgium, England, Germany, Ireland, The Netherlands, Northern Ireland, Scotland, Wales')

    }


    /*selectDeliveryCondition(){
        cy.get('mat-select[formcontrolname="deliveryCondition"]')
            .click({force:true});
            cy.get('mat-option')
            .should (($lis) =>{
            expect ($lis).to.have.length(15)
            expect( $lis.eq(0)).to.contain (' Cost and freight')
                expect( $lis.eq(1)).to.contain (' Cost insurance and freight')
                expect( $lis.eq(2)).to.contain (' Carriage and insurance paid to')
                expect( $lis.eq(3)).to.contain (' Carriage paid to')
                expect( $lis.eq(4)).to.contain ( ' Delivered at place')
                expect( $lis.eq(5)).to.contain (' Delivered at terminal')
                expect( $lis.eq(6)).to.contain (' Delivered duty paid')
                expect( $lis.eq(7)).to.contain ( ' Ex works')
                expect( $lis.eq(8)).to.contain ( ' Free alongside ship')
                expect( $lis.eq(9)).to.contain ( ' Free carrier')
                expect( $lis.eq(10)).to.contain (' Free on board')
                expect( $lis.eq(11)).to.contain ( ' Others')
    })}*/


    selectNetherlandsTab(){
    cy.get (this.selectNetherlands)
    .should (($lis) =>{
    expect ($lis).to.have.length(8)
    expect( $lis.eq(0)).to.contain (' The Netherlands ')
    expect( $lis.eq(1)).to.contain (' England ')
    expect( $lis.eq(2)).to.contain (' Germany ')
    expect( $lis.eq(3)).to.contain (' Belgium ')
    expect( $lis.eq(4)).to.contain ( ' Ireland ')
    expect( $lis.eq(5)).to.contain (' Northern Ireland ')
    expect( $lis.eq(6)).to.contain (' Scotland ')
    expect( $lis.eq(7)).to.contain ( ' Wales ')

})}


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
            .should ('contain' , 'MatchMaker');
    }

// Engineer block
    selectCategoryText(){
        cy.xpath(this.selectCategory)
            .should ('contain' , 'Please select the categories below that apply to your application');
    }

    selectCategoryEngineering(){
        cy.xpath(this.categoryEngineering)
            .should ('contain' , ' Engineering');
    }

    selectCategoryTechnologies(){
        cy.xpath(this.categoryTechnologies)
            .should ('contain' , ' Technologies');
    }

    selectCategoryElectricalEngineering(){
        cy.xpath(this.categoryElectricalEngineering)
            .should ('contain' , ' Electrical engineering');
    }

    selectCategoryTransport(){
        cy.xpath(this.categoryTransport)
            .should ('contain' , ' Transport');
    }

    selectCategorySoftware(){
        cy.xpath(this.categorySoftware)
            .should ('contain' , ' Software');
    }

    selectCategoryOthers(){
        cy.xpath(this.categoryOthers)
            .should ('contain' , ' Others');
    }


    selectCategoryArticles(){
        cy.xpath(this.categoryArticles)
            .should ('contain' , ' Articles');
    }

    selectCategorySurfaceTreatment(){
        cy.xpath(this.categorySurfaceTreatment)
            .should ('contain' , ' Surface treatment');
    }



}
export const suppleDemandElements = new SuppleDemandElements();