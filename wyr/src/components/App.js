import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'

import { Route, BrowserRouter } from 'react-router-dom'
import OneQuestion from './OneQuestion'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <BrowserRouter>
        <div id="app">
          <Route exact path="/">
            {this.props.loading === true ? null : <Dashboard />}
          </Route>
          <Route exact path="/question/:question_id" component={OneQuestion}/>
 
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
