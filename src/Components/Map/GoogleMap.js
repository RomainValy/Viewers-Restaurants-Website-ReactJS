import React from 'react'
import './GoogleMap.css';


class GoogleMap extends React.Component {
    constructor({imgSrc, props}){
        super(props)
        this.imgSrc = imgSrc

    }
    render(){
        return(
            <div className="map">
                <img src="#" alt="demo"></img>
            </div>  
        )
    }
}

export default GoogleMap