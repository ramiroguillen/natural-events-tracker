import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

// define constants
const KEY = 'AIzaSyANyiYdKJsDMjZA_08-tiJicEuBTA5Q-fk';

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map((ev, index) => (
        <LocationMarker key={index} lat={ev.geometry[0].coordinates[1]} lng={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} category={ev.categories[0].id}/>
    ));

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: KEY }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 30,
        lng: 0
    },
    zoom: 2
}

export default Map