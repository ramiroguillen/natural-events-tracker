import { Icon } from '@iconify/react'
import wildfires from '@iconify/icons-mdi/fire-alert'
import severeStorm from '@iconify/icons-mdi/weather-tornado'
import volcanoes from '@iconify/icons-mdi/volcano'
import seaLakeIce from '@iconify/icons-mdi/terrain'
import drought from '@iconify/icons-mdi/water-pump-off'
import dustHaze from '@iconify/icons-mdi/weather-windy'
import earthquake from '@iconify/icons-mdi/lightning-bolt'
import floods from '@iconify/icons-mdi/tsunami'
import landslides from '@iconify/icons-mdi/waves'
import snow from '@iconify/icons-mdi/snowflake-alert'
import tempExtremes from '@iconify/icons-mdi/123'


const LocationMarker = ({ lat, lng, onClick, category }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            {
            (category === 'wildfires' && <Icon icon={wildfires} className="wildfires-icon" />) ||
            (category === 'severeStorms' && <Icon icon={severeStorm} className="severeStorm-icon" />) ||
            (category === 'volcanoes' && <Icon icon={volcanoes} className="volcanoes-icon" />) ||
            (category === 'seaLakeIce' && <Icon icon={seaLakeIce} className="seaLakeIce-icon" />) ||
            (category === 'drought' && <Icon icon={drought} className="drought-icon" />) ||
            (category === 'dustHaze' && <Icon icon={dustHaze} className="dustHaze-icon" />) ||
            (category === 'earthquake' && <Icon icon={earthquake} className="earthquake-icon" />) ||
            (category === 'floods' && <Icon icon={floods} className="floods-icon" />) ||
            (category === 'landslides' && <Icon icon={landslides} className="landslides-icon" />) ||
            (category === 'snow' && <Icon icon={snow} className="snow-icon" />) ||
            (category === 'tempExtremes' && <Icon icon={tempExtremes} className="tempExtremes-icon" />) ||
            null
            }
        </div>  
    )
}

export default LocationMarker