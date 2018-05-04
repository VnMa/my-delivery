import React, { Component } from "react";
import "./App.css";
import Shop from "./components/Shop";
import DrinkItem from "./components/DrinkItem";
import OrderItem from "./components/OrderItem";

const currency = "VND";
const VALID_COUPON = "REACT";
const DISCOUNT = 10;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: [
        { id: 1, name: "Nguyen Trung Truc" },
        { id: 2, name: "Night Market" }
      ],
      drinks: [
        { id: 1, name: "Dua tea", price: 10000 },
        { id: 2, name: "Oolong tea", price: 12000 },
        { id: 3, name: "Coffee", price: 15000 }
      ],
      order: {},
      coupon: "",
      validCoupon: false
    };
  }

  handleClick(item) {
    alert("you clicked item: " + item);
  }

  addToOrder(item) {
    console.debug("item: ", item);
    const order = { ...this.state.order };
    if (order[item.id]) order[item.id].quantity += 1;
    else order[item.id] = { ...item, quantity: 1 };
    this.setState({ ...this.state, order });
  }

  orderToArr() {
    return Object.values(this.state.order);
  }

  totalPrice() {
    console.debug("totalPrice: ...");
    const { order, validCoupon } = this.state;
    const rawTotal = Object.values(order).reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    return validCoupon ? rawTotal * (100 - DISCOUNT) / 100 : rawTotal;
  }

  onChange(e) {
    console.debug("e: ", e.target.value);
    const val = e.target.value;

    const valid = val === VALID_COUPON;
    this.setState({ ...this.state, coupon: val, validCoupon: valid });
  }

  onOrderItemChange(item) {
    console.debug("onOrderItemChange: ", item);
    const order = { ...this.state.order };
    order[item.id] = { ...item };
    this.setState({ ...this.state, order });
  }

  render() {
    const { shops, drinks, validCoupon } = this.state;
    return (
      <div className="App">
        <div className="menu">
          <h1>All shops </h1>
          <div>
            {shops.map(shop => (
              <Shop key={shop.id} shop={shop} onClick={this.handleClick} />
            ))}
          </div>
        </div>
        <div className="main">
          <h2>List of drinks</h2>
          {drinks.map(drink => (
            <DrinkItem
              key={drink.id}
              drink={drink}
              onClick={_ => this.addToOrder(drink)}
            />
          ))}

          <h2>Coupon</h2>

          <input
            type="text"
            value={this.state.coupon}
            onChange={e => this.onChange(e)}
          />

          <div className={validCoupon ? "valid" : ""}>
            This coupon is {validCoupon ? "" : "NOT"} valid
          </div>
        </div>
        <div className="order">
          <h2>Order</h2>
          {this.orderToArr().map((o, index) => (
            <OrderItem
              key={index}
              order={o}
              onChange={this.onOrderItemChange.bind(this)}
            />
          ))}
          <h2>Total</h2>
          {this.totalPrice()} {currency}
          <br />
          <span>{validCoupon ? `Discount ${DISCOUNT} %` : ""}</span>
        </div>
      </div>
    );
  }
}

export default App;
