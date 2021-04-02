import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { unsetAuthedUser } from '../actions/authedUser'

class Logout extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loggedOut: false
    }
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(e) {
    e.preventDefault()
    this.props.dispatch(unsetAuthedUser())
    this.setState({ loggedOut: true })
  }

  render() {
    if (this.state.loggedOut) {
      return <Redirect to='/login' />
    }
    return (
      <div>
        <Button variant="primary" size="lg" onClick={this.handleLogout}>
          Logout
        </Button>
      </div>
    )
  }
}

export default Logout