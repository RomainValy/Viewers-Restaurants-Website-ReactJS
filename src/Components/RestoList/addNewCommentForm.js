/** @format */

import React from "react";
import StarRatingComponent from "react-star-rating-component";
import EmptyStar from "../assets/star-empty.png";
import FullStar from "../assets/star-full.png";
import "./addNewCommentForm.css";

class AddNewCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.addComment = props.addComment;
    this.restaurantName = props.restaurantName;
    this.state = {
      stars: 1,
      comment: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  onStarClick = (nextValue) => this.setState({ stars: nextValue });

  handleChangeStar = (index, value) => {
    return (
      <img
        style={{ width: 30, height: 30 }}
        src={index > value ? EmptyStar : FullStar}
        alt='/#'></img>
    );
  };

  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.addComment(this.state);
  };

  render() {
    return (
      <div className='addCommentForm container'>
        <h3>Notez votre expérience: </h3>
        <StarRatingComponent
          name='notationSystem'
          starCount={5}
          renderStarIcon={this.handleChangeStar}
          value={this.state.stars}
          onStarClick={this.onStarClick.bind(this)}
        />

        <form>
          <div className='form-group formStyleComment'>
            <label htmlFor={this.props.restaurantName + "-comment"}>
              Dites nous en plus
            </label>
            <textarea
              className='form-control'
              defaultValue={this.state.comment}
              id={this.props.restaurantName + "-comment"}
              rows = "5"
              cols = "33"
              onChange={this.handleChange}
            />
            <button
              className='btn btn-primary submitFormButton'
              onClick={this.handleSubmit}>
              +
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddNewCommentForm;
