import React from 'react'


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