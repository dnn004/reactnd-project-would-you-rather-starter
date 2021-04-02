import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'
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
                <Route exact path="/">
                  {this.props.loggedOut ? <Redirect to='/login' /> : <Dashboard />}
                </Route>
                <Route exact path="/question/:question_id"
                  render={(match) => (this.props.loggedOut ? <Redirect to='/login' /> : <DetailedDashboard match={match}/>)} >
                </Route>
                <Route exact path="/leaderboard">
                  {this.props.loggedOut ? <Redirect to='/login' /> : <Leaderboard />}
                </Route>
                <Route exact path="/add">
                  {this.props.loggedOut ? <Redirect to='/login' /> : <NewQuestion dispatch={this.props.dispatch}/>}
                </Route>
                <Route exact path="/login" component={Login}/>
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
