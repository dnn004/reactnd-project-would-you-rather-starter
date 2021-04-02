import { RECEIVE_USERS, ANSWER_QUESTION_USER } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ANSWER_QUESTION_USER :
      return {
        ...action.users
      }
    default :
      return state
  }
}