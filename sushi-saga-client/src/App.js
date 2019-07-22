import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushiPool: [],
    currentSushis: [],
    sushiIndex: 0,
    plates: [],
    currentMoney: 100
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => {
      let randSushi = sushis.slice(this.state.sushiIndex,this.state.sushiIndex + 4)
      this.setState({
        sushiPool: sushis,
        currentSushis: randSushi,
        sushiIndex: this.state.sushiIndex + 4
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
    let newSushis = this.state.sushiPool.slice(this.state.sushiIndex,this.state.sushiIndex + 4)
    this.setState({
      currentSushis: newSushis,
      sushiIndex: this.state.sushiIndex + 4
    })
  }

  addMoney = (amount) => {
    this.setState({
      currentMoney: this.state.currentMoney + amount
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer fourSushis={this.state.currentSushis} moreSushi={this.moreSushi} addPlates={this.addPlates} currentWallet={this.state.currentMoney} addMoney={this.addMoney}/>

        <Table currentPlates={this.state.plates} currentMoney={this.state.currentMoney}/>
      </div>
    );
  }
}

export default App;
