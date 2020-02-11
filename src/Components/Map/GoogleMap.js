import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import Context from '../RestaurantsContext'


class GoogleMap extends Component {
static defaultProps = {
    center: {
      lat: 48.8534,
      lng: 2.3488
    },
    zoom: 11
  };


  render() {
    return (
        <Context.Consumer>
            {({restoList}) => (
                // Important! Always set the container height explicitly
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCsy-AdAPt8Tu8x9tMyq5Z-XGPbNQuFpag' , 
                                        libraries: 'places',
                                        language: 'fr',
                                        region: 'fr',
                                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    >
                        {restoList.map((e) => (
                            <Marker
                                key = {`${e.lat} - ${e.long}`}
                                lat={e.lat}
                                lng={e.long}
                                text={e.restaurantName}
                            />
                        ))}
                        
                    </GoogleMapReact>
                </div>
                
            )}
        </Context.Consumer>
    );
  }
}

export default GoogleMap