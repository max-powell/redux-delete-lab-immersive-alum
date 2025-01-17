import React, { Component } from 'react'
import BandInput from './BandInput'
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {

    const { bands } = this.props

    debugger;

    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {
            bands.map(b => <Band key={b.id} band={b} delete={this.props.deleteBand} />)
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type: 'DELETE_BAND', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
