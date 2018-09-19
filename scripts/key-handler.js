import Eight from './eight';

let eight = null;

const keyPress = (event) => {
  const {keyCode} = event;
  console.log(keyCode);

  if(keyCode === 56 || keyCode === 104) {
    eight.play();
  }
};

const funcs = {
  bindTo: (elem, container) =>{
    eight = new Eight(container);
    elem.addEventListener('keyup', keyPress);
  }
};

export default funcs;
