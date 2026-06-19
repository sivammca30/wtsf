import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
// Make sure to import Theme if it's exported from your data file
//import { Theme } from './data'; 
import './Styles.css';

type Theme = "dark" | "light";

const App = () => {
  // 1. Manage the mobile menu state
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // 2. Manage the theme state (defaulting to 'light' or whatever matches your Theme type)
  const [theme, setTheme] = useState<Theme>('light');

  // 3. Define the theme toggle function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // Optionally apply the theme class to your root wrapper for global styles
    <div className={`app-container ${theme}`}>
      <ScrollToTop />
      
      {/* 4. Pass the required props into the Header component */}
      <Header 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      <main>
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;