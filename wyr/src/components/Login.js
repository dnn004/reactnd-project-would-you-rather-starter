import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loggedIn: false
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(e) {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(document.getElementById('users').value))
    this.setState({ loggedIn: true })
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <Card style={{ width: '30em', margin: '0 auto'}}>
          <Card.Img variant="top" src="/react-redux.png" />
          <Card.Body>
            <Card.Title>Welcome to the Would You Rather App!</Card.Title>
            <Card.Text> Please sign in to continue</Card.Text>
            <Form onSubmit={this.handleLogin}>
              <Form.Group controlId="users">
                <Form.Label>Sign in as:</Form.Label>
                <Form.Control as="select">
                  {this.props.sortedUsersIds.map((id) => (
                    <option key={id} value={id}>
                      {this.props.users[id].name}
                    </option>
                  ))}
                </Form.Control>
                <Button variant="primary" type="submit" className="buttons">
                  Sign In
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  const sortedUsersIds = Object.keys(users).sort((a,b) => (users[a].name > users[b].name) ? 1 : -1)
  return {
    sortedUsersIds,
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Login)