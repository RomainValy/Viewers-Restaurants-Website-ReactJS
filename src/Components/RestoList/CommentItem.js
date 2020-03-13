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

    //importCommentOnClick = (e, apiKey) => {
        // console.log("RestoList -> importCommentOnClick -> apiKey", apiKey)
        // console.log("RestoList -> importCommentOnClick -> e.id", e.id)
      
          
        //   const request = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${e.id}&fields=review&key=${apiKey}`
              
              
        //       axios.get(request)
              
        //       .then((response) => {
        //       console.log("RestoList -> importCommentOnClick -> response", response)
                      
        //           })
        //           .catch((error) => {
        //               console.log("RestoList -> importCommentOnClick -> error", error)
                      
        //           })
        //           .then(() => {
        //               return <div>
        //                   <p>la requete n'a pas aboutie</p>
        //               </div>
        //           })
        // }

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