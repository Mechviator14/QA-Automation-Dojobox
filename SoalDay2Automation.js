describe('kumpulan test case', function (){
    it('tc-1', function(){
      cy.visit('https://demoqa.com/automation-practice-form')
      cy.get('#firstName').type('Ezra')
      cy.get('#lastName').type('Paramatatya')
      cy.get('#userEmail').type('ezra.mufa@gmail.com')
      cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
      cy.get('#userNumber').type('08111888111')
      cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
    //   cy.get('[value="Music"]').check()
      cy.get('#currentAddress').type('Jakarta Timur')
      cy.get('#submit').click()

})
}) 
Cypress.on('uncaught:exception', (err, runnable)=>{
    return false
})
