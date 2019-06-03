import React from 'react'
import GoogleMapReact from 'google-map-react'
import marker from '../../images/map-marker.png'
import { getThemeProps } from '@material-ui/styles';

class Map extends React.Component {
    render() {
        let coor = this.props.center.coordinates
        return (
            <div className='google-map'>
                <GoogleMapReact 
                    bootstrapURLKeys={{ key: 'AIzaSyCny-_MrMIhDgkO9DO_H-WHICPvXu5-a18' }}
                    defaultCenter={{lat: coor.latitude, lng: coor.longitude}}
                    defaultZoom={this.props.zoom}
                    >
                        <Marker
                            src={marker}
                            lat={coor.latitude}
                            lng={coor.longitude} 
                            />
                </GoogleMapReact>
            </div>
        )
    }
}

const Marker = (props)=>{
    return <img src={props.src} />
}

export default Map