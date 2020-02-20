
import React from 'react'
import Context from '../RestaurantsContext'
import RestoCards from './RestoCards.js'
import './RestoList.css'
import CommentItem from './CommentItem.js'
import ImgRestaurant from './ImgRestaurant'


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
        if(Array.isArray(arr) === true){
            arr.map((e) => {
                result.push(e.stars)
            });
            let average = result.length > 0 ? result.reduce((accumulator, currentValue) => accumulator + currentValue) : null;
            return Math.round(average / arr.length)
        } else {
            return Math.round(arr)
        }
        
        
    }      
    
    render(){ 
        
        return( 
            <Context.Consumer>
                {({restoList}) => (
                    <div className="Restos">
                    
                    {restoList.map((element, idx) => (
                        <div className ="entireRestoCard" 
                        key ={`${element.lat} - ${element.lng} - ${element.index}`} 
                        onClick = {(e) => {
                            e.stopPropagation()
                            this.state.idxShow === -1 ? this.setState({idxShow: idx}) : this.setState({idxShow: -1})
                            e.preventDefault()
                        }}    
                       
                            >
                            
                                <RestoCards
                                        
                                        name = {element.restaurantName}
                                        address = {element.address}
                                        rateAverage = {element.ratings !== null || undefined ? this.calculateRateAverage(element.ratings): 0}
                                        showDetails = {idx === this.state.idxShow} 

                                    >
                                        <div className= "comment-section">
                                            <ImgRestaurant
                                                lat = {element.lat}
                                                lng = {element.long}
                                                ApiKey = "#"
                                                alt = {element.restaurantName}
                                                >
                                            </ImgRestaurant> 

                                                {Array.isArray(element.ratings) === true ? 
                                                    element.ratings.map((e) => (
                                                        <CommentItem
                                                            key = { `${e.index} - ${element.ratings.length}`}
                                                            rate ={e.stars}
                                                            comment = {e.comment}
                                                        />
                                                )) : null
                                            }
                                                                                     
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


