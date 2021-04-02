import React, { Component } from 'react'
import { connect } from 'react-redux'
import DetailedQuestion from './DetailedQuestion'

class DetailedDashboard extends Component {
  render() {
    let id = this.props.match.params.question_id
    return (
      <div>
        { this.props.questions[id] === undefined ? null :
          <DetailedQuestion
            question={this.props.questions[id]}
            authedUser={this.props.authedUser}
            author={this.props.users[this.props.questions[id].author]}
            dispatch={this.props.dispatch}
          /> }
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser,
    questions,
    users
  }
}

export default connect(mapStateToProps)(DetailedDashboard)