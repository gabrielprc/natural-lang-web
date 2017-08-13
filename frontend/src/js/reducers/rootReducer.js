import { combineReducers } from 'redux';
import textEditor from 'js/components/TextEditor/reducer';
import lessons from 'js/views/Editor/reducer';
import tutorial from './tutorial';
import workspace from './workspace';
import exercise from './exercise';
import auth from './auth';

const rootReducer = combineReducers({
  textEditor,
  lessons,
  auth,
  tutorial,
  workspace,
  exercise,
});

export default rootReducer;