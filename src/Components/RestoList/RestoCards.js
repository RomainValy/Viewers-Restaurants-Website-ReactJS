import React from 'react'
import StarsRate from '../StarsRate/StarsRate'
import './RestoCards.css'



class RestoCards extends React.Component {
    constructor({name, rateAverage, ...props}){
        super(props);
        this.name = name;
        this.rateAverage = rateAverage;
    }
   

    render(){
        
        return(
                          
                <div className ="restoCard" >
                    <StarsRate/>
                    <p>{`${this.props.name}`}</p>
                    
                        {this.props.showDetails && this.props.children}
                </div>
        )
    }
}

export default RestoCards
