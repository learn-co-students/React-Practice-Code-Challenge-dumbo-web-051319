import React, { Fragment } from 'react'

export default class Sushi extends React.Component {
  state = {
    eaten: false,
    mySushi: this.props.data.name,
    currentPrice: this.props.data.price
  }

  handleClick = (event) => {
    if(this.props.currentWallet >= this.state.currentPrice) {
      this.setState({
        eaten: true
      })
      this.props.addPlates(this.state.mySushi, this.state.currentPrice)
    } else {
      alert("You ran out of money 😿")
    }
  }

  render () {
    return (
      <div className="sushi">
        <div className="plate"
             onClick={this.handleClick}>
          {
            this.state.eaten ?
              null
            :
              <img src={this.props.data.img_url} alt="a sushi" width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.data.name} - ${this.props.data.price}
        </h4>
      </div>
    )
  }

}
