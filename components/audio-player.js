export default class AudioPlayer {
  constructor(file, readyFn) {
    this.readyFn = readyFn;
    this.player = new Audio();
    const canPlayMp3 = !!(this.player.canPlayType && this.player.canPlayType('audio/mpeg;').replace(/no/, ''));

    this.extension = canPlayMp3 ? 'mp3' : 'ogg';

    this.setupAudio(file);
  }

  onEnded(cb) {
    if (typeof cb === 'function') {
      this.player.addEventListener('ended', cb);
    }
  }

  setupAudio(fileName) {
    fileName += `.${this.extension}`;

    const player = this.player;

    player.src = fileName;
    player.loop = false;
    player.load();

    player.addEventListener('canplaythrough', this.readyFn);
  }

  play() {
    this.player.play();
  }
}
