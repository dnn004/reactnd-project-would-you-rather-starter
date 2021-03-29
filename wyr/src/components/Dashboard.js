import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
  render() {

    let answered = Object.keys(this.props.loggedInUser.answers)
    let unanswered = this.props.questionIds.filter(questionId => !answered.includes(questionId)) 
    return (
      <div>
        <h3 className='center'>Answered Questions</h3>
        <ul>
          {answered.map((id) => (
            <li key={id}>
              <Question id={id}/>
            </li>
          ))}
        </ul>
        <h3 className='center'>Unanswered Questions</h3>
        <ul>
            {unanswered.map((id) => (
            <li key={id}>
              <Question id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ questions, users, authedUser }) {
  const loggedInUser = users[authedUser]

  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    loggedInUser
  }
}

export default connect(mapStateToProps)(Dashboard)
// export default Dashboard