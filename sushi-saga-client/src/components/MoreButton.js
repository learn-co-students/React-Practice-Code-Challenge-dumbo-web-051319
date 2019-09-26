import React from 'react'

export default class MoreButton extends React.Component {
  handleClick = () => {
    this.props.moreSushi()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let amount = parseInt(event.target.money.value, 10)
    this.props.addMoney(amount)
    event.target.reset()
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          More sushi!
        </button>
        <form onSubmit={this.handleSubmit}>
          Add More Money?
          <br/>
          <input type="number" name="money"/>
          <br/>
          <input type="submit" value="money pls"/>
        </form>
      </div>
    )
  }

}
