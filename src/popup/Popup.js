import React from 'react'
import Button from '../button/Button.js';
import { Link } from 'react-router-dom';
import './Popup.css';
import img from '../assets/youtube.svg';
function Popup({currentMovie, moviePath, movieKeyData}) {
  let popupBackground = {backgroundImage: `url(${currentMovie.backdrop_path})`}

  return (
    <div className='popup'>
      <div className='popup-opacity'></div>
      <div className='popup-container' style={ popupBackground } >
        <div className='popup-info'>
          <div className="popup-image">
            <img className='popup-poster' src={currentMovie.poster_path} alt={`imagery of ${currentMovie.genres[0].toLowerCase()}`}/>
          </div>
          <article className='popup-article'>
            <Link to="/" className='popup-close'>
              <Button text="" className="popup-btn"/>
            </Link>
            <h1>{ currentMovie.title }</h1>
            <p> {`${currentMovie.release_date.substring(0,4)}, ${Math.floor(currentMovie.runtime/60)}h ${currentMovie.runtime % 60}m`} </p>
            <div className='popup-details'>
              <h3>Overview:</h3>
              <p>{ currentMovie.overview}</p>
              <h3>Genres:</h3>
              <p>{ currentMovie.genres.join('/')}</p>
              <h3>Revenue:</h3>
              <p>{ `${(currentMovie.revenue/1000000).toFixed(1)} Mil` }</p>
              <h3>Trailer:</h3>
              <a target="_blank" href={`https://www.youtube.com/watch?v=${movieKeyData.movieKey.key}`}>YouTube</a>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
export default Popup
