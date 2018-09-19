const keyUp = (elem, cb) => {
  elem.addEventListener('keyup', (event) => {
    const {keyCode} = event;

    if(keyCode === 56 || keyCode === 104) {
      cb();
    }
  });
};

export default {keyUp};
