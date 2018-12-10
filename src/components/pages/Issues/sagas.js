import { put } from 'redux-saga/effects';
import axios from '../../../axios';
import { fetchIssuesSuccess, fetchIssuesFail } from './actions';
import { setAuthors } from '../../organisms/AuthorSelect/actions';
import {
  normalizeIssues,
  normalizeUsers,
  normalizeLabels
} from '../../../shared/services/normalize.service.js';
import { setLabels } from '../../organisms/LabelSelect/actions';

export function* fetchIssuesSaga() {
  try {
    const response = yield axios.get('facebook/create-react-app/issues');
    const issues = normalizeIssues(response);
    const users = normalizeUsers(issues);
    const labels = normalizeLabels(issues);
    yield put(fetchIssuesSuccess(issues));
    yield put(setAuthors(users));
    yield put(setLabels(labels));
  } catch (error) {
    yield put(fetchIssuesFail(error));
  }
}
