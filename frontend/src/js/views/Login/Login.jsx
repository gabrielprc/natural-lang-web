import React from 'react';
import { Redirect } from 'react-router-dom'
import './styles.scss';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loggedIn: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    const self = this;

    event.preventDefault();

    fetch('api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then(function(response) {
      // this.props.loginUser(this.state.email);
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(response);
      }
    })
    .then((json) => {
      self.props.loginUser(json);
      self.setState({
        loggedIn: true
      });
    })
    .catch(function(error) {
      // this.props.loginUserError(this.state.email);
      console.error(error);
    });
  }

  render() {
    return (
        <div className="login outer">
          {this.state.loggedIn && <Redirect to="/" push/>}
          <div className="middle">
            <div className="inner">
              <form onSubmit={this.handleSubmit}>
                <div className="signup block">
                    <a href="signup">Crear cuenta</a>
                </div>
                  <div className="separator"></div>
                  <div className="block">
                      <h1>Iniciar sesión</h1>
                      <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        onChange={this.handleChange}>
                      </input>
                      <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        onChange={this.handleChange}>
                      </input>
                      <input type="submit" value="Ingresar"></input>
                  </div>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default Login;