import keyPress from '../scripts/key-handler';

import styles from '../styles/style.css';

const Index = () => (
  <div onKeyDown={keyPress} className={styles.eight}>
    <h1 id="eight">8</h1>
  </div>
);

Index.prototype.componentDidMount = () => {
  console.log('Mounted');
};

export default Index;
