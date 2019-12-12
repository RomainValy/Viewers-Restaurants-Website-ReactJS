// Button d'ouverture du formulaire AddNewComment (nouveau commentaire)

import React from 'react'

class ButtonAddView extends React.Component{
    
    render(){
        return <div>
                    <button onclick = {(e) => {
                        e.stopPropagation();
                        console.log(this);
                    }}> cliquez-moi 
                    </button>
                </div>
    }
}

export default ButtonAddView