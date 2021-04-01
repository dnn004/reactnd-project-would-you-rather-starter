import React, { Component } from 'react'
import {connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  }

  handleChangeOne = (e) => {
    this.setState({ optionOneText: e.target.value })
  }

  handleChangeTwo = (e) => {
    this.setState({ optionTwoText: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText } = this.state.optionOneText
    const { optionTwoText } = this.state.optionTwoText
    const { dispatch } = this.props

    dispatch(handleAddQuestion(optionOneText, optionTwoText))


    this.setState({
      optionOneText: '',
      optionTwoText: ''
    })
  }

  render() {
    console.log(this.props)
    const { optionOneText , optionTwoText } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.optionOneText} onChange={this.handleChangeOne} placeholder="Enter Option One Text Here"/>
          </label>
          <br></br>
          <label>
            <input type="text" value={this.state.optionTwoText} onChange={this.handleChangeTwo} placeholder="Enter Option Two Text Here"/>
          </label>
          <br></br>
          {/* <input type="submit" value="Submit" /> */}
          <button
            type="submit"
            disabled={optionOneText === '' || optionTwoText === ''}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)