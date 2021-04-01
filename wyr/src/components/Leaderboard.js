import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h3 className='center'>Leaderboard</h3>
        <ul>
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  const rankedUsers = Object.keys(users).sort((a,b) =>
                        (Object.keys(users[b].answers).length + users[b].questions.length)
                      - (Object.keys(users[a].answers).length + users[a].questions.length))
  return {
    rankedUsers
  }
}

export default connect(mapStateToProps)(Leaderboard)