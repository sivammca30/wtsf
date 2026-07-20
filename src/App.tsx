import { useState, useEffect } from 'react'; // 1. Added useEffect here
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './Styles.css';
import WhatsAppButton from './components/WhatsAppButton';

type Theme = "dark" | "light";

const App = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // 2. Safely initialize theme from localStorage or system preference
  const getInitialTheme = (): Theme => {
    const stored = localStorage.getItem("wtsf-theme") as Theme | null;
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // 3. Sync theme state with the DOM attribute and localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("wtsf-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app-container ${theme}`}>
      <ScrollToTop />
      
      <Header 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      <main>
        <Outlet />
      </main>
       <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default App;