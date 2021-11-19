
describe('Freshworks',()=>{
    it('Freshworks Navigation',()=>{

        cy.visit('https://www.freshworks.com/')
        cy.contains('Platform')
        cy.get('body > header:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > span:nth-child(1)').click()
        cy.get('body > header:nth-child(1) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > ul:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > a:nth-child(1) > li:nth-child(1)').click()
        cy.url().should('include','/analytics/')
        cy.get('body > section:nth-child(4) > div:nth-child(1) > h2:nth-child(2)')
        .should('be.visible')
        .and('contain','lifecycle')
        .and('have.length', 1)
        cy.get("ul[class='footer-nav'] li")
        .should('be.visible')
        .should('have.length','37')
    
    })
})