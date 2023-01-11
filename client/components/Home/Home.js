import anime from 'animejs/lib/anime.es.js';
import React, { Component, useState, useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import style from './Home.module.css';
import Mush from '../Mush/Mush';
import { authenticate } from '../../store';
import { connect } from 'react-redux';
import history from '../../history';

function Home(props) {
  const [playing, setPlaying] = useState(false);
  const animation = useRef(null);
  const { handleSubmit } = props;

  /**
   * for play/pause functionality, will want to take out in the end
   */
  const handleClick = () => {
    playing ? animation.current.pause() : animation.current.play();
    setPlaying(!playing);
  };

  useEffect(() => {
    animation.current = anime.timeline({
      autoplay: false,
      complete: function () {
        console.log('done!');
        window.localStorage.setItem('token', 'nice');
        history.go('/');
      },
    });
    animation.current
      .add({
        targets: `.${style.start_text}`,
        duration: 1,
        opacity: '0',
      })
      .add({
        targets: `.${style.button}`,
        height: 17.67,
        width: 230,
        backgroundColor: '#FFF',
        opacity: '1',
        duration: 400,
        easing: 'easeInOutQuad',
      })
      .add({
        targets: `.${style.button}`,
        scaleX: [
          { value: 1, duration: 100 },
          { value: 0.2, duration: 900, delay: 100 },
        ],
        scaleY: [
          { value: 1, duration: 100 },
          { value: 0.25, duration: 900, delay: 100 },
        ],
        backgroundColor: '#FFF',
        opacity: '1',
        duration: 1000,
        easing: 'steps(5)',
      })
      .add({
        targets: `.${style.button}`,
        opacity: '0',
        easing: 'steps(1)',
      })
      .add({
        targets: `.${style.dot}`,
        opacity: '1',
        duration: 450,
      })
      .add({
        targets: `.${style.dot}`,
        opacity: '0',
        // scale: [{ value: 0.7, duration: 200 }],
      })
      .add({
        targets: `.${style.bubble1}`,
        opacity: '1',
        duration: 450,
        // scale: [{ value: 0.7, duration: 200 }],
      })
      .add({
        targets: `.${style.bubble1}`,
        opacity: '0',
        duration: 100,
      })
      .add({
        targets: `.${style.bubble2}`,
        opacity: '1',
        duration: 450,
      })
      .add({
        targets: `.${style.bubble2}`,
        opacity: '0',
        duration: 100,
      })
      .add({
        targets: `.${style.bubble3}`,
        opacity: '1',
        duration: 450,
      })
      .add({
        targets: `.${style.bubble3}`,
        opacity: '0',
        duration: 100,
      })
      .add({
        targets: `.${style.bubble4}`,
        opacity: '1',
        duration: 450,
        // scale: [
        //   { value: 0.4, duration: 200 },
        //   { value: 0.7, duration: 250 },
        // ],
      })
      .add({
        targets: `.${style.bubble4}`,
        opacity: '0',
        duration: 100,
      })
      .add({
        targets: `.${style.pop1}`,
        opacity: '1',
        duration: 450,
      })
      .add({
        targets: `.${style.pop1}`,
        opacity: '0',
        duration: 100,
      })
      .add({
        targets: `.${style.pop2}`,
        opacity: '1',
        duration: 450,
      })
      .add({
        targets: `.${style.pop2}`,
        opacity: '0',
        duration: 100,
      });
  }, []);

  /**
   *
   * JSX CODE
   *
   */

  return (
    <div className={style.container}>
      <form className={style.button} onSubmit={handleSubmit}>
        <button
          type='submit'
          className={style.start_text}
          onClick={handleClick}
        >
          Click here to start
        </button>
      </form>

      {/*
       **********************************
       *** SVGS FOR OPENING ANIMATION ***
       **********************************
       */}
      <svg
        className={style.svg}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 240.84 229.58'
      >
        {/*******************************
        DOT
        *******************************/}
        <g className={style.dot}>
          <rect
            className='cls-1'
            x='112.39'
            y='105.95'
            width='16.05'
            height='17.67'
          />
        </g>
        {/*******************************
        BUBBLE 1
        *******************************/}
        <g className={style.bubble1}>
          <rect
            className='cls-1'
            x='128.44'
            y='105.96'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='112.39'
            y='123.62'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='112.39'
            y='88.3'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='96.33'
            y='105.96'
            width='16.06'
            height='17.66'
          />
        </g>

        {/*******************************
        BUBBLE 2
        *******************************/}
        <g className={style.bubble2}>
          <rect
            className='cls-1'
            x='128.44'
            y='141.28'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='96.33'
            y='141.28'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='128.44'
            y='70.64'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='96.33'
            y='70.64'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='80.28'
            y='88.3'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='80.28'
            y='123.62'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='112.39'
            y='141.28'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='144.5'
            y='123.62'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='144.5'
            y='88.3'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='112.39'
            y='70.64'
            width='16.05'
            height='17.66'
          />
        </g>

        {/*******************************
        BUBBLE 3
        *******************************/}
        <g className={style.bubble3}>
          <rect
            className='cls-1'
            x='192.67'
            y='105.96'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='32.11'
            y='105.96'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='64.22'
            y='52.98'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='48.16'
            y='70.64'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='48.16'
            y='141.28'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='64.22'
            y='158.94'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='80.28'
            y='176.6'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='176.61'
            y='141.28'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='176.61'
            y='70.64'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='160.56'
            y='158.94'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='160.56'
            y='52.98'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='144.5'
            y='176.6'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='144.5'
            y='35.32'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='128.44'
            y='176.6'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='128.44'
            y='35.32'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='112.39'
            y='176.6'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='112.39'
            y='35.32'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='96.33'
            y='176.6'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='96.33'
            y='35.32'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='80.28'
            y='35.32'
            width='16.05'
            height='17.66'
          />
        </g>

        {/*******************************
        BUBBLE 4
        *******************************/}
        <g className={style.bubble4}>
          <rect
            className='cls-1'
            x='224.78'
            y='141.28'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='224.78'
            y='123.62'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='224.78'
            y='105.96'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='224.78'
            y='88.3'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='224.78'
            y='70.64'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='208.72'
            y='158.94'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='208.72'
            y='52.98'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='192.67'
            y='176.6'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='192.67'
            y='35.32'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='176.61'
            y='194.26'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='176.61'
            y='17.66'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='160.56'
            y='211.92'
            width='16.05'
            height='17.66'
          />
          <rect className='cls-1' x='160.56' width='16.05' height='17.66' />
          <rect
            className='cls-1'
            x='144.5'
            y='211.92'
            width='16.06'
            height='17.66'
          />
          <rect className='cls-1' x='144.5' width='16.06' height='17.66' />
          <rect
            className='cls-1'
            x='128.44'
            y='211.92'
            width='16.06'
            height='17.66'
          />
          <rect className='cls-1' x='128.44' width='16.06' height='17.66' />
          <rect
            className='cls-1'
            x='112.39'
            y='211.92'
            width='16.05'
            height='17.66'
          />
          <rect className='cls-1' x='112.39' width='16.05' height='17.66' />
          <rect
            className='cls-1'
            x='96.33'
            y='211.92'
            width='16.06'
            height='17.66'
          />
          <rect className='cls-1' x='96.33' width='16.06' height='17.66' />
          <rect
            className='cls-1'
            x='80.28'
            y='211.92'
            width='16.05'
            height='17.66'
          />
          <rect className='cls-1' x='80.28' width='16.05' height='17.66' />
          <rect
            className='cls-1'
            x='64.22'
            y='211.92'
            width='16.06'
            height='17.66'
          />
          <rect className='cls-1' x='64.22' width='16.06' height='17.66' />
          <rect
            className='cls-1'
            x='48.16'
            y='194.26'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='48.16'
            y='17.66'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='32.11'
            y='176.6'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='32.11'
            y='35.32'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='16.05'
            y='158.94'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='16.05'
            y='52.98'
            width='16.06'
            height='17.66'
          />
          <rect className='cls-1' y='141.28' width='16.05' height='17.66' />
          <rect className='cls-1' y='123.62' width='16.05' height='17.66' />
          <rect className='cls-1' y='105.96' width='16.05' height='17.66' />
          <rect className='cls-1' y='88.3' width='16.05' height='17.66' />
          <rect className='cls-1' y='70.64' width='16.05' height='17.66' />
        </g>

        {/*******************************
        POP 1
        *******************************/}
        <g className={style.pop1}>
          <rect
            className='cls-1'
            x='224.78'
            y='105.96'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='208.72'
            y='158.94'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='208.72'
            y='52.98'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='192.67'
            y='176.6'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='192.67'
            y='35.32'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='176.61'
            y='194.26'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='176.61'
            y='17.66'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='112.39'
            y='211.92'
            width='16.05'
            height='17.66'
          />
          <rect className='cls-1' x='112.39' width='16.05' height='17.66' />
          <rect
            className='cls-1'
            x='48.16'
            y='194.26'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='48.16'
            y='17.66'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='32.11'
            y='176.6'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='32.11'
            y='35.32'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='16.05'
            y='158.94'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='16.05'
            y='52.98'
            width='16.06'
            height='17.66'
          />
          <rect className='cls-1' y='105.96' width='16.05' height='17.66' />
        </g>

        {/*******************************
        POP 2
        *******************************/}
        <g className={style.pop2}>
          <rect
            className='cls-1'
            x='224.78'
            y='105.96'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='208.72'
            y='105.96'
            width='16.06'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='192.67'
            y='176.6'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='192.67'
            y='35.32'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='112.39'
            y='211.92'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='112.39'
            y='194.26'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='112.39'
            y='17.66'
            width='16.05'
            height='17.66'
          />
          <rect className='cls-1' x='112.39' width='16.05' height='17.66' />
          <rect
            className='cls-1'
            x='32.11'
            y='176.6'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='32.11'
            y='35.32'
            width='16.05'
            height='17.66'
          />
          <rect
            className='cls-1'
            x='16.05'
            y='105.96'
            width='16.06'
            height='17.66'
          />
          <rect className='cls-1' y='105.96' width='16.05' height='17.66' />
        </g>
      </svg>
    </div>
  );
}
const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      console.log('submitted!');
      dispatch(authenticate());
    },
  };
};
export default withRouter(connect(null, mapDispatch)(Home));
