import restaurants from '../../Data/restaurants.json'
import React from 'react'
import RestoCards from './RestoCards.js'
import './RestoList.css'
import CommentItem from './CommentItem.js';
import ButtonAddComment from './ButtonAddComment.js'


class RestoList extends React.Component {
    constructor ({...props}){
        super(props);
        this.state ={
            changeClassName : "hide"
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
     
    

    hideAndShow(){
        this.state.changeClassName === "hide" ? this.setState({changeClassName : "comment-section"}) : this.setState({changeClassName : "hide"});
    }
    
    render(){
        return(
            <div className="restoList">
                {restaurants.map((element) => (
                   <div className ="entireRestoCard" 
                    key ={element.restaurantName} 
                        onClick ={(e) => {
                            e.stopPropagation();
                            this.hideAndShow();
                        }}
                         
                        >
                       <RestoCards 
                            name = {element.restaurantName}
                            rateAverage = {this.calculateRateAverage(element.ratings)}
                                                 
                        />
                        
                        <div className = {this.state.changeClassName}>
                            {element.ratings.map((e) => (
                                <CommentItem
                                    key = {e.comment}
                                    rate ={e.stars}
                                    comment = {e.comment}
                                />
                            ))}
                         <ButtonAddComment/>                                         
                        </div>
                        
                    </div>
                ))}   
            </div>)
    }  
}

export default RestoList


