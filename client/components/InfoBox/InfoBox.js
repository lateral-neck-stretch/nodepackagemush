import React, { Component, useState, useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import style from './InfoBox.module.css';
import history from '../../history';

function InfoBox(props) {
  const { timeCounter, timeMultiplier, setTimeMultiplier } = props; // timeCounter coming in as seconds elapsed
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [mushroom, setMushroom] = useState(null);
  const [mushroomName, setMushroomName] = useState(null);

  const speedOptions = [1, 2, 5, 10, 100];

  // useEffect(() => {
  //   if (props.sessionStarted) {
  //     console.log(`lsmushroom is`);
  //     console.log(lsMushroom);
  //     setMushroom(lsMushroom);
  //   }
  //   // setMushroomName(lsMushroom.name);
  // }, [props.sessionStarted]);

  useEffect(() => {
    const lsMushroom = JSON.parse(localStorage.getItem(`mushroom`));
    setMushroom(lsMushroom);
  }, []);

  // useEffect(() => {
  //   if (mushroom !== null) {
  //     console.log(`namechange`);
  //     setMushroomName(mushroom.name);
  //   } else {
  //     console.log(`nonamechange`);
  //   }
  // }, [mushroom]);

  if (mushroom !== null && mushroomName === null) {
    setMushroomName(mushroom.name);
  }

  useEffect(() => {
    if (timeCounter) {
      let numSecs = timeCounter;

      let numDays = Math.floor(numSecs / 86400);
      numSecs -= numDays * 86400;
      setDays(numDays);

      let numHours = Math.floor(numSecs / 3600) % 24;
      numSecs -= numHours * 3600;
      setHours(numHours);

      let numMinutes = Math.floor(numSecs / 60) % 60;
      numSecs -= numMinutes * 60;
      setMinutes(numMinutes);

      setSeconds(numSecs);
    }
  });

  // const SpeedOption = (text, value) => {
  //   return <p>{text}</p>;
  // };

  const handleSpeedChange = (event) => {
    console.log(event);
    console.log(`button clicked ${event.target.value}`);
    setTimeMultiplier(event.target.value);
  };

  return (
    <div className={style.infoBox}>
      <p>
        mushroom_type: {mushroomName ? mushroomName : ''} <br />
        mushroom_age: {days} days {hours} hours {minutes} minutes {seconds}{' '}
        seconds <br />
        <br />
        growth_speed:{' '}
        {speedOptions.map((speed) => {
          return (
            <button
              value={speed}
              onClick={(event) => handleSpeedChange(event)}
              id={`${speed}-speed-button`}
            >
              {speed}x
            </button>
          );
        })}
        {/* <button value={1} onClick={(event) => handleSpeedChange(event)}>
          1x
        </button>{' '}
        <button value={2} onClick={(event) => handleSpeedChange(event)}>
          2x
        </button>{' '}
        <button value={5} onClick={(event) => handleSpeedChange(event)}>
          5x
        </button>{' '}
        <button value={10} onClick={(event) => handleSpeedChange(event)}>
          10x
        </button>{' '}
        <button value={100} onClick={(event) => handleSpeedChange(event)}>
          100x
        </button> */}
      </p>
    </div>
  );
}

export default withRouter(InfoBox);
