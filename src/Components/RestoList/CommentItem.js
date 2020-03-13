import React from 'react'
import StarsRate from '../StarsRate/StarsRate'

import './CommentItem.css'
class CommentItem extends React.Component{
    constructor(comment, rate, key, props){
        super(props);
        this.rate = rate;
        this.comment = comment;
        this.key = key;
    }

    
    render(){
        return(
            <div className ="commentItem"> 
                <StarsRate fixed = {true} value = {this.props.rate}/>
                <p>{this.props.comment}</p>
            </div>
        )      
            
    }
}

export default CommentItem