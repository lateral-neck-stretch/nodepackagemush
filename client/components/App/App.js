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

const mushType = 'KingOyster'; // TO-DO : replace with mushtype from db call

/**
 * TO-DO : LOCATION
 */

function App() {
  const init = !!window.localStorage.getItem('token');
  const [timeCounter, setTimeCounter] = useState(0);
  const [timeMultiplier, setTimeMultiplier] = useState(10);

  useEffect(() => {
    function reset() {
      const startTime = +new Date();
      const prevTime = startTime - 1000;
      localStorage.setItem('startTime', startTime);
      localStorage.setItem('prevTime', prevTime);
      localStorage.setItem('currentAge', timeCounter);
    }
    if (init && !localStorage.startTime) {
      reset();
    }
  }, []);

  useEffect(() => {
    if (init && localStorage.startTime) {
      const currentTime = +new Date();
      const currentAge = localStorage.getItem('currentAge');
      const prevTime = localStorage.getItem(`prevTime`);
      const step = currentTime - prevTime; // should be 1000 if the app has been running continuously

      console.log(`step is ${step}`);

      const timeElapsed = Math.floor((timeMultiplier * step) / time.seconds);
      console.log(`time added is ${timeElapsed}`);

      const interval = setInterval(() => {
        const newAge = Math.round(+currentAge + timeElapsed);
        setTimeCounter(newAge); // set to seconds
        localStorage.setItem('currentAge', newAge);

        console.log(`timeCounter / currentAge is ${timeCounter}`);
        console.log(`timeElapsed is ${timeElapsed}`);
      }, 1000);

      localStorage.setItem('prevTime', currentTime);

      return () => {
        clearInterval(interval);
      };
    }
  }, [timeCounter, timeMultiplier]);

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
