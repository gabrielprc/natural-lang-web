import React from 'react';
import { debounce, isEmpty } from 'lodash';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/mode/text';
import 'brace/mode/json';
import 'brace/theme/monokai';

class CodeEditor extends React.Component {

  state = {
    code: this.props.code,
  }

  componentWillReceiveProps(nextProps) {
    if (isEmpty(nextProps.code)) {
      this.setState({ code: '' });
    }
  }

  saveCode = debounce(this.props.saveCode, 1000);

  getNaturalCodeTransformations = debounce(this.props.getNaturalCodeTransformations, 1000);
  
  updateCode = (code) => {
    this.setState({ code });
    this.getNaturalCodeTransformations(code);
  }

  runCode = () => {
    console.log(this.state.code);
  }

  sendCode = () => {
    console.log('Send code');
  }

  render() {
    return (
      <div>
        <AceEditor
          mode="text"
          theme="monokai"
          width="100%"
          editorProps={{ $blockScrolling: Infinity }}
          onLoad={(editor) => {
            editor.focus();
            editor.getSession().setUseWrapMode(true);
          }}
          value={this.state.code}
          onChange={this.updateCode}
        />
      </div>
    )
  }
}

export default CodeEditor;