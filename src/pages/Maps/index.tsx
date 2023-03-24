import React, { useContext, useEffect } from 'react'

/* style */
import * as S from './style'

/* useNavigate */
import { useNavigate } from 'react-router-dom'

/* component */
import Header from '../../components/Header'

/* context */
import { CommicContext } from '../../context/Commic'

/* map */
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'
import { PointerContext } from '../../context/Pointer'

const Maps = () => {
  // const [pointers, setPointer] = useState<Array<Pointers>>([])

  const { commic } = useContext(CommicContext)
  const { pointers, setPointers } = useContext(PointerContext)

  /* navigate */
  const navigate = useNavigate()

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_APP_MAPS_GOOGLE
  })

  const position = {
    lat: -6.363391397479451,
    lng: -39.30167121119962
  }

  const posError = (error: GeolocationPositionError) => {
    console.log(error)
  }

  const showPosition = (position: GeolocationPosition) => {
    setPointers([
      ...pointers,
      {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        img: '',
        title: ''
      }
    ])
  }

  const loadLocation = () => {
    if (navigator.geolocation) {
      console.log(
        navigator.geolocation.getCurrentPosition(showPosition, posError)
      )
    } else {
      alert('Sorry, Geolocation is not supported by this browser.') // Alert is browser does not support geolocation
    }
  }

  const addPointer = (e: google.maps.MapMouseEvent) => {
    if (commic.id === 0) {
      alert('Você deve selecionar um commic para enviar para o endereço!')
      navigate('/commics')
      return
    }
    setPointers([
      ...pointers,
      {
        lng: e.latLng?.lng(),
        lat: e.latLng?.lat(),
        img: commic.image,
        title: commic.title
      }
    ])
  }

  useEffect(() => {
    loadLocation()
  }, [])

  return (
    <>
      <Header />
      <S.MapContainer>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={position}
            zoom={15}
            onClick={(e) => addPointer(e)}
          >
            {pointers.map((item, indice) => {
              if (item.lat != null && item.lng != null) {
                return (
                  <Marker
                    key={indice}
                    position={{ lat: item.lat, lng: item.lng }}
                    icon={{
                      url: item.img,
                      scaledSize: new google.maps.Size(50, 50)
                    }}
                  />
                )
              }
            })}
          </GoogleMap>
        )}
      </S.MapContainer>
    </>
  )
}

export default Maps
