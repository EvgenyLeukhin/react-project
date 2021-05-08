import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  backgroundColor: 'cyan',
  color: 'maroon',
};

const App = () => (
  <>
    <h1>
      Hello,&nbsp;
      <span style={styles}>React!</span>
    </h1>
  </>
);

ReactDOM.render(
  <App />,
  document.getElementById('react-project'),
);

export default App;
