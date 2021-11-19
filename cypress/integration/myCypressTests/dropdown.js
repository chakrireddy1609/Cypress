describe('Dropdown',()=>{
    it('dropdown',()=>{
        cy.visit('https://www.orangehrm.com/hris-hr-software-demo/')
        cy.get('#Form_submitForm_Country').select('India')
        cy.get('#Form_submitForm_State').select('Bihar').should('have.value','Bihar')
    })
})