import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import Mush from '../Mush/KingOyster';
import Home from '../Home/Home';
import { me } from '../../store';
import style from './App.module.css';
import ResetButton from '../resetButton/ResetButton';

function App() {
  const init = !!window.localStorage.getItem('token');
  console.log(init);
  return (
    <div className={style.container}>
      <div className={style.appWrapper}>{init ? <Mush /> : <Home />}</div>
      <ResetButton className={style.ResetButton} />
    </div>
  );
}

export default App;

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
