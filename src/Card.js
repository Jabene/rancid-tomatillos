import React from 'react';
import './Card.css'

const Card = (props) => {
  return (
    <div className='movie-card'>
      <img className='movie-img' src={props.movie.poster_path}/>
      <h2>{props.movie.title}</h2>
    </div>
  )
}


export default Card;
