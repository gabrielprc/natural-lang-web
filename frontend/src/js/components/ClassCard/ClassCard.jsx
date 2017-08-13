import React from 'react';
import { Card, Col, Icon, Progress } from 'antd';
import './styles.scss';

class ClassCard extends React.Component {

  constructor(props) {
    super(props);

    const { clazz, userInSession } = this.props;
    const { students } = clazz;

    this.state = {
      studentsLength: students.length,
      subscribed: userInSession && students.indexOf(userInSession.id) > -1
    }

    this.handleSubscribe = this.handleSubscribe.bind(this);
  }

  handleSubscribe() {
    if (this.state.subscribed) {
      return;
    }

    const self = this;

    fetch('api/classrooms/subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idClassroom: this.props.clazz.id,
        idUser: this.props.userInSession.id
      })
    }).then(function(response) {
      if (response.ok) {
        self.setState({
          subscribed: true,
          studentsLength: self.state.studentsLength + 1
        });
      } else {
        throw new Error(response.error);
      }
    })
    .catch(function(error) {
      console.error(error);
    });
  }

  render() {
    const { clazz, userInSession } = this.props;
    const { name } = clazz;
    const professor = clazz.professor.firstName + ' ' + clazz.professor.lastName;

    const totalExercises = clazz.exercises.length;
    let completeExercises = 0;
    for (let i = 0; i < totalExercises.length; i++) {
      if (totalExercises[i].approved) {
        completeExercises++;
      }
    }
    const progress = completeExercises / totalExercises * 100;

    let subscriptionComponent;
    let progressComponent;

    if (this.state.subscribed) {
      subscriptionComponent = (
        <div className="info">
          <div className="subscribeButton subscribed" onClick={this.handleSubscribe}>
            Inscripto <Icon className="icon" type="check"/>
          </div>
        </div>
      );
      progressComponent = (
        <div className="info">
          <Progress percent={progress} showInfo={false}/>
        </div>
      );
    } else {
      subscriptionComponent = (
        <div className="info">
          <div className="subscribeButton" onClick={this.handleSubscribe}>
            Inscribirse
          </div>
        </div>
      );
    }

    return (
      <Col span={8} className="classCard">
        <Card title={name} bordered={false}>
          <div className="info">
            <span className="professor">Profesor:</span>
            <span>{professor}</span>
          </div>
          <div className="info">
            <span>{this.state.studentsLength} inscriptos</span>
          </div>
          {subscriptionComponent}
          {progressComponent}
        </Card>
      </Col>
    );
  }
}

export default ClassCard;