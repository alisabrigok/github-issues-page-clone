import { takeEvery, all } from 'redux-saga/effects';
import { FETCH_ISSUES } from '../../pages/Issues/constants';
import { fetchIssuesSaga } from '../../pages/Issues/sagas';

export function* watchIssues() {
  yield all([takeEvery(FETCH_ISSUES, fetchIssuesSaga)]);
}
