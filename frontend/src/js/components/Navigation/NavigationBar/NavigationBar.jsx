import React from 'react';
import Header from 'js/components/Header';
import Link from 'js/components/Navigation/Link';
import Login from 'js/components/Login';
import Separator from '../Separator';
import styles from './styles.scss';

import { Button } from 'antd';

export default class NavigationBar extends React.Component {

  render() {
    return (
      <Header className={styles.navHeader}>
        <h1 className={styles.logo}>Lenguaje Natural</h1>
        <div className={styles.links}>
          <Login trigger={ <Link name="Ingresar"/> } />
          <Separator character="|" />
          <Link name="REGISTRARSE"/>
        </div>
      </Header>  
    );
  }
}