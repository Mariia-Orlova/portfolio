export class GlobalMenu {

   logoDisplay ='.logo-text';
   navBarVerticalMenu = '.navbar-content';
   navSuppleAndDemandLink = '//span[contains(text(),\'Supply and demand\')]';
   navLinkActive = '[class="nav-link active accent"]';
   navLink = '[class="nav-link"]';
   navCompaniesLink = '//span[contains(text(),\'Companies\')]';
   navNewsLink = '//span[contains(text(),\'News\')]';
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
          //.find (this.navSuppleAndDemandLink)
          .should ('not.have.length',0 )
          .and ('have.length',12 );
   }

   checkNavSuppleAndDemandLink(){
      cy.xpath (this.navSuppleAndDemandLink)
         // .eq(0)
          .should ('be.visible')
          .and ('contain' , 'Supply and demand')

      cy.get (this.navLink)
          .eq(0)
          .should ('have.attr','href', '/supply-demand');
   }

   checkNavCompaniesLink(){
      cy.xpath (this.navCompaniesLink)
          .should ('be.visible')
          .and ('contain' , 'Companies')

      cy.get (this.navLink)
         .eq(1)
         .should ('have.attr','href', '/companies');
   }


   checkNavNewsLink(){
      cy.xpath(this.navNewsLink)
          .should('be.visible')
          .and('contain', 'News')

     cy.get (this.navLink)
          .eq(2)
          .should ('have.attr','href', '/news');
   }

   checkNavDashboardLink(){
      cy.xpath (this.navDashboardLink)
          .should ('be.visible')
          .and ('contain' , 'Dashboard')

      cy.get (this.navLinkActive)
          .should ('have.attr','href', '/dashboard');
   }

   checkNavRequestLink(){
      cy.xpath (this.navRequestLink)
          .should ('be.visible')
          .and ('contain' , 'Request')

      cy.get (this.navLink)
          .eq(3)
          .should ('have.attr','href', '/requests');
   }

   checkNavQuotation(){
      cy.xpath (this.navQuotation)
          .should ('be.visible')
          .and ('contain' , 'Quotation')

      cy.get (this.navLink)
          .eq(4)
          .should ('have.attr','href', '/quotations');
   }

     checkNavOrderLink(){
      cy.xpath (this.navOrderLink)
          .should ('be.visible')
          .and ('contain' , 'Order')

       cy.get (this.navLink)
          .eq(5)
          .should ('have.attr','href', '/orders');
   }

   checkNavInvoiceLink(){
      cy.xpath (this.navInvoiceLink)
          .should ('be.visible')
          .and ('contain' , 'Invoice')

      cy.get (this.navLink)
          .eq(6)
          .should ('have.attr','href', '/invoices');
   }


   checkNavMessageLink(){
      cy.xpath (this.navMessageLink)
          .should ('be.visible')
          .and ('contain' , 'Messages')

      cy.get (this.navLink)
          .eq(7)
          .should ('have.attr','href', '/messages');
   }

   checkNavMyCompanyLink(){
      cy.xpath (this.navMyCompanyLink)
          .should ('be.visible')
          .and ('contain' , 'My company')

      cy.get (this.navLink)
          .eq(8)
          .should ('have.attr','href', '/my-company');
   }

   checkNavFilesLink(){
      cy.xpath (this.navFilesLink)
          .should ('be.visible')
          .and ('contain' , 'Files')

      cy.get (this.navLink)
          .eq(9)
          .should ('have.attr','href', '/files');
   }

   checkNavProductsLink(){
      cy.xpath (this.navProductsLink)
          .should ('be.visible')
          .and ('contain' , 'Products')

      cy.get (this.navLink)
          .eq(10)
          .should ('have.attr','href', '/products');
   }

}

export const globalMenu = new GlobalMenu();