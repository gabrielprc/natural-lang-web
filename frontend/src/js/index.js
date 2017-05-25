import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import App from './app';
import Sandbox from './views/Sandbox';
import Editor from './views/Editor';
import Home from './views/Home';

ReactDOM.render(
  <Provider store={store}>
   <Router>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/learn" component={Editor} />
        <Route path="/docs" component={Sandbox} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
