import React from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';

// STYLES
// import global css file
import './style.css';

// import global scss-file
import './style.scss';

// FONSTS
import './assets/fonts/Alice-Regular.ttf';

// in js styles
const styles = {
  backgroundColor: 'cyan',
  color: 'maroon',
  textAlign: 'center',
};

const App: React.FC = () => (
  <div className="app-container">
    <Title titleText="Hello, TypeScript!" style={styles} />

    <h2>Custom font loading</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Expedita porro molestias harum, ullam nisi in praesentium itaque.</p>
    <p>Voluptates, ipsam corporis? Error earum deserunt esse alias.</p>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
