import React from 'react';
import { findIndex } from 'lodash';
import { Card, Steps, Layout } from 'antd';
import './styles.scss';
const Step = Steps.Step;
const { Sider, Content } = Layout;

class LessonGuide extends React.Component {

  constructor(props) {
    super(props);
  }

  getNextExercise = () => {
    const { exercises } = this.props.lessons ? this.props.lessons[0] : [];
    const index = findIndex(exercises, (e) => e.done === false);
    return index > -1 ? exercises[index] : null;
  };

  render() {
    const exercise = this.props.lessons
      ? this.getNextExercise()
      : null;
    return (
      <Card className="card" title="Introduction" bordered={false}>
        <Layout>
          <Sider width='18px'>
            <Steps direction="vertical" size="small">
              <Step/>
              <Step/>
              <Step/>
            </Steps>
          </Sider>
          <Layout>
            <Content>
              {exercise ?
                <div>
                  <h3>{exercise.title}</h3>
                  <p>{exercise ? exercise.description : 'Possible exercise'}</p>
                  <div className='instructions'>
                    <p>{exercise.instructions}</p>
                  </div>
                </div>
                : <p>Possible exercise</p>
              }
            </Content>
          </Layout>
        </Layout>
      </Card>
    );
  }

}

export default LessonGuide;