import { connect } from 'react-redux';
import AceEditor from 'react-ace';

const mapStateToProps = state => {
  return { value: state.workspace.javascript };
}

export default connect(mapStateToProps, null)(AceEditor);