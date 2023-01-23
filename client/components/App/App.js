import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import Mush from '../Mush/KingOyster';
import Home from '../Home/Home';
import { me } from '../../store';
import style from './App.module.css';
import ResetButton from '../resetButton/ResetButton';
import InfoBox from '../InfoBox/InfoBox';

const time = {
  seconds: 1000,
  minutes: 60000,
};
let timeElapsed;

const mushType = 'KingOyster'; // TO-DO : replace with mushtype from db call

/**
 * TO-DO : LOCATION
 */

function App() {
  const init = !!window.localStorage.getItem('token');
  const [timeCounter, setTimeCounter] = useState(0);

  React.useEffect(() => {
    /**
     * LOCATION
     */

    /**
     * INIT TIMER
     */
    let interval = null;

    function reset() {
      localStorage.startTime = +new Date();
    }
    if (init && !localStorage.startTime) {
      reset();
    }
    interval = setInterval(() => {
      timeElapsed = new Date() - localStorage.startTime;
      if (timeElapsed >= 0) {
        setTimeCounter(Math.floor(timeElapsed / time.seconds)); // set to seconds
        // console.log('time in sec', timeCounter);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className={style.container}>
      {init ? (
        <InfoBox
          className={style.InfoBox}
          timeCounter={timeCounter}
          mushType={mushType}
        />
      ) : (
        <></>
      )}
      <div className={style.appWrapper}>
        {init ? (
          <Mush className={style.content} timeCounter={timeCounter} />
        ) : (
          <Home className={style.content} />
        )}
      </div>
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
