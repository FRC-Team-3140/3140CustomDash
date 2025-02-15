import { useState, useEffect } from 'react';
import './App.css';
import logo from './assets//FlagshipLineartIcon.png';
import Dashboard from './components/Dashboard';
import { DashboardThemes, darkTheme } from "@frc-web-components/fwc/themes";
import { Client } from "wpilib-nt-client";

export const [connected, setIsConnected] = useState(false);

function App() {
  const customDarkTheme = {
    '--my-element-background': 'cadetblue',
    '--my-element-color': 'white',
  };

  const themes = new DashboardThemes();
  themes.addThemeRules("dark", { ...darkTheme, ...customDarkTheme });

  themes.setTheme(document.body, 'dark');


  useEffect(() => {
    const interval = setInterval(async ()=>{
      try  {
        await fetch("http://roborio-3140-frc.lan/", { mode: "no-cors", signal: AbortSignal.timeout(500)})
        setIsConnected(true);
      } catch(err) { 
        setIsConnected(false);
      }
      
    }, 1000);

    // Clean up the client on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);
  setInterval(()=>{})

  return (
    <>
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
    </>
  );
}

export default App;
