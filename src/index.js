import { call, take } from 'redux-saga/effects';

function* takexSaga(pattern) {
  let action;
  while (true) {
    action = yield take('*');
    if (action && pattern.test(action.type)) {
      return action;
    }
  }
}

export default function takex(pattern) {
  return call(takexSaga, pattern);
}
