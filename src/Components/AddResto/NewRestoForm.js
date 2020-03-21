import React from 'react'
import Context from '../RestaurantsContext'
import './NewRestoForm.css'

class NewRestoForm extends React.Component  {
    
    constructor(props){
        super(props)
        this.addResto = props.addResto
        this.closeModal = props.closeModal
        this.restoList = props.restoList
        this.google = props.google
        this.lng = props.lng;
        this.lat = props.lat;
        this.state = {
            address: '',
            id: '',
            lat: this.props.lat,
            long: this.props.lng,
            ratings: [],
            restaurantName: '',
            rateAverage: 1,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentDidMount(){
        console.log(this.props.lat, this.props.lng,)
        this.importAdressFromLatLng()
    }

    onimportAdressFromLatLng = (results, status, google) => {
    
        
        if (status === 'OK') {
            console.log("NewRestoForm -> onimportAdressFromLatLng -> results", results)
            this.setState({address : results[0].formatted_address,
                           id : results[0].place_id
                        })
          //stock les données necessaires dans un objet qui correspond au state global
          
        } else {
          console.log("erreur du reseau :" + status);
        }
      };
    
      importAdressFromLatLng = (google, latLng) => {
        google = this.props.google;
        const service = new google.maps.Geocoder();;
        latLng = {lat: this.props.lat, lng: this.props.lng}
        const request = {'location' : latLng}
        console.log("RestoList -> importCommentOnClick -> request", request);
    
        // requete et appel de la fonction call back
        service.geocode(request, (results, status) =>
          this.onimportAdressFromLatLng.call(this, results, status, google)
        );
      };


    handleChange = e => {
       this.setState({
           [e.target.id]: e.target.value
       })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        let result = {}
        result = this.state
        this.addResto(result)
        console.log("restoList", this.props.restoList)
        
        this.closeModal();
        
    }


    render(){
        return ( <Context.Consumer>
            {({ restoList, addResto}) => (
            <div className= "newRestoForm">
                    <form>
                        
                        <h1>Votre établissement</h1>
                            <br/>
                        <div className="form-group formStyle">
                                <label htmlFor= "restaurantName"> Nom de l'établissement </label>
                                    <input type="text" className ="form-control" aria-describedby="inputGroup-sizing-lg" id="restaurantName" defaultValue={this.state.restaurantName} onChange ={this.handleChange} required/>
                            
                            <div >
                                <button className= "btn btn-primary submitForm" onClick = {this.handleSubmit}> + </button>
                            </div>
                                
                                   
                        </div>
                    </form> 
                    <button className="btn btn-danger close" onClick = {this.closeModal}>X</button>
            </div>
           )}
       
           </Context.Consumer>   
        )
    }

}

export default NewRestoForm