/// <reference types= "cypress" />
/// <reference types= "@cypress/xpath" />

describe("Verifying variables, cypress commands, and jquery commands",() => {
    it("Navigating to specific product pages", ()=> {
        //Cypress Code
        cy.visit("https://www.automationteststore.com/")
        //const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        //const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        //makeupLink.click();
        //skincareLink.click();
        
        //Recommended Approach
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()
    });
    it("Navigating to specific product pages", ()=> {
        //Cypress Code
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        //Following code will fail
        //const header=cy.get("h1 .maintext");
        //cy.log(header.text())

        const header=cy.get("h1 .maintext").then(($headerText)=> {
            const headerText=$headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq('Makeup')

            
        })
       
    });
    it("Validate ptoperties of contact us page", ()=> {
        //Cypress Code
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        //Uses cypress commands and chaining
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name')
        // JQuery approach
        cy.contains('#ContactUsFrm','Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')


            //Embedded sommands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
            })
        })


        



       
       
    });



})