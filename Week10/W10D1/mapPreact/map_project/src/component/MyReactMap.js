import React from 'react'
import { Marker, GoogleMap, useJsApiLoader,  } from '@react-google-maps/api';



const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 0,
  lng: -180
}

const position = {
  lat: 37.772,
  lng: -122.214
}


function MyReactMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'myreactmap-371423',
    googleMapsApiKey: 'AIzaSyAjOvkrl1l5AbPXmIbsIZQgCAsSnbT9UFU'
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    console.log(map);
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  // console.log();
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
       <Marker
      onLoad={onLoad}
      position={position}
      />
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyReactMap)