describe('Tugas4', function(){
    beforeEach(() => {
        cy.urlday4()
    })
    it('BeliGadget', function(){
            cy.get('#login2').should('be.visible').click()
            // cy.wait(1000)
            cy.get('#loginusername').type('dojo-jaeger', {force:true}).should('have.value','dojo-jaeger').should('be.visible')
            // cy.wait(1000)
            cy.get('#loginpassword').type('dojo-jaeger', {force:true}).should('have.value','dojo-jaeger').should('be.visible')
            // cy.wait(1000)
            cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
            // cy.wait(1000)
            // cy.get('.confirm').should('be.visible')
            cy.get('#nameofuser').should('be.visible');
            // cy.wait(1200)
            cy.contains('HTC One M9',{force:true}).click()
            cy.wait(2000)
            cy.get('.col-sm-12 > .btn',{force:true}).click()
            cy.wait(2000)
            cy.get('.active > .nav-link').should('be.visible').click()
            cy.wait(2000)
            cy.contains('Laptops').click()
            cy.contains('Dell i7 8gb',{force:true}).click()
            cy.contains('Add to cart').should('be.visible').click()
            cy.get('.active > .nav-link').should('be.visible').click()
            cy.contains('Monitors').click()
            cy.contains('Apple monitor 24',{force:true}).click()
            cy.get('.col-sm-12 > .btn').should('be.visible').click()
            cy.get('#cartur').should('be.visible').click()
            cy.wait(2000)
            cy.get('.col-lg-1 > .btn').should('be.visible').click()
            cy.get('#name').type('Jaeger', {force:true}).should('be.visible').should('have.value','Jaeger')
        // cy.wait(1000)
            cy.get('#country').type('Kuvukiland',{force:true}).should('be.visible').should('have.value','Kuvukiland')
            cy.wait(1000)
            cy.get('#city').type('Aisen', {force:true}).should('be.visible').should('have.value','Aisen')
        // cy.wait(1000)
            cy.get('#card').type('00011000011', {force:true}).should('be.visible').should('have.value','00011000011')
        // cy.wait(1000)
            cy.get('#month').type('April', {force:true}).should('be.visible').should('have.value','April')
        // cy.wait(1000)
            cy.get('#year').type('2023', {force:true}).should('have.value','2023')
            cy.wait(1000)
            cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force:true})
            cy.wait(1000)
            cy.get('.confirm').click({force:true})
            cy.wait(1000)
    })  
    })  
