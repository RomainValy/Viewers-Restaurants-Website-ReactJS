import restaurants from '../Data/restaurants.json'
import React from 'react'
import RestoCards from './RestoCards'
import './RestoList.css'

console.log(restaurants);

class RestoList extends React.Component {
    
    
    render(){
        return(
            <div className="restoList">
                {restaurants.map((element) => (
                <RestoCards
                    name = {element.restaurantName}
                    key = {restaurants.indexOf(element)}
                    hidden = "false"                                     
                    /> 
                ))}  
            </div>  
        )
    }
}

export default RestoList


