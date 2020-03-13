import React from "react";
import Context from "../RestaurantsContext";
import RestoCards from "./RestoCards.js";
import "./RestoList.css";
import CommentItem from "./CommentItem.js";
import ImgRestaurant from "./ImgRestaurant";
import axios from 'axios'

class RestoList extends React.Component {
  constructor(props) {
    super(props);
    this.google = props.google
    this.map = props.map
    this.state = {
      ClassName: "hide",
      idxShow: -1,
      currentComments : []
    };
  }

  calculateRateAverage = arr => {
    let result = [];
    if (Array.isArray(arr) === true) {
      arr.map(e => result.push(e.stars));

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
  
  onimportCommentOnClick = (results, status, google) => {
    console.log("RestoList -> onimportCommentOnClick -> results", results)
      
      //let finalResults = [];
  
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        //stock les données necessaires dans un objet qui correspond au state global
        console.log("results requete google place", results.reviews);
        // results.forEach(e => {
        //   finalResults.push({
            
        //   });
        }else {
          console.log("erreur du reseau :" + status);
        }
        // application de la methode d'ajout de restaurant dispo dans le state globale 
    };
  
  importCommentOnClick = (e, google, map) => {
    console.log("RestoList -> importCommentOnClick -> e", e)
    const service = new google.maps.places.PlacesService(map);
    
    const request = {
      placeId: e.id,
      fields: ['reviews.rating' , 'reviews.text']
    };
    console.log("RestoList -> importCommentOnClick -> request", request)

    // requete et appel de la fonction call back
    service.getDetails(request, (results, status) =>
      
      this.onimportCommentOnClick.call(this, results, status, google)
    );

    // initalise la fonction callback qui va traité la reponse de l'API
  };
  

  
  // 
 
  render() {
    return (
      <Context.Consumer>
        {({ restoList, apiKey, map, google}) => (
          <div className='Restos'>
            {restoList.map((element, idx) => (
           
              <div                
                className='entireRestoCard'
                key={`${element.lat} - ${element.lng} - ${element.id}`}
                onClick={e => {
                  this.importCommentOnClick(element, google, map)
                  e.stopPropagation();
                  this.state.idxShow === -1
                    ? this.setState({ idxShow: idx })
                    : this.setState({ idxShow: -1 });
                    console.log("RestoList -> render -> idxShow", this.state.idxShow)
                  e.preventDefault();
                }}>
                
                <RestoCards
                  name={element.restaurantName}
                  address={element.address}
                  rateAverage={
                    element.ratings !== null || undefined
                      ? this.calculateRateAverage(element.ratings)
                      : 0
                  }
                  showDetails={idx === this.state.idxShow}>
                  
                  <div className='comment-section'>
                    {this.state.idxShow !== -1 &&(
                    <ImgRestaurant
                      lat={element.lat}
                      lng={element.long}
                      ApiKey={apiKey}
                      alt={element.restaurantName}/>
                      )}

                    {Array.isArray(element.ratings) === true
                      && element.ratings.map(e => (
                          <CommentItem
                            key={`${e.comment} - ${element.ratings.length}`}
                            rate={e.stars}
                            comment={e.comment}
                          />
                        ))
                      }
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
