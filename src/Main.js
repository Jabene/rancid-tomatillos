import React from 'react';
import Card from './Card';
import './Main.css'
import Popup from './Popup';

function Main({movies, popupVisable}) {
  const movieCards = movies.map(movie => {
    return(
      <Card key={movie.id} movie={movie}/>
    )
  })
  return (
    <main className='movies-container'>
      {popupVisable && <Popup />}
      {movieCards}
    </main>
  )
}

export default Main;
