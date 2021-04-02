import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Logout from './Logout'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

class Navigation extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand>
          <Link to="/" id="brand">Would You Rather</Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item>
            <Navbar.Text>
              <Link to="/">Home</Link>
            </Navbar.Text>
          </Nav.Item>
          <Nav.Item>
            <Navbar.Text>
              <Link to="/add">New Question</Link>
            </Navbar.Text>
          </Nav.Item>
          <Nav.Item>
            <Navbar.Text>
              <Link to="/leaderboard">Leaderboard</Link>
            </Navbar.Text>
          </Nav.Item>
        </Nav>
        {this.props.loggedOut ?
        null :
        <Nav>
          <Nav.Item>
            <Navbar.Text>
              Hello, {this.props.user.name}
            </Navbar.Text>
          </Nav.Item>
          <Nav.Item>
            <Image src={this.props.user.avatarURL} roundedCircle width="50em" height="50em"/>
          </Nav.Item>
          <Nav.Item>
            <Logout dispatch={this.props.dispatch}/>
          </Nav.Item>
        </Nav>
        }
      </Navbar>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  const user = users[authedUser]
  const loggedOut = authedUser === null
  return {
    loggedOut,
    user
  }
}

export default connect(mapStateToProps)(Navigation)