import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderboardRank from './LeaderboardRank'

class Leaderboard extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.rankedUsers.map((id) => (
          <LeaderboardRank user={this.props.users[id]} key={id}/>
        ))}
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  const rankedUsers = Object.keys(users).sort((a,b) =>
                        (Object.keys(users[b].answers).length + users[b].questions.length)
                      - (Object.keys(users[a].answers).length + users[a].questions.length))
  return {
    rankedUsers,
    users
  }
}

export default connect(mapStateToProps)(Leaderboard)