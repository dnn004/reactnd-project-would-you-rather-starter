import React, { Component } from 'react'
import { connect } from 'react-redux'
import DetailedQuestion from './DetailedQuestion'

class OneQuestion extends Component {
  render() {
    let id = this.props.match.params.question_id
    return (
      <div>
        { this.props.questions[id] === undefined ? null :
          <DetailedQuestion question={this.props.questions[id]} authedUser={this.props.authedUser} /> }
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser,
    questions
  }
}

export default connect(mapStateToProps)(OneQuestion)