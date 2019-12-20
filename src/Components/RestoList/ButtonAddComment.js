// Button d'ouverture du formulaire AddNewComment (nouveau commentaire)

import React from 'react'



class ButtonAddComment extends React.Component{
    
    render(){
        return <div>
                    <button onClick = {(e) => {
                        e.stopPropagation();
                    }}> Ajoutez votre avis
                    </button>
                </div>
    }
}

export default ButtonAddComment