import React from 'react';
import restaurants from '../src/Data/restaurants.json'
import './App.css';
import Context from './Components/RestaurantsContext'
import Header from './Components/Header'
import RestoList from './Components/RestoList/RestoList'
import GoogleMap from './Components/Map/GoogleMap.js'
import InputNewResto from './Components/AddResto/inputNewResto'

const initRestoList = restaurants.slice(0, restaurants.length)

class App extends React.Component {
  constructor({props}){
    super({props});
    this.state = {
      restoList : initRestoList,
    }
  };

  addResto = (resto) => {
    this.setState({restoList : [...this.state.restoList, resto]})
  }

  render(){
    return (
      <div className="App">
        <Context.Provider value = {{restoList : this.state.restoList, addResto: this.addResto}}>
              <Header/>
              
                  
              <RestoList /> 
              <GoogleMap imgSrc = "./imgtemp.jpg"  altValue = "demo"/>
            
                <InputNewResto/>
            
            
        </Context.Provider>
        
      </div>

      );
  }
}
  

export default App;
