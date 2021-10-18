import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { ALL_TOPIC, GET_TOPIC } from '../types';

const getTopic = () => {
  return axios.get('http://localhost:3001').then((responce) => responce.data.topic);
};

function* topicWorker() {
  try {
    const topics = yield call(getTopic);
    yield put({ type: ALL_TOPIC, payload: topics });
  } catch (err) {
    yield put({ type: ALL_TOPIC, payload: [{ id: 1, title: JSON.stringify(err) }] });
  }
}

function* topicWatcher() {
  yield takeLatest(GET_TOPIC, topicWorker);
}
export default topicWatcher;
