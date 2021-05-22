/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';

import ReactLogo from './assets/images/favicon.png';

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
  marginBottom: 0,
};

const App: React.FC = () => (
  <div className="app-container">
    <Title titleText="Hello, TypeScript!" style={styles} />

    <main>
      <h2>Custom font loading</h2>
      <p className="custom-font">
        <b>Alice, serif: </b>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p>
        <b>System font: </b>
        Expedita porro molestias harum, ullam nisi in praesentium itaque.
      </p>

      <h2>Images loading</h2>
      <div className="images-container">
        <div className="image-item">
          <h3>Image tag</h3>
          <img className="image" src={ReactLogo} alt="favicon.png" />
        </div>

        <div className="image-item">
          <h3>Image tag</h3>
          <img className="image" src={ReactLogo} alt="favicon.png" />
        </div>

        <div className="image-item">
          <h3>Image tag</h3>
          <img className="image" src={ReactLogo} alt="favicon.png" />
        </div>
      </div>
    </main>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
