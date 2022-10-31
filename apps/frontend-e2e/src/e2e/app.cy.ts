import { getGreeting } from '../support/app.po';

describe('frontend', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
     cy.get('h1').should('contain.text', 'welcome to angular testing');
  });
}); // end of desc
