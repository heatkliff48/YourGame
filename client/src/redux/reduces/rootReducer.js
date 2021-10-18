import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { topicReducer } from './topicReducer';
import { questionReducer } from './questionReducer';
import { valueReducer } from './valueReducer';
import { modalReducer } from './modalReducer'
import { oneQuestionReducer } from './oneQuestionReducer'

export const rootReducer = combineReducers({
  topic: topicReducer,
  questions: questionReducer,
  user: userReducer,
  value: valueReducer,
  modal: modalReducer,
  oneQuestion: oneQuestionReducer,
});
