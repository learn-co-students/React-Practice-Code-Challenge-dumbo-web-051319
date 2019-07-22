import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushiPool: [],
    currentSushis: [],
    plates: [],
    currentMoney: 100
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => {
      let randSushi = []
      for (var i = 0; i < 4; i++) {
        randSushi.push(sushis[Math.floor(Math.random() * sushis.length)]);
      }
      this.setState({
        sushiPool: sushis,
        currentSushis: randSushi
      })
    })
  }

  addPlates = (name, price) => {
    this.setState({
      plates: [name, ...this.state.plates],
      currentMoney: this.state.currentMoney - price
    })

  }

  moreSushi = () => {
    let newSushis = []
    for (var i = 0; i < 4; i++) {
      newSushis.push(this.state.sushiPool[Math.floor(Math.random() * this.state.sushiPool.length)]);
    }
    this.setState({ currentSushis: newSushis })
  }

  addMoney = (amount) => {
    this.setState({
      currentMoney: this.state.currentMoney + amount
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  fourSushis={this.state.currentSushis} moreSushi={this.moreSushi} addPlates={this.addPlates} currentWallet={this.state.currentMoney} addMoney={this.addMoney}/>
        <Table currentPlates={this.state.plates} currentMoney={this.state.currentMoney}/>
      </div>
    );
  }
}

export default App;
