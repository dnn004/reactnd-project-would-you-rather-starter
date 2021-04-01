import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Question from './Question'
import Card from 'react-bootstrap/Card'

import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import CardColumns from 'react-bootstrap/CardColumns'
class Dashboard extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Link to ='/add'>New Question</Link>
        <h3 className='center'>Answered Questions</h3>
        <ul>
          {this.props.answered.map((id) => (
            <li key={id}>
              <Question id={id}/>
            </li>
          ))}
        </ul>
        <h3 className='center'>Unanswered Questions</h3>
        <ul>
          {this.props.unanswered.map((id) => (
            <li key={id}>
              <Question id={id} />
            </li>
          ))}
        </ul>

        <Card style={{ width: '30em', margin: '0 auto'}}>
          <Card.Body>
            <Tabs defaultActiveKey="unanswered" id="questions" fill>
              <Tab eventKey="unanswered" title="Unanswered Questions">
                {this.props.answered.map((id) => (
                  <Card style={{ width: '100%' }}>
                    <Question id={id}/>
                  </Card>
                ))}
              </Tab>
              <Tab eventKey="answered" title="Answered Questions">

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
    // authedUser
  }
}

export default connect(mapStateToProps)(Dashboard)