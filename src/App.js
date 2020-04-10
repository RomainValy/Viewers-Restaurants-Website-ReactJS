/** @format */

import React from "react";
import restaurants from "../src/Data/restaurants.json";
import "./App.css";
import Context from "./Components/RestaurantsContext";
import Header from "./Components/Header";
import RestoList from "./Components/RestoList/RestoList";
import MapContainer from "./Components/Map2/MapContainer";
import Filter from "./Components/Filter";
import { GoogleApiWrapper } from "google-maps-react";

/**
 * import une liste de restaurant par defaut depuis data/restaurants.json
 * @typedef {Array} initRestoList
 * @description liste de restaurants par défaut issue de data/restaurants.json
 *
 *
 */
const initRestoList = restaurants;

/**
 * @class App
 * @extends React.Component
 * @constructor
 * @param {Function} props.getUserPosition
 *
 */
class App extends React.Component {
  /**
   *
   * @param {object} props React.Components.props
   * @property {object} state l'état locale de App
   */
  constructor(props) {
    super(props);
    /**
     * objet contenant les valeurs de l'état locale
     * @property {array} restoList
     *
     */

    this.state = {
      restoList: initRestoList,
      currentResto: null,
      apiKey: "AIzaSyC_ZvcZ_AHoJzdFNumVjpC_mB1jy-hEEho",
      userPos: { lat: 48.8534, lng: 2.3488 },
      /**
       * initialise les coordonnées de centrage de la carte par défaut
       */
      defaultCenter: {
        lat: 48.8534,
        lng: 2.3488,
      },
      filterValue: {
        min: 0,
        max: 5,
      },
      /**
       * objet google initialisé au niveau globale pour les appel API google
       */
      google: props.google,
      map: null,
    };
    this.getUserPosition();
  }

  static defaultProps = {
    defaultRestoList: initRestoList,
  };

  /**
   * récupère la valuer globale de l'objet "map" initié par MapContainer
   * Il servira aux differentes requêtes API à google
   * @return {objet} map
   */
  setMap = (map) => {
    this.setState({ map });
  };

  /**
   * retourne un objet contenant les valeur min et max
   * @return {object}
   * @
   */
  setFilterValue = (value) => {
    this.setState({ filterValue: value });
  };

  /**
   * methode permettant d'initaliser et de modifier userPos
   * @returns {object} latlng Google Object || App.state.userPos
   */
  getUserPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      if (position) {
        let result = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.setState({ userPos: result });
      } else {
        this.setState({ userPos: { lat: 48.8534, lng: 2.3488 } });
      }
    });
  };

  /**
   * @method addResto ajoute un objet à restoList
   * @param {object} resto
   * @example resto = {
   * restaurantName: string;
   * address: string;
   * lat: number;
   * long: number;
   * ratings: {
   *      stars: number;
   *      comment: string;
   *    }[];
   * }[]
   * }
   */
  addResto = (resto) => {
    let result = this.state.restoList;
    result.push(resto);
    this.setState({ restoList: result });
  };

  /**
   * supprime le contenu de restoList et la remplace par les newList
   * @param {array} newList
   */
  setRestoList = (newList) => {
    this.setState({ restoList: newList });
  };
  /**
   * ajoute une note et un commentaire au restaurant concerné
   * @param {object} comment 
   */
  addComment = (comment) => {
    const result = this.state.restoList;
    /**
     * trouve l'objet coorespondant dans restoList via la method Array.find()
     * et l'attribut à l'état locale this.state.current restaurant
     * @param {string} restaurantName
     */
    const currentRestoComment = result.find(({ restaurantName }) => {
      return restaurantName === this.state.currentResto.name;
    });
    /**si le commentaire n'existe pas déjà, on l'ajoute à la liste*/
    if (
      currentRestoComment.ratings.every(
        (elem) => elem.comment !== comment.comment
      ) === true
    ) {
      currentRestoComment.ratings.push(comment);
      this.setState({ restoList: result });
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className='App'>
        {/**import et propagation du contexte (Components/restaurantContexte.js) */}
        <Context.Provider
          value={{
            map: this.state.map,
            google: this.state.google,
            filterValue: this.state.filterValue,
            defaultCenter: this.state.defaultCenter,
            userPos: this.state.userPos,
            restoList: this.state.restoList,
            addResto: this.addResto,
            currentResto: this.state.currentResto,
            apiKey: this.state.apiKey,
            setMap: this.setMap,
            getUserPosition: this.getUserPosition,
            setCurrentResto: (currentResto) => this.setState({ currentResto }),
            addComment: this.addComment,
            setRestoList: this.setRestoList,
          }}>
          <Header>
            <Filter setFilterValue={this.setFilterValue} />
          </Header>
          <Context.Consumer>
            {({ setCurrentResto, google, map, addComment }) => (
              <RestoList
                google={google}
                map={map}
                addComment={addComment}
                setCurrentResto={setCurrentResto}></RestoList>
            )}
          </Context.Consumer>
          <Context.Consumer>
            {({ restoList, userPos, addResto, setRestoList, setMap }) => (
              <MapContainer
                setMap={setMap}
                apiKey={this.state.apiKey}
                language='fr'
                addResto={addResto}
                setRestoList={setRestoList}
                restoList={restoList}
              />
            )}
          </Context.Consumer>
        </Context.Provider>
      </div>
    );
  }
}

export default GoogleApiWrapper((props) => ({
  apiKey: props.apiKey,
  language: props.language,
}))(App);
