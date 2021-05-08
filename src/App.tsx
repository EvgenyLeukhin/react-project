import React from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';

// import global css file
import './style.css';

// in js styles
const styles = {
  backgroundColor: 'cyan',
  color: 'maroon',
  textAlign: 'center',
};

const App: React.FC = () => (
  <>
    <Title titleText="Hello, TypeScript!" style={styles} />
  </>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

export default App;
