import React from 'react';
import './App.css';
import Title from './Components/TopPage/Title'
import Introduce from './Components/TopPage/Introduce'
import RestoList from './Components/RestoList/RestoList'
import GoogleMap from './Components/Map/GoogleMap.js'
import InputNewResto from './Components/AddResto/inputNewResto'
import AddNewCommentForm from './Components/RestoList/addNewCommentForm.js'
function App() {
  return (
    <div className="App">
      <Title/>
      <Introduce/>
        <div className="components">
            <div>
              <GoogleMap imgSrc = "./imgtemp.jpg"  altValue = "demo"/>
              <InputNewResto/>
            </div>
          <RestoList/>
        </div>
        <AddNewCommentForm/>
    </div>
  );
}

export default App;
