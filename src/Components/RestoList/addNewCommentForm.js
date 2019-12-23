import React from 'react'
import Rating from 'react-rating'

class AddNewCommentForm extends React.Component  {
    constructor({...props}){
        super(props)
        this.state = {
            rate : 0    
        }
    }
    render(){
        return (
            
               <form method="post">
                    <h1>Votre expérience</h1>
                        <div>
                        <Rating
                            start = {0}
                            stop = {5}
                            initialRating= {0}
                            
                            emptySymbol={<img src="../../star-empty.png" 
                                                width="20px" 
                                                eight="20px" 
                                                alt="icon" />}
                            fullSymbol={<img src="../../star-full.png" 
                                                width="20px" 
                                                eight="20px" 
                                                alt="icon" />}
                            
                        />
                        </div>
                        <div>
                            <label for="comment">Dites nous en plus</label>
                            <input type="text" id="comment" name="customerComment"></input>
                        </div>
                </form> 
            
            
        )
    }

}

export default AddNewCommentForm