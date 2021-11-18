describe('Logging into Mojo Staging',()=>{
    it('Mojo Login',()=>{
        cy.visit('https://mojo2.staging.joveo.com')
        cy.get("input[type='email']").type('ripple@joveo.com')
        cy.get("input[type='password']").type('ripple')
        cy.get("button[type='submit']").click()
        cy.url().should('include','/clients')
        })
})