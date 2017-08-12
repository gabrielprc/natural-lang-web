import React from 'react';
import './styles.scss';

class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      role: 'student',
      password: '',
      confirmation: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
    this.handleSignupSuccess = this.handleSignupSuccess.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.state.password !== this.state.confirmation
      || this.state.password === ''
      || this.state.firstName === ''
      || this.state.lastName === ''
      || this.state.email === ''
    ) {
      return;
    }

    this.doSubmit();
  }

  doSubmit() {
    fetch('api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    }).then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(this.handleSignupSuccess)
    .catch(function(error) {
      console.error(error);
    });
  }

  handleSignupSuccess() {
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
      if (response.ok) {
        window.location.assign('/');
      } else {
        throw new Error(response);
      }
    })
    .catch(function(error) {
      console.error(error);
    });
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
        <div className="login outer">
          <div className="middle">
            <div className="inner">
              <form onSubmit={this.handleSubmit}>
                  <div className="block">
                      <h1>Crear cuenta</h1>
                      <select
                        name="role"
                        onChange={this.handleChange}>
                        <option value="student">Estudiante</option>
                        <option value="professor">Profesor</option>
                      </select>
                      <input
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        placeholder="Correo electrónico">
                      </input>
                      <input
                        type="text"
                        name="firstName"
                        className="half"
                        onChange={this.handleChange}
                        placeholder="Nombre">
                      </input>
                      <input
                        type="text"
                        name="lastName"
                        className="half"
                        onChange={this.handleChange}
                        placeholder="Apellido">
                      </input>
                      <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="Contraseña">
                      </input>
                      <input
                        type="password"
                        name="confirmation"
                        value={this.state.confirmation}
                        onChange={this.handleChange}
                        placeholder="Confirmar contraseña">
                      </input>
                      <input
                        type="submit"
                        value="Crear cuenta">
                      </input>
                  </div>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default Signup;