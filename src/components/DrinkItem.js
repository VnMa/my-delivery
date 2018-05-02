import React, { Component } from 'react';

export default class DrinkItem extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const {name, price} = this.props.drink
    return (
      <div className="drink">
        Drink Item: {name} - {price}    
        <a className="btn btn-default" onClick={this.props.onClick}>Add</a>
      </div>
    )
  }
};
