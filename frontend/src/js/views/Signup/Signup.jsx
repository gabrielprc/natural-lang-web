import React from 'react';
import './styles.scss';

class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmation: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    if (
      this.state.password !== this.state.confirmation
      || this.state.password === ''
      || this.state.firstName === ''
      || this.state.lastName === ''
      || this.state.email === ''
    ) {
      event.preventDefault();
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
        <div className="login outer">
          <div className="middle">
            <div className="inner">
              <form action="api/users" method="POST" onSubmit={this.handleSubmit}>
                  <div className="block">
                      <h1>Crear cuenta</h1>
                      <select name="role">
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