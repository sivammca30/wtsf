import { useState, useEffect } from "react";
import type { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import type { Theme } from "../data";

const Layout: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const getInitialTheme = (): Theme => {
    const stored = localStorage.getItem("wtsf-theme") as Theme | null;
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", theme);
  //   localStorage.setItem("wtsf-theme", theme);
  // }, [theme]);

  useEffect(() => {
  const root = document.documentElement;
  
  if (theme === "dark") {
    root.classList.add("dark");
    root.classList.remove("light");
  } else {
    root.classList.add("light");
    root.classList.remove("dark");
  }
  
  localStorage.setItem("wtsf-theme", theme);
}, [theme]);

  const toggleTheme = (): void => {
    setTheme((prev: Theme) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
