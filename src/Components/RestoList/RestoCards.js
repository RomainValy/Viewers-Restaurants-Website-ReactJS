import React from 'react'
import './RestoCards.css';


class RestoCards extends React.Component {
    constructor({name, hidden, props}){
        super(props);
        this.name = name;
        this.key = Number;
        this.hidden = hidden;
        this.state ={
            starsAverage: null,
            comments: [],
        }
              
    }


    render(){
        return(
            <div className ="restoCard" key={`${this.props.key}`}  
                onClick ={() => {this.props.hidden = "false" ? "true" : "false"
                console.log(this.props.hidden)
                }}>
                
                <div>
                    <p>{`${this.props.name}`}</p>
                    <div>{this.state.starsAverage}</div>
                </div>
                
                <div aria-hidden= {this.props.hidden}>

                    <p>{this.state.comments}</p>
                                                                 
                </div>
                                
            </div>
        )
    }
}

export default RestoCards
