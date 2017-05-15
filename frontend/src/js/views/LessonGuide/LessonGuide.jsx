import React from 'react';
import { Card, Steps, Layout } from 'antd';
import './styles.scss';
const Step = Steps.Step;
const { Sider, Content } = Layout;

class LessonGuide extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const exercise = this.props.exercise;

    return (
      <Card loading={!exercise} className="card" title={exercise ? exercise.title : '...'} bordered={false}>
        <Layout>
          <Sider width="18px">
            <Steps direction="vertical" size="small">
              <Step/>
              <Step/>
              <Step/>
            </Steps>
          </Sider>
          <Layout>
            <Content className="exercise">
              {
                exercise &&
                  <div>
                    <h3>{exercise ? exercise.description : 'Possible exercise'}</h3>
                    <p></p>
                    <div className="instructions">
                      {exercise.instructions.map((exer, index) =>
                        <p key={index} className={exer.code ? 'code' : ''}>
                          {exer.text}
                        </p>
                      )}
                    </div>
                  </div>
              }
            </Content>
          </Layout>
        </Layout>
      </Card>
    );
  }

}

export default LessonGuide;