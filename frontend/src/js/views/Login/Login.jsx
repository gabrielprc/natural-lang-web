import React from 'react';
import './styles.scss';

class Login extends React.Component {

  render() {
    return (
        <div className="login outer">
          <div className="middle">
            <div className="inner">
              <form action="api/login" method="POST">
                <div className="signup block">
                    <a href="signup">Crear cuenta</a>
                </div>
                  <div className="separator"></div>
                  <div className="block">
                      <h1>Iniciar sesión</h1>
                      <input type="email" name="email" placeholder="Correo electrónico"></input>
                      <input type="password" name="password" placeholder="Contraseña"></input>
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