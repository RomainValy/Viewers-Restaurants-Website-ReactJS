import React from 'react'
import restaurants from '../../Data/restaurants.json'

class NewResto extends React.Component  {
    
    constructor(props){
        super(props)
        this.state = {
            restaurantName: null,
            adress: null,
            lat: null,
            long: null,
            ratings: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
       this.setState({
           [e.target.id]: e.target.value
       })
    }

    
    handleSubmit = () => {
        restaurants.push(this.state)
        console.log(restaurants)
    }


    render(){
        return (
                <div>
                    <form onSubmit ={this.handleSubmit}>
                        <h1>Votre établissement</h1>
                            
                    
                        <label htmlFor= "restaurantName"> Nom de l'établissement </label>
                            <input type="text" id="restaurantName" onChange ={this.handleChange} required/>
                        
                        <label htmlFor="adress"> Adresse </label>
                            <input type="text" id="adress" onChange={this.handleChange} required/>
                        
                            <button> Ajouter mon restaurant </button>
                            
                            
                            
                    </form>   
                </div>
               
            
            
        )
    }

}

export default NewResto