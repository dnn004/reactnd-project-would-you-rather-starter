import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Logout from './Logout'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

class Navigation extends Component {
  render() {
    return (
      <div>
      <Navbar bg="dark" variant="dark" sticky="top" expand="md">
        <Navbar.Brand>
          <Link to="/" id="brand">Would You Rather</Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/add">New Question</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/leaderboard">Leaderboard</Nav.Link>
          </Nav.Item>
        </Nav>
        {this.props.loggedOut ?
        null :
        <Nav className="justify-content-end">
          <Nav.Item className="greetings">
            <Navbar.Text>
              Hello, {this.props.user.name}
            </Navbar.Text>
          </Nav.Item>
          <Nav.Item className="greetings">
            <Image src={this.props.user.avatarURL} roundedCircle width="50em" height="50em"/>
          </Nav.Item>
          <Nav.Item className="greetings">
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