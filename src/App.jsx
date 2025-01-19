import React from 'react';

const App = () => {
  return (
    <div className="frame">
      <div className="top-right-buttons">
        <button className="icon-button">
          <img src="/gsp-demo/icons/mobile.svg" alt="Mobile Icon" className="icon-image" />
        </button>
        <button className="icon-button">
          <img src="/gsp-demo/icons/desktop.svg" alt="Desktop Icon" className="icon-image" />
        </button>
        <button className="icon-button">
          <img src="/gsp-demo/icons/arrows.svg" alt="Arrows Icon" className="icon-image" />
        </button>
      </div>

      <div className="bottom-center-buttons">
        <button className="icon-button">&lt;</button>
        <button className="icon-button">&gt;</button>
      </div>
    </div>
  );
};

export default App;
