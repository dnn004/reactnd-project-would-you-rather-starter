import { getInitialData, postQuestionAnswer } from '../utils/api'
import { receiveQuestions, answerQuestion } from '../actions/questions'
import { receiveUsers, answerQuestionUser } from '../actions/users'

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
      })
  }
}

export function handleAnswerQuestion(id, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    return postQuestionAnswer(authedUser, id, answer)
      .then(({ users, questions }) => {
        dispatch(answerQuestionUser(users))
        dispatch(answerQuestion(questions))
      })
  }
}