import React from 'react'
import Button from './Button'
import './Popup.css'

function Popup({closePopup}) {
  return (
    <div className='popup'>
      <div className='popup-info'>
      <div className='popup-close'>
        <Button onClick={closePopup} text="" className="popup-btn"/>
      </div>
      </div>
    </div>
  )
}

export default Popup
