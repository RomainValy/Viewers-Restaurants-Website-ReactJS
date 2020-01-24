
import React from 'react'
import Context from '../RestaurantsContext'
import RestoCards from './RestoCards.js'
import './RestoList.css'
import CommentItem from './CommentItem.js';
import ButtonAddComment from './ButtonAddComment.js'



class RestoList extends React.Component {


    constructor ({props}){
        super({props});
        this.state ={
            changeClassName : "hide",
            idxShow : -1
        }
    }


    calculateRateAverage = (arr) =>{
        let result = [];
        arr.map((e) => {
            result.push(e.stars)
        });
        let average = result.length > 0 ? result.reduce((accumulator, currentValue) => accumulator + currentValue) : 0;
        return Math.round(average / arr.length)
    }      
    
    render(){ 
        
        return( 
            <Context.Consumer>
                {({restoList}) => (<div className="Restos">
                    
                    {restoList.map((element, idx) => (
                        <div className ="entireRestoCard" 
                        key ={element.restaurantName} 
                        onClick = {(e) =>{
                            e.stopPropagation()
                            this.state.idxShow === -1 ? this.setState({idxShow: idx}) : this.setState({idxShow: -1})
                            e.preventDefault()
                        }}    
                            >
                            
                                <RestoCards 
                                        onClick = {this.hideAndShow}
                                        name = {element.restaurantName}
                                        rateAverage = {element.ratings !== null ? this.calculateRateAverage(element.ratings): null}
                                        showDetails = {idx === this.state.idxShow} 
                                                    
                                    >
                                        <div className="comment-section">
                                            {element.ratings.map((e) => (
                                                <CommentItem
                                                    key = {e.comment}
                                                    rate ={e.stars}
                                                    comment = {e.comment}
                                                />
                                            ))}                                         
                                        </div>
                                        <ButtonAddComment/>       
                                </RestoCards>
                        </div>
                    ))}
                        
                                                                
                </div>)}
           
            </Context.Consumer>
                
            
            
        )
    }  
}

export default RestoList


