// @flow

import { call, take } from 'redux-saga/effects';
import type { TakeEffect } from 'redux-saga/effects';

function* takexSaga(pattern: RegExp): Generator<TakeEffect<string>, ?Action, void> {
  let action: ?Action;
  while (true) {
    action = yield take('*');
    if (action && pattern.test(action.type)) {
      return action;
    }
  }
}

export default function takex(pattern: RegExp) {
  return call(takexSaga, pattern);
}
