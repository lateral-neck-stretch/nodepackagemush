import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../history";

let time = 2;

function TimeStamp() {
  return <div id="time">Your mushroom is {time} hours old</div>;
}

export default TimeStamp;
