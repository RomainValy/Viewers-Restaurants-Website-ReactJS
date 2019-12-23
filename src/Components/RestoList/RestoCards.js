import React from 'react'
import './RestoCards.css'
import Rating from 'react-rating'


class RestoCards extends React.Component {
    constructor({name, rateAverage, ...props}){
        super(props);
        this.name = name;
        this.rateAverage = rateAverage;
        
    }
   

    render(){
        
        return(
                          
                <div className ="restoCard">
                    <p>{`${this.props.name}`}</p>
                    
                        <Rating 
                            initialRating= {this.props.rateAverage}
                            readonly
                            emptySymbol={<img src="../../star-empty.png" width="20px" eight="20px" alt="icon" />}
                            fullSymbol={<img src="../../star-full.png" width="20px" eight="20px" alt="icon" />}
                        />
                    
                </div>
        )
    }
}

export default RestoCards
