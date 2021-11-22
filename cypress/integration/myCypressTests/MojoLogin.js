describe('Logging into Mojo Staging',()=>{
    it('Mojo Login',()=>{
        cy.visit('https://mojo2.staging.joveo.com')
        cy.get("input[type='email']").type('ripple@joveo.com')
        cy.get("input[type='password']").type('ripple')
        cy.get("button[type='submit']").click()
        cy.url().should('include','/clients')
        cy.get(':nth-child(1) > :nth-child(3) > .m-cell-data > .client-name > div > .title-link').click()
        cy.wait(2000)
        cy.get('.entity__actions > .mat-focus-indicator > .mat-button-wrapper').click()
        cy.get('.campaign-form > .mat-card > :nth-child(1) input').first().type('Campaign 1')
        cy.get('.campaign-form > .mat-card > :nth-child(1) input').last().type('1000')

        })
})