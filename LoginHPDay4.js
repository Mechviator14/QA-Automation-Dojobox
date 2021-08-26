describe('TugasDay4', function(){
    it('Login', function(){
        cy.urlday4()
        cy.get('#login2').click()
        cy.get('#loginusername').type('dojo-jaeger').should('have.value','dojo-jaeger')
        cy.wait(1000)
        cy.get('#loginpassword').type('dojo-jaeger').should('have.value','dojo-jaeger')
        cy.wait(1000)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    })
})
