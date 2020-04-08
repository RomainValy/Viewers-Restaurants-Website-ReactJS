/** @format */

// Button d'ouverture du formulaire AddNewComment (nouveau commentaire)

import React from "react";
import Context from "../RestaurantsContext";
import AddNewCommentForm from "./addNewCommentForm";
import Modal from ".././Modal";
class ButtonAddComment extends React.Component {
  constructor(props) {
    super(props);
    this.restaurantName = props.restaurantName;
  }

  render() {
    return (
      <>
        <Context.Consumer>
          {({ addComment }) => (
            <Modal
              onOpen={this.props.onClick}
              modalName={"addComment"}
              buttonText={"ajoutez votre commentaire"}>
              <AddNewCommentForm
                restaurantName={this.props.restaurantName}
                addComment={addComment}
              />
            </Modal>
          )}
        </Context.Consumer>
      </>
    );
  }
}

export default ButtonAddComment;
