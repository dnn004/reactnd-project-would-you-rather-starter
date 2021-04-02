import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

class Results extends Component {
  render() {
    const { optionOneText, optionTwoText, voteOneCount, voteTwoCount, voteCounts, answer } = this.props

    return (
      <div>
        {answer == 'optionOne' ?
          <Card bg='dark' text='white' className='question'>
            <OverlayTrigger
              show={true}
              placement='right'
              overlay={<Tooltip>Your Vote!</Tooltip>}
            >
              <Card.Body>
                <Card.Title>Would you rather {optionOneText}?</Card.Title>
                <ProgressBar label={`${Math.round((voteOneCount)/(voteCounts)*1000)/10}%`} now={(voteOneCount)*100/(voteCounts)}/>
                  <Card.Text>
                    {voteOneCount} out of {voteCounts} votes
                  </Card.Text>
              </Card.Body>
            </OverlayTrigger>
          </Card>
          :
          <Card bg='light' text='dark' className='question'>
            <Card.Body>
              <Card.Title>Would you rather {optionOneText}?</Card.Title>
              <ProgressBar label={`${Math.round((voteOneCount)/(voteCounts)*1000)/10}%`} now={(voteOneCount)*100/(voteCounts)}/>
              <Card.Text>
                {voteOneCount} out of {voteCounts} votes
              </Card.Text>
            </Card.Body>
          </Card>
        }

        {answer == 'optionTwo' ?
          <Card bg='dark' text='white' className='question'>
            <OverlayTrigger
              show={true}
              placement='right'
              overlay={<Tooltip>Your Vote!</Tooltip>}
            >
              <Card.Body>
                <Card.Title>Would you rather {optionTwoText}?</Card.Title>
                  <ProgressBar label={`${Math.round((voteTwoCount)/(voteCounts)*1000)/10}%`} now={(voteTwoCount)*100/(voteCounts)}/>
                  <Card.Text>
                    {voteTwoCount} out of {voteCounts} votes
                  </Card.Text>
              </Card.Body>
            </OverlayTrigger>
          </Card>
          :
          <Card bg='light' text='dark' className='question'>
            <Card.Body>
              <Card.Title>Would you rather {optionTwoText}?</Card.Title>
              <ProgressBar label={`${Math.round((voteTwoCount)/(voteCounts)*1000)/10}%`} now={(voteTwoCount)*100/(voteCounts)}/>
              <Card.Text>
                {voteTwoCount} out of {voteCounts} votes
              </Card.Text>
            </Card.Body>
          </Card>
        }
      </div>
    )
  }
}

export default Results