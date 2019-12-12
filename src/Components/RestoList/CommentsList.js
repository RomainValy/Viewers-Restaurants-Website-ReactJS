import React from 'react'
import Stars from './Star.js'

class CommentsList extends React.Component{
    constructor({comment, rate, props}){
        super(props)
        this.rate = rate;
        this.comment = comment;
    }

    render(){
        return  <li> 
                        <Stars/>
                        <p>{this.props.rate}</p>
                        <p>{this.props.comment}</p>
                    </li>
            
    }
}

export default CommentsList