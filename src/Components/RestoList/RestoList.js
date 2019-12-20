import restaurants from '../../Data/restaurants.json'
import React, { Component } from 'react'
import RestoCards from './RestoCards.js'
import './RestoList.css'
import CommentItem from './CommentItem.js';
import ButtonAddComment from './ButtonAddComment.js'


class RestoList extends Component {
    constructor (props){
        super(props)
        this.state ={
            changeClassName : "hide",
            idxShow : -1
        }
    }

    calculateRateAverage(arr){
        let result = [];
        arr.map((e) => {
            result.push(e.stars)
        });
        let average = result.reduce((accumulator, currentValue) => accumulator + currentValue);
        return Math.round(average / arr.length)
    }      
     
    
    render(){
        return(
            <div className="restoList">
                {restaurants.map((element, idx) => (
                   <div className ="entireRestoCard" 
                    key ={element.restaurantName} 
                    onClick={() => this.setState({idxShow: idx})}
                        >
                       <RestoCards 
                            name = {element.restaurantName}
                            rateAverage = {this.calculateRateAverage(element.ratings)}
                            showDetails={idx === this.state.idxShow}                
                        >
                            <div className="comment-section">
                                {element.ratings.map((e) => (
                                    <CommentItem
                                        key = {e.comment}
                                        rate ={e.stars}
                                        comment = {e.comment}
                                    />
                                ))}
                                <ButtonAddComment/>                                         
                            </div>
                        </RestoCards>
                        
                    </div>
                ))}   
            </div>)
    }  
}

export default RestoList


