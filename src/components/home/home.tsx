import React from "react";
import { useState, useEffect } from "react";
import type { FC, Dispatch, SetStateAction } from "react";
import wtsflogo  from '../../assets/images/logo.png'
import "./Home.css"; // external CSS for styling
import officials from '../../assets/json/officials.json';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import InstructorPage from "../../components/instructor/instructor.tsx";


const activeOfficials = [...officials]
    .filter(off => off.status === 'A')
    .sort((a, b) => a.order - b.order);

// ── Types ──────────────────────────────────────────────────────────────────────
type Theme = "dark" | "light";

interface NavLink {
  label: string;
  href: string;
}

interface Instructor {
  id: number;
  name: string;
  position: string;
  district: string;
  state: string;
}

interface Event {
  title: string;
  date: string;
  category: string;
  desc: string;
}

interface Affiliate {
  id: number;
  alt: string;
}

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  theme: Theme;
  toggleTheme: () => void;
}

// ── Data ───────────────────────────────────────────────────────────────────────
const NAV_LINKS: NavLink[] = [
  { label: "Home",        href: "#" },
  { label: "About",       href: "#about" },
  { label: "Instructors", href: "#instructors" },
  { label: "Events",      href: "#events" },
  { label: "Gallery",     href: "#" },
  { label: "Contact",     href: "#" },
];

const INSTRUCTORS: Instructor[] = [
  { id: 1, name: "KANNAN T", position: "PRESIDENT/TECHNICAL DIRECTOR", district: "Chennai",    state: "Tamil Nadu" },
  { id: 2, name: "MANIKANDAN M", position: "VICE PRESIDENT", district: "Madurai",    state: "Tamil Nadu" },
  { id: 3, name: "ARUNKUMAR B", position: "TREASURER", district: "Chennai",    state: "Tamil Nadu" },
  { id: 4, name: "NAGARAJAN C", position: "SECRETARY", district: "Tenkasi", state: "Tamil Nadu" },
  { id: 5, name: "DINESH KUMAR", position: "JOINT SECRETARY", district: "Tiruvallur",     state: "Tamil Nadu" },
];

const EVENTS: Event[] = [
  { title: "National Level Silambam Open Championship", date: "2026-07-15", category: "Events", desc: "Every Year February Month." },
  { title: "State Level Silambam Open Championship",            date: "2026-08-05", category: "Events", desc: "Every Year December Month." },
  { title: "District Level Silambam Open Championship",       date: "2026-09-01", category: "Events", desc: "Every Year July Month." },
];

const AFFILIATES: Affiliate[] = [
  { id: 1, alt: "NSRS - Khelo India" },
  { id: 2, alt: "Nehru Yuva Kendra Sangathan" },
  { id: 3, alt: "Fit India" },
  { id: 4, alt: "Ministry of Youth Affairs & Sports" },
  { id: 5, alt: "World Union of Martial Arts Federation" },
  { id: 6, alt: "Azaad - A Ray Of Hope" },
];

const SOCIAL_ICONS: string[] = ["F", "I", "X", "Y"];
const QUICK_LINKS: string[]   = ["About Us", "Instructors", "Blog", "Events"];
const PROGRAMS: string[]      = ["Classes", "Training", "Workshops"];

// ── Components ─────────────────────────────────────────────────────────────────
const Header: FC<HeaderProps> = ({ menuOpen, setMenuOpen, theme, toggleTheme }) => (
  <header className="hdr">
    <div className="hdr-inner">
      <a href="#" className="hdr-logo">
        {/* <img
          src="assets/uploads/logo/22434.png"
          alt="WTSF Logo"
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.style.display = "none";
          }}
        /> */}
        <span>World Traditional<br />Silambattam Federation</span>
      </a>

      {/* Desktop nav + theme toggle */}
      <div className="hdr-right">
        <nav className="desktop-nav">
          {NAV_LINKS.map((link: NavLink) => (
            <a key={link.label} href={link.href}>{link.label}</a>
          ))}
        </nav>
        
      </div>

       <button
          className={`theme-toggle-btn ${theme === "dark" ? 'dark' : 'light'}`} 
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

      {/* Mobile: theme toggle + hamburger */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
             
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
        <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
          {link.label}
        </a>
      ))}
    </nav>
  </header>
);

