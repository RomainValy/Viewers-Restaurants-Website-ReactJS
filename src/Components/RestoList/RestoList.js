
import React from 'react'
import Context from '../RestaurantsContext'
import RestoCards from './RestoCards.js'
import './RestoList.css'
import CommentItem from './CommentItem.js'


class RestoList extends React.Component {


    constructor (props){
        super(props);
        this.state ={
            ClassName : "hide",
            idxShow : -1
        }
    }

    
    calculateRateAverage = (arr) =>{
        let result = [];
        arr.map((e) => {
            result.push(e.stars)
        });
        let average = result.length > 0 ? result.reduce((accumulator, currentValue) => accumulator + currentValue) : null;
        return Math.round(average / arr.length)
    }      
    
    render(){ 
        
        return( 
            <Context.Consumer>
                {({restoList}) => (
                    <div className="Restos">
                    
                    {restoList.map((element, idx) => (
                        <div className ="entireRestoCard" 
                        key ={`${element.restaurantName} - ${element.ratings.length}`} 
                        onClick = {(e) => {
                            e.stopPropagation()
                            this.state.idxShow === -1 ? this.setState({idxShow: idx}) : this.setState({idxShow: -1})
                            e.preventDefault()
                        }}    
                       
                            >
                            
                                <RestoCards
                                        
                                        name = {element.restaurantName}
                                        rateAverage = {element.ratings !== null ? this.calculateRateAverage(element.ratings): 0}
                                        showDetails = {idx === this.state.idxShow} 
                                                    
                                    >
                                        <div className= "comment-section">
                                       
                                            {element.ratings.map((e) => (
                                                <CommentItem
                                                    key = { `${e.comment} - ${element.ratings.length}`}
                                                    rate ={e.stars}
                                                    comment = {e.comment}
                                                />
                                            ))}
                                                                                     
                                        </div>         
                                </RestoCards>
                                
                        </div>
                        
                    ))}
                        
                                                                
                </div>)}
           
            </Context.Consumer>
                
            
            
        )
    }  
}

export default RestoList


