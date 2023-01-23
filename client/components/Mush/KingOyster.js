import React, { useState, useEffect } from 'react';

import { BudStage } from '../MushComponents/bud';
import { BudStage2 } from '../MushComponents/bud_stage2';
import { BudStage3 } from '../MushComponents/bud_stage3';
import { BudStage4 } from '../MushComponents/bud_stage4';
import { MushStage0 } from '../MushComponents/mush_stage0';
import { MushStage1 } from '../MushComponents/mush_stage1';
import { MushStage2 } from '../MushComponents/mush_stage2';
import { MushStage3 } from '../MushComponents/mush_stage3';
import { MushStage4 } from '../MushComponents/mush_stage4';

function Mush(props) {
  const { timeCounter } = props; //timeCounter coming in as seconds elapsed
  const [time, setTime] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  React.useEffect(() => {
    setMinutes(Math.floor(timeCounter / 60));
    setHours(Math.floor(minutes / 60));
    setDays(Math.floor(hours / 24));
    setTime(minutes);
  });

  if (time >= 0 && time < 35) {
    return (
      <div className='bud_bounce'>
        <BudStage />
      </div>
    );
  } else if (time >= 35 && time < 62) {
    return (
      <div className='bud_stage2'>
        <BudStage2 />
      </div>
    );
  } else if (time >= 62 && time < 77) {
    return (
      <div className='bud_stage3'>
        <BudStage3 />
      </div>
    );
  } else if (time >= 77 && time < 97) {
    return (
      <div className='bud_stage4'>
        <BudStage4 />
      </div>
    );
  } else if (time >= 97 && time < 123) {
    return (
      <div className='mush_stage0'>
        <MushStage0 />
      </div>
    );
  } else if (time >= 123 && time < 130) {
    return (
      <div className='mush_stage1'>
        <MushStage1 />
      </div>
    );
  } else if (time >= 130 && time < 162) {
    return (
      <div className='mush_stage2'>
        <MushStage2 />
      </div>
    );
  } else if (time >= 162 && time < 194) {
    return (
      <div className='mush_stage3'>
        <MushStage3 />
      </div>
    );
  } else if (time >= 194 && time < 229) {
    return (
      <div className='mush_stage4'>
        <MushStage4 />
      </div>
    );
  } else if (time >= 229) {
    return (
      <div>
        <div className='mush_stage4'>
          <MushStage4 />
        </div>
      </div>
    );
  }
}

export default Mush;
