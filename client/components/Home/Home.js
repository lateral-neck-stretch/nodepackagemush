import anime from 'animejs/lib/anime.es.js';
import React, { Component, useState, useRef, useEffect } from 'react';
import style from './Home.module.css';
// import ReactAnime from 'react-animejs';
// const { Anime, stagger } = ReactAnime;

function Home(props) {
  const [playing, setPlaying] = useState(false);
  const animation = useRef(null);

  /**
   * for play/pause functionality, will want to take out in the end
   */
  const handleClick = () => {
    playing ? animation.current.pause() : animation.current.play();
    setPlaying(!playing);
  };

  useEffect(() => {
    animation.current = anime.timeline({
      // direction: 'alternate',
      // loop: true,
      autoplay: false,
      // easing: 'steps(1)',
      scale: [
        { value: 1.1, duration: 100 },
        { value: 0.9, duration: 100 },
        { value: 1.1, duration: 100 },
        { value: 1, duration: 100 },
      ],
    });
    animation.current
      .add({
        targets: `.${style.start_text}`,
        duration: 200,
        opacity: '0',
        // easing: 'spring',
        scale: [{ value: 0.3, duration: 100 }],
        easing: 'easeInOutElastic(1,0.2)',
      })
      .add({
        targets: `.${style.dot}`,
        opacity: '1',
        duration: 200,
      })
      .add({
        targets: `.${style.dot}`,
        opacity: '0',
        scale: [{ value: 0.7, duration: 200 }],
      })
      .add({
        targets: `.${style.bubble1}`,
        opacity: '1',
        duration: 200,
        scale: [{ value: 0.7, duration: 200 }],
      })
      .add({
        targets: `.${style.bubble1}`,
        opacity: '0',
        duration: 1,
      })
      .add({
        targets: `.${style.bubble2}`,
        opacity: '1',
        duration: 200,
      })
      .add({
        targets: `.${style.bubble2}`,
        opacity: '0',
        duration: 1,
      })
      .add({
        targets: `.${style.bubble3}`,
        opacity: '1',
        duration: 200,
        easing: 'linear',
      })
      .add({
        targets: `.${style.bubble3}`,
        opacity: '0',
        duration: 1,
      })
      .add({
        targets: `.${style.bubble4}`,
        opacity: '1',
        duration: 200,
        easing: 'linear',
      })
      .add({
        targets: `.${style.bubble4}`,
        opacity: '0',
        duration: 1,
      })
      .add({
        targets: `.${style.pop1}`,
        opacity: '1',
        duration: 200,
        easing: 'linear',
      })
      .add({
        targets: `.${style.pop1}`,
        opacity: '0',
        duration: 1,
      })
      .add({
        targets: `.${style.pop2}`,
        opacity: '1',
        duration: 200,
        easing: 'linear',
      })
      .add({
        targets: `.${style.pop2}`,
        opacity: '0',
        duration: 1,
      });
  }, []);

  return (
    <div className={style.container}>
      <div className={style.start_text} onClick={handleClick}>
        Click here to start
      </div>

      {/* SVG FILES */}
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

export default Home;
