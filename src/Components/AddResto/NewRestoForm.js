import React from 'react'


class NewResto extends React.Component  {
    
    constructor(props){
        super(props)
        this.addResto = props.addResto
        this.state = {
            restaurantName: '',
            adress: '',
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