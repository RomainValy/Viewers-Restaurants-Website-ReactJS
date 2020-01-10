import React from 'react'
import './GoogleMap.css';


class GoogleMap extends React.Component {
    constructor({imgSrc, altValue, ...props}){
        super(props)
        this.imgSrc = imgSrc
        this.altValue = altValue

    }
    render(){
        return <img className="map" src= {this.props.imgSrc} alt = {`${this.props.altValue}`}/>
             
        
    }
}

export default GoogleMap