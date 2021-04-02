import { postQuestion, postQuestionAnswer } from '../utils/api'

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
    console.log(authedUser)

    let question = {
      author,
      optionOneText,
      optionTwoText
    }

    return postQuestion(question)
      .then((question) => dispatch(addQuestion(question)))
  }
}

function answerQuestion (id) {
  return {
    type: ANSWER_QUESTION,
    id
  }
}

export function handleAnswerQuestion(id, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    //alert(authedUser)
    return postQuestionAnswer(authedUser, id, answer)
      .then(() => dispatch(answerQuestion(id)))
  }
}