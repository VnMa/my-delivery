import React, { Component } from "react";

class OrderItem extends Component {
  handleOnChange(event) {
    console.debug("handleOnChange: ", event.target.value);
    this.props.onChange({ ...this.props.order, quantity: event.target.value });
  }

  render() {
    const { name, price, quantity } = this.props.order;
    return (
      <div>
        {name}: {price} VND - Quantity:
        <input
          type="number"
          value={quantity}
          onChange={this.handleOnChange.bind(this)}
        />>
      </div>
    );
  }
}

export default OrderItem;
