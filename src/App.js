import React from 'react';
import './App.css';
import Title from './Components/TopPage/Title'
import Introduce from './Components/TopPage/Introduce'
import RestoList from './Components/RestoList/RestoList'
import GoogleMap from './Components/Map/GoogleMap.js'
import InputNewResto from './Components/AddResto/inputNewResto'
function App() {
  return (
    <div className="App">
      <Title/>
      <Introduce/>
        <div className="components">
            
              <GoogleMap imgSrc = "./imgtemp.jpg"  altValue = "demo"/>
              
            
          <RestoList/>
        </div>
        <InputNewResto/>
    </div>
  );
}

export default App;
