export class CompaniesElements {


    // Filters
    CompaniesViewMode = '#mat-expansion-panel-header-15 > .mat-content > .mat-expansion-panel-header-title';
    CompaniesButtonCard = '#mat-button-toggle-1-button';
    CompaniesButtonMap = '#mat-button-toggle-2-button';
    CompaniesCheckPartners = '#mat-checkbox-1 > .mat-checkbox-layout';
    CompaniesCategoriesTitle = '#mat-expansion-panel-header-0 > .mat-content > .mat-expansion-panel-header-title';
    CompaniesLastActiveTitle = '#mat-expansion-panel-header-1 > .mat-content > .mat-expansion-panel-header-title';
    CompaniesDistanceTitle = '#mat-expansion-panel-header-2 > .mat-content > .mat-expansion-panel-header-title';
    CompaniesCityTitle = '#mat-expansion-panel-header-3 > .mat-content > .mat-expansion-panel-header-title';
    CompaniesCountriesTitle = '#mat-expansion-panel-header-4 > .mat-content > .mat-expansion-panel-header-title';
    CompaniesMaterialsTitle = '#mat-expansion-panel-header-5 > .mat-content > .mat-expansion-panel-header-title';
    CompaniesIndustriesTitle = '#mat-expansion-panel-header-6 > .mat-content > .mat-expansion-panel-header-title';
    CompaniesMembershipsTitle = '#mat-expansion-panel-header-7 > .mat-content > .mat-expansion-panel-header-title';
    CompaniesCertificateTitle = '#mat-expansion-panel-header-8 > .mat-content > .mat-expansion-panel-header-title';
    CompaniesReviewScoreTitle = '#mat-expansion-panel-header-9 > .mat-content > .mat-expansion-panel-header-title';
    CompaniesCompanyTypeTitle = '#mat-expansion-panel-header-10 > .mat-content > .mat-expansion-panel-header-title';
    CompaniesEmployeesTitle = '#mat-expansion-panel-header-11 > .mat-content > .mat-expansion-panel-header-title';
    CompaniesRelationshipTitle = '#mat-expansion-panel-header-12 > .mat-content > .mat-expansion-panel-header-title';
    CompaniesProductionPlanningTitle = '#mat-expansion-panel-header-13 > .mat-content > .mat-expansion-panel-header-title';
    CompaniesProductionSizeTitle = '#mat-expansion-panel-header-14 > .mat-content > .mat-expansion-panel-header-title';
    CompaniesMembership ='#mat-checkbox-375 > .mat-checkbox-layout > .mat-checkbox-label > .mat-tooltip-trigger';
    CompaniesCompanyTypeSelf='#mat-checkbox-329 > .mat-checkbox-layout > .mat-checkbox-label > .mat-tooltip-trigger';

// Check Company's form
    ClickOnCompany = '[href="/companies/T2B_C09411273/Chalkos%20Technology%20BV"]';
    CheckDescription = '.nw-editor__res';
    CheckEmail = ':nth-child(1) > .general-value';
    CheckPhone = '.t2b-widget-container > :nth-child(2) > .general-value';
    CheckLastActive = ':nth-child(3) > .general-value';
    CheckActiveSince = ':nth-child(4) > .general-value';
    CheckConnections = ':nth-child(5) > .general-value';
    CheckType = ':nth-child(6) > .general-value';
    CheckEmployees = ':nth-child(7) > .general-value';
    CheckBankAccountNumber = ':nth-child(8) > .general-value';
    CheckCompanyNumber = ':nth-child(9) > .general-value';
    CheckVATNumber = ':nth-child(10) > .general-value';
    CheckYearOfEstablishment = ':nth-child(11) > .general-value';
    CheckProductionSize = ':nth-child(12) > .general-value';
    CheckProductionPlanning = ':nth-child(13) > .general-value';

    CheckTitleDescription = '#company-details-description > .t2b-widget-title';
    CheckTitleEmail = ':nth-child(1) > .general-key';
    CheckTitlePhone = ':nth-child(2) > .general-key';
    CheckTitleLastActive = ':nth-child(3) > .general-key';
    CheckTitleActiveSince = ':nth-child(4) > .general-key';
    CheckTitleConections = ':nth-child(5) > .general-key';
    CheckTitleType = ':nth-child(6) > .general-key';
    CheckTitleEmployees = ':nth-child(7) > .general-key';
    CheckTitleBankAccountNumber = ':nth-child(8) > .general-key';
    CheckTitleCompanyNumber = ':nth-child(9) > .general-key';
    CheckTitleTitleVATNumber = ':nth-child(10) > .general-key';
    CheckTitleYearOfEstablishment = ':nth-child(11) > .general-key';
    CheckTitleProductionSize = ':nth-child(12) > .general-key';
    CheckTitleProductionPlanning = ':nth-child(13) > .general-key';




    checkProductionSize(){

        cy.get('#cdk-accordion-child-14')
            .should('contain','Does not apply')
            .and ('contain' ,'Prototypes')
            .and ('contain', 'Single Pieces')
            .and ('contain', 'Large Series')
            .and ('contain', 'Series Work')
            .and ('contain', 'Urgent Work')
            .and ('contain', 'Others')

    };

