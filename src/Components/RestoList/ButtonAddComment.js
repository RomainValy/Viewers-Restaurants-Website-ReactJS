// Button d'ouverture du formulaire AddNewComment (nouveau commentaire)

import React from 'react'
import Modal from '.././Modal'
import AddNewComment from './addNewCommentForm'

class ButtonAddComment extends React.Component{
    
    render(){
        return <div >
                    <Modal
                        modalName = {"addComment"}
                        buttonText = {"ajoutez votre commentaire"}
                    >
                        <AddNewComment/>
                    </Modal>
                </div>
    }
}

export default ButtonAddComment