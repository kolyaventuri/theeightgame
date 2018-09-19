import React from 'react';
import Head from '../components/head';

import AudioPlayer from '../components/audio-player';

import keyHandler from '../scripts/key-handler';
import styles from '../styles/style.css';

const eightSequence = [69, 73, 71, 72, 84];

export default class Index extends React.Component {
  state = {display: 'none'};

  componentDidMount() {
    this.audio = new AudioPlayer('/static/eight', this.play);
    this.audio.onEnded(this.hide);

    keyHandler.keyUp(window, this.play, eightSequence);
  }

  show = () => {
    this.setState({display: 'block'});
  }

  hide = () => {
    this.setState({display: 'none'});
  }

  play = () => {
    this.audio.play();
    this.show();
  }

  render() {
    return (
      <span>
        <Head title="eight." />
        <div className={styles.eight} style={{display: this.state.display}}>
          <h1 id="eight">8</h1>
        </div>
      </span>
    );
  }
}
