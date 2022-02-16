/// <reference types="cypress" />

describe('TesttSuite', () => {
  it.only('Verify the Title Page', () => {
    // expect(true).to.equal(true)

    // cy.visit('https://fontys.edu/')

    // cy.title().should('eq','Wat ga jij studeren? | Fontys')

    // cy.get('.nav').contains('About us | Fontys University')
  })
  it.only('Verify the Title Page-positive', () => {
    // expect(true).to.equal(true)

    // cy.visit('https://demo.nopcommerce.com/')

    // cy.title().should('eq','nopCommerce demo store')

    // cy.get('.nav').contains('nopCommerce demo store. Books')
  })  
  it.only('Verify the Title Page-Negative', () => {
    // expect(true).to.equal(true)
    cy.visit('https://demo.nopcommerce.com/')
    cy.title().should('eq','nopCommerce demo store')

    /** 
     * CSS Selector

    */
    cy.get('.ico-login')
    cy.get('#small-searchterms')
    cy.get('[type="submit"]').first()
    //cy.get('.button-1 .add-to-cart-button')
  }) 
  it.only('Verify the Title Page', () => {
    // expect(true).to.equal(true)

    // cy.visit('https://google.com/')

    // cy.title().should('eq','Google')

    // cy.get('.nav').contains('')
  })
  it.only('Verify the Title Page', () => {
    // expect(true).to.equal(true)

    // cy.visit('https://food.jumia.com.gh/')

    // cy.title().should('eq','Jumia Food Ghana | Online Food Delivery | Pizzas, Burger, Ghanaian Dishes')

    // cy.get('.nav').contains('Login/Signup')
  })
})
