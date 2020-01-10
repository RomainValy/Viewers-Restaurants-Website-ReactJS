import React from 'react'
import NewRestoForm from './NewRestoForm'
import Modal from '../Modal'

class ButtonAddResto extends React.Component{
    
    render(){
        return <div>
                    <Modal
                        modalName = {"addRestaurant"}
                        buttonText = {"ajoutez votre établissement"}
                    >
                        <NewRestoForm/>
                    </Modal>
                </div>
    }
}

export default ButtonAddResto