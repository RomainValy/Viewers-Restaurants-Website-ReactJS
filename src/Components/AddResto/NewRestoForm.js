import React from 'react'


class NewResto extends React.Component  {
    
    constructor(props){
        super(props)
        this.addResto = props.addResto
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

    
    handleSubmit = e => {
        e.preventDefault();
        this.addResto(this.state)
        console.log(this.props.list)
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