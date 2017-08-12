import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom'
import './styles.scss';

class Nav extends React.Component {

  render() {
    return (
      <Menu mode="horizontal" className="menu">
        <Menu.Item key="home">
          <NavLink to=""><Icon type="home"/>Inicio</NavLink>
        </Menu.Item>
        <Menu.Item key="tutorial">
          <NavLink to="/tutorial"><Icon type="smile-o"/><b>Tutorial</b></NavLink>
        </Menu.Item>
        <Menu.Item key="clases">
          <NavLink to="/classes"><Icon type="edit"/><b>Clases</b></NavLink>
        </Menu.Item>
        <Menu.Item key="login">
          <NavLink to="/login"><Icon type="rocket"/>Login</NavLink>
        </Menu.Item>
        <Menu.Item key="faq">
          <NavLink to="/faq"><Icon type="question"/>Ayuda</NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav;