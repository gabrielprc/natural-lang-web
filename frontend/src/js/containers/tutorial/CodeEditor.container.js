import { connect } from 'react-redux';
import CodeEditor from 'js/components/CodeEditor';
import actions from 'js/actions/workspace';

export default connect(null, actions)(CodeEditor);