import React, { Component } from 'react';

export default class Shop extends Component {
  render() {
    return (
      <div className="shop" onClick={() => this.props.onClick(this.props.shop.id)}>
        Shop {this.props.shop.id}: {this.props.shop.name}
      </div>
    )
  }
};
