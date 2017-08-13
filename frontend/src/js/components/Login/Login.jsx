import React from 'react';
import { Modal, Input, Button } from 'react-materialize';
import styles from './styles.scss';

export default class Login extends React.Component {

  state = {
    user: '',
    password: '', 
  };

  onChangeValue = ({ target }) => {
    const value = target.value;
    this.setState({ [target.id]: value });
  }
  
  onClickLogin = () => {
    console.log('login');
  }

  render() {
    return (
      <div>
        <Modal
          header="Login"
          fixedFooter
	        trigger={this.props.trigger}
        >	
          <div className={styles.content}>
            <Input 
              type="text"
              id="user" 
              value={this.state.user} 
              label="Ingresa tu usuario" 
              s={8} 
              onChange={this.onChangeValue}
            />
            <Input 
              type="password"
              id="password" 
              value={this.state.password} 
              label="Ingresa tu contraseña" 
              s={8} 
              onChange={this.onChangeValue}
            />
            <Button 
              waves='light' 
              onClick={this.props.onClickLogin}
              s={4}
            >
              Ingresar
            </Button>
          </div>
        </Modal>
      </div>  
    );
  }
}