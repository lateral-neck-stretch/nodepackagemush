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
  React.useEffect(() => {
    animationRef.current = anime({
      targets: ".bud_bounce",
      // Properties
      // translateX: 100,
      borderRadius: 50,
      // Property Parameters
      duration: 2000,
      easing: "linear",
      // Animation Parameters
      direction: "alternate",
      loop: true,
      scale: 1.2,
    });
  });
  return (
    <div className="bud_bounce">
      <img src="bud_bounce.svg" alt="bud bounce" />
    </div>
  );
}

export default App;
