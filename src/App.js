import React from 'react';
import restaurants from '../src/Data/restaurants.json'
import './App.css';
import Context from './Components/RestaurantsContext'
import Header from './Components/Header'
import RestoList from './Components/RestoList/RestoList'
import MapContainer from './Components/Map2/MapContainer'
import InputNewResto from './Components/AddResto/inputNewResto'



const initRestoList = restaurants.slice(0, restaurants.length)

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      restoList : initRestoList,
      currentResto: null,
      apiKey : 'AIzaSyCsy-AdAPt8Tu8x9tMyq5Z-XGPbNQuFpag',
      userPos: {},
      defaultCenter : {
        lat : 48.8534,
        lng : 2.3488
      },
    }
    this.getUserPosition();
  };


  static defaultProps = {
    defaultRestoList : initRestoList
  };

  
    
  getUserPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      if (position) {
          let result = {
                  lat : position.coords.latitude,
                  lng : position.coords.longitude
               
          }
          this.setState({userPos : result})
          console.log(this.state.userPos)
          
      }else{
           return null
          }
      }
    )        
  }
  

  addResto = (resto) => {
    this.setState({restoList : [...this.state.restoList, resto]})
  }
  setRestoList = (newList) => {
    this.setState({restoList : newList})
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
        <Context.Provider value = {{defaultCenter: this.state.defaultCenter,
                                    userPos : this.state.userPos,
                                    restoList : this.state.restoList, 
                                    addResto: this.addResto,
                                    currentResto: this.state.currentResto,
                                    apiKey : this.state.apiKey,
                                    getUserPosition : this.getUserPosition,
                                    setCurrentResto : (currentResto) => this.setState({currentResto}),
                                    addComment: this.addComment,
                                    setRestoList : this.setRestoList
                                    }}>
              <Header/>
              
                  
              <RestoList />
              
                <Context.Consumer>
                {({restoList, userPos, addResto, defaultCenter, setRestoList}) => (
                  <MapContainer
                    apiKey = {this.state.apiKey}
                    language = "fr"
                    addResto = {this.addResto}
                    setRestoList = {this.setRestoList} 
                  />
                )}
                </Context.Consumer>            
                   
              {/* <InputNewResto key= {this.state.restoList.length}/> */}
            
            
        </Context.Provider>
        
      </div>

      );
  }
}
  

export default App;
