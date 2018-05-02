import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Shop extends Component {
  constructor(props) {
      super(props)
  }

  render() {
    return (
      <div className="shop" onClick={() => this.props.onClick(this.props.shop.id)}>
        Shop {this.props.shop.id}: {this.props.shop.name}
      </div>
    )
  }
};
