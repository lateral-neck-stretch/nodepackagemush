import React, { Component, useState, useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import style from './InfoBox.module.css';
import history from '../../history';

// will need to obtain timer thru local storage

function InfoBox(props) {
  return (
    <div className={style.infoBox}>
      <p>
        mushroom_type: <br></br>
        mushroom_age: <span id='time'></span>
      </p>
    </div>
  );
}

export default withRouter(InfoBox);