const Hero: FC = () => (
  <section className="hero">
    <div className="hero-content">
      <img
        className="hero-logo"
        src={wtsflogo}
        alt="WTSF"
        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <p className="tagline">Learn · Secure · Teach</p>
      <h1>World Traditional<br />Silambattam Federation</h1>
      <p className="hero-sub">
        Preserving and promoting the ancient Tamil martial art of Silambattam
        across India and the world.
      </p>
      <a href="#about" className="btn">About WTSF</a>
      <a href="#instructors" className="btn btn-ghost">Our Instructors</a>
    </div>
  </section>
);

const About: FC = () => (
  <section className="section" id="about">
    <div className="container">
      <div className="section-title"><h2>About Our Federation</h2></div>
      <div className="prose">
        <p>
          World Traditional Silambattam Federation — WTSF was established for the overall
          promotion and development of Silambattam worldwide. WTSF is registered under the
          Tamil Nadu Society Registration Act and is dedicated to popularising this tremendous
          art amongst youth through training camps, seminars, and tournaments at district,
          state, and national level.
        </p>
        <p>
          WTSF is a pioneer in practising one style of Silambam across India. 
          WTSF promotes and standardizes its own curriculum (including instructor training programs like Kaaladi Kuthuvarisai) 
          to help teach and popularize the art systematically. At present, 10 states in India have affiliated with our federation 
          and are teaching this art. Karnataka, Andra Pradesh, Gujarat, Uttar Pradesh, Maharashtra, Diu and Daman, Puducherry, 
          Andaman, Telangana, Odisha
        </p>
        <p>
          With over 2,000 students actively learning across various states of India, WTSF
          maintains a cadre of well-qualified instructors, judges, and masters. The Indian
          Government has recognised Silambam under the Khelo India Programme, and Tamil Nadu
          includes Silambam in the 3% sports quota for government jobs.
        </p>
      </div>
    </div>
  </section>
);


const Instructors: FC = () => (
  
  <section className="section" id="instructors">
    <div className="container">
      <div className="section-title"><h2>Executive Members</h2></div>
      <div className="card-grid">
        {activeOfficials.map((off) => (
          <div className="card" key={off.id}>
            <div className="card-image-wrapper">
              <img 
                src={off.imageUrl} 
                alt={off.name} 
                className="card-image" 
              />
            </div>
            <div className="card-body">
              <h2 className="card-title">{off.name}</h2>
              <p className="card-description">{off.position}</p>
            </div>
          </div>
          
        ))}
      </div>
      <div className="text-center mt-2">
        <a href="#" className="btn">View All Instructors</a>
      </div>
    </div>
  </section>
);

