import React from 'react'

/* style */
import * as S from './style'

/* component */
import Header from '../../components/Header'

/* map */
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api'

const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_APP_MAPS_GOOGLE
  })

  const position = {
    lat: -6.363391397479451,
    lng: -39.30167121119962
  }

  return (
    <>
      <Header />
      <S.MapContainer>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={position}
            zoom={15}
          ></GoogleMap>
        )}
      </S.MapContainer>
    </>
  )
}

export default Maps
