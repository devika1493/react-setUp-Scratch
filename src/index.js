import React from 'react';
import ReactDom from 'react-dom';
import styles from './index.scss';

class App extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        It works...Good!!! Color Changed....
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
