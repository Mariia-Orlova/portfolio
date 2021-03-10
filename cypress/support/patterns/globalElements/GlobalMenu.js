export class GlobalMenu {

   logoDisplay ='.logo-text';
   navBarVerticalMenu = '.navbar-content';
   navSuppleAndDemandLink = '//span[contains(text(),\'Supply and demand\')]';
   navCompaniesLink = '//span[contains(text(),\'Companies\')]';
   navDashboardLink ='//span[contains(text(),\'Dashboard\')]';
   navRequestLink ='//span[contains(text(),\'Request\')]';
   navQuotation= '//span[contains(text(),\'Quotation\')]';
   navOrderLink = '//span[contains(text(),\'Order\')]';
   navInvoiceLink ='//span[contains(text(),\'Invoice\')]';
   navMessageLink ='//span[contains(text(),\'Messages\')]';
   navMyCompanyLink = '//span[contains(text(),\'My company\')]';
   navFilesLink ='//span[contains(text(),\'Files\')]';
   navProductsLink ='//span[contains(text(),\'Products\')]';



   checklogo(){
      cy.get (this.logoDisplay)
          .should ('be.visible')
          .and ('have.attr' ,'src', 'assets/images/logos/t2b-logo-text.svg');
      };

   checkNavBarVerticalMenuBlock (){
      cy.get (this.navBarVerticalMenu)
          .should ('be.visible')
          .find('[class="nav-link-title"]')
          .should ('not.have.length',0 )
          .and ('have.length',11 );
   }

   checkNavSuppleAndDemandLink(){
      cy.xpath (this.navSuppleAndDemandLink)
          .should ('be.visible')
          .and ('contain' , 'Supply and demand');
   }

   checkNavCompaniesLink(){
      cy.xpath (this.navCompaniesLink)
          .should ('be.visible')
          .and ('contain' , 'Companies');
   }

   checkNavDashboardLink(){
      cy.xpath (this.navDashboardLink)
          .should ('be.visible')
          .and ('contain' , 'Dashboard');
   }

   checkNavRequestLink(){
      cy.xpath (this.navRequestLink)
          .should ('be.visible')
          .and ('contain' , 'Request');
   }

   checkNavQuotation(){
      cy.xpath (this.navQuotation)
          .should ('be.visible')
          .and ('contain' , 'Quotation');
   }

     checkNavOrderLink(){
      cy.xpath (this.navOrderLink)
          .should ('be.visible')
          .and ('contain' , 'Order');

   }

   checkNavInvoiceLink(){
      cy.xpath (this.navInvoiceLink)
          .should ('be.visible')
          .and ('contain' , 'Invoice');

   }


   checkNavMessageLink(){
      cy.xpath (this.navMessageLink)
          .should ('be.visible')
          .and ('contain' , 'Messages');
   }

   checkNavMyCompanyLink(){
      cy.xpath (this.navMyCompanyLink)
          .should ('be.visible')
          .and ('contain' , 'My company');
   }

   checkNavFilesLink(){
      cy.xpath (this.navFilesLink)
          .should ('be.visible')
          .and ('contain' , 'Files');
   }

   checkNavProductsLink(){
      cy.xpath (this.navProductsLink)
          .should ('be.visible')
          .and ('contain' , 'Products');
   }

}

export const globalMenu = new GlobalMenu();