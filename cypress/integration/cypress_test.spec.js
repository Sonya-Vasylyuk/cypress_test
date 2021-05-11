
  it('clicks the link "type"', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=zhqe49');
    cy.get(':nth-child(1) > .form-control').type('rfrfrfrfrtyur@gmail.com').should('have.value', 'rfrfrfrfrtyur@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('12345678').should('have.value', '12345678');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('contain', 'r56789')
  })
