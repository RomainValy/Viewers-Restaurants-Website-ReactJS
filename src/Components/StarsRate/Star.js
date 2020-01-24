import React from 'react'
import './Star.css'
import EmptyStar from '../assets/star-empty.png'
import FullStar from'../assets/star-full.png'

class Star extends React.Component{
    constructor({imgSrc, altValue, fixed, ...props}){
        super(props)
        this.altValue = altValue
        this.state = {
            value : 0,
            imgSrc : EmptyStar
        }
        
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = e => {
        this.state.value === 0 
        ? this.setState({value : 1, imgSrc : FullStar}) 
        : this.setState({value : 0, imgSrc : EmptyStar})
    }

    render(){
        return(
            <>
               <img className = "Star"
                    onMouseOver = {this.handleChange}
                    onMouseLeave = {this.handleChange}
                    src = {this.state.imgSrc} 
                    alt= {this.props.altValue}
                    ></img>
            </>            
                
            
        )
    }
}

export default Star