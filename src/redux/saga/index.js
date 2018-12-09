import { takeEvery, all } from 'redux-saga/effects';
import { FETCH_ISSUES } from '../../components/pages/Issues/constants';
import { fetchIssuesSaga } from '../../components/pages/Issues/sagas';

export function* watchIssues() {
  yield all([takeEvery(FETCH_ISSUES, fetchIssuesSaga)]);
}
