import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './history';
import store from './store';
import App from './App';
import Home from './components/Home/Home';
import TimeStamp from './components/TimeStamp';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {/* <TimeStamp /> */}
      {/* <Home /> */}
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
