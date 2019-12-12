import restaurants from '../../Data/restaurants.json'
import React from 'react'
import RestoCards from './RestoCards.js'
import './RestoList.css'
import CommentsLists from './CommentsList.js';

console.log(restaurants);

class RestoList extends React.Component {
    
    onclickHide(){
        this.setState({ hidden: "none"})
    }

    onclickShow(){
        this.setState({hidden : "block"})
    }
    
    render(){
        return(
            <div className="restoList">
                {restaurants.map((element) => (
                   <div key ={element.restaurantName}>
                       <RestoCards
                            name = {element.restaurantName}                                 
                            />
                        {element.ratings.map((e) => (
                            <CommentsLists
                                comment = {e.comment}
                            />
                        ))}
                    </div>
                ))}   
            </div>)
    }  
}

export default RestoList


