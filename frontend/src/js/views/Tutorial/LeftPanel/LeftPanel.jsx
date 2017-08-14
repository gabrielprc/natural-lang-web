import React from 'react';
import Panel from 'js/components/Panel';
import Header from 'js/components/Header';
import Exercise from 'js/containers/Exercise.container';
import styles from './styles.scss';

export default class LeftPanel extends React.Component {

  render() {
    return (
      <Panel className="panel">
        <Header className="header">
          <h1>Tutorial</h1>
        </Header>  
        <div className="content">
          <Exercise />
        </div>  
      </Panel>
    );
  }
}