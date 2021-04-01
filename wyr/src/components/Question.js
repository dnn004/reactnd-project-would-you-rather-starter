import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'

import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import CardColumns from 'react-bootstrap/CardColumns'


// Use with Dashboard
class Question extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className='question'>
        {this.props.question.id}
      </div>
    )
  }
}

function mapStateToProps ({authedUser, questions}, { id }) {
  const question = questions[id]
  const author = question.author

  return {
    authedUser,
    question,
    author
  }
}

export default connect(mapStateToProps)(Question)