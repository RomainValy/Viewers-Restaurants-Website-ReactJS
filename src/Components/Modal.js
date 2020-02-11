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
                    >{this.props.buttonText}</button>
                
                <aside id={this.props.modalName} 
                        className ="modal" 
                        aria-hidden = {this.state.hiddenAttr} 
                        role = "dialog"
                        aria-modal ={this.state.modalAttr}
                        style = {{display: this.state.visible}}>
                    
                    <div className ="modalWrapper">
                        {this.props.children}
                        <button onClick = {(e) => {
                                this.closeModal()
                                e.preventDefault();
                                e.stopPropagation();   
                            }}
                                >Close</button>
                    </div>

                    
                </aside>
            </div>    
        )          
    }
}

export default Modal;


