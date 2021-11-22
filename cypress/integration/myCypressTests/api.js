describe('API Suite',()=>{
    it('Get',()=>{

        cy.request({
            url:'https://gorest.co.in/public/v1/users',
            method:'GET',

        }).then((res)=>{
            expect(res.status).to.be.eq(200)
            expect(res.body.meta.pagination.pages).to.be.eq(84)
        }

        )

    })
})