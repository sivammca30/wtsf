import type { FC, Dispatch, SetStateAction } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { NAV_LINKS } from "../data";
import type { Theme, NavLink } from "../data";

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  theme: Theme;
  toggleTheme: () => void;
}

const Header: FC<HeaderProps> = ({ menuOpen, setMenuOpen, theme, toggleTheme }) => {
  const linkClass = ({ isActive }: { isActive: boolean }): string =>
    isActive ? "active" : "";

  return (
    <header className="hdr">
      <div className="hdr-inner">
        <RouterNavLink to="/home" className="hdr-logo" onClick={() => setMenuOpen(false)}>
          {/* <img
            src="/assets/uploads/logo/22434.png"
            alt="WTSF Logo"
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.style.display = "none";
            }}
          /> */}
          <span>World Traditional<br />Silambattam Federation</span>
        </RouterNavLink>

        {/* Desktop nav + theme toggle */}
        <div className="hdr-right">
          <nav className="desktop-nav">
            {NAV_LINKS.map((link: NavLink) => (
              <RouterNavLink key={link.label} to={link.to} end={link.to === "/"} className={linkClass}>
                {link.label}
              </RouterNavLink>
            ))}
          </nav>

          {/* <a href="tel:+919941873608" className="header-contact-card">
            <div className="contact-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.77.68 2.6a2 2 0 0 1-.45 2.11L8.1 9.91a16 16 0 0 0 6 6l1.48-1.19a2 2 0 0 1 2.11-.45c.83.33 1.7.56 2.6.68A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>

            <div className="contact-info">
              <span className="contact-number">+91 99418 73608</span>
            </div>
          </a> */}

          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <span className="toggle-icon">{theme === "dark" ? "☀️" : "🌙"}</span>
            <span className="toggle-label">{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {/* <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <span className="toggle-icon">{theme === "dark" ? "☀️" : "🌙"}</span>
          </button> */}
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen((prev: boolean) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <nav className={`mobile-nav${menuOpen ? " open" : ""}`}>
        {NAV_LINKS.map((link: NavLink) => (
          <RouterNavLink
            key={link.label}
            to={link.to}
            end={link.to === "/"}
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </RouterNavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
