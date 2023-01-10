import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import Mush from './mush';
import Home from './components/Home/Home';
import { me } from './store';

function App() {
  const init = !!window.localStorage.getItem('token');
  console.log(init);
  return <div>{init ? <Mush /> : <Home />}</div>;
}

// const mapState = (state) => {
//   return {
//     init: !!window.localStorage.getItem('token'),
//   };
// };

// const mapDispatch = (dispatch) => {
//   return {
//     loadInitialData() {
//       dispatch(me());
//     },
//   };
// };

export default App;
