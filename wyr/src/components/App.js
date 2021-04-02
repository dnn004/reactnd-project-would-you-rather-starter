import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, BrowserRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import Login from './Login'
import NewQuestion from './NewQuestion'
import DetailedDashboard from './DetailedDashboard'
import Navigation from './Navigation'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <BrowserRouter>
        <div id="app">
          <Navigation />
          <Container fluid>
            <Row>
              <Col></Col>
              <Col xs={5}>
                <Route exact path="/question/:question_id"
                  render={(match) => (this.props.loggedOut ? <Login /> : <DetailedDashboard match={match}/>)} >
                </Route>
                <Route exact path="/leaderboard">
                  {this.props.loggedOut ? <Login /> : <Leaderboard />}
                </Route>
                <Route exact path="/add">
                  {this.props.loggedOut ? <Login />  : <NewQuestion dispatch={this.props.dispatch}/>}
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/">
                  {this.props.loggedOut ? <Login /> : <Dashboard />}
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
    loggedOut: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
