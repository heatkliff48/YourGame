import { all } from 'redux-saga/effects';
import checkAnswerWatcher from './checkAnswerSaga';
import questionsWatcher from './questionsSaga';
import topicWatcher from './topicSaga';

export default function* rootSaga() {
  yield all([
    questionsWatcher(),
    topicWatcher(),
    checkAnswerWatcher(),
  ]);
}
