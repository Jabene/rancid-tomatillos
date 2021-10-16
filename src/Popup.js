import React from 'react'
import Button from './Button'
import './Popup.css'

function Popup({closePopup, currentMovie}) {
  console.log('Hello',currentMovie.title)
  let popupBackground = {backgroundImage: `url(${currentMovie.backdrop_path})`}
  return (
    <div className='popup'>
      <div className='popup-opacity'></div>
      <div className='popup-container' style={ popupBackground }>
        <div className='popup-info'>
          <div className="popup-img">
            <img className='popup-poster' src={currentMovie.poster_path}/>
          </div>
          <article className='popup-article'>
            <div className='popup-close'>
              <Button onClick={() => { closePopup(currentMovie.id)} } text="" className="popup-btn"/>
            </div>
            <h1>{ currentMovie.title }</h1>
            <p> {`${currentMovie.release_date.substring(0,4)}, ${Math.floor(currentMovie.runtime/60)}h ${currentMovie.runtime % 60}m`} </p>
            <div className='popup-details'>
              <h3>Overview:</h3>
              <p>{ currentMovie.overview}</p>
              <h3>Genres:</h3>
              <p>{ currentMovie.genres.join('/')}</p>
              <h3>Revenue:</h3>
              <p>{ `${(currentMovie.revenue/1000000).toFixed(1)} Mil` }</p>
              <h3>Rating:</h3>
              <p>{ currentMovie.overview}</p>
            </div>
          </article>
        </div>
      </div>
    </div>

  )
}

export default Popup
