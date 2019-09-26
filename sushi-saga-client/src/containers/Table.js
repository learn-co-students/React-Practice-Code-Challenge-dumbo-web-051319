import React, { Fragment } from 'react'

export default class Table extends React.Component {

  renderPlates = () => {
    return this.props.currentPlates.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }
  render () {
    return (
      <Fragment>
        <h1 className="remaining">
          You have: ${this.props.currentMoney} remaining!
        </h1>
        <div className="table">
          <div className="stack">
            {this.renderPlates()}
          </div>
        </div>
      </Fragment>
    )
  }
}
