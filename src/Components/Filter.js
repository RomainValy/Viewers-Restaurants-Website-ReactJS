import React, { Component } from 'react'


class Filter extends Component {
    constructor(props) {
      super(props);
      this.setFilterValue = props.setFilterValue
      this.state = {
          value: {
            min: 0,
            max: 5
          },
          maxOption : [0, 1, 2, 3, 4, 5],
          minOption : [0, 1, 2, 3, 4, 5],
      }
    }
  
    optionMax = (min, max) => {
      
      let result = [];
      for(let i = min; i <= max; i++){
        console.log("Filter -> OptionMax -> i", i)
        result.push(Number(i))
      }
      console.log("Filter -> OptionMax -> result", result)
      return result
    }

    handleChangeMin = e => {
    
      this.setState({value: {min : Number(e.target.value), max : this.state.value.max}});
      const minOpt = this.optionMax(e.target.value, 5)
      this.setState({maxOption: minOpt})
    }
    handleChangeMax = e => {
    
      this.setState({value: {min : this.state.value.min, max : Number(e.target.value)}});
      const maxOpt = this.optionMax(0, e.target.value)
      this.setState({minOption: maxOpt})
    }

    handleSubmit = e => {
      this.setFilterValue(this.state.value)
      console.log("Filter -> this.state.value", this.state.value)
      
      e.preventDefault();
    }


  
    render() {
      
      return (

        <form>
          <label>
            Filtrer par note
            
            <select value={this.state.value.min} onChange={this.handleChangeMin}>
              {this.state.minOption.map(e => (
                
                <option key= {e + "est la valeur min"} value={e}>{`${e}`}</option>
              )            
              )}
              
            </select>
            à: 
            <select value={this.state.value.max} onChange={this.handleChangeMax}>
            {this.state.maxOption.map(e => (
                <option key={e + "est la valeur max"} value={e}>{`${e}`}</option>
              )                
              )}
            </select>
          </label>
          <button onClick = {this.handleSubmit}
                                > Valider </button>
        </form>
      );
    }
  }

  export default Filter
