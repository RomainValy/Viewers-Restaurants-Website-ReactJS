import React from 'react'
import Rating from 'react-rating'

class AddNewCommentForm extends React.Component  {
    constructor({props}){
        super(props)
        this.state = {
            rate : 0,
            comment: ''    
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

    }
    render(){
        return (
            
               <form onSubmit ={this.handleSubmit}>
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
                            <label htmlFor="comment">Dites nous en plus</label>
                            <textarea id="comment" onChange={this.handleChange}/>
                            <button>Je dépose mon avis</button>
                        </div>
                        
                </form> 
            
            
        )
    }

}

export default AddNewCommentForm