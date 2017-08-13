import React from 'react';
import { Tabs } from 'antd';
import CodeEditor from 'js/containers/tutorial/CodeEditor.container';
import Pseudocode from 'js/containers/tutorial/Pseudocode.container';
import AST from 'js/containers/tutorial/Ast.container';
import JavaScript from 'js/containers/tutorial/JavaScript.container';
import styles from './styles.scss';

import 'brace/mode/javascript';
import 'brace/mode/text';
import 'brace/mode/json';
import 'brace/theme/monokai';

const TabPane = Tabs.TabPane;

export default class RightPanel extends React.Component {

  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" tabBarStyle={{height: '40px', marginBottom: '0px'}}>
          <TabPane tab="Mi código" key="1">
            <CodeEditor />
          </TabPane>
          <TabPane tab="Pseudocódigo" key="2"> 
            <Pseudocode
              mode="text"
              theme="monokai"
              readOnly
              width="100%"
              editorProps={{ $blockScrolling: Infinity }}
              onLoad={(editor) => {
                editor.focus();
                editor.getSession().setUseWrapMode(true);
              }}
            />
          </TabPane>
          <TabPane tab="AST" key="3"> 
            <AST
              mode="json"
              theme="monokai"
              readOnly
              width="100%"
              editorProps={{ $blockScrolling: Infinity }}
              onLoad={(editor) => {
                editor.focus();
                editor.getSession().setUseWrapMode(true);
              }}
            />
          </TabPane>
          <TabPane tab="JavaScript" key="4"> 
            <JavaScript
              mode="javascript"
              theme="monokai"
              readOnly
              width="100%"
              editorProps={{ $blockScrolling: Infinity }}
              onLoad={(editor) => {
                editor.focus();
                editor.getSession().setUseWrapMode(true);
              }}
            />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}