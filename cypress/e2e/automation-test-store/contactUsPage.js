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
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("Hello, I am new to automation testing!")
        cy.get('button[title="Submit"]').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')



        
      

    });
    // it("Should not be able to submit a successful submission via contact us form as all fields are required", ()=> {
        //Cypress Code
        //cy.visit("https://www.automationteststore.com/")
        
    //});

})