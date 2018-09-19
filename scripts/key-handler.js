let lastHit = [];

const keyUp = (elem, cb, sequence) => {
  elem.addEventListener('keyup', (event) => {
    const {keyCode} = event;
    console.log(keyCode, sequence, lastHit);

    if (sequence) {
      if (lastHit.length == sequence.length) {
        lastHit.shift();
      }

      lastHit.push(keyCode);

      if( lastHit.length === sequence.length) {
        let isEqual = true;

        for(let i = 0; i < sequence.length; i++) {
          if (lastHit[i] !== sequence[i]) {
            isEqual = false;
            break;
          }
        }

        if (isEqual) {
          return cb();
        }
      }

    }

    if(keyCode === 56 || keyCode === 104) {
      cb();
    }
  });
};

export default {keyUp};
