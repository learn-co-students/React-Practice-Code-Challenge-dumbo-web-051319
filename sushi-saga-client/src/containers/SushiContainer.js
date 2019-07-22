import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

export default class SushiContainer extends React.Component {
  sushiCon = () => {
    return this.props.fourSushis.map(sushi => <Sushi key={sushi.id} data={sushi} addPlates={this.props.addPlates} currentWallet={this.props.currentWallet}/>)
  }

  render () {
    return (
      <Fragment>
        <div className="belt">
          {this.sushiCon()}
          <MoreButton moreSushi={this.props.moreSushi} addMoney={this.props.addMoney}/>
        </div>
      </Fragment>
    )
  }

}
