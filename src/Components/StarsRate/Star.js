import React from 'react'
import './Star.css'

class Star extends React.Component{
    constructor(imgSrc, altValue, props){
        super(props)
        this.altValue = altValue;
        this.imgSrc = imgSrc;
    }


    render(){
        return(
            <>
               <img className = "Star"
                    src = {this.props.imgSrc} 
                    alt= {this.props.altValue}
                ></img>
            </>            
                
            
        )
    }
}

export default Star