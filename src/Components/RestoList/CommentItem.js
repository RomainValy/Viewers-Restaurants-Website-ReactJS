import React from 'react'

import './CommentItem.css'
class CommentItem extends React.Component{
    constructor({comment, rate, key, ...props}){
        super(props);
        this.rate = rate;
        this.comment = comment;
        this.key = key;
    }

    render(){
        return(
            <div className ="commentItem" key ={this.props.key}> 
                <p>{this.props.comment}</p>
            </div>
        )      
            
    }
}

export default CommentItem