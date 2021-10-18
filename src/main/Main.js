import React from 'react';
import Card from '../card/Card.js';
import '../main/Main.css'
import Popup from '../popup/Popup.js';

function Main({movies, popupVisable, togglePopup, movieInfo}) {
  const movieCards = movies.map(movie => {
    return(
      <Card
        key={movie.id}
        movie={movie}
        togglePopup={togglePopup}
      />
    )
  })

  return (
    <main
      className={popupVisable ? "movies-container-noscroll" : "movies-container"}>
      {popupVisable && <Popup
        closePopup={togglePopup}
        currentMovie={movieInfo}/>}
      {movieCards}
    </main>
  )
}

export default Main;
