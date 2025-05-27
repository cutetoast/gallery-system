describe('Album Management', () => {
  beforeEach(() => {
    cy.visit('/albums');
  });

  it('should sort albums by event', () => {
    cy.get('[data-cy="sort-select"]').select('Event');
    cy.get('[data-cy="album-list"]').should('be.visible');
    cy.get('[data-cy="album-event-group"]').should('exist');
  });

  it('should sort albums by date', () => {
    cy.get('[data-cy="sort-select"]').select('Date');
    cy.get('[data-cy="album-list"]').should('be.visible');
    cy.get('[data-cy="album-date"]').should('exist');
  });
});
