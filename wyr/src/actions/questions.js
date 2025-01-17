import { postQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    const author = authedUser

    let question = {
      author,
      optionOneText,
      optionTwoText
    }

    return postQuestion(question)
      .then((question) => dispatch(addQuestion(question)))
  }
}

export function answerQuestion (questions) {
  return {
    type: ANSWER_QUESTION,
    questions
  }
}
