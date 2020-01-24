import React from 'react'
import Context from '../RestaurantsContext'
import NewRestoForm from './NewRestoForm'
import Modal from '../Modal'

class ButtonAddResto extends React.Component{
    
    render(){
        return <div>
                    <Modal
                        modalName = {"addRestaurant"}
                        buttonText = {"ajoutez votre établissement"}
                    >
                        <Context.Consumer>
                          {({addResto}) => (
                            <NewRestoForm addResto = {addResto}/>   
                          )}  
                        </Context.Consumer>
                    
                                    
                        
                    </Modal>
                </div>
    }
}

export default ButtonAddResto