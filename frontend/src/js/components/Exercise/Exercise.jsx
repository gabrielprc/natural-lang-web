import React from 'react';
import { Card } from 'antd';
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
      <div className={styles.exercise}>
        <h1 className={styles.title}>{`• ${name}`}</h1>
        <p className={styles.description}>{ description }</p>
        <Card title="Instrucciones" className={styles.instructions}>
          { description }
        </Card>
      </div> 
    );
  }
}