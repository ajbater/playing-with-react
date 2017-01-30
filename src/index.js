import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

function tick() {
  const element = (
    <div>
      <h2>It is now {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('time')
  )
}

setInterval(tick, 1000);
