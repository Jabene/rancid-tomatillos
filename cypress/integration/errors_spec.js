// describe('Popup', () => {
//
//   beforeEach(() => {
//     cy.intercept({
//       method: 'FETCH',
//       url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
//     }, {
//       statusCode: 404,
//       body: '404 Not Found!',
//       headers: {
//         'x-not-found': 'true',
//         }
//     }).visit('http://localhost:3000')
//   })
//
//
//   it('Should display a message when you have an error during fetch', () => {
//     cy.get('#fetch-error').should('exist')
//   })
// })
