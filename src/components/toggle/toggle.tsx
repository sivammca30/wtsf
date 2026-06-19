import React, { useState } from 'react';
import './toggle.css';

const toggle: React.FC = () => {
  // TypeScript infers this state as boolean automatically
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleTheme = (): void => {
    setIsDarkMode((prev) => !prev);
    // Toggles a global body class if needed for your app styling
    document.body.classList.toggle('light-theme', isDarkMode);
  };

  return (
    <button 
      className={`theme-toggle-btn ${isDarkMode ? 'dark' : 'light'}`} 
      onClick={toggleTheme}
      aria-label="Toggle theme"
      type="button"
    >
      {/* Sun Icon (Left Side) */}
      <div className="icon-wrapper sun-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
        </svg>
      </div>

      {/* Moon Icon (Right Side) */}
      <div className="icon-wrapper moon-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      </div>

      {/* The Sliding Pill Thumb */}
      <div className="toggle-thumb" />
    </button>
  );
};

export default toggle;