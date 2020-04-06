/** @format */

import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.setFilterValue = props.setFilterValue;
    this.state = {
      value: {
        min: 0,
        max: 5
      },
      maxOption: [0, 1, 2, 3, 4, 5],
      minOption: [0, 1, 2, 3, 4, 5]
    };
  }

  optionMax = (min, max) => {
    let result = [];
    for (let i = min; i <= max; i++) {
      result.push(Number(i));
    }
    return result;
  };

  handleChangeMin = e => {
    this.setState({
      value: { min: Number(e.target.value), max: this.state.value.max }
    });
    const minOpt = this.optionMax(e.target.value, 5);
    this.setState({ maxOption: minOpt });
  };
  handleChangeMax = e => {
    this.setState({
      value: { min: this.state.value.min, max: Number(e.target.value) }
    });
    const maxOpt = this.optionMax(0, e.target.value);
    this.setState({ minOption: maxOpt });
  };

  handleSubmit = e => {
    this.setFilterValue(this.state.value);
    e.preventDefault();
  };

  render() {
    return (
      <form style={{width: "max-content", marginLeft:  "120px"}}>
        <div className='form-row align-items-center'>
        <p className='col-auto my-1'>Filtrer par note</p>
          <div className='col-auto my-1'>
            <label className='mr-sm-2 sr-only' htmlFor="min">De</label>
            <select
              className='custom-select mr-sm-2'
              id="min"
              value={this.state.value.min}
              onChange={this.handleChangeMin}>
              {this.state.minOption.map(e => (
                <option
                  key={e + "est la valeur min"}
                  value={e}>{`${e}`}</option>
              ))}
            </select>
            </div>
            <div className='col-auto my-1'>
            <label className='mr-sm-2 sr-only' htmlFor="max">à</label>
            <select
            id="max"
              className='custom-select mr-sm-2'
              value={this.state.value.max}
              onChange={this.handleChangeMax}>
              {this.state.maxOption.map(e => (
                <option
                  key={e + "est la valeur max"}
                  value={e}>{`${e}`}</option>
              ))}
            </select>
            </div>
            <div className='col-auto my-1'>
            <button className="btn btn-primary" onClick={this.handleSubmit}> Valider </button>
            </div>
          
        </div>
      </form>
    );
  }
}

export default Filter;
