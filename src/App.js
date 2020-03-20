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

const initRestoList = restaurants;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restoList: initRestoList,
      currentResto: null,
      apiKey: "AIzaSyCsy-AdAPt8Tu8x9tMyq5Z-XGPbNQuFpag",
      userPos: { lat: 48.8534, lng: 2.3488 },
      defaultCenter: {
        lat: 48.8534,
        lng: 2.3488
      },
      filterValue: {
        min: 0,
        max: 5
      },
      google: props.google,
      map: null
    };
    this.getUserPosition();
  }

  static defaultProps = {
    defaultRestoList: initRestoList
  };

  setMap = map => {
    this.setState({ map });
  };

  setFilterValue = value => {
    this.setState({ filterValue: value });
  };

  getUserPosition = () => {
    navigator.geolocation.getCurrentPosition(position => {
      if (position) {
        let result = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.setState({ userPos: result });
      } else {
        this.setState({ userPos: { lat: 48.8534, lng: 2.3488 } });
      }
    });
  };

  addResto = resto => {
    let result = this.state.restoList
    result.push(resto)
    this.setState({ restoList: result });
    //this.setState({restoList: [...this.state.restoList, resto]})
  };

  setRestoList = newList => {
    this.setState({ restoList: newList });
    console.log("App -> newList", newList);
  };
  addComment = comment => {
    const result = this.state.restoList;

    const currentRestoComment = result.find(({ restaurantName }) => {
      return restaurantName === this.state.currentResto.name;
    });
    // si le commentaire n'existe pas déjà, on l'ajoute à la liste
    if (
      currentRestoComment.ratings.every(
        elem => elem.comment !== comment.comment
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
        <Context.Provider
          value={{
            map: this.state.map,
            google: this.state.google,
            fiterValue: this.state.filterValue,
            defaultCenter: this.state.defaultCenter,
            userPos: this.state.userPos,
            restoList: this.state.restoList,
            addResto: this.addResto,
            currentResto: this.state.currentResto,
            apiKey: this.state.apiKey,
            setMap: this.setMap,
            getUserPosition: this.getUserPosition,
            setCurrentResto: currentResto => this.setState({ currentResto }),
            addComment: this.addComment,
            setRestoList: this.setRestoList
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
                setCurrentResto={setCurrentResto}
              />
            )}
          </Context.Consumer>
          <Context.Consumer>
            {({
              restoList,
              userPos,
              addResto,
              defaultCenter,
              setRestoList,
              setMap
            }) => (
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

export default GoogleApiWrapper(props => ({
  apiKey: props.apiKey,
  language: props.language
}))(App);
