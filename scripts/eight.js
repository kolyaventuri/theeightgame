import AudioPlayer from './audio-player';

export default class Eight {
  audio = new AudioPlayer('/audio/eight');

  constructor(container) {
    this.container = container;

    this.audio.onEnded(this.container.hide);
    this.audio.onReady(this.play);
  }

  play() {
    if (!this.audio.ready) {
      return;
    }
    this.container.show();
    this.audio.play();
  }
}
