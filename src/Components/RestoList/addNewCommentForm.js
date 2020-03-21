import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import EmptyStar from '../assets/star-empty.png'
import FullStar from'../assets/star-full.png'
import './addNewCommentForm.css'

class AddNewCommentForm extends React.Component  {
    constructor(props){
        super(props)
        this.addComment = props.addComment
        this.state = {
            stars : 1,
            comment: ''    
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    onStarClick(nextValue, prevValue, name) {
        this.setState({stars: nextValue});
        console.log(this.state.stars)
      }
    
    handleChangeStar = (index, value) => {
    return (
        <img style={{width : 30, height: 30}} src ={index > value ? EmptyStar : FullStar} alt="#"></img>  
        )
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
            <div className= "addCommentForm" >
             
           
                            <h3>Notez votre expérience: </h3>
                                <StarRatingComponent 
                               
                                name="notationSystem" 
                                starCount={5}
                                renderStarIcon = {this.handleChangeStar}
                                value={this.state.stars}
                                onStarClick={this.onStarClick.bind(this)}
                                />
                
            
                <form>
                        <div className="form-group formStyleComment">
                            <label htmlFor="comment">Dites nous en plus</label>
                            <textarea className="form-control" defaultValue= {this.state.comment} id="comment" onChange={this.handleChange}/>
                            <button className="btn btn-primary submitFormButton" onClick = {this.handleSubmit}
                                >+</button>
                        </div>
                        
                </form> 
             </div>
            
        )
    }

}

export default AddNewCommentForm