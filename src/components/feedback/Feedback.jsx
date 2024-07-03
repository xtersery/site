import React from 'react'
import './Feedback.css'
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps'
//import Panorama from './Panorama'

const Feedback = () => {
  return (
    <div className='fd-box'>
      <div className="left-side">
        <div className="my-map">
          <YMaps>
            <Map
              defaultState={{
                center: [48.478826,135.076301],
                zoom: 17,
                controls: ["zoomControl", "fullscreenControl"],
                restrictMapArea: [48.47882, 48.47883][135.07630, 135.07631]
              }}
              modules={["control.ZoomControl", "control.FullscreenControl"]}
              width="400px"
              height="500px"
            >
              <Placemark
              defaultGeometry={[48.478826,135.076301]}
              />
            </Map>
          </YMaps>
        </div>
      </div>
      <div className="right-side">
        <h1>Остались вопросы?</h1>
        
      </div>
    </div>
  )
}

export default Feedback
