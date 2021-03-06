export class SuppleDemandElements {

    // Supple and Demand link in main menu
     navSuppleAndDemandLink = '//h1[contains(text(),\'Supply and Demand\')]';

    // Elements of Page
     createButton = '.document-add';

     // Create, Save, Cancel Button in form
     createButtonInForm = '.verify-create-request-button';
     saveButtonInForm = '.save-create-request-button';
     cancelButtonInForm = '.cancel-create-request-button';


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
    inputTextDescription ='.nw-editor__res';
    descriptionLabel ='//h4[contains(text(),\'Description\')]';
    descriptionPlaceholder ='//div[contains(text(),\'Add your description here\')]';

    termsAndConditionsTitle = '[style="margin-right: 24px; flex-direction: column; box-sizing: border-box; display: flex; flex: 1 1 100%; max-width: 50%;"] > .terms-title > .font-weight-700';
    termsAndConditionSlide = '#mat-slide-toggle-1 > .mat-slide-toggle-label > .mat-slide-toggle-bar';
    generalFilesTitle = '[style="flex-direction: column; box-sizing: border-box; display: flex; flex: 1 1 100%; max-width: 50%;"] > .terms-title > .font-weight-700';
    generalFilesSlide = '#mat-slide-toggle-2 > .mat-slide-toggle-label > .mat-slide-toggle-bar';


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
    categoryChiplist ='[data-cy="category-chiplist"]';
    //categoryEngineering = '//mat-chip[contains(text(),\'Engineering\')]';
    //categoryTechnologies = '//mat-chip[contains(text(),\'Technologies\')]';
    //categoryElectricalEngineering = '//mat-chip[contains(text(),\'Electrical engineering\')]';
    //categoryTransport = '//mat-chip[contains(text(),\'Transport\')]';
    //categorySoftware ='//mat-chip[contains(text(),\'Software\')]';
    //categoryOthers = '//mat-chip[contains(text(),\'Others\')]';
    //categoryArticles = '//mat-chip[contains(text(),\'Articles\')]';
    //categorySurfaceTreatment = '//mat-chip[contains(text(),\'Surface treatment\')]';

    //Product tab
    productTabLabel ='//h1[contains(text(),\'Products\')]';
    material ='[data-cy="material-chiplist"]';
    NoProducts ='//h3[contains(text(),\'No Products\')]';
    AddProductButton = '.show-add-product-button > .mat-focus-indicator';
    AddNewProduct = '[data-cy="add-new-product"]';
    ClickOnAddProduct = '[data-cy=add-product]';
    TitleInput = '[data-cy="title-input"]';
    QuantityInput = '[data-cy="quantity-input"]';
    CheckProductTabAddProduct = '//h4[contains(text(),\'Add your product files relevant to your request\')]';
    CheckProductTabSelectOptions = '//p[contains(text(),\'Select 1 of the 3 options to add products below\')]';
    manualButton = '//h3[contains(text(),\'Manually\')]';
    addExistingProduct = '[data-cy="add-existing-product"]';
    ProductTabGenerate = ':nth-child(2) > .mat-button-wrapper > .p-12';
    GenerateAddProduct = '[data-cy="cancel-add-files-to-create-product"]';
    GenerateProductCheckbox = '[data-cy="product-checkbox"]';
    SelectProduct = '[data-cy="select-product"]';
    TitleChooseExistingProduct = '//h1[@id=\'mat-dialog-title-0\']';
    FieldSearchInput = '//input[@id=\'mat-input-7\']';
    ColumnHead = 'mat-header-cell cdk-header-cell w-100 cdk-column-select mat-column-select ng-tns-c305-275 ng-star-inserted';
    CheckboxProduct ='mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin';


    //Publication
    publicationLabel = '//h1[contains(text(),\'Publication\')]';
    tenderAreaChiplist ='[data-cy="tender-area-chiplist"]';
    clickOnInviteButton ='[data-cy="invite-button"]';
    publicationCheckboxInnerContainer = '.mat-checkbox-inner-container';
    publicateInviteNonTechTitle = '.invite-non-tech2b > .text-bold';
    publicateInviteNonTechEmail = '[data-cy=informTo]';


    //  Upload
    filepathTxt = 'UploadFiles/TestUploadFile.txt';
    filepathJpg = 'UploadFiles/TestJpg.jpg';


    // Upload NDA Protection
    NDASlideToggle =  '#mat-slide-toggle-3 > .mat-slide-toggle-label > .mat-slide-toggle-bar';
    NewFileUpload = '[data-cy=new-file-upload]';
    BrowseUploadFile = '.file-upload-description > .mat-focus-indicator';
    RequestFileUpload = '.request-file-uploader > .p-12';


    // advanced option

    selectAdvancedOptions(){
        cy.contains('Advanced options')
            .should('contain', 'Advanced options')
            .click({force:true});
    }



    //select What is your purpose for this RFQ?
    labelPurposeForRFQ(){
        cy.xpath('//h3[contains(text(),\'What is your purpose for this RFQ?\')]')
            .should ('contain', 'What is your purpose for this RFQ? ')
    };
    selectPurposeForRFQ (){
        cy.get('mat-select[formcontrolname="requestPurpose"]')
            .click({force:true});
        cy.get('mat-option')
            .should('contain',' Looking for a new manufacturer ')
            .and ('contain' ,' Replacing an existing manufacturer ')
            .and ('contain', ' No suppliers for required expertise  ')
            .and ('contain', ' Benchmarking ')
            .and ('contain', ' Diversifying my supply chain ')
            .and ('contain', ' A private request ')
            .and ('contain', ' Looking for expertise ')
            .and ('contain', ' Other ');
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
            .and ('contain', ' DIN 4113 ')
            .and ('contain', ' DIN 6701 ')
            .and ('contain', ' DIN EN 1090 ')
            .and ('contain', ' DIN EN ISO 3834 ')
            .and ('contain', ' EN 15085 ')
            .and ('contain', ' EN 9100 ')
            .and ('contain', ' EN ISO 13485 ')
            .and ('contain', ' FFL Class 10 ')
            .and ('contain', ' FFL Class 6 ')
            .and ('contain', ' FFL Class 7 ')
            .and ('contain', ' IATF 16949 ')
            .and ('contain', ' ISO 14001 ')
            .and ('contain', ' ISO 9001:2008 ')
            .and ('contain', ' ISO 9001:2015 ')
            .and ('contain', ' ISO-TS 16949:2002 ')
            .and ('contain', ' ISO-TS 16949:2009 ')
            .and ('contain', ' JAR 145 ')
            .and ('contain', ' OHSAS 18000 ')
            .and ('contain', ' PART 145 ')
            .and ('contain', ' Part 21/G ')
            .and ('contain', ' QSF-A ')
            .and ('contain', ' QSF-B ')
            .and ('contain', ' SA 8000 ')
            .and ('contain', ' VDA 6.1 ')
            .and ('contain', ' VDA 6.2 ')
            .and ('contain', ' VDA 6.4 ')
            .and ('contain', ' Others ')
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
            .and ('contain', ' Automotive ')
            .and ('contain', ' Construction and real estate ')
            .and ('contain', ' Chemical industry ')
            .and ('contain', ' Electrotechnical industry ')
            .and ('contain', ' Hydraulic and pneumatic industry ')
            .and ('contain', ' Infrastructure and energy ')
            .and ('contain', ' Installation technology and construction ')
            .and ('contain', ' Boiler, container and tank construction ')
            .and ('contain', ' Plastic and Mold technology ')
            .and ('contain', ' Aerospace industry ')
            .and ('contain', ' Machine and equipment construction ')
            .and ('contain', ' Medical and pharmaceutical industry ')
            .and ('contain', ' Mining and tunnel engineering ')
            .and ('contain', ' Military engineering ')
            .and ('contain', ' Precision technology and mechanical engineering ')
            .and ('contain', ' Product development and R&D ')
            .and ('contain', ' Ship-building ')
            .and ('contain', ' Service and maintenance ')
            .and ('contain', ' Railway and rail vehicle industry ')
            .and ('contain', ' Packaging industry ')
            .and ('contain', ' Manufacture of machine tools ')
            .and ('contain', ' Food industry / Food ')
            .and ('contain', ' Others ')
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
            .and ('contain' ,' ?? 0,001 ')
            .and ('contain', ' ?? 0,005 ')
            .and ('contain', ' ?? 0,01 ')
            .and ('contain', ' ?? 0,02 ')
            .and ('contain', ' ?? 0,05 ')
            .and ('contain', ' ?? 0,1 ')
            .and ('contain', ' ?? 0,15 ')
            .and ('contain', ' ?? 0,2 ')
            .and ('contain', ' ?? 0,3 ')
            .and ('contain', ' ?? 0,5 ')
            .and ('contain', ' ?? 0,8 ')
            .and ('contain', ' ?? 1 ')
            .and ('contain', ' ?? 2 ')
            .and ('contain', ' ?? 5 ')
            .and ('contain', ' ?? 10 ')
            .and ('contain', ' > 10 ')

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
            .scrollIntoView()
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
            .click({force:true});
        cy.get('mat-option')
            .eq(0)
            .should('contain','Nikos  Chalkos')
            .click({force:true});
    }
// Check all titles. ROOT
   selectDeliveryCondition(){
        cy.get ('mat-select[formcontrolname="deliveryCondition"]')
            .click({force:true});
        cy.get('mat-option')
            .should('contain',' Cost and freight (CFR)')
            .and ('contain', ' Cost insurance and freight (CIF)')
            .and ('contain',' Carriage and insurance paid to (CIP)')
            .and('contain', ' Carriage paid to (CPT)')
            .and ('contain', ' Delivered at place (DAP)')
            .and ('contain', ' ROOT.DELIVERED_AT_TERMINAL')
            .and ('contain' ,' Delivered duty paid (DDP)')
            .and ('contain' , ' Ex works (EXW)')
            .and ('contain' , ' Free alongside ship (FAS)')
            .and ('contain' , ' Free carrier (FCA)')
            .and ('contain' , ' Free on board (FOB)')
            .and ('contain' , ' Others');
    }

    selectContact(){
        cy.get ('mat-select[formcontrolname="contactUser"]')
            .scrollIntoView()
            .click({force:true});
        cy.get('mat-option')
            .should('have.value','');

    }


    selectMaterialMetal(){
        cy.get(this.material)
            .eq(0)
            .should('contain',' Metal')
            .click({force:true});
    }
    selectMaterialPlastic(){
        cy.get(this.material)
            .eq(1)
            .should('contain',' Plastic')
            .click({force:true});
    }

    selectMaterialWood(){
        cy.get(this.material)
            .eq(2)
            .should('contain',' Wood')
            .click({force:true});
    }

    selectMaterialOthers(){
        cy.get(this.material)
            .eq(3)
            .should('contain',' Others')
            .click({force:true});
    }



    selectTenderArea(){
        cy.xpath('//span[contains(text(),\'Belgium, England, Germany, Ireland, The Netherland\')]')
            .should('contain', 'Belgium, England, Germany, Ireland, The Netherlands, Northern Ireland, Scotland, Wales')

    }



    contactPreferences(){
        cy.get('mat-select[formcontrolname="contactPreference"]')
            .click();
        cy.get('mat-option')

            .should('contain','Only through Tech2B')
            .and ('contain', ' Also through Email ')
            .and ('contain', ' Also through Phone ');


    }
    contactPreferencesAlsoEmail(){
        cy.get('mat-select[formcontrolname="contactPreference"]')
            .click({force:true});
        cy.get('#mat-option-17')
            .should('contain',' Also through Email ')
           .click({ force:true});
    }

    contactPreferencesAlsoPhone(){
        cy.get('mat-select[formcontrolname="contactPreference"]')
            .click( {force:true});
        cy.get('#mat-option-18')
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
            .scrollIntoView()
            .should ('contain' , 'MatchMaker');
    }

// Engineer block
    selectCategoryText(){
        cy.xpath(this.selectCategory)
            .should ('contain' , 'Please select the categories below that apply to your application');
    }

    selectCategoryEngineering(){
        cy.get(this.categoryChiplist)
            .eq(0)
            .should ('contain' , ' Engineering')
            .click({force:true});
    }

    selectCategoryTechnologies(){
        cy.get(this.categoryChiplist)
            .eq(1)
            .should ('contain' , ' Technologies')
            .click({force:true});
    }

    selectCategoryElectricalEngineering(){
        cy.get(this.categoryChiplist)
            .eq(3)
            .should ('contain' , ' Electrical engineering')
            .click({force:true});
    }

    selectCategoryTransport(){
        cy.get(this.categoryChiplist)
            .eq(4)
            .should ('contain' , ' Transport')
            .click({force:true});
    }

    selectCategorySoftware(){
        cy.get(this.categoryChiplist)
            .eq(5)
            .should ('contain' , ' Software')
            .click({force:true});
    }

    selectCategoryOthers(){
        cy.get(this.categoryChiplist)
            .eq(6)
            .should ('contain' , ' Others')
            .click({force:true});
    }


    selectCategoryArticles(){
        cy.get(this.categoryChiplist)
            .eq(7)
            .should ('contain' , ' Articles')
            .click({force:true});
    }

    selectCategorySurfaceTreatment(){
        cy.get(this.categoryChiplist)
            .eq(2)
            .should ('contain' , ' Surface treatment')
            .click({force:true});
    }



}
export const suppleDemandElements = new SuppleDemandElements();