import React, { Component } from 'react'
import markerImg from '../assets/map-marker-classic.png'

class Marker extends Component{
    
    constructor(text, lat, lng, ...props) {
        super(props);
        this.text = text;
        this.lat = lat;
        this.lng = lng;
    }
    

    render(){
        
        return(
            <img src={markerImg} style={{ height: '30px', width: '30px' }} alt="marker-classic"></img>
        );
    }  
}

export default Marker