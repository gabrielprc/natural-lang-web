import React from 'react';
import styles from './styles.scss';

export default class Separator extends React.Component {

  render() {
    return (
      <div className={styles.separator}>
      { this.props.character }
      </div>
    )
  }
}