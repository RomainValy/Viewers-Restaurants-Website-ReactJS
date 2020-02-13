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
  constructor(props){
    super(props);
    this.state = {
      restoList : initRestoList,
      currentResto: null,
    }
  };

  addResto = (resto) => {
    this.setState({restoList : [...this.state.restoList, resto]})
  }

  addComment = (comment) => {
    const result = this.state.restoList
    const currentRestoComment = result.find(({restaurantName}) => {
      return restaurantName === this.state.currentResto.name
    })
    currentRestoComment.ratings.push(comment)
    this.setState({restoList: result})
  }

  render(){
    return (
      <div className="App">
        <Context.Provider value = {{restoList : this.state.restoList, 
                                    addResto: this.addResto,
                                    currentResto: this.state.currentResto,
                                    setCurrentResto : (currentResto) => this.setState({currentResto}),
                                    addComment: this.addComment}}>
              <Header/>
              
                  
              <RestoList /> 
              <GoogleMap/>
            
                <InputNewResto/>
            
            
        </Context.Provider>
        
      </div>

      );
  }
}
  

export default App;
