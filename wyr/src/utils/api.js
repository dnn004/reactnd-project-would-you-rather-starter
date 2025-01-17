import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users, questions
  }))
}

export function postQuestion (question) {
  return _saveQuestion(question)
}

export function postQuestionAnswer (authedUser, qid, answer) {
  return _saveQuestionAnswer({authedUser, qid, answer}).then(([users, questions]) => ({ users, questions }))
}