/// <reference types= "Cypress" />
describe("Test Contact Us form via webdriverUni",() => {
    it("Should be able to submit a successful submission via contact us form", ()=> {
        //Cypress Code
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get('#contact-us').click({force:true})
        //cy.should('eq', "https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type('Shirin')
        cy.get('[name="last_name"]').type('Bashar')
        cy.get('[name="email"]').type('brigidpax@gmail.com')
        cy.get('textarea.feedback-input').type('I am new to this course')
        cy.get('[type="submit"]').click()
        cy.get('h1').contains('Thank You for your Message!')
        cy.wait(500)

    });
    it("Should not be able to submit a successful submission via contact us form as all fields are required", ()=> {
        //Cypress Code
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get('#contact-us').click({force:true})
        //cy.should('eq', "https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type('Shirin')
        cy.get('[name="last_name"]').type('Bashar')
        cy.get('textarea.feedback-input').type('I am new to this course')
        cy.get('[type="submit"]').click()   
    });

})

