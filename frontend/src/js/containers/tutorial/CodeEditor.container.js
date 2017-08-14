import { connect } from 'react-redux';
import CodeEditor from 'js/components/CodeEditor';
import actions from 'js/actions/workspace';

const mapStateToProps = state => {
  return { code: state.workspace.myCode };
}

export default connect(mapStateToProps, actions)(CodeEditor);