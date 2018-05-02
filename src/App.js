import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop'
import DrinkItem from './components/DrinkItem'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shops: [{'id': 1, 'name': 'Nguyen Trung Truc'},
      {'id': 2, 'name': 'Night Market'}
      ],
      drinks: [{'id': 1, 'name': 'Dua tea', 'price': 10000}, 
      {'id': 2, 'name': 'Oolong tea', 'price': 12000}, 
      {'id': 3, 'name': 'Coffee', 'price': 15000}]
    }
  }

  handleClick(item) {
    alert('you clicked item: ' + item)
  }

  render() {
    return (
      <div className="App">
        <div className="menu">
          <h1>All shops </h1>
          <div>
            { this.state.shops.map(shop => <Shop key={shop.id} shop={shop} onClick={this.handleClick}></Shop> )} 
          </div>
        </div>
        <div className="main">
          <h2>List of drinks</h2>
          {this.state.drinks.map(drink => <DrinkItem key={drink.id} drink={drink}></DrinkItem>)}
        </div>
      </div>
    );
  }
}

export default App;
