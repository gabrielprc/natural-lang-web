import React from 'react';
import { Card, Spin } from 'antd';
import styles from './styles.scss';

export default class Exercise extends React.Component {

  // renderInstructions = () => {
  //   return this.props.instructions.map((instruction, id) => 
  //     <p>{id++}. {instruction}</p>
  //   );
  // }

  render() {
    const { name, description } = this.props;

    return (
      <div className="exercise">
        <h1 className="title">{`Ejercicio: ${name}`}</h1>
        <Card title="Instrucciones" className="instructions">
          { description }
        </Card>
        <Card title="Resultado" className="result">
          <Spin tip="Esperando la resolución..."/>
        </Card>
      </div> 
    );
  }
}