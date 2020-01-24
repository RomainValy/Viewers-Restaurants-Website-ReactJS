import React from 'react'
import Star from './Star'

class StarsRate extends React.Component{
    constructor({imgSrc, altValue, numberOfStars, fixed, ...props}){
        super(props)
        this.numberOfStars = 5
        this.fixed = true
        this.state = {
            empty: 5,
            full: 0,
            value: 0,
        }
    }



    render(){
        return(
            <div>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
                <Star></Star>
            </div>
        )
    }
}

export default StarsRate