describe('Webpage visit', () => {

  beforeEach(() => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      movies: [
        {
          id: 539885,
          poster_path: 'https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg',
          backdrop_path: 'https://image.tmdb.org/t/p/original//54yOImQgj8i85u9hxxnaIQBRUuo.jpg',
          title: 'Ava',
          average_rating: 5.111111111111111,
          release_dates: '2020-07-02'
        },
        {
          id: 581392,
          poster_path: 'https://image.tmdb.org/t/p/original//sy6DvAu72kjoseZEjocnm2ZZ09i.jpg',
          backdrop_path: 'https://image.tmdb.org/t/p/original//gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg',
          title: 'Peninsula',
          average_rating: 7,
          release_date: '2020-07-15'
        },
        {
          id: 726739,
          poster_path: 'https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg',
          backdrop_path: 'https://image.tmdb.org/t/p/original//t22fWbzdnThPseipsdpwgdPOPCR.jpg',
          title: 'Cats & Dogs 3: Paws Unite',
          average_rating: 7.4,
          release_date: '2020-10-02'
        }
      ],
    }).visit('http://localhost:3000');
  });

  it('Should display the home URL when page loads', () => {
    cy.contains('Rancid Tomatillos');
  });

  it('Should render App with fetched data', () => {
    cy.get('.movies-container').contains('Ava');
    cy.get('.movies-container').contains('Peninsula');
    cy.get('.movies-container').contains('Cats & Dogs 3: Paws Unite');
    cy.contains('Search');
  });
});
