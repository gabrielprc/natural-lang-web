import React from 'react';
import { Card, Col, Icon, Progress } from 'antd';
import './styles.scss';

class ClassCard extends React.Component {

  render() {
    let subscriptionInfo;
    let progress;
    if (this.props.subscribed) {
      subscriptionInfo = (
        <div className="info">
          <div className="subscribeButton subscribed">
            Inscripto <Icon className="icon" type="check"/>
          </div>
        </div>
      );
      progress = (
        <div className="info">
          <Progress percent={this.props.progress} showInfo={false}/>
        </div>
      );
    } else {
      subscriptionInfo = (
        <div className="info">
          <div className="subscribeButton">
            Inscribirse
          </div>
        </div>
      );
    }

    return (
      <Col span={8} className="classCard">
        <Card title={this.props.title} bordered={false}>
          <div className="info">
            <span className="professor">Profesor:</span>
            <span>{this.props.professor}</span>
          </div>
          <div className="info">
            <span>{this.props.students} inscriptos</span>
          </div>
          {subscriptionInfo}
          {progress}
        </Card>
      </Col>
    );
  }
}

export default ClassCard;