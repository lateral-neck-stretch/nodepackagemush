import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import Mush from '../Mush/KingOyster';
import Home from '../Home/Home';
import { me } from '../../store';
import style from './App.module.css';
import ResetButton from '../resetButton/ResetButton';
import InfoBox from '../InfoBox/InfoBox';
import { authenticate } from '../../store';
import { getMush } from '../../store/mushroom';

const time = {
  seconds: 1000,
  minutes: 60000,
};

const testCoordinates = {
  lat: 0,
  long: 0,
};

/**
 * TO-DO : LOCATION
 */

function App(props) {
  const init = !!window.localStorage.getItem('token');
  const [sessionStarted, setSessionStarted] = useState(null);
  const [timeCounter, setTimeCounter] = useState(0);
  const [timeMultiplier, setTimeMultiplier] = useState(1);

  const mushroom = useSelector((state) => state.mushroom || []);

  useEffect(() => {
    if (mushroom !== null) {
      localStorage.setItem('mushroom', JSON.stringify(mushroom));
    }
  }, [mushroom]);

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
  }, [init]);

  useEffect(() => {
    if (init && localStorage.startTime) {
      const currentTime = +new Date();
      const currentAge = localStorage.getItem('currentAge');
      const prevTime = localStorage.getItem(`prevTime`);
      const step = currentTime - prevTime;

      const timeElapsed = Math.floor((timeMultiplier * step) / time.seconds);

      const interval = setInterval(() => {
        const newAge = Math.round(+currentAge + timeElapsed);
        setTimeCounter(newAge); // set to seconds
        localStorage.setItem('currentAge', newAge);
      }, 1000);

      localStorage.setItem('prevTime', currentTime);

      return () => {
        clearInterval(interval);
      };
    }
  }, [init, timeCounter, timeMultiplier]);

  // useEffect(() => {
  //   setSessionStarted(init);
  // }, [init]);

  function handleSubmit(evt) {
    evt.preventDefault();

    props.authenticate();
    props.getMush(testCoordinates);
  }

  // console.log(`mushroom`);
  // console.log(mushroom);

  return (
    <div className={style.container}>
      {init ? (
        <InfoBox
          className={style.InfoBox}
          timeCounter={timeCounter}
          sessionStarted={sessionStarted}
        />
      ) : (
        <></>
      )}
      <div className={style.appWrapper}>
        {init ? (
          <Mush className={style.content} timeCounter={timeCounter} />
        ) : (
          <Home
            className={style.content}
            handleSubmit={handleSubmit}
            setSessionStarted={setSessionStarted}
          />
        )}
      </div>
      <ResetButton className={style.ResetButton} />
    </div>
  );
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

const mapDispatch = {
  authenticate,
  getMush,
};

export default withRouter(connect(null, mapDispatch)(App));
