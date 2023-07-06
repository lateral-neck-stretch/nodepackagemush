import React, { Component, useState, useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import style from './InfoBox.module.css';
import history from '../../history';

function InfoBox(props) {
  const { timeCounter, timeMultiplierOption, setTimeMultiplierOption } = props; // timeCounter coming in as seconds elapsed
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [currentSpeed, setCurrentSpeed] = useState(null);
  const [mushroom, setMushroom] = useState(null);
  const [mushroomName, setMushroomName] = useState(null);

  const speedOptions = [1, 2, 5, 10, 100];

  useEffect(() => {
    const lsMushroom = JSON.parse(localStorage.getItem(`mushroom`));
    setMushroom(lsMushroom);
  }, []);

  if (mushroom !== null && mushroomName === null) {
    setMushroomName(mushroom.name);
    console.log(`setting mushroom name`);
    console.log(mushroom.name);
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

  useEffect(() => {
    const timeMultiplier = localStorage.getItem('timeMultiplier');
    setCurrentSpeed(timeMultiplier);
  }, []);

  const handleSpeedChange = (event) => {
    setTimeMultiplierOption(event.target.value);
    localStorage.setItem('timeMultiplier', event.target.value);
    setCurrentSpeed(event.target.value);
  };

  return (
    <div className={style.infoBox}>
      <p>
        mushroom_type: {mushroomName ? mushroomName : ''} <br />
        mushroom_age: {days} days {hours} hours {minutes} minutes {seconds}{' '}
        seconds <br />
        growth_speed:{' '}
        {speedOptions.map((speed) => {
          return (
            <button
              value={speed}
              onClick={(event) => handleSpeedChange(event)}
              key={`${speed}-speed-button`}
              className={
                speed == currentSpeed ? style.selectedSpeedOption : null
              }
            >
              {speed}x
            </button>
          );
        })}
      </p>
    </div>
  );
}

export default withRouter(InfoBox);
