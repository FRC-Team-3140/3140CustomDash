import './App.css';
import Dashboard from './components/Dashboard';
import { DashboardThemes, darkTheme } from "@frc-web-components/fwc/themes";


function App() {
  const customDarkTheme = {
    '--my-element-background': 'cadetblue',
    '--my-element-color': 'white',
  };

  const themes = new DashboardThemes();
  themes.addThemeRules("dark", { ...darkTheme, ...customDarkTheme });

  themes.setTheme(document.body, 'dark');

  return (
    <div className="App" style={{ height: '100vh', width: '100vw', padding: '0', margin: '0' }}>
      <Dashboard />
    </div>
  );
}

export default App;
