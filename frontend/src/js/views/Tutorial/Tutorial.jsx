import React from 'react';
import SplitPane from 'react-split-pane';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import styles from './styles.scss'

class TutorialPage extends React.Component {

  componentDidMount() {
    this.props.getTutorialExercise();
  }

  render() {
    return (
      <div className="tutorial outer">
        <div className="middle">
          <div className="inner">
            <SplitPane
              className="splitPane"
              split="vertical"
              allowResize
              defaultSize={'50%'}
            >
              <LeftPanel />
              <RightPanel />
            </SplitPane>
          </div>
        </div>
      </div>
    );
  }
}

export default TutorialPage;