/// <reference types= "cypress" />
/// <reference types= "@cypress/xpath" />

describe("Inspect Automation Test store items using chain of commands",() => {
    it("Click on the first item using item header", ()=> {
        //Cypress Code
        cy.visit("https://www.automationteststore.com/")
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()

    });
    it("Click on the first item using item text", ()=> {
        //Cypress Code
        cy.visit("https://www.automationteststore.com/")
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()

    });
    it.only("Click on the first item using item text", ()=> {
        //Cypress Code
        cy.visit("https://www.automationteststore.com/")
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText) {
            console.log("Selected the following item: " + itemHeaderText.text())
        })
        console.log("Test123")

    });
    it("Click on the first item with index", ()=> {
        //Cypress Code
        cy.visit("https://www.automationteststore.com/")
        cy.get('.fixed_wrapper').find('.prdocutname').eq(1).click()

    });

})