import { combineReducers } from 'redux';
import textEditor from 'js/components/TextEditor/reducer';
import lessons from 'js/views/Editor/reducer';
import auth from './auth';

const rootReducer = combineReducers({
  textEditor,
  lessons,
  auth,
});

export default rootReducer;