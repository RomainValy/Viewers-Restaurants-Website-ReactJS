import React from 'react'
import Context from '../RestaurantsContext'
import NewRestoForm from './NewRestoForm'
import Modal from '../Modal'

class ButtonAddResto extends React.Component{
    
    render(){
        return <div><Context.Consumer>
                      {({addResto}) => (
                        <Modal
                            onOpen  = {this.props.onClick}
                            modalName = {"addRestaurant"}
                            buttonText = {"ajoutez votre établissement"}
                        >
                            
                                <NewRestoForm addResto = {addResto}/>   
                        </Modal>
                      )}
                    </Context.Consumer>
                </div>
    }
}

export default ButtonAddResto