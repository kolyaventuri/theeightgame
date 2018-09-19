import AudioPlayer from './audio-player';

export default class Eight {
  audio = new AudioPlayer('/static/eight');

  constructor(container) {
    this.container = container;

    this.audio.onEnded(this.container.hide);
  }

  play() {
    this.container.show();
    this.audio.play();
  }
}
