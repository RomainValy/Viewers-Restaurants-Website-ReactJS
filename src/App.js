import React from 'react';
import './App.css';
import Title from './Components/TopPage/Title'
import Introduce from './Components/TopPage/Introduce'
import RestoList from './Components/RestoList/RestoList'
import GoogleMap from './Components/Map/GoogleMap.js'

function App() {
  return (
    <div className="App">
      <Title/>
      <Introduce/>
        <div className="components">
            <div>
              <GoogleMap/>
              
            </div>
          <RestoList/>
        </div>
      
    </div>
  );
}

export default App;
