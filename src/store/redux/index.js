import { combineReducers } from 'redux';
import issuesReducer from '../../pages/Issues/reducer';

const rootReducer = combineReducers({ issuesReducer });

export default rootReducer;
