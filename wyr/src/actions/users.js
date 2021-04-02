export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ANSWER_QUESTION_USER = 'ANSWER_QUESTION_USER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function answerQuestionUser (users) {
  return {
    type: ANSWER_QUESTION_USER,
    users
  }
}