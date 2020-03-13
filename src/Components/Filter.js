import React, { Component } from 'react'


class Filter extends Component {
    constructor(props) {
      super(props);
      this.setFilterValue = props.setFilterValue
      this.state = {
          value: 0
      }
    }
  
    handleChange = e => {
    
      this.setState({value: Number(e.target.value)});
    }
  
    handleSubmit = e => {
      this.setFilterValue(this.state.value)
      
      e.preventDefault();
    }
  
    render() {
      return (

        <form>
          <label>
            <p>Filtrer par note</p>
            
            <select value={this.state.value} onChange={this.handleChange}>
              <option value={5}> 5 </option>
              <option value={4}> 4 et + </option>
              <option value={3}> 3 et +</option>
              <option value={2}> 2 et +</option>
              <option value={1}> 1 et +</option>
              <option value={0}> Tous </option>
            </select>
            {/* à: 
            <select value={this.state.value.max} onChange={this.handleChange}>
            <option value={5}> 5 </option>
              <option value={4}> 4 et + </option>
              <option value={3}> 3 et +</option>
              <option value={2}> 2 et +</option>
              <option value={1}> 1 et +</option>
              <option value={0}> Tous </option>
            </select> */}
          </label>
          <button onClick = {this.handleSubmit}
                                > Valider </button>
        </form>
      );
    }
  }

  export default Filter
