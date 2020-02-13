import React from 'react'
import StarsRate from '../StarsRate/StarsRate'
import Context from '../RestaurantsContext'
import ButtonAddComment from './ButtonAddComment.js'
import './RestoCards.css'



class RestoCards extends React.Component {
    constructor(name, rateAverage, props){
        super(props);
        this.name = name;
        this.rateAverage = rateAverage;
    }
   

    render(){
        
        return(
                          
                <div className ="restoCard" >
                    <StarsRate fixed = {true} value = {this.props.rateAverage}/>
                    <p>{`${this.props.name}`}</p>
                        
                        {this.props.showDetails && this.props.children}
                    <Context.Consumer>
                    {({addComment, setCurrentResto}) => (
                            <ButtonAddComment addComment = {addComment}
                            onClick = {() => {
                                setCurrentResto({name: this.props.name})
                            }}                  
                            />
                        )}    
                        
                    </Context.Consumer>    
                    
                </div>
        )
    }
}

export default RestoCards
