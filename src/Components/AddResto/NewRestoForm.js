/** @format */

import React from "react";
import Context from "../RestaurantsContext";
import "./NewRestoForm.css";

class NewRestoForm extends React.Component {
  constructor(props) {
    super(props);
    this.addResto = props.addResto;
    this.closeModal = props.closeModal;
    this.restoList = props.restoList;
    this.google = props.google;
    this.lng = props.lng;
    this.lat = props.lat;
    this.state = {
      address: "",
      id: "",
      lat: this.props.lat,
      long: this.props.lng,
      ratings: [],
      restaurantName: "",
      rateAverage: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.importAdressFromLatLng();
  }

  onimportAdressFromLatLng(results, status, google) {
    if (status === "OK") {
      this.setState({
        address: results[0].formatted_address,
        id: results[0].place_id,
      });
      //stock les données necessaires dans un objet qui correspond au state global
    } else {
      console.log("erreur du reseau :" + status);
    }
  }

  importAdressFromLatLng(google, latLng) {
    google = this.props.google;
    const service = new google.maps.Geocoder();
    latLng = { lat: this.props.lat, lng: this.props.lng };
    const request = { location: latLng };

    // requete et appel de la fonction call back
    service.geocode(request, (results, status) =>
      this.onimportAdressFromLatLng.call(this, results, status, google)
    );
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let result = {};
    result = this.state;
    this.addResto(result);
    this.closeModal();
  };

  render() {
    return (
      <Context.Consumer>
        {({ restoList, addResto }) => (
          <div className='newRestoForm container'>
            <h3>Votre établissement</h3>
            <form>
              <div className='form-group formStyleComment'>
                <label htmlFor='restaurantName'> Nom de l'établissement </label>
                <input
                  type='text'
                  className='form-control'
                  aria-describedby='inputGroup-sizing-lg'
                  id='restaurantName'
                  defaultValue={this.state.restaurantName}
                  onChange={this.handleChange}
                  style ={{marginBottom: '30px', padding: '10px'}}
                  size = '30'
                  required
                />
                  <button
                    className='btn btn-primary submitForm'
                    onClick={this.handleSubmit}>
                    {" "}
                    +{" "}
                  </button>
              </div>
            </form>
            <button className='btn btn-danger close' onClick={this.closeModal}>
              X
            </button>
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default NewRestoForm;
