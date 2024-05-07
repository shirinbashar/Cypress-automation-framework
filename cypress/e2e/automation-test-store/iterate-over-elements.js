/// <reference types= "cypress" />
/// <reference types= "@cypress/xpath" />

describe("Iterate over elements", () => {
    it("Log information of all haircare products", () => {
        //Cypress Code
        //Cypress Code
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        cy.get('ul>li').each(($el, index, $list) => {
           
        })
    });
    it("Add specific product to basket", () => {
        //Cypress Code
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()




    });













})