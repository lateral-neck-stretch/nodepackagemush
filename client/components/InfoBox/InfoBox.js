import React, { Component, useState, useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import style from './InfoBox.module.css';
import history from '../../history';

function InfoBox(props) {
  const { timeCounter } = props; // timeCounter coming in as seconds elapsed
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  React.useEffect(() => {
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

  return (
    <div className={style.infoBox}>
      <p>
        mushroom_type: <br></br>
        mushroom_age: {days} days {hours} hours {minutes} minutes {seconds}{' '}
        seconds
      </p>
    </div>
  );
}

export default withRouter(InfoBox);
