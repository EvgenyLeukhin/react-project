import React from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';

const styles = {
  backgroundColor: 'cyan',
  color: 'maroon',
};

const App: React.FC  = () => (
  <>
    <Title titleText="Hello, TypeScript!" style={styles} />
  </>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

export default App;
