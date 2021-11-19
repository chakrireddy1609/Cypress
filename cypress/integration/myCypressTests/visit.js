describe('Navigate to Website',()=>{
    it('Mojo Staging',()=>{
        cy.visit('https://mojo2.staging.joveo.com/clients')
        cy.get("input[type='email']").type('ripple@joveo.com')
        cy.get("input[type='password']").type('ripple')
        cy.contains('Forgot Password')
        cy.contains('Forgot Password').click()
        cy.url().should('include','/forgot-password')

        })
})  