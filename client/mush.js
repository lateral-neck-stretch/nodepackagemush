import React, { useState, useEffect } from 'react';
import { BudStage } from './components/bud';
import { BudStage2 } from './components/bud_stage2';
import { BudStage3 } from './components/bud_stage3';
import { BudStage4 } from './components/bud_stage4';
import { MushStage0 } from './components/mush_stage0';
import { MushStage1 } from './components/mush_stage1';
import { MushStage2 } from './components/mush_stage2';
import { MushStage3 } from './components/mush_stage3';
import { MushStage4 } from './components/mush_stage4';

// import Navbar from './components/Navbar';

/// counter ///

let start = Date.now();
let currTime;
let timeElapsed;
console.log('curr date', start);

function Mush() {
  const [timeCounter, setTime] = useState(0);

  React.useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      currTime = Date.now();
      timeElapsed = 1; //TO-DO: make actual time elapsed s
      setTime((timeCounter) => timeCounter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  // logging time elapsed
  console.log(timeCounter);

  if (timeCounter >= 0 && timeCounter < 35) {
    return (
      <div className='bud_bounce'>
        <BudStage />
      </div>
    );
  } else if (timeCounter >= 35 && timeCounter < 62) {
    return (
      <div className='bud_stage2'>
        <BudStage2 />
      </div>
    );
  } else if (timeCounter >= 62 && timeCounter < 77) {
    return (
      <div className='bud_stage3'>
        <BudStage3 />
      </div>
    );
  } else if (timeCounter >= 77 && timeCounter < 97) {
    return (
      <div className='bud_stage4'>
        <BudStage4 />
      </div>
    );
  } else if (timeCounter >= 97 && timeCounter < 123) {
    return (
      <div className='mush_stage0'>
        <MushStage0 />
      </div>
    );
  } else if (timeCounter >= 123 && timeCounter < 130) {
    return (
      <div className='mush_stage1'>
        <MushStage1 />
      </div>
    );
  } else if (timeCounter >= 130 && timeCounter < 162) {
    return (
      <div className='mush_stage2'>
        <MushStage2 />
      </div>
    );
  } else if (timeCounter >= 162 && timeCounter < 194) {
    return (
      <div className='mush_stage3'>
        <MushStage3 />
      </div>
    );
  } else if (timeCounter >= 194 && timeCounter < 229) {
    return (
      <div className='mush_stage4'>
        <MushStage4 />
      </div>
    );
  } else if (timeCounter == 229) {
    return <div>{(timeCounter = 0)}</div>;
  }
}

export default Mush;
