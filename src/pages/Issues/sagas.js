import { put } from 'redux-saga/effects';
import axios from '../../axios';
import { fetchIssuesSuccess, fetchIssuesFail } from './actions';
import { setAuthors } from '../../components/organisms/AuthorSelect/actions';
import { getIssues, getUsers, getLabels } from '../../shared/normalize.service.js';
import { setLabels } from '../../components/organisms/LabelSelect/actions';


export function* fetchIssuesSaga() {
  try {
    const response = yield axios.get('facebook/create-react-app/issues');
    const issues = getIssues(response);
    const users = getUsers(issues);
    const labels = getLabels(issues);
    yield put(fetchIssuesSuccess(issues));
    yield put(setAuthors(users));
    yield put(setLabels(labels));
  } catch (error) {
    yield put(fetchIssuesFail(error));
  }
}
