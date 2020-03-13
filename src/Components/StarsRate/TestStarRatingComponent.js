import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import EmptyStar from '../assets/star-empty.png'
import FullStar from'../assets/star-full.png'

class StarRatinComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  handleChangeStar = (index, value) => {
    return (
        <img style={{width : 30, height: 30}} src ={index > value ? EmptyStar : FullStar}></img>  
        )
    }
  

  render() {
    const { rating } = this.state;
    
    return (                
      <div>
        <h2>Rating from state: {rating}</h2>
        <StarRatingComponent 
          name="notationSystem" 
          starCount={5}
          renderStarIcon = {this.handleChangeStar}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

export default StarRatinComponent