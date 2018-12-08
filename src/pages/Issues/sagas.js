import { put } from 'redux-saga/effects';

import axios from '../../axios';
import { fetchIssuesSuccess, fetchIssuesFail } from './actions';

export function* fetchIssuesSaga() {
  try {
    const response = yield axios.get('facebook/react/issues');
    yield put(fetchIssuesSuccess(response.data));
  } catch (error) {
    yield put(fetchIssuesFail(error));
  }
}
