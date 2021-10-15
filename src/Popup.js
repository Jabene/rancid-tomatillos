import React from 'react'
import Button from './Button'
import './Popup.css'

function Popup({closePopup, currentMovie}) {
  let popupBackground = {backgroundImage: `url(${currentMovie.backdrop_path})`}
  return (
    <div className='popup'>
      <div className='popup-container' style={ popupBackground }>
      <div className='popup-info'>
        <div className='popup-close'>
          <Button onClick={() => { closePopup(currentMovie.id)} } text="" className="popup-btn"/>
        </div>
        <h2 className='popup-title'>{ currentMovie.title }</h2>
        <p className='movie-overview'>{ currentMovie.overview}</p>
      </div>
      </div>
    </div>
  )
}

export default Popup
