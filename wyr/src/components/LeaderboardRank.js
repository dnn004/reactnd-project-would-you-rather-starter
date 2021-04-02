import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

class LeaderboardRank extends Component {
  render() {
    return (
      <div className='general-card'>
        <Card>
          <Card.Body className='general-card-body'>
            <Image src={this.props.user.avatarURL} style={{width: '150px', height: '150px', marginRight: '20px'}}/>
            <div className='questionContent'>
              <Card.Title>{this.props.user.name}</Card.Title>
              <Card.Text>Answered questions: {Object.keys(this.props.user.answers).length}</Card.Text>
              <Card.Text>Created questions: {this.props.user.questions.length}</Card.Text>
            </div>
            <div className='scores'>
              <Card.Header><b>Score</b></Card.Header>
              <p>{Object.keys(this.props.user.answers).length + this.props.user.questions.length}</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default LeaderboardRank