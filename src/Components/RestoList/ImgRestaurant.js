import React, {Component} from 'react'
import axios from 'axios'

class ImgRestaurant extends Component {
    constructor(lat, lng, ApiKey, props){
       super(props)
       this.lat = lat;
       this.lng = lng;
       this.ApiKey = ApiKey
       this.state = {
           imgSrc : ''
       }
    }

    componentDidMount(){
        const request = `https://maps.googleapis.com/maps/api/streetview?size=200x200&location=${this.props.lat},${this.props.lng}&key=${this.props.ApiKey}`
        
        
        axios.get(request)
        
        .then((response) => {
                console.log(response);
                this.setState({imgSrc : request})
            })
            .catch((error) => {
                
                console.log(error);
                console.log(error.response.data.error) 
                
            })
            .then(() => {
                return <div></div>
            })
    }

    render(){
        return(
            <div>
                <img src = {this.state.imgSrc} alt ={"#"}></img>
            </div>
        )
    }
}


export default ImgRestaurant