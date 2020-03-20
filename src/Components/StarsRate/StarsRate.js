import React from 'react'
import Star from './Star'
import EmptyStar from '../assets/star-empty.png'
import FullStar from'../assets/star-full.png'
import './StarRate.css'


class StarsRate extends React.Component{
    constructor(props){
        super(props)
        this.fixed = true;
        this.value = 0;
        this.state ={
            empty: EmptyStar,
            full: FullStar
        }
        
    }

    configStars = () => {
        let result = [];
        for (let i = 1; i <= 5 ; i++){
             
            result.push(
                this.props.fixed === true ?
                <Star   
                    key = {i}
                    imgSrc = {i <= this.props.value ? FullStar : EmptyStar}
                    alt = {i <= this.props.value ? "full" : "empty"}
                ></Star> :
                <Star
                    key = {i}
                    imgSrc = {this.state.empty}
                    alt = {"empty"}
                ></Star> 
            ) 


        }
        return result
    }
    
    render(){

        const starsMap = this.configStars()

        return(
            <div className ="starsRate">
                {starsMap}
            </div>
        )
    }
}

export default StarsRate