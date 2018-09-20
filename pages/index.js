import React from 'react';
import Head from '../components/head';

import AudioPlayer from '../components/audio-player';

import keyHandler from '../scripts/key-handler';
import mobileDetector from '../scripts/mobile-detector';
import styles from '../styles/style.css';

const eightSequence = [69, 73, 71, 72, 84];

export default class Index extends React.Component {
  state = {
    color: '#040404'
  }

  componentDidMount() {
    this.audio = new AudioPlayer('/static/eight');
    this.audio.onEnded(this.hide);

    keyHandler.keyUp(window, this.play, eightSequence);

    if (mobileDetector.isMobile(window)) {
      keyHandler.click(window, this.play);
    }
  }

  show = () => {
    this.setState({color: '#FFFFFF'});
  }

  hide = () => {
    this.setState({color: '#040404'});
  }

  play = () => {
    this.audio.play();
    this.show();
  }

  render() {
    const {display, color} = this.state;

    return (
      <span>
        <Head title="eight." />
        <div className={styles.eight} style={{display: display}}>
          <h1 id="eight" style={{color: color}}>8</h1>
        </div>
      </span>
    );
  }
}
