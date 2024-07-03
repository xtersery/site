import React, { useEffect, useRef } from 'react';
import { withYMaps } from '@pbe/react-yandex-maps';


const Panorama = ({ ymaps }) => {
  const panoramaContainer = useRef(null);

  useEffect(() => {
    if (ymaps && panoramaContainer.current) {
      ymaps.panorama.locate([55.733835, 37.588227]).then(
        (panoramas) => {
          if (panoramas.length > 0) {
            const player = new ymaps.panorama.Player(panoramaContainer.current, panoramas[0]);
            console.log(panoramas);
          } else {
            console.error('No panoramas found at this location');
          }
        },
        (err) => {
          console.error('Failed to locate panoramas:', err);
        }
      );
    }
  }, [ymaps]);

  return <div ref={panoramaContainer} style={{ width: '100%', height: '240px' }} />;
};

export default withYMaps(Panorama, true, ['panorama']);
