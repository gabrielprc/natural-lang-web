import React from 'react';
import { Card, Button, Modal } from 'antd';
import styles from './styles.scss';

export default class Exercise extends React.Component {

  state = {
    successVisible: false,
    done: this.props.done,
  }

  renderInstructions = () => {
    return this.props.instructions.map((instruction, id) => 
      <p>{id+1}. {instruction}</p>
    );
  }

  evaluateExercise = () => {
    const { javascript, expected } = this.props;
    return expected.test(javascript) ? this.success() : this.error();
  }

  hideSuccessModal = () => {
    this.setState({ successVisible: false });
  }

  getNextExercise = () => {
    this.props.completeExercise();
  }

  success = () => {
    const modal = Modal.success({
      title: 'Bien hecho!',
      content: 'El ejercicio fue resuelto correctamente',
      okText: 'Siguiente ejercicio',
      onOk: this.getNextExercise,
    });
  }

  error = () => {
    const modal = Modal.error({
      title: 'Has fallado',
      content: ('Intentalo nuevamente...'),
      okText: 'Cerrar',      
    });
  }

  handleFinishTutorial = () => {
    window.location.href = '/';
  }

  render() {
    const {title, description, instructions } = this.props;

    return (
      <div>
        <h1 className="title">{`• ${title}`}</h1>
        <p className="description">{ description }</p>
        <div className="instructions">
          <Card title="Instrucciones">
            { instructions && this.renderInstructions()}
          </Card>
        </div>
        <div className="runButton"> 
          <Button type="primary" onClick={this.evaluateExercise}>Ejecutar código</Button>
        </div>
        <Modal
          title="Felicitaciones"
          visible={this.props.done}
          onCancel={this.handleFinishTutorial}
          onOk={this.handleFinishTutorial}
          okText="Ok"
          cancelText="Cerrar"
        >
          <h1>Has terminado el tutorial introductorio.</h1>
        </Modal>
      </div> 
    );
  }
}