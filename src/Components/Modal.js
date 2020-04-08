import React from 'react'
import './Modal.css'

class Modal extends React.Component {
    constructor(props){
        super(props);
        this.onOpen = props.onOpen || (() => null);
        this.modalName = "";
        this.buttonText = "";
        this.state= {
            modalAttr: "false",
            hiddenAttr: "true",
            visible: "none"
        }
    }    

    openModal = () => {
        this.setState({hiddenAttr: "true", visible: null, modalAttr: "true"})    
    }

    closeModal = () => {
        this.setState({hiddenAttr: "false", visible: "none", modalAttr: "false"})
        
    }

    render(){
        return (
            <div onClick = {(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}>
                <button onClick ={(e) => {
                    this.onOpen(); 
                    this.openModal(); 
                    e.preventDefault();
                    e.stopPropagation();
                }}
                className ="btn btn-outline-secondary"
                style = {{marginTop: "5%", marginBottom : "5%"}}
                    >{this.props.buttonText}</button>
                
                <aside id={this.props.modalName} 
                        className ="modal" 
                        aria-hidden = {this.state.hiddenAttr} 
                        role = "dialog"
                        aria-modal ={this.state.modalAttr}
                        style = {{display: this.state.visible}}>
                    
                    <div className ="modalWrapper">
                        {this.props.children}
                        <button 
                        className ="btn btn-danger close"
                        onClick = {e => {
                                this.closeModal()
                                e.preventDefault();
                                e.stopPropagation();   
                            }}
                                >X</button>
                    </div>

                    
                </aside>
            </div>    
        )          
    }
}

export default Modal;


