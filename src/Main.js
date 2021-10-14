import React from 'react';
import Card from './Card';
import './Main.css'
import Popup from './Popup';

function Main({movies, popupVisable, togglePopup}) {
  const movieCards = movies.map(movie => {
    return(
      <Card key={movie.id} movie={movie} togglePopup={togglePopup}/>
    )
  })
  return (
    <main className='movies-container'>
      {popupVisable && <Popup closePopup={togglePopup}/>}
      {movieCards}
    </main>
  )
}

export default Main;
