import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        It works
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
