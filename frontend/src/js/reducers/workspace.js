import { 
  SAVE_WORKSPACE_CODE, SAVE_WORKSPACE_PSEUDOCODE, SAVE_WORKSPACE_PSEUDOCODE_ERROR,
  SAVE_WORKSPACE_AST, SAVE_WORKSPACE_AST_ERROR, SAVE_WORKSPACE_JAVASCRIPT,
  SAVE_WORKSPACE_JAVASCRIPT_ERROR, CLEAN_WORKSPACE,
} from 'js/actions/constants';

const defaultState = {
  myCode: '',
  ast: '',
  pseudocode: '',
  javascript: '',
};

export default function workspace(state = defaultState, action) {
  switch (action.type) {
    case SAVE_WORKSPACE_CODE:
      return { ...state, myCode: action.myCode };
    case SAVE_WORKSPACE_PSEUDOCODE:
    case SAVE_WORKSPACE_PSEUDOCODE_ERROR:
      return { ...state, pseudocode: action.pseudocode };
    case SAVE_WORKSPACE_AST:
    case SAVE_WORKSPACE_AST_ERROR:
      return { ...state, ast: action.ast };
    case SAVE_WORKSPACE_JAVASCRIPT:
    case SAVE_WORKSPACE_JAVASCRIPT_ERROR:
      return { ...state, javascript: action.javascript };
    case CLEAN_WORKSPACE: 
      return defaultState;
    default:
      return state;
  }
}