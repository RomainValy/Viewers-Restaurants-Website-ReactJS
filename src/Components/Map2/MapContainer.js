import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Context from '../RestaurantsContext';
import Bubble from '../assets/bubble2.png'

export class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.userPos = props.userPos
    this.apiKey = props.apiKey
    this.addResto = props.addResto
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  
}
  static defaultProps = {
    center : {
        lat : 48.8534,
        lng : 2.3488
    },
    zoom: 11
};


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
            {({restoList, userPos, addResto}) => (
                <Map  containerStyle ={containerStyle} 
                      google={this.props.google} 
                      zoom={13}
                      center = {userPos !== null ? userPos : this.props.center}
                      onClick={this.onMapClicked}
                      onReady ={(mapProps, map) => {
                        const {google} = mapProps;
                        const service = new google.maps.places.PlacesService(map);
                        const request = {
                          location: userPos !== null ? userPos : this.props.center,
                          radius: '3000',
                          type: ['restaurant'],
                          keyword: ['restaurant'],
                          fields: ['name' , 'geometry.location', 'vicinty', 'rating' ]
                        };
                        // requete et appel de la fonction call back
                        console.info(request)
                        service.nearbySearch(request, callback);
                        
                        // initalise la fonction callback qui va traité la reponse de l'API
                        function callback(results, status){
                          console.log('ici')
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
                              })  
                            });
                            
                            // application de la methode d'ajout de restaurant dispo dans le state globale
                            console.log(finalResults)
                            finalResults.map((element) => {
                              addResto(element)
                            })
                      
                          }else {
                              console.log('erreur du reseau :' + status)
                          }        
                        }
                      }}                      
                      >

                  <Marker onClick={this.onMarkerClick}
                          name={'Current location'} 
                          position = {userPos !== null ? userPos : this.props.map}
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
  (props) => ({
    apiKey: props.apiKey,
    language: props.language,
    addResto: props.addResto
  }
))(MapContainer)