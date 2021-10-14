import React from 'react';
import Card from './Card';
import './Main.css'
// import Popup from './Popup';

function Main({movies}) {
  const movieCards = movies.map(movie => {
    return(
      <Card key={movie.id} movie={movie}/>
    )
  })
  return (
    <main className='movies-container'>
      {movieCards}
    </main>
  )
}

export default Main;
