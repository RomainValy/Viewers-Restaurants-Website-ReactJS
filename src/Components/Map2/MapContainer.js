/** @format */

import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Context from "../RestaurantsContext";
import ReactModal from "react-modal";
import NewRestoForm from "../AddResto/NewRestoForm";
import Bubble from "../assets/bubble2.png";
import "./marker.css";

export class MapContainer extends Component {
  
  constructor(props) {
    
    super(props);
    this.restoList = props.restoList;
    this.userPos = props.userPos;
    this.apiKey = props.apiKey;
    this.setRestoList = props.setRestoList;
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      allReadyLoaded: false,
      newRestoCoordinate: {
        lat: null,
        lng: null
      },
      
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  // ---------Chargement des resto via l'API Place

  onReady = (...p) => {
    this.setState({ allReadyLoaded: true });

    if (this.state.allReadyLoaded === true) this.onMapReady(...p);
  };

  onNearBySearch = (results, status, google) => {
    console.log("TCL: MapContainer -> onNearBySearch -> onNearBySearch");
    let finalResults = [];

    if (status === google.maps.places.PlacesServiceStatus.OK) {
      //stock les données necessaires dans un objet qui correspond au state global
      console.log("results requete google place", results);
      results.forEach(e => {
        finalResults.push({
          lat: e.geometry.location.lat(),
          long: e.geometry.location.lng(),
          restaurantName: e.name,
          address: e.vicinity,
          ratings: e.rating,
          id: e.id
        });
      });

      // application de la methode d'ajout de restaurant dispo dans le state globale

      this.setRestoList(finalResults);
    } else {
      console.log("erreur du reseau :" + status);
    }
  };

  onMapReady = (mapProps, map) => {
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);
    console.log("MapContainer -> onMapReady -> map", map);
    const request = {
      location: mapProps.center,
      radius: "800",
      type: ["restaurant"],
      keyword: ["restaurant"],
      fields: ["name", "geometry.location", "vicinty", "reviews"]
    };
    console.log(
      "MapContainer -> onMapReady -> mapProps.center",
      mapProps.center
    );

    // requete et appel de la fonction call back
    service.nearbySearch(request, (results, status) =>
      this.onNearBySearch.call(this, results, status, google)
    );

    // initalise la fonction callback qui va traité la reponse de l'API
  };

  // ---------ouvre et ferme l'infoWindow

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  // -------- Ajout d'un restaurant avec levent onClick sur la page

  closeInfoWindow = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  onMapClicked = (e, mapProps, map) => {
    
    this.closeInfoWindow();

    this.setState({
      newRestoCoordinate: {
        lat: map.latLng.lat(),
        lng: map.latLng.lng()
      }
    });
    this.handleOpenModal();
  };

  // voir implantation de l'API Geocoder pour recup l'adresse à partir des coordonnées de OnMapClicked
  getGeocode = (e, mapProps, map) => {};

  render() {
    const containerStyle = {
      position: "relative",
      width: "100%",
      height: "90vh"
    };
    return (
      <Context.Consumer>
        {({ restoList, userPos, addResto, defaultCenter, setRestoList }) => (
          <>
          
            <Map
              containerStyle={containerStyle}
              google={this.props.google}
              zoom={14}
              initialCenter={userPos}
              center={userPos}
              onClick={this.onMapClicked}
              onReady={this.onReady}
              onRecenter={this.onReady}>
              {userPos && (
                <Marker
                  onClick={this.onMarkerClick}
                  name={"Vous êtes ici"}
                  position={isNaN(userPos.lat) ? defaultCenter : userPos}
                  icon={{
                    url: Bubble,
                    anchor: new this.props.google.maps.Point(32, 32),
                    scaledSize: new this.props.google.maps.Size(64, 64)
                  }}
                  label={"You"}
                />
              )}

              {restoList.map(e =>
                e.lat || e.lng !== undefined ? (
                  <Marker
                    onClick={this.onMarkerClick}
                    key={`${e.lat} - ${e.long} - ${e.id}`}
                    position={{ lat: e.lat, lng: e.long }}
                    name={`${e.restaurantName}`}
                  />
                ) : null
              )}

              <InfoWindow
                onClose={this.onInfoWindowClose}
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                <div>
                  <p>{this.state.selectedPlace.name}</p>
                </div>
              </InfoWindow>
            </Map>

            <ReactModal
              isOpen={this.state.showModal}
              appElement={document.getElementById("root")}>
              <NewRestoForm
                addResto={addResto}
                closeModal={this.handleCloseModal}
                lng={this.state.newRestoCoordinate.lng}
                lat={this.state.newRestoCoordinate.lat}
                restoList={restoList}
              />
              <button onClick={this.handleCloseModal}>Close Modal</button>
            </ReactModal>
          </>
        )}
       
      </Context.Consumer>
  
    );
  }
}


export default GoogleApiWrapper(props => ({
  apiKey: props.apiKey,
  language: props.language
}))(MapContainer);