    checkCaregories(){

        cy.get('#cdk-accordion-child-0')
           .should('contain',' Engineering')
           .and ('contain' ,' Technologies')
           .and('contain',' Surface treatment')
           .and('contain',' Electrical engineering')
           .and('contain',' Transport')
           .and('contain',' Software')
           .and('contain',' Others')
           .and('contain',' Articles');

    };

    checkLastActive(){

        cy.get('#cdk-accordion-child-1')
          .should('contain',' Today ')
          .and('contain',' This week ')
          .and('contain',' This month ')
          .and('contain',' 3 months ago ')
          .and ('contain' ,' 6 months ago')
          .and ('contain' ,' More than 1 year ')
          .and ('contain' ,' No preference ');

    };

    checkMaterials(){

        cy.get('#cdk-accordion-child-5')
           .should('contain',' Metal')
           .and('contain',' Plastic')
           .and('contain',' Wood')
           .and('contain',' Others');

    };

    checkCountries(){

        cy.get('#cdk-accordion-child-4')
           .should('contain',' The Netherlands ')
           .and('contain',' England ')
           .and('contain',' Germany ')
           .and ('contain' ,' Belgium ')
           .and ('contain' ,' Ireland ')
           .and ('contain' ,' Northern Ireland ')
           .and ('contain' ,' Scotland ')
           .and ('contain' ,' Wales ');

    };


    checkIndustries(){
       cy.get('#cdk-accordion-child-6 > .mat-expansion-panel-body > .mt-8 > .mat-focus-indicator > .mat-button-wrapper')
            .click({force:true});
       cy.get('#cdk-accordion-child-6')
            .should('contain','Drive and gear technology')
            .and ('contain' ,'Additive manufacturing')
            .and ('contain', 'Agro-industry')
            .and ('contain', 'Automotive')
            .and ('contain', 'Construction and real estate')
            .and ('contain', 'Chemical industry')
            .and ('contain', 'Electrotechnical industry')
            .and ('contain', 'Hydraulic and pneumatic industry')
            .and ('contain', 'Infrastructure and energy')
            .and ('contain', 'Installation technology and construction')
            .and ('contain', 'Boiler, container and tank construction')
            .and ('contain', 'Plastic and Mold technology')
            .and ('contain', 'Aerospace industry')
            .and ('contain', 'Machine and equipment construction')
            .and ('contain', 'Medical and pharmaceutical industry')
            .and ('contain', 'Mining and tunnel engineering')
            .and ('contain', 'Military engineering')
            .and ('contain', 'Precision technology and mechanical engineering')
            .and ('contain', 'Product development and R&D')
            .and ('contain', 'Ship-building')
            .and ('contain', 'Service and maintenance')
            .and ('contain', 'Railway and rail vehicle industry')
            .and ('contain', 'Packaging industry')
            .and ('contain', 'Manufacture of machine tools')
            .and ('contain', 'Food industry / Food')
            .and ('contain', 'Others')
   };

    checkProductionPlanning() {

        cy.get('#cdk-accordion-child-13')
            .should('contain', 'Does not apply')
            .and('contain', 'Make-to-Stock')
            .and('contain', 'Make-to-Order')
            .and('contain', 'Engineer-to-Order')
            .and('contain', 'Others')
    };

        checkParamCertificate(){
            cy.get('#cdk-accordion-child-8 > .mat-expansion-panel-body > .mt-8 > .mat-focus-indicator > .mat-button-wrapper')
                .click({force:true});

            cy.get('#cdk-accordion-child-8')
                .should('contain','AS9100')
                .and ('contain' ,'DIN 18800-7:2008 Class A-C')
                .and ('contain', 'DIN 18800-7:2008 Class D/E')
                .and ('contain', 'DIN 4113')
                .and ('contain', 'DIN 6701')
                .and ('contain', 'DIN EN 1090')
                .and ('contain', 'DIN EN ISO 3834')
                .and ('contain', 'EN 15085')
                .and ('contain', 'EN 9100')
                .and ('contain', 'EN ISO 13485')
                .and ('contain', 'FFL Class 10')
                .and ('contain', 'FFL Class 6')
                .and ('contain', 'FFL Class 7')
                .and ('contain', 'IATF 16949')
                .and ('contain', 'ISO 14001')
                .and ('contain', 'ISO 9001:2008')
                .and ('contain', 'ISO 9001:2015')
                .and ('contain', 'ISO-TS 16949:2002')
                .and ('contain', 'ISO-TS 16949:2009')
                .and ('contain', 'JAR 145')
                .and ('contain', 'OHSAS 18000')
                .and ('contain', 'PART 145')
                .and ('contain', 'Part 21/G')
                .and ('contain', 'QSF-A')
                .and ('contain', 'QSF-B')
                .and ('contain', 'SA 8000')
                .and ('contain', 'VDA 6.1')
                .and ('contain', 'VDA 6.2')
                .and ('contain', 'VDA 6.4')
                .and ('contain', 'Others')
        };

}
export const companiesElements = new CompaniesElements();