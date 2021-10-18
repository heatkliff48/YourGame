import { call, put, takeLatest } from 'redux-saga/effects';
import {
  ALL_QUESTION,
  GET_CURRENT_QUESTION,
  GET_QUESTION,
  SHOW_QUESTION,
} from '../types';
import axios from 'axios';

const getQuestions = () => {
  return axios
    .get('http://localhost:3001/questions')
    .then((responce) => responce.data.questions);
};
const getCurrentQuestions = ({topicId, id}) => {

  return axios
    .post('http://localhost:3001/modalquestion', { topicId, id })
    .then((responce) => responce.data.oneQuestion);
};

function* questionsWorker(action) {
  try {
    const questions = yield call(getQuestions);
    yield put({ type: ALL_QUESTION, payload: questions });
  } catch (err) {
    yield put({
      type: ALL_QUESTION,
      payload: [{ id: 1, question: JSON.stringify(err) }],
    });
  }
}


function* currentQuestionWorker(action) {
  try {
    const questions = yield call(getCurrentQuestions, action.payload);
    yield put({ type: SHOW_QUESTION, payload: questions });
  } catch (err) {
    yield put({
      type: SHOW_QUESTION,
      payload: [{ id: 1, question: JSON.stringify(err) }],
    });
  }
}

function* questionsWatcher() {
  yield takeLatest(GET_QUESTION, questionsWorker);
  yield takeLatest(GET_CURRENT_QUESTION, currentQuestionWorker);
}

export default questionsWatcher;
