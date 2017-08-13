import React from 'react';
import { Card, Col, Icon, Progress } from 'antd';
import './styles.scss';

class ClassCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ...props
    }

    this.handleSubscribe = this.handleSubscribe.bind(this);
  }

  handleSubscribe() {
    this.setState({
      subscribed: !this.state.subscribed,
      students: this.state.subscribed ? (this.state.students - 1) : (this.state.students + 1)
    });
  }

  render() {
    let subscriptionInfo;
    let progress;
    if (this.state.subscribed) {
      subscriptionInfo = (
        <div className="info">
          <div className="subscribeButton subscribed" onClick={this.handleSubscribe}>
            Inscripto <Icon className="icon" type="check"/>
          </div>
        </div>
      );
      progress = (
        <div className="info">
          <Progress percent={this.state.progress} showInfo={false}/>
        </div>
      );
    } else {
      subscriptionInfo = (
        <div className="info">
          <div className="subscribeButton" onClick={this.handleSubscribe}>
            Inscribirse
          </div>
        </div>
      );
    }

    return (
      <Col span={8} className="classCard">
        <Card title={this.state.title} bordered={false}>
          <div className="info">
            <span className="professor">Profesor:</span>
            <span>{this.state.professor}</span>
          </div>
          <div className="info">
            <span>{this.state.students} inscriptos</span>
          </div>
          {subscriptionInfo}
          {progress}
        </Card>
      </Col>
    );
  }
}

export default ClassCard;