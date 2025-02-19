import { useState, useEffect, CSSProperties } from 'react';
import './App.css';
import logo from './assets/FlagshipLineartIcon.png';
import Dashboard from './components/Dashboard';
import { DashboardThemes, darkTheme } from "@frc-web-components/fwc/themes";
import { curVoltage, rioPing, minVoltage, manOverride } from './constants';
import { useEntry } from '@frc-web-components/react';

function App() {
  const [connected, setConnected] = useState(false);

  const customDarkTheme = {
    '--my-element-background': 'cadetblue',
    '--my-element-color': 'white',
  };

  const themes = new DashboardThemes();
  themes.addThemeRules("dark", { ...darkTheme, ...customDarkTheme });

  themes.setTheme(document.body, 'dark');

  const [currentVoltage] = useEntry(curVoltage, 0.0);
  const [override] = useEntry(manOverride, false);

  const voltageFlash: CSSProperties = {
    width: '100vw',
    height: '100vh',
    position: 'fixed', 
    top: '0', 
    left: '0',
    backgroundColor: (connected && currentVoltage <= minVoltage) ? 'rgb(200, 0, 0)' : 'transparent'
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        await fetch(rioPing, { mode: "no-cors", signal: AbortSignal.timeout(500) });
        setConnected(true);
        console.log("Magic happened: " + connected);
      } catch (err) {
        setConnected(false);
        console.log("Magic didn't happen: " + connected);
      }
    }, 1000);

    // Clean up the client on unmount
    return () => {
      clearInterval(interval);
    };
  }, [connected]);

  return (
    <>
      <div style={{ zIndex: '-2', ...voltageFlash }}></div>
      <div style={{ zIndex: '-1', pointerEvents: 'none', opacity: '0.2', height: '90%', minHeight: 'fit-content', position: 'fixed', left: '50%', bottom: '50%', transform: 'translate(-50%, 50%)' }}>
        <img src={logo} alt="placeholder" width="100%" height="100%" />
      </div>
      <div className="App" style={{ height: '100vh', width: '100vw', padding: '0', margin: '0' }}>
        <Dashboard />
      </div>
      <div style={{ pointerEvents: 'none', position: 'fixed', top: '0', left: '0', height: '100vh', width: '100vw', backgroundColor: !connected ? 'rgba(255, 0, 0, 0.5)' : 'transparent', display: connected ? 'none' : 'block' }}>
        <div style={{ pointerEvents: 'none', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <h1 style={{ pointerEvents: 'none', color: !connected ? 'red' : 'transparent', backgroundColor: !connected ? '#333' : 'transparent', borderRadius: '15px', fontWeight: '900', padding: '1vw', fontSize: '3vw', fontFamily: 'monospace' }}>Not Connected</h1>
        </div>
      </div>
      <div style={{ pointerEvents: 'none', position: 'absolute', top: '15%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <h1 style={{ pointerEvents: 'none', margin: '0', fontSize: '3vw', color: override ? 'red' : 'transparent', backgroundColor: override ? 'black' : 'transparent', borderRadius: '35px', fontWeight: '900', padding: '2vh 4vw 2vh 4vw', fontFamily: 'monospace' }}>Manual Override</h1>
      </div>
    </>
  );
}

export default App;
