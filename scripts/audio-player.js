export default class AudioPlayer {
  constructor(file) {
    this.ready = false;
    this.player = new Audio();
    const canPlayMp3 = !!(this.player.canPlayType && this.player.canPlayType('audio/mpeg;').replace(/no/, ''));

    this.extension = canPlayMp3 ? 'mp3' : 'ogg';

    this.setupAudio(file);
  }

  onEnded(cb) {
    if (typeof cb === 'function') {
      player.addEventListener('ended', cb);
    }
  }

  onReady(cb) {
    this.readyFn = cb;

    if (this.ready) {
      cb();
    }
  }

  setupAudio(fileName) {
    fileName += `.${this.extension}`;

    const player = this.player;

    player.src = fileName;
    player.loop = false;
    player.load();

    player.addEventListener('canplaythrough', () => {
      if (this.readyFn) {
        this.readyFn();
      }
      this.ready = true;
    });
  }
}
