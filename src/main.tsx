import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NT4Provider } from '@frc-web-components/react';
import { robotIPAddress } from './constants';

// change the address to the address of the robot when not testing: 10.31.40.2
ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <NT4Provider address={robotIPAddress}> 
      <App />
    </NT4Provider>
  </React.StrictMode>,
);
