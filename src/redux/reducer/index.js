import { combineReducers } from 'redux';
import issuesReducer from '../../pages/Issues/reducer';
import authorsReducer from '../../components/organisms/AuthorSelect/reducers';
import labelsReducer from '../../components/organisms/LabelSelect/reducers';

const rootReducer = combineReducers({ issuesReducer, authorsReducer, labelsReducer });

export default rootReducer;
