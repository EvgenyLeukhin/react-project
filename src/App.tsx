import React from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';

// import css-file (will inject in <style> tag)
import 'Styles/bootstrap-reboot.css';

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
