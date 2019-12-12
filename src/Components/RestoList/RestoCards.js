import React from 'react'
import './RestoCards.css'



class RestoCards extends React.Component {
    constructor({name, rateAverage, comments, props}){
        super(props);
        this.name = name;
        this.rateAverage = rateAverage;
        this.comments = [];
        this.state ={
            hidden : "none",
            starsAverage: null,            
        }
    }
    onclickHide(){
        this.setState({ hidden: "none"})
    }

    onclickShow(){
        this.setState({hidden : "flex"})
    }

    render(){
        let i = 0;
        return(
            <div className ="entireRestoCard" key={this.props.key}  
                onClick ={(e) => {
                    e.stopPropagation();
                    this.state.hidden === "none" ? this.onclickShow() : this.onclickHide();
                }}>
                
                <div className ="restoCard">
                    <p>{`${this.props.name}`}</p>
                    <div>{this.props.rateAverage}</div>
                </div>
                <div className ="comment-section" style={{display: this.state.hidden}}>

                </div>             
            </div>
        )
    }
}

export default RestoCards
