import React, {useState } from 'react';
import restaurants from '../src/Data/restaurants.json'
import RestaurantsContext from './Components/RestaurantsContext'
import './App.css';
import Header from './Components/Header'
import RestoList from './Components/RestoList/RestoList'
import GoogleMap from './Components/Map/GoogleMap.js'
import InputNewResto from './Components/AddResto/inputNewResto'


const copyResto = restaurants.slice(0, restaurants.length);


function App() {

  const [restaurantsList, updateRestaurantsList] = useState(copyResto)

  const RestaurantsContext = {
    list: restaurantsList,
    update: updateRestaurantsList
  }
  
  return (
      <div className="App">
        <Header/>
        <RestaurantsContext.Provider value={RestaurantsContext}>
            
            <RestoList/> 
            <GoogleMap imgSrc = "./imgtemp.jpg"  altValue = "demo"/>
          
          <InputNewResto/>
          </RestaurantsContext.Provider>
      </div>

  );
}

export default App;
