/// <reference types= "cypress" />
/// <reference types= "@cypress/xpath" />

describe("Test Contact Us form via Automation Test Store",() => {
    it("Should be able to submit a successful submission via contact us form", ()=> {
        //Cypress Code
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href$='contact']").click();
        //cy.xpath("//a[contains(@href, 'contact')]").click()

        cy.get('#ContactUsFrm_first_name').type("Joe")
        cy.get('#ContactUsFrm_email').type("joe.doe@gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("Hello, I am new to automation testing!")
        cy.get("button[title='Submit']").click();



        
      

    });
    // it("Should not be able to submit a successful submission via contact us form as all fields are required", ()=> {
        //Cypress Code
        //cy.visit("https://www.automationteststore.com/")
        
    //});

})