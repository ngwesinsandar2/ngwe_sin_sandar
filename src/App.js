import All from './All';
import { createContext, useState } from "react";
import useLocalStorage from 'use-local-storage';
import './index.css';
import Loader from './components/Loader/Loader';

export const ThemeContext = createContext(null);

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
      setLoading(false)
  }, 1000);

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <div className='app' data-theme={theme}>
        {
          loading ? <Loader />
          :
          <All />
        }
      </div>
    </ThemeContext.Provider>
  );
}

export default App;