describe('Cypress test', () => {
  let user;

    before(function () {
        cy.task("freshUser").then((object) => {
            user = object;
        });
    });

      it('clicks the link "type"', () => {
        cy.visit('https://react-redux.realworld.io/#/login?_k=zhqe49');
        cy.get(':nth-child(1) > .form-control').type('rfrfrfrfrtyur@gmail.com').should('have.value', 'rfrfrfrfrtyur@gmail.com');
        cy.get(':nth-child(2) > .form-control').type('12345678').should('have.value', '12345678');
        cy.get('.btn').click();
        cy.get(':nth-child(4) > .nav-link').should('contain', 'r56789')
      })
    
      it('clicks the link "type"', () => {
        cy.visit('https://react-redux.realworld.io/#/register?_k=mnjkk0');
        cy.get(':nth-child(1) > .form-control').type(user.username).should('have.value', user.username);
        cy.get(':nth-child(2) > .form-control').type(user.email).should('have.value', user.email);
        cy.get(':nth-child(3) > .form-control').type('12345678').should('have.value', '12345678');
        cy.get('.btn').click();
        cy.get(':nth-child(4) > .nav-link').should('contain', user.username);
      })
})