import React, { Component } from "react";

class OrderItem extends Component {
  render() {
    const { name, price, quantity } = this.props.order;
    return (
      <div>
        {name}: {price} VND - Quantity: {quantity}
      </div>
    );
  }
}

export default OrderItem;
