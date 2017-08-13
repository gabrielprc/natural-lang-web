import React from 'react';
import styles from './styles.scss';

class Header extends React.Component {

  render() {
    return (
      <div className={styles.header}>
        <h3 className={styles.title}>Output</h3>
      </div>  
    );
  }
}

export default Header;