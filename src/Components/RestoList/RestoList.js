/** @format */

import React from "react";
import Context from "../RestaurantsContext";
import RestoCards from "./RestoCards.js";
import "./RestoList.css";
import CommentItem from "./CommentItem.js";
import ImgRestaurant from "./ImgRestaurant";

class RestoList extends React.Component {
  constructor(props) {
    super(props);
    this.google = props.google;
    this.addComment = props.addComment;
    this.setCurrentResto = props.setCurrentResto;
    this.state = {
      ClassName: "hide",
      idxShow: -1,
      currentComments: [],
    };
  };

  calculateRateAverage = (arr) => {
    let result = [];
    if (Array.isArray(arr) === true) {
      arr.map((e) => result.push(e.stars));

      let average =
        result.length > 0
          ? result.reduce(
              (accumulator, currentValue) => accumulator + currentValue
            )
          : null;
      return Math.round(average / arr.length);
    } else {
      return Math.round(arr);
    }
  };

  activateImportComment = (element, google, map, addComment) => {
    if (this.state.idxShow === -1) {
      this.importCommentOnClick(element, google, map, addComment);
    } else {
      return null;
    }
  };

  onimportCommentOnClick = (results, status, google) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      //stock les données necessaires dans un objet qui correspond au state global
      (results.reviews || []).forEach((e) => {
        this.addComment({
          stars: e.rating,
          comment: e.text,
        });
      });
    } else {
      console.log("erreur du reseau :" + status);
    }
  };

  importCommentOnClick = (e, google, map) => {
    const service = new google.maps.places.PlacesService(map);

    const request = {
      placeId: e.id,
      fields: ["reviews.rating", "reviews.text"],
    };

    // requete et appel de la fonction call back
    service.getDetails(request, (results, status) =>
      this.onimportCommentOnClick.call(this, results, status, google)
    );
  };

  hideAndSick = (idx) => {
    this.state.idxShow === -1
      ? this.setState({ idxShow: idx })
      : this.setState({ idxShow: -1 });
  };
  render() {
    return (
      <Context.Consumer>
        {({
          restoList,
          apiKey,
          map,
          google,
          addComment,
          setCurrentResto,
          currentResto,
        }) => (
          <div className='Restos'>
            {restoList.map((element, idx) => (
              <div
                className='entireRestoCard'
                key={`${element.lat} - ${element.lng} - ${element.id}`}
                onClick={(e) => {
                  setCurrentResto({ name: element.restaurantName });
                  e.stopPropagation();
                  this.hideAndSick(idx);
                  this.activateImportComment(
                    element,
                    google,
                    map,
                    addComment,
                    currentResto
                  );
                  e.preventDefault();
                }}>
                <RestoCards
                  name={element.restaurantName}
                  address={element.address}
                  rateAverage={
                    !element.rateAverage
                      ? this.calculateRateAverage(element.ratings)
                      : element.rateAverage
                  }
                  showDetails={idx === this.state.idxShow}>
                  <div className='comment-section'>
                    {this.state.idxShow !== -1 && (
                      <ImgRestaurant
                        lat={element.lat}
                        lng={element.long}
                        ApiKey={apiKey}
                        alt={element.restaurantName}
                      />
                    )}
                    {element.ratings.map((e) => (
                      <CommentItem
                        key={`${e.comment} - ${element.ratings.length}`}
                        rate={e.stars}
                        comment={e.comment}
                      />
                    ))}
                  </div>
                </RestoCards>
              </div>
            ))}
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default RestoList;
