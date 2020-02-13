import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker'
import Context from '../RestaurantsContext'


class GoogleMap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            center: null
        }
        this.getUserPosition();
    }
    static defaultProps = {
        center : {
            lat : 48.8534,
            lng : 2.3488
        },
        zoom: 11
    };

    getUserPosition = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            if (position) {
                let result = {
                    
                        lat : position.coords.latitude,
                        lng : position.coords.longitude
                     
                }
                this.setState({center : result})
                console.log(result)
                console.log(this.state.center)
                
            }else{
                    return null
                }
            }
        )        
    }

  render() {

    return (
        <Context.Consumer>
            {({restoList}) => (
                // Important! Always set the container height explicitly
                <div style={{ height: '100vh', width: '100%' }}>
                    
                        <GoogleMapReact
                            bootstrapURLKeys={{  key: '#' , 
                                                libraries: 'places',
                                                language: 'fr',
                                                region: 'fr',
                                            }}
                            defaultCenter={this.props.center}
                            center = {this.state.center !== null ? this.state.center : this.props.center} 
                            defaultZoom={this.props.zoom}
                        >
                                <Marker
                                    lat = {this.state.center !== null ? this.state.center.lat : this.props.center.lat}
                                    lng = {this.state.center !== null ?this.state.center.lng : this.props.center.lng}
                                    text = "you"
                                    klass = {"user"}
                                    $hover = {true}
                                />
                                {restoList.map((e) => (
                                    <Marker
                                        key = {`${e.lat} - ${e.long}`}
                                        lat={e.lat}
                                        lng={e.long}
                                        text={e.restaurantName}
                                        klass = {"marker"}
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