/// <reference types="Cypress" />
describe('automationstore',()=>{
    it('store',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').first().click()
        cy.get('.checkbox').check().parent().should('have.class','checked')
        
    })
})