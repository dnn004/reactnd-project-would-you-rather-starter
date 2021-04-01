import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import Login from './Login'
import NewQuestion from './NewQuestion'
import OneQuestion from './OneQuestion'
import Navigation from './Navigation'


import { Route, BrowserRouter, Redirect } from 'react-router-dom'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render() {
    console.log(this.props)
    return (
      <BrowserRouter>
        <div id="app">
          <Navigation />
          <Container fluid>
            <Row>
              <Col></Col>
              <Col xs={6}>
                <Route exact path="/">
                  {this.props.loading ? <Redirect to='/login' /> : <Dashboard />}
                </Route>
                <Route exact path="/question/:question_id" component={OneQuestion}/>
                <Route exact path="/leaderboard">
                  <Leaderboard />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/add">
                  <NewQuestion />
                </Route>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
