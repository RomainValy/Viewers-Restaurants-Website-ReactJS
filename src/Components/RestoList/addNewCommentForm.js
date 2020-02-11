import React from 'react'
import StarsRate from '../StarsRate/StarsRate'


class AddNewCommentForm extends React.Component  {
    constructor(props){
        super(props)
        this.addComment = props.addComment
        console.info(props.addComment)
        this.state = {
            stars : 0,
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
        this.addComment(this.state);
        console.log(this.state)
    }


    render(){
        return (
            
               <form>
                    <h1>Votre expérience</h1>
                        <div>
                        <label htmlFor="rate">votre note</label>
                        <StarsRate/>
                        </div>
                        <div>
                            <label htmlFor="comment">Dites nous en plus</label>
                            <textarea defaultValue= {this.state.comment} id="comment" onChange={this.handleChange}/>
                            <button onClick = {this.handleSubmit}
                                >Je dépose mon avis</button>
                        </div>
                        
                </form> 
            
            
        )
    }

}

export default AddNewCommentForm