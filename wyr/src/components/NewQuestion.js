import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    submitted: false
  }

  handleChangeOne = (e) => {
    e.persist()
    this.setState({ optionOneText: e.target.value })
  }

  handleChangeTwo = (e) => {
    e.persist()
    this.setState({ optionTwoText: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(handleAddQuestion(this.state.optionOneText, this.state.optionTwoText))

    this.setState({
      optionOneText: '',
      optionTwoText: '',
      submitted: true
    })
  }

  render() {
    let { optionOneText , optionTwoText } = this.state
    if (this.state.submitted) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <Card className="general-card">
          <Card.Header id="new-question-header">Create New Question</Card.Header>
          <OverlayTrigger
              placement='right'
              overlay={<Tooltip id="tip">Complete the question!</Tooltip>}
          >
          <Card.Body>
            <Card.Title>Would you rather ...</Card.Title>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="optionOneText">
                <Form.Control placeholder="Enter Option One Text Here (Required)" value={optionOneText} onChange={this.handleChangeOne}/>
              </Form.Group>
              <Card.Text id="or">OR</Card.Text>
              <Form.Group controlId="optionTwoText">
                <Form.Control placeholder="Enter Option Two Text Here (Required)" value={optionTwoText} onChange={this.handleChangeTwo}/>
              </Form.Group>
              <Button variant="success" type="submit" className="buttons" block disabled={optionOneText === '' || optionTwoText === ''}>
                Submit
              </Button>
            </Form>
          </Card.Body>
          </OverlayTrigger>
        </Card>
      </div>
    )
  }
}

export default NewQuestion