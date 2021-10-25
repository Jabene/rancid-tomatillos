describe('Popup', () => {

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
        }
      ]
    })
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/539885', {
      movie: {
        id: 539885,
        title: "Ava",
        poster_path: "https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original//54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
        release_date: "2020-07-02",
        overview: "A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.",
        genres: [
            "Action",
            "Crime",
            "Drama",
            "Thriller"
        ],
        budget: 0,
        revenue: 152812,
        runtime: 96,
        tagline: "Kill. Or be killed.",
        average_rating: 5.142857142857143
      }
    }).visit('http://localhost:3000');
  })

  it('Should display a popup when a movie is clicked', () => {
    cy.get('#539885').click()
    cy.get('.popup').contains('Ava')
  })

  it('Should be able to close a popup', () => {
    cy.get('#539885').click()
    cy.get('.popup-close').click()
    cy.get('.movies-container').should('have.length', 1)
  })
})
