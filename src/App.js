/** @format */

import React from "react";
import restaurants from "../src/Data/restaurants.json";
import "./App.css";
import Context from "./Components/RestaurantsContext";
import Header from "./Components/Header";
import RestoList from "./Components/RestoList/RestoList";
import MapContainer from "./Components/Map2/MapContainer";
import Filter from "./Components/Filter";
import { GoogleApiWrapper} from "google-maps-react";

const initRestoList = [...restaurants].map(e => ({
  ...e,
  ratingAverage: () => {
    let result = [];
    if (e.ratings === true) {
      e.ratings.map(e => result.push(e.stars));

      let average =
        result.length > 0
          ? result.reduce(
              (accumulator, currentValue) => accumulator + currentValue
            )
          : null;
      return Math.round(average / e.ratings.length);
    } else {
      return Math.round(e.ratings);
    }
  }
}));

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restoList: initRestoList,
      currentResto: null,
      apiKey : "AIzaSyCsy-AdAPt8Tu8x9tMyq5Z-XGPbNQuFpag",
      userPos: {lat: 48.8534, lng: 2.3488},
      defaultCenter: {
        lat: 48.8534,
        lng: 2.3488
      },
      filterValue: 0,
      google: props.google,
      map: props.map
    };
    this.getUserPosition();
  }

  static defaultProps = {
    defaultRestoList: initRestoList
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
        console.log(
          "TCL: App -> getUserPosition -> userPos",
          this.state.userPos
        );
      } else {
        this.setState({ userPos: { lat: 48.8534, lng: 2.3488 } });
        
      }
    });
    console.log("app => state.map ", this.state.map)
  };

  addResto = resto => {
    this.setState({ restoList: [...this.state.restoList, resto] });
  };
  setRestoList = newList => {
    this.setState({ restoList: newList });
    console.log("App -> newList", newList)
  };
  addComment = comment => {
    const result = this.state.restoList;
    console.log("TCL: App -> result", result);
    const currentRestoComment = result.find(({ restaurantName }) => {
      return restaurantName === this.state.currentResto.name;
    });
    console.log("TCL: App -> currentRestoComment", currentRestoComment);
    console.log("TCL: App -> comment", comment);
    currentRestoComment.ratings.push(comment);
    this.setState({ restoList: result });
  };

  render() {
    return (
      <div className='App'>
        <Context.Provider
          value={{
            map : this.state.map,
            google: this.state.google,
            fiterValue: this.state.filterValue,
            defaultCenter: this.state.defaultCenter,
            userPos: this.state.userPos,
            restoList: this.state.restoList,
            addResto: this.addResto,
            currentResto: this.state.currentResto,
            apiKey: this.state.apiKey,
            getUserPosition: this.getUserPosition,
            setCurrentResto: currentResto => this.setState({ currentResto }),
            addComment: this.addComment,
            setRestoList: this.setRestoList
          }}>
          <Header>
            <Filter setFilterValue={this.setFilterValue} />
          </Header>

          <RestoList google={this.state.google}
           />

          <Context.Consumer>
            {({
              restoList,
              userPos,
              addResto,
              defaultCenter,
              setRestoList
            }) => (
              <MapContainer
                apiKey={this.state.apiKey}
                language='fr'
                addResto={this.addResto}
                setRestoList={this.setRestoList}
                restoList={ restoList}
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
