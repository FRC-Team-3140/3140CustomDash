import { useEntry } from '@frc-web-components/react';
import './App.css';
import Dashboard from './components/Dashboard';
import { DashboardThemes, darkTheme } from "@frc-web-components/fwc/themes";
import { robotConnected } from './constants';


function App() {
  const customDarkTheme = {
    '--my-element-background': 'cadetblue',
    '--my-element-color': 'white',
  };

  const themes = new DashboardThemes();
  themes.addThemeRules("dark", { ...darkTheme, ...customDarkTheme });

  themes.setTheme(document.body, 'dark');

  const [connected] = useEntry(robotConnected, true);

  return (
    <>
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
