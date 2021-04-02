import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loggedIn: false,
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
        <Card id="login">
          <Card.Img variant="top" src="/react-redux.png" />
          <Card.Body>
            <Card.Title>Welcome to the Would You Rather App!</Card.Title>
            <Card.Text> Please sign in to continue</Card.Text>
            <Form onSubmit={this.handleLogin}>
              <Form.Group controlId="users">
                <Form.Label>Sign in as:</Form.Label>
                {this.props.loading ?
                  <div id="spinner">
                    <Spinner animation="border" role="status" variant="primary">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                  </div>
                  :
                  <Form.Control as="select" size="lg">
                    {this.props.sortedUsersIds.map((id) => (
                      <option key={id} value={id}>
                        {this.props.users[id].name}
                      </option>
                    ))}
                  </Form.Control>}

                {this.props.loading ?
                  <Button variant="primary" type="submit" className="buttons" disabled block>
                    Sign In
                  </Button>
                  :
                  <Button variant="primary" type="submit" className="buttons" block>
                    Sign In
                  </Button>}
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
  let loading = Object.keys(users).length === 0
  return {
    sortedUsersIds,
    users,
    authedUser,
    loading
  }
}

export default connect(mapStateToProps)(Login)