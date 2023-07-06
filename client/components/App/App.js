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

function App(props) {
  const init = !!window.localStorage.getItem('token');
  const [sessionStarted, setSessionStarted] = useState(null);
  const [timeCounter, setTimeCounter] = useState(0);
  const [timeMultiplierOption, setTimeMultiplierOption] = useState(1);
  const [coordinates, setCoordinates] = useState(null);

  const mushroom = useSelector((state) => state.mushroom || []);

  useEffect(() => {
    if (mushroom !== null) {
      localStorage.setItem('mushroom', JSON.stringify(mushroom));
    }
  }, [mushroom]);

  useEffect(() => {
    if (localStorage.timeMultiplier) {
      const timeMultiplier = localStorage.getItem('timeMultiplier');
      setTimeMultiplierOption(timeMultiplier);
    }
  });

  // useEffect(() => {
  //   localStorage.setItem('timeMultiplier', timeMultiplierOption);
  // }, [timeMultiplierOption]);

  useEffect(() => {
    function reset() {
      const startTime = +new Date();
      const prevTime = startTime - 1000;
      localStorage.setItem('startTime', startTime);
      localStorage.setItem('prevTime', prevTime);
      localStorage.setItem('currentAge', timeCounter);
      localStorage.setItem('timeMultiplier', timeMultiplierOption);
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
      const timeMultiplier = localStorage.getItem(`timeMultiplier`);
      const step = currentTime - prevTime;

      const timeElapsed = Math.floor((timeMultiplier * step) / time.seconds);

      const interval = setInterval(() => {
        const newAge = Math.round(+currentAge + timeElapsed);
        setTimeCounter(newAge);
        localStorage.setItem('currentAge', newAge);
      }, 1000);

      localStorage.setItem('prevTime', currentTime);

      return () => {
        clearInterval(interval);
      };
    }
  }, [init, timeCounter]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    props.authenticate();

    const getCurrentPosition = () =>
      new Promise((resolve, error) =>
        navigator.geolocation.getCurrentPosition(resolve, error)
      );

    try {
      const position = await getCurrentPosition();
      const latitude = position.coords.latitude || 0;
      const longitude = position.coords.longitude || 0;

      const userCoordinates = {
        lat: latitude,
        long: longitude,
      };

      props.getMush(userCoordinates);
    } catch (error) {
      console.error(error);
      props.getMush(testCoordinates);
    }

    // getCurrentPosition().then((location) => props.getMush(location));
    // props.getMush(currentPosition);
  };

  function getCurrentPosition() {
    function success(position) {
      const latitude = position.coords.latitude || 0;
      const longitude = position.coords.longitude || 0;

      const userCoordinates = {
        lat: latitude,
        long: longitude,
      };

      setCoordinates(userCoordinates);
      return coordinates;
    }

    function error(error) {
      alert('Unable to retrieve your location');
      console.error(error);

      setCoordinates(testCoordinates);
      return coordinates;
    }

    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');

      setCoordinates(testCoordinates);
      return coordinates;
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  return (
    <div className={style.container}>
      {init ? (
        <InfoBox
          className={style.InfoBox}
          timeCounter={timeCounter}
          sessionStarted={sessionStarted}
          timeMultiplierOption={timeMultiplierOption}
          setTimeMultiplierOption={setTimeMultiplierOption}
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
            setCoordinates={setCoordinates}
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
