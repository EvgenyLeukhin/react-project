import React from 'react';
import ReactDOM from 'react-dom';

// IMAGES
import ReactLogoPng from 'Images/react-logo.png';
import ReactLogoSvg from 'Icons/react-logo.svg';

// FONSTS
import 'Fonts/Alice-Regular.ttf';

// STYLES
import 'Styles/style.scss';

// COMPONENTS
import Header from 'Components/Header';
import ReactLogo from 'Components/ReactLogo';

// in js styles
const styles = {
  backgroundColor: 'cyan',
  color: 'maroon',
  textAlign: 'center',
};

const App = () => (
  <div className="app-container">
    <Header titleText="Hello, TypeScript!" style={styles} />

    <main>
      <section>
        <h2>Custom font loading</h2>
        <p className="custom-font">
          <b>Alice, serif: </b>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
          <b>System font: </b>
          Expedita porro molestias harum, ullam nisi in praesentium itaque.
        </p>
      </section>

      <section>
        <h2>Images loading</h2>
        <div className="images-container">
          <div className="image-item">
            <h3>Image tag</h3>
            <img className="image" src={ReactLogoPng} alt="react-logo.png" />
          </div>

          <div className="image-item bg" style={{ backgroundImage: `url(${ReactLogoPng})` }}>
            <h3>Bg-image</h3>
          </div>
        </div>
      </section>

      <section>
        <h2>Svg loading (with base64)</h2>
        <div className="images-container">
          <div className="image-item">
            <h3>Inline svg</h3>
            <ReactLogo />
          </div>

          <div className="image-item">
            <h3>Svg inside img tag</h3>
            <img className="image" src={ReactLogoSvg} alt="react-logo.svg" />
          </div>

          <div className="image-item bg" style={{ backgroundImage: `url(${ReactLogoSvg})` }}>
            <h3>Svg like bg-image</h3>
          </div>
        </div>
      </section>
    </main>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
