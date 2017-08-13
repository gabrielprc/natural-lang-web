import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import App from './app';
import Sandbox from './views/Sandbox';
import Editor from './views/Editor';
import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';
import Classes from './views/Classes';
import Tutorial from './views/Tutorial';

ReactDOM.render(
  <Provider store={store}>
   <Router>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/tutorial" component={Tutorial} />
        <Route path="/classes" component={Classes} />
        <Route exact path="/faq" component={Home} />
        <Route path="/docs" component={Sandbox} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
