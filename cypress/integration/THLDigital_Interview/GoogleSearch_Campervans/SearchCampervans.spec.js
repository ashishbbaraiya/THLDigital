Given ('I navigate to Google',()=>{
      cy.visit('https://www.google.co.nz');
})

When ('I search for \'Maui\'',()=>{
      cy.get('input[name=q]').type("Maui")
      cy.get('input[name=q]').type('{Enter}') 
})

Then ('I should have a link ‘maui-rentals.com’ in the returns results',()=>{
    cy.get('a').should('include.text','https://www.maui-rentals.com','be.visible')
    // cy.contains('https://www.maui-rentals.com')
})

When ('I search for \'Britz\'',()=>{
    cy.get('input[name=q]').type("britz")
    cy.get('input[name=q]').type('{Enter}') 
})

Then ('I should have a link ‘britz.com’ in the returns results',()=>{
  cy.get('a').should('include.text','https://www.britz.com','be.visible')
  // cy.contains('https://www.britz.com')
})