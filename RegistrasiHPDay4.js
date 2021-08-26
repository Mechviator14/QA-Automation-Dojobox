describe('TugasDay4', function(){
    it('Registrasi', function(){
        cy.urlday4()
        cy.get('#signin2').click()
        cy.get('#sign-username').type('dojo-jaeger').should('have.value','dojo-jaeger')
        cy.wait(1000)
        cy.get('#sign-password').type('dojo-jaeger').should('have.value','dojo-jaeger')
        cy.wait(1000)
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should('have.text','Sign up')
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(1000)
    })
})
