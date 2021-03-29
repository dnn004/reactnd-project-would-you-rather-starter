import React, { Component } from 'react'

class DetailedQuestion extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='question'>
        {this.props.question.id}
      </div>
    )
  }
}

export default DetailedQuestion