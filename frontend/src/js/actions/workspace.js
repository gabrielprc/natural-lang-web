import { 
  SAVE_WORKSPACE_CODE, SAVE_WORKSPACE_PSEUDOCODE, SAVE_WORKSPACE_PSEUDOCODE_ERROR,
  SAVE_WORKSPACE_AST, SAVE_WORKSPACE_AST_ERROR, SAVE_WORKSPACE_JAVASCRIPT,
  SAVE_WORKSPACE_JAVASCRIPT_ERROR, CLEAN_WORKSPACE,
} from './constants';
import NaturalService from 'js/services/natural';


const saveCodeToWorkspace = (code) => ({
  type: SAVE_WORKSPACE_CODE,
  myCode: code,
});

const savePseudocodeToWorkspace = (pseudocode) => ({
  type: SAVE_WORKSPACE_PSEUDOCODE,
  pseudocode,
});

const savePseudocodeToWorkspaceError = (error) => ({
  type: SAVE_WORKSPACE_PSEUDOCODE_ERROR,
  error,
});

const saveASTToWorkspace = (ast) => ({
  type: SAVE_WORKSPACE_AST,
  ast,
});

const saveASTToWorkspaceError = (error) => ({
  type: SAVE_WORKSPACE_AST_ERROR,
  error,
});

const saveJavascriptToWorkspace = (javascript) => ({
  type: SAVE_WORKSPACE_JAVASCRIPT,
  javascript,
});

const saveJavascriptToWorkspaceError = (error) => ({
  type: SAVE_WORKSPACE_JAVASCRIPT_ERROR,
  error,
});

const cleanWorkspaceCode = () => ({
  type: CLEAN_WORKSPACE,
})


export const cleanWokspace = () => (dispatch) => {
  dispatch(cleanWorkspaceCode());
}

export const getNaturalCodeTransformations = (code) => dispatch => {
  dispatch(saveCodeToWorkspace(code));
 
  return NaturalService.getCodeFromNatural(code)
    .then(response => {
      const { pseudocode, ast, javascript} = response.data;
      const formattedAst = JSON.stringify(ast, null, 2);

      dispatch(savePseudocodeToWorkspace(pseudocode));
      dispatch(saveASTToWorkspace(formattedAst));
      dispatch(saveJavascriptToWorkspace(javascript));
    })
    .catch(error => {
      dispatch(savePseudocodeToWorkspaceError('Error al traducir.'));
      dispatch(saveASTToWorkspaceError('Error al traducir.'));
      dispatch(saveJavascriptToWorkspaceError('Error al traducir.'));

      console.warn(error);
    });
};

export const saveCode = code => dispatch => {
  dispatch(saveCodeToWorkspace(code));
}

export default {
  saveCode,
  cleanWokspace,
  getNaturalCodeTransformations,
};