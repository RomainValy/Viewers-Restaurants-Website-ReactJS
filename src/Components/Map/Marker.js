import React, { Component } from 'react'
//import markerImg from '../assets/map-marker-classic.png';
import './marker.css'
class Marker extends Component{
    
    constructor({text, lat, lng, klass, props}) {
        super(props);
        this.text = text;
        this.lat = lat;
        this.lng = lng;
        this.klass = klass
    }
    
    render() {
        return (
           <div className = {this.props.klass}>
              {this.props.text}
           </div>
        );
      }

    // render(){
    //         {/* // <img src={markerImg} style={{ height: '30px', width: '30px' }} alt="marker-classic"></img> */}
    //     );
    //}  
}

export default Marker