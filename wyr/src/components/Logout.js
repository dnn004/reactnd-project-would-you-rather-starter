import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import { unsetAuthedUser } from '../actions/authedUser'

class Logout extends Component {
  state = {
    loggedOut: false
  }

  handleLogout() {
    this.props.dispatch(unsetAuthedUser())
    this.setState({ loggedOut: true })
  }

  render() {
    if (this.state.loggedOut) {
      return <Redirect to='/login' />
    }
    return (
      <div>
        <Button variant="primary" size="lg" onClick={(e) => {this.handleLogout(); e.preventDefault();}}>
          Logout
        </Button>
      </div>
    )
  }
}

export default Logout