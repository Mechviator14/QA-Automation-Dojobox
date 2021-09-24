describe('coba2', function(){
    it('tc-jajal',function(){
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
        cy.get('a[id=btn-make-appointment]').click()
        cy.get('[placeholder=Username]').should('be.visible').should('have.value','John Doe')
        cy.get('[placeholder=Password]').should('be.visible').should('have.value','ThisIsNotAPassword')
        cy.get('input[name=username]').type('John Doe',{force:true}).should('have.value','John Doe')
        cy.get('input[name=password]').type('ThisIsNotAPassword',{force:true}).should('have.value','ThisIsNotAPassword')
        cy.get('button[id=btn-login]').should('be.visible').click()
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center').should('have.value','Hongkong CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').check().should('have.checked')
        cy.get('#radio_program_medicaid').check().should('have.checked')
        cy.get('#txt_visit_date').invoke('val','16/10/1994').should('have.value','16/10/1994')
        cy.get('#txt_comment').type('First Timer',{force:true}).should('have.value','First Timer')
        cy.get('button[id=btn-book-appointment]').should('be.visible').click()
        cy.wait(800)    
        cy.get('#facility').should('have.text','Hongkong CURA Healthcare Center')
        cy.get('#hospital_readmission').should('have.text','Yes')
        cy.get('#program').should('have.text','Medicaid')
        cy.get('#visit_date').should('have.text','16/10/1994')
        cy.get('#comment').should('have.text','First Timer')
        cy.get('.text-center > .btn').should('be.visible').click()
        cy.get('#menu-toggle').click()
        cy.get(':nth-child(6) > a').click()

        
        
    })
})