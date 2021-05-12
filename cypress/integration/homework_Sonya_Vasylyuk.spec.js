/// <reference types="cypress" />
 
it('User must be able to log in(with valid data)', () => {
  cy.visit('https://the-internet.herokuapp.com/login');
  cy.get('#username').type('tomsmith').should('have.value', 'tomsmith');
  cy.get('#password').type('SuperSecretPassword!').should('have.value', 'SuperSecretPassword!');
  cy.get('.fa').click();
  cy.get('#flash').should('contain', 'You logged into a secure area!');

  cy.wait(1500);
})

it('User must be able to log out', () => {
  cy.visit('https://the-internet.herokuapp.com/login');
  cy.get('#username').type('tomsmith').should('have.value', 'tomsmith');
  cy.get('#password').type('SuperSecretPassword!').should('have.value', 'SuperSecretPassword!');
  cy.get('.fa').click();

  cy.wait(1500);
  
  cy.get('.icon-2x').click();
  cy.get('h2').should('contain', 'Login');
})

it('User must be able to log in(with invalid data)', () => {
  cy.visit('https://the-internet.herokuapp.com/login');
  cy.get('#username').type('tomsmith1234').should('have.value', 'tomsmith1234');
  cy.get('#password').type('SuperSecretPassword!1234').should('have.value', 'SuperSecretPassword!1234');
  cy.get('.fa').click();
  cy.get('#flash').should('contain', 'Your username is invalid!');
})