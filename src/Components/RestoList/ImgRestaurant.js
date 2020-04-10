/** @format */

import React, { Component } from "react";
import axios from "axios";

class ImgRestaurant extends Component {
  constructor(lat, lng, ApiKey, props) {
    super(props);
    this.lat = lat;
    this.lng = lng;
    this.ApiKey = ApiKey;
    this.state = {
      imgSrc: "",
      key: "",
    };
  }
  /**
   * appel de Google.StreetView pour charger la photot correspondante
   */
  componentDidMount() {
    const request = `https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${this.props.lat},${this.props.lng}&key=${this.props.ApiKey}`;

    axios
      .get(request)

      .then((response) => {
        this.setState({
          imgSrc: response.config.url,
          key: JSON.stringify(request),
        });
      })
      .catch((error) => {
        ("TCL: ImgRestaurant -> componentDidMount -> error", error)(
          error.response.data.error
        );
      })
      .then(() => {
        return (
          <div>
            <p>la requete n'a pas aboutie</p>
          </div>
        );
      });
  }

  render() {
    return (
      <div style ={{marginTop: "20px", marginBottom: "20px"}}>
        <img key={this.state.key} src={this.state.imgSrc} alt={"loading..."}></img>
      </div>
    );
  }
}

export default ImgRestaurant;
