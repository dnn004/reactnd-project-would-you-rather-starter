import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Question from './Question'
import Card from 'react-bootstrap/Card'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Card className="general-card">
          <Card.Body>
            <Tabs defaultActiveKey="unanswered" id="questionsList" fill variant="pills">
              <Tab eventKey="unanswered" title="Unanswered Questions">
                {this.props.unanswered.map((id) => (
                  <Question id={id} key={id}/>
                ))}
              </Tab>
              <Tab eventKey="answered" title="Answered Questions">
                {this.props.answered.map((id) => (
                  <Question id={id} key={id}/>
                ))}
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>

      </div>
    )
  }
}

function mapStateToProps ({ questions, users, authedUser }) {
  const sortTime = (a,b) => questions[b].timestamp - questions[a].timestamp
  const answered = Object.keys(users[authedUser].answers).sort(sortTime)
  const unanswered = Object.keys(questions).filter(questionId => !answered.includes(questionId)).sort(sortTime)

  return {
    answered,
    unanswered
  }
}

export default connect(mapStateToProps)(Dashboard)