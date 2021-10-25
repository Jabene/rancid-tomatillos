import React from 'react';
import Card from '../card/Card.js';
import { Route } from 'react-router-dom'
import '../main/Main.css'
import Popup from '../popup/Popup.js';
function Main({movies, allMovies, videoKeys}) {
  const movieCards = movies.map(movie => {
    return(
      <Card
        key={movie.id}
        movie={movie}
      />
    )
  })
  return (
    <main
      className={window.location.href.length > 22 ? "movies-container-noscroll" : "movies-container"}>
      <Route exact path="/:id" render={({match}) => {
        let matchingMovie = allMovies.find(movie => Number(match.params.id) === movie.id) || {
          id: 0,
          poster_path: '',
          genres: [""],
          rating: '',
          runtime: 0,
          revenue: 0,
          overview: '',
          backdrop_path: '',
          release_date: "",
          title: ''
        }
        let movieKeyData = videoKeys.find(key => Number(match.params.id) === key.id) || {}
        return (videoKeys.find(movie => Number(match.params.id) === movie.id) &&
        <Popup
          currentMovie={matchingMovie}
          movieKeyData={movieKeyData}
        />)
      }}/>
      {movieCards}
    </main>
  )
}
export default Main;
