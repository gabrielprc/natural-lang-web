import React from 'react';
import { Card } from 'antd';
import styles from './styles.scss';

export default class Exercise extends React.Component {

  renderInstructions = () => {
    return this.props.instructions.map((instruction, id) => 
      <p>{id++}. {instruction}</p>
    );
  }

  render() {
    const {title, description, instructions } = this.props;

    return (
      <div>
        <h1 className={styles.title}>{`• ${title}`}</h1>
        <p className={styles.description}>{ description }</p>
        <Card title="Instrucciones">
          { instructions && this.renderInstructions()}
        </Card>
      </div> 
    );
  }
}