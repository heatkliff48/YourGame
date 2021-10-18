import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { SET_VALUE, GET_ANSWER } from '../types';

const checkAnswer = async ({ answer, id }) => {
  const userAnswer = await axios.post('http://localhost:3001/modalquestion', { id });
  if (userAnswer.data.oneQuestion.answer === answer) {
    return userAnswer.data.oneQuestion.value;
  } else return 0;

};

function* checkAnswerWorker(action) {
  try {
    const answer = yield call(checkAnswer, action.payload);

    yield put({ type: SET_VALUE, payload: answer });
  } catch (err) {}
}

function* checkAnswerWatcher() {
  yield takeLatest(GET_ANSWER, checkAnswerWorker);
}
export default checkAnswerWatcher;
