import React from 'react';
import SplitPane from 'react-split-pane';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

class TutorialPage extends React.Component {

  componentDidMount() {
    this.props.getTutorialExercise();
  }

  render() {
    return (
      <div>
        <SplitPane
          split="vertical"
          allowResize
          defaultSize={'50%'}
        >
          <LeftPanel />
          <RightPanel />
        </SplitPane>
      </div>
    );
  }
}

export default TutorialPage;