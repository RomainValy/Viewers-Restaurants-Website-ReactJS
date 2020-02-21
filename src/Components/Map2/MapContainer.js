import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Context from '../RestaurantsContext';
import Bubble from '../assets/bubble2.png'
import Axios from 'axios'
import './marker.css'

export class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.userPos = props.userPos
    this.apiKey = props.apiKey
    this.setRestoList = props.setRestoList
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      radius: '3000',
      type: 'restaurant',
      keyword: 'restaurant',
      allReadyLoaded : false,
    };
  
}

  onReady = (...p) => {
    this.setState ({allReadyLoaded : true})
      if (this.state.allReadyLoaded) return
        this.onMapReady(...p)
        
      
  }


  onNearBySearch = (results, status, google, ) => {
    console.log('ici on map ready')
    let finalResults = [];
      
      if (status === google.maps.places.PlacesServiceStatus.OK){
        //stock les données necessaires dans un objet qui correspond au state global
          console.log('resultat de la requete api : ')
          console.log(results)
          
          results.forEach((e) => {
            finalResults.push({
              lat : e.geometry.location.lat(),
              long : e.geometry.location.lng(),
              restaurantName :e.name,
              address : e.vicinity,
              ratings : e.rating,
              id : e.id
            })  
          });
        
        // application de la methode d'ajout de restaurant dispo dans le state globale
        console.log(finalResults)
          this.setRestoList(finalResults)
      }else {
          console.log('erreur du reseau :' + status)
      }
  }


  onMapReady = (mapProps, map) => {
    
    const {google} = mapProps;
    const service = new google.maps.places.PlacesService(map);
    const request = {
      location: mapProps.center,
      radius: '3000',
      type: ['restaurant'],
      keyword: ['restaurant'],
      fields: ['name' , 'geometry.location', 'vicinty', 'rating' ]
    };
    // requete et appel de la fonction call back
    console.info(request)
    service.nearbySearch(request, (results, status) => this.onNearBySearch.call(this, results , status, google));
    
    // initalise la fonction callback qui va traité la reponse de l'API
    
  }


  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      }) 
    }
  };

  render() {
    
    const containerStyle = {
        position: 'relative',  
        width: '100%',
        height: '90vh'
      }

    return (
      <Context.Consumer>
            {({restoList, userPos, addResto, defaultCenter, setRestoList}) => (
               
               <Map  
                      containerStyle ={containerStyle} 
                      google={this.props.google} 
                      zoom={13}
                      //initialCenter = {{lat : 48.8534, lng : 2.3488}}
                      center = {isNaN(userPos.lat) ? {lat : 48.8534, lng : 2.3488} : userPos}
                      onClick={this.onMapClicked}        
                      onReady ={this.onReady}
                      //onCenter_changed = {this.onMapReady}
                      //onRecenter = {this.onReady}
                      //onDragend = {this.onMapReady}        
                      >

                  <Marker onClick={this.onMarkerClick}
                          name={'Vous êtes ici'} 
                          position = {isNaN(userPos.lat) ? defaultCenter : userPos}
                          icon = {{
                            url: Bubble,
                            anchor: new this.props.google.maps.Point(32,32),
                            scaledSize: new this.props.google.maps.Size(64,64)
                          }}
                          label ={"You"} 
                          />

                  {restoList.map((e) => (
                                  e.lat || e.lng !== undefined ?
                                    <Marker
                                      onClick={this.onMarkerClick}
                                      key = {`${e.lat} - ${e.long}`}
                                      position={{lat: e.lat, lng: e.long}}
                                      name={`${e.restaurantName}`}
                                    /> : null     
                               ))}

                                    <InfoWindow onClose={this.onInfoWindowClose}
                                                marker={this.state.activeMarker}
                                                visible={this.state.showingInfoWindow}
                                    >
                                        <div>
                                          <p>{this.state.selectedPlace.name}</p>
                                        </div>
                                    </InfoWindow>
                </Map>
      )}
      </Context.Consumer>
        
      
    );
  }
}

export default GoogleApiWrapper(
  (props) => console.log(props) || ({
    apiKey: props.apiKey,
    language: props.language, 
  }
))(MapContainer)