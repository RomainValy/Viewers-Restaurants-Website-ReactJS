import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import EmptyStar from '../assets/star-empty.png'
import FullStar from'../assets/star-full.png'

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
        <img style={{width : 30, height: 30}} src ={index > value ? EmptyStar : FullStar}></img>  
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
        const { rating } = this.state.stars;
        return (
            <>
                <div>
                            <h2>Rating from state: {rating}</h2>
                                <StarRatingComponent 
                               
                                name="notationSystem" 
                                starCount={5}
                                renderStarIcon = {this.handleChangeStar}
                                value={this.state.stars}
                                onStarClick={this.onStarClick.bind(this)}
                                />
                </div>
            
               <form>
                    <h1>Votre expérience</h1>
                        
                        <div>
                            <label htmlFor="comment">Dites nous en plus</label>
                            <textarea defaultValue= {this.state.comment} id="comment" onChange={this.handleChange}/>
                            <button onClick = {this.handleSubmit}
                                >Je dépose mon avis</button>
                        </div>
                        
                </form> 
             </>
            
        )
    }

}

export default AddNewCommentForm