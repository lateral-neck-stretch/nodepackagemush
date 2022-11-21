import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../history";

export function MushStage2() {
  const animationRef = React.useRef(null);
  React.useEffect(() => {
    animationRef.current = anime({
      targets: ".mush_stage2",
      // Properties
      borderRadius: 50,
      // Property Parameters
      duration: 2000,
      // Animation Parameters
      scaleY: [
        { value: 0.9, duration: 170, delay: 170 },
        { value: 1.1, duration: 170, delay: 120 },
        { value: 1, duration: 170 },
      ],
      scaleX: [
        { value: 1.1, duration: 170, delay: 170 },
        { value: 0.9, duration: 170, delay: 120 },
        { value: 1, duration: 170 },
      ],
      translateY: [
        { value: -5, duration: 170 },
        { value: 0, duration: 170, delay: 120 },
      ],

      loop: true,
      easing: "easeInOutElastic(1, 0.2)",
      // scale: 1.01,
    });
  });
  return (
    <div className="mush_stage2">
      <img src="mush_stage2.svg" alt="mush_stage2" />
    </div>
  );
}
