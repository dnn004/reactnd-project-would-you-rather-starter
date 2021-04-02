import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { handleAnswerQuestion } from '../actions/shared'
import Results from './Results'

class DetailedQuestion extends Component {
  constructor (props) {
    super(props)

    this.state = {
      answer: props.answered ? props.answer : '',
      answered: props.answered
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    e.persist()
    this.setState({ answer: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(handleAnswerQuestion(this.props.question.id, this.state.answer))
    this.setState({ answered: true })
  }

  render() {
    return (
      <div className='general-card'>
        <Card>
          <Card.Header><b>{this.props.author.name} asks:</b></Card.Header>
          <Card.Body className='general-card-body'>
            <Image className="avatar" src={this.props.author.avatarURL}/>
            {this.state.answered ?
            <div>
              <Card.Title>Results:</Card.Title>
              <Results
                optionOneText={this.props.question.optionOne.text}
                optionTwoText={this.props.question.optionTwo.text}
                voteOneCount={this.props.question.optionOne.votes.length}
                voteTwoCount={this.props.question.optionTwo.votes.length}
                voteCounts={this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length}
                answer={this.state.answer}
              />
            </div>
            :
            <div>
              <Card.Title>Would You Rather ...</Card.Title>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Check
                    type='radio'
                    id='optionOne'
                    name='answers'
                    value='optionOne'
                    onChange={this.handleChange}
                    label={this.props.question.optionOne.text}
                  />
                  <Form.Check
                    type='radio'
                    id='optionTwo'
                    name='answers'
                    value='optionTwo'
                    onChange={this.handleChange}
                    label={this.props.question.optionTwo.text}
                    required
                  />
                  <Button variant="success" type="submit" className="buttons" block>
                    Submit
                  </Button>
                  </Form.Group>
              </Form>
              </div>}
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default DetailedQuestion