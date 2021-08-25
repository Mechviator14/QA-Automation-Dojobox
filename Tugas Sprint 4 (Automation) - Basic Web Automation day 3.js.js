describe('TugasDay3', function(){
    it('Submit Nama & Email',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('#et_pb_contact_name_0').type('Ezra').should('have.value','Ezra')
        cy.get('#et_pb_contact_email_0').type('ezra.mufa@gmail.com').should('have.value','ezra.mufa@gmail.com')
        cy.get('.et_pb_contact_submit').click()
    })
    it('Select Gender', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('[value="female"]').check().should('be.checked')
    })
    it('Checkboxes',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('[value="Bike"]').check().should('be.checked')
        cy.get('[value="Car"]').check().should('be.checked')
    })
    it('Check Audi',function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('select').select('audi').should('have.value','audi')
    })
    it('Click Me Success', function(){
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click()
        cy.get('.entry-title').contains('Button success')
    })
})

    

