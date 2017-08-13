import { connect } from 'react-redux';
import AceEditor from 'react-ace';

const mapStateToProps = state => {
  return { value: state.workspace.pseudocode };
}

export default connect(mapStateToProps, null)(AceEditor);