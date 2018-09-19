import React from 'react';

import keyHandler from '../scripts/key-handler';
import styles from '../styles/style.css';

export default class Index extends React.Component {
  state = {display: 'none'};

  componentDidMount() {
    keyHandler.bindTo(window, this);
  }

  show() {
    this.setState({display: 'block'});
  }

  hide() {
    this.setState({display: 'none'});
  }

  render() {
    return (
      <div className={styles.eight} style={{display: this.state.display}}>
        <h1 id="eight">8</h1>
      </div>
    );
  }
}
