describe('Movie search', () => {
  it('Should display all movies that contain the search keywords in their title', () => {
    cy.get('#search-input')
      .type('Peninsula')
    cy.get('.movies-container').should('have.length', 1)
    cy.get('.movies-container').contains('Peninsula')
  })

  it('Should display all movies in main when the search bar is cleared', () => {
    cy.get('#search-input')
      .clear()
      cy.get('.movies-container').contains('Ava');
      cy.get('.movies-container').contains('Peninsula');
      cy.get('.movies-container').contains('Cats & Dogs 3: Paws Unite');
  })
});
