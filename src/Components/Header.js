import React from 'react'

class Header extends React.Component {
    render(){
        return(
            <div className ="Header">
               
                <h1>I want to eat!</h1>
                {this.props.children}
            </div>
            
        )
    }
}

export default Header