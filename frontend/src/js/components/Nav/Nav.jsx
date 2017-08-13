import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom'
import './styles.scss';

class Nav extends React.Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   loggedIn: false
    // };

    // const store = this.props.store;
    // store.subscribe(() => {
    //   let auth = store.getState().auth;
    //   this.setState({
    //     loggedIn: auth.loggedIn,
    //     role: auth.user ? auth.user.role : null
    //   });
    // });
  }

  render() {
    let items = [];

    const home = (
      <Menu.Item key="home">
        <NavLink to=""><Icon type="home"/>Inicio</NavLink>
      </Menu.Item>
    );
    const tutorial = (
      <Menu.Item key="tutorial">
        <NavLink to="/tutorial"><Icon type="smile-o"/><b>Tutorial</b></NavLink>
      </Menu.Item>
    );
    const classes = (
      <Menu.Item key="clases">
        <NavLink to="/classes"><Icon type="edit"/><b>Clases</b></NavLink>
      </Menu.Item>
    );
    const faq = (
      <Menu.Item key="faq">
        <NavLink to="/faq"><Icon type="question"/>Ayuda</NavLink>
      </Menu.Item>
    );
    const login = (
      <Menu.Item key="login">
        <NavLink to="/login"><Icon type="rocket"/>Login</NavLink>
      </Menu.Item>
    );

    items.push(home);
    items.push(tutorial);
    if (this.props.loggedIn) {
      items.push(classes);
      items.push(faq);
    } else {
      items.push(login);
    }

    return (
      <Menu mode="horizontal" className="menu">
        {items}
      </Menu>
    );
  }
}

export default Nav;