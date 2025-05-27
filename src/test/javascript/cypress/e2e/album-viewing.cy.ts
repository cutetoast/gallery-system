describe('Album Viewing', () => {
  beforeEach(() => {
    cy.visit('/gallery');
  });

  it('should sort albums by event', () => {
    cy.get('[data-cy="sort-select"]').select('Event');
    cy.get('[data-cy="album-grid"]').should('be.visible');
    // Add more assertions
  });

  it('should sort albums by date', () => {
    cy.get('[data-cy="sort-select"]').select('Date');
    cy.get('[data-cy="album-grid"]').should('be.visible');
    // Add more assertions
  });
});
