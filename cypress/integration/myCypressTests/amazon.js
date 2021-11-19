describe('Amazon Search',()=>{
    it('Amazon Search Case',()=>{

        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').should('be.visible').type('Macbook Pro')
        cy.get('.s-suggestion').contains('charger').click({force: true})
    })
})