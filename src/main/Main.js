import React from 'react';
import Card from '../card/Card.js';
import { Route } from 'react-router-dom'
import '../main/Main.css'
import Popup from '../popup/Popup.js';

function Main({movies, popupVisable, allMovies}) {
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
      <Route exact path="/:title" render={({match}) => {
        let matchingMovie = allMovies.find(movie => match.params.title === movie.title) || {
          id: 0,
          poster_path: '',
          genres: [''],
          rating: '',
          runtime: 0,
          revenue: 0,
          overview: '',
          backdrop_path: '',
          release_date: "",
          title: ''
        }
        return (movies.find(movie => match.params.title === movie.title) &&
        <Popup
          currentMovie={matchingMovie}
        />)
      }}/>
      {movieCards}
    </main>
  )
}

export default Main;
