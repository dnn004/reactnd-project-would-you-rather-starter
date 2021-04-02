import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

// Use with Dashboard
class Question extends Component {
  render() {
    return (
      <div className='question'>
        <Card>
          <Card.Header><b>{this.props.author.name} asks:</b></Card.Header>
          <Card.Body className='questionBody'>
            <Image src={this.props.author.avatarURL} style={{width: '150px', height: '150px', marginRight: '20px'}}/>
            <div className='questionContent'>
              <Card.Title>Would you rather</Card.Title>
              <Card.Text>...{this.props.question.optionOne.text}...</Card.Text>
              <Link to={"/question/" + this.props.question.id} className="view-poll">
                <Button variant="outline-primary" block>
                  View Poll
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, questions, users}, { id }) {
  const question = questions[id]
  const author = users[question.author]

  return {
    authedUser,
    question,
    author
  }
}

export default connect(mapStateToProps)(Question)