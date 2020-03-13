import React, {Component} from 'react'
import axios from 'axios'

class ImgRestaurant extends Component {
    constructor(lat, lng, ApiKey, props){
       super(props)
       this.lat = lat;
       this.lng = lng;
       this.ApiKey = ApiKey
       this.state = {
           imgSrc : '',
           key: ''
       }
    }

    componentDidMount(){
        const request = `https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${this.props.lat},${this.props.lng}&key=${this.props.ApiKey}`
        
        
        axios.get(request)
        
        .then((response) => {
                console.log("TCL: ImgRestaurant -> componentDidMount -> response", response.status)
                this.setState({
                    imgSrc : request,
                    key: JSON.stringify(request)
                })
            })
            .catch((error) => {
                console.log("TCL: ImgRestaurant -> componentDidMount -> error", error)
                console.log(error.response.data.error) 
                
            })
            .then(() => {
                return <div>
                    <p>la requete n'a pas aboutie</p>
                </div>
            })
    }

    render(){
        return(
            <div>
                <img key={this.state.key} src = {this.state.imgSrc} alt ={"#"}></img>
            </div>
        )
    }
}


export default ImgRestaurant