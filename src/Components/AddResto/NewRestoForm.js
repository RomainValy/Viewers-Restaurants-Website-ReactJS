import React from 'react'


class NewResto extends React.Component  {
    
    constructor(props){
        super(props)
        this.addResto = props.addResto
        this.closeModal = props.closeModal
        this.restoList = props.restoList
        this.lng = props.lng;
        this.lat = props.lat;
        this.state = {
            restaurantName: '',
            adress: '',
            lat: this.props.lat,
            long: this.props.lng,
            ratings: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
       this.setState({
           [e.target.id]: e.target.value
       })
    }

    
    handleSubmit = e => {
        e.preventDefault();
        if(this.state.restaurantName)
        this.addResto(this.state)
        console.log(this.props.restoList)
        console.log(this.state)
        this.closeModal();
        
    }


    render(){
        return (
            
                    <form>
                        <h1>Votre établissement</h1>
                            
                        <div>
                            <label htmlFor= "restaurantName"> Nom de l'établissement </label>
                                <input type="text" id="restaurantName" defaultValue={this.state.restaurantName} onChange ={this.handleChange} required/>
                        </div>
                        <div>
                            <label htmlFor="adress"> Adresse </label>
                                <input type="text" id="adress" defaultValue={this.state.adress} onChange={this.handleChange} required/>
                            
                                <button onClick = {this.handleSubmit}> Ajouter mon restaurant </button>
                        
                        </div>   
                    
                    </form> 
              
        )
    }

}

export default NewResto