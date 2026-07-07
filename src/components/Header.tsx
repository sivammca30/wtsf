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
