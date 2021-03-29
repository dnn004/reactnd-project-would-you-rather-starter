import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='question'>
        {this.props.question.id}
      </div>
    )
  }
}

function mapStateToProps ({authedUser, questions}, { id }) {
  const question = questions[id]
  const author = question.author

  return {
    authedUser,
    question,
    author
  }
}

export default connect(mapStateToProps)(Question)