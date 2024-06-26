import React from 'react'
import './Feedback.css'
import {Map} from '@pbe/react-yandex-maps'

const Feedback = () => {
  return (
    <div className='fd-box'>
      <div className="left-side">
        <div className="map">
          <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
        </div>
      </div>
      <div className="right-side"></div>
    </div>
  )
}

export default Feedback
