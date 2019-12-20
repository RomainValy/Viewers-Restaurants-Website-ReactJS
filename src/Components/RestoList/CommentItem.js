import React from 'react'
import Rating from 'react-rating'
import './CommentItem.css'
class CommentItem extends React.Component{
    constructor({comment, rate, key, props}){
        super(props)
        this.rate = rate;
        this.comment = comment;
        this.key = key;
    }

    render(){
        return(
            <div className ="commentItem" key ={this.props.key}> 
                <Rating
                    initialRating= {this.props.rate}
                    readonly
                    emptySymbol={<img src="../../star-empty.png" 
                                        width="20px" 
                                        eight="20px" 
                                        alt="icon" />}
                    fullSymbol={<img src="../../star-full.png" 
                                        width="20px" 
                                        eight="20px" 
                                        alt="icon" />}
                />
                <p>{this.props.comment}</p>
            </div>
        )      
            
    }
}

export default CommentItem