import React from "react";
import anime from "animejs/lib/anime.es.js";

import Navbar from "./components/Navbar";
import Routes from "./Routes";

// let animation = anime({
//   targets: ".bud_bounce",
//   // Properties
//   translateX: 100,
//   borderRadius: 50,
//   // Property Parameters
//   duration: 2000,
//   easing: "linear",
//   // Animation Parameters
//   direction: "alternate",
// });

function App() {
  const animationRef = React.useRef(null);
  // const jumpKeyframes = {
  // scaleY: [
  //   { value: 0.9, duration: 170 },
  //   { value: 1, duration: 170, delay: 120 },
  // ],
  // translateY: [
  //   { value: -20, duration: 170, delay: 170 },
  //   { value: 0, duration: 170, delay: 220 },
  // ],
  // };
  React.useEffect(() => {
    animationRef.current = anime({
      targets: ".bud_bounce",
      // Properties
      // translateX: 100,
      borderRadius: 50,
      // Property Parameters
      duration: 2000,
      // Animation Parameters
      // keyframes: [{ translateY: 2 }, { scaleY: 1.01 }],
      scaleY: [
        { value: 0.9, duration: 170, delay: 170 },
        { value: 1.1, duration: 170, delay: 120 },
      ],
      translateY: [
        { value: -20, duration: 170 },
        { value: 0, duration: 170, delay: 120 },
      ],

      // direction: "alternate",
      loop: true,
      easing: "easeInOutElastic(1, 0.2)",
      // scale: 1.01,
    });
  });
  return (
    <div className="bud_bounce">
      <img src="bud_bounce.svg" alt="bud bounce" />
    </div>
  );
}

export default App;