const Affiliates: FC = () => (
  <section className="section">
    <div className="container">
      <div className="section-title"><h2>Our Affiliates</h2></div>
      <div className="affiliates">
        {AFFILIATES.map((a: Affiliate) => (
          <div key={a.id} className="affiliate-badge">
            {a.alt}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Events: FC = () => (
  <section className="section section-dark" id="events">
    <div className="container">
      <div className="section-title"><h2>Upcoming Events</h2></div>
      <div className="blog-grid">
        {EVENTS.map((ev: Event, i: number) => {
          const formatted: string = new Date(ev.date).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          return (
            <div key={i} className="blog-card">
              <div className="blog-card-placeholder">
                <span>WTSF</span>
              </div>
              <div className="blog-card-body">
                {/* <div className="blog-card-date">{formatted}</div> */}
                <span className="blog-card-cat">{ev.category}</span>
                <div className="blog-card-title">{ev.title}</div>
                <p className="blog-card-desc">{ev.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-2">
        <a href="#" className="btn">View All Events</a>
      </div>
    </div>
  </section>
);

const History: FC = () => (
  <section className="section section-dark" id="history">
    <div className="container">
      <div className="section-title"><h2>Origin &amp; History Of Silambam</h2></div>
      <div style={{ maxWidth: 800, margin: "0 auto", color: "var(--text-secondary)", lineHeight: 1.8 }}>
        <p>
          Traditional stories trace Silambam back several thousand years to the Siddhar
          (enlightened sage) Agastya. While on his way to Vellimalai, Agastya discussed
          Hindu philosophy with an old man he met, said to be the god Murugan in disguise.
          The old man taught him of kundalini yoga and how to focus prana through the
          body's nadi (channels).
        </p>
        <p style={{ marginTop: "1rem" }}>
          Agastya eventually compiled three texts on palm leaves based on these teachings.
          One of these was the <em>Kampu Sutra</em> (Staff Classic), which recorded advanced
          fighting theories in verse — the foundation of modern Silambam.
        </p>

        <div className="quote-block">
          <p lang="ta">
            மக்கள் தம்மை சிங்கம், புலி போன்ற விலங்குகளிடம் இருந்து காத்துக்கொள்ளக்
            கையாண்ட முறையே சிலம்பம் எனப்படும் கலையாக வளர்ந்துள்ளது என்பர். தமது கைகளில்
            எப்போதும் இருக்கக் கூடிய சிறிய ஆயுதங்களான கம்பு (தடி), சிறு கத்தி, கோடரி
            போன்ற ஆயுதங்களைப் பயன்படுத்தி விலங்குகளிடம் இருந்து தற்காத்துக்கொள்ள
            இந்தக் கலையைப் பயன்படுதினர்.
          </p>
          <p lang="ta" style={{ marginTop: "1rem" }}>
            தமிழர்கள் ஆயுதம் ஏந்திப் போராட ஆரம்பித்த காலத்தில் முதலில் எடுத்தது கம்பு
            எனப்படும் ஆயுதமே ஆகும். இதுவே பின்னர் சிலம்புக் கலையாக வளர்ச்சி பெற்றது.
          </p>
        </div>

        <p>
          <span className="types-label">Types of Silambam: </span>
          துடுக்காண்டம் · குறவஞ்சி · மறக்காணம் · அலங்காரச் சிலம்பம் · போர்ச் சிலம்பம் ·
          பனையேறி மல்லு · நாகதாளி · நாகசீறல் · கள்ளன்கம்பு
        </p>
      </div>
    </div>
  </section>
);


const Footer: FC = () => (
  <footer className="site-footer">
    <div className="footer-grid">
      <div className="footer-col">
        <h4>World Traditional Silambattam Federation</h4>
        <p>
          Dedicated to preserving and promoting the ancient Tamil martial art of
          Silambattam across India and the world.
        </p>
        <div className="footer-social">
          {SOCIAL_ICONS.map((icon: string) => (
            <a key={icon} href="#" aria-label={icon}>{icon}</a>
          ))}
        </div>
      </div>

      <div className="footer-col">
        <h4>Quick Links</h4>
        {QUICK_LINKS.map((label: string) => (
          <a key={label} href="#">{label}</a>
        ))}
      </div>

      <div className="footer-col">
        <h4>Programs</h4>
        {PROGRAMS.map((label: string) => (
          <a key={label} href="#">{label}</a>
        ))}
      </div>

      <div className="footer-col">
        <h4>Contact</h4>
        <a href="#">Get in Touch</a>
        <p>Tamil Nadu, India</p>
      </div>
    </div>

    <div className="footer-bottom">
      &copy; 2026 World Traditional Silambattam Federation. All rights reserved.
    </div>
  </footer>
);

// ── Toggle Button ────────────────────────────────────────────────────────────────────────
// const ToggleButton: React.FC = () => {
//   // TypeScript infers this state as boolean automatically
//   const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

//   const toggleTheme = (): void => {
//     setIsDarkMode((prev) => !prev);
//     // Toggles a global body class if needed for your app styling
//     document.body.classList.toggle('light-theme', isDarkMode);
//   };

//   return (
//     <button 
//       className={`theme-toggle-btn ${isDarkMode ? 'dark' : 'light'}`} 
//       onClick={toggleTheme}
//       aria-label="Toggle theme"
//       type="button"
//     >
//       {/* Sun Icon (Left Side) */}
//       <div className="icon-wrapper sun-icon">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <circle cx="12" cy="12" r="4"></circle>
//           <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
//         </svg>
//       </div>

//       {/* Moon Icon (Right Side) */}
//       <div className="icon-wrapper moon-icon">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
//         </svg>
//       </div>

//       {/* The Sliding Pill Thumb */}
//       <div className="toggle-thumb" />
//     </button>
//   );
// };

// ── App ────────────────────────────────────────────────────────────────────────
const App: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Initialise from localStorage or system preference
  const getInitialTheme = (): Theme => {
    const stored = localStorage.getItem("wtsf-theme") as Theme | null;
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Apply theme to <html> and persist
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("wtsf-theme", theme);
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme((prev: Theme) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
    <BrowserRouter>
      <Routes>
        
          <Route path="inst" element={<InstructorPage />} />
        
      </Routes>
    </BrowserRouter>
      <Header 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        theme={theme}
        toggleTheme={toggleTheme}
       />
      <main>
        <Hero />
        <About />
        <Instructors />
        <Affiliates />
        <Events />
        <History />
      </main>
      <Footer />
    </>
  );
};

export default App;
