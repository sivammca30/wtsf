import type { FC } from "react";
import { Link } from "react-router-dom";
import { EVENTS, ASSOICIATIONS } from "../data";
import type { EventItem, Association } from "../data";
import officials from '../assets/json/officials.json';
import StatsSection from "./StatsSection";


const activeOfficials = [...officials]
    .filter(off => off.status === 'A')
    .sort((a, b) => a.order - b.order);

const Home: FC = () => (
  <>
    <section className="hero">
      <div className="hero-content">
        <img
          className="hero-logo"
          src= "images/logo/logo.png"
          alt="WTSF"
          // onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
          //   e.currentTarget.style.display = "none";
          // }}
        />
        <p className="tagline">Learn · Secure · Teach</p>
        <h1>World Traditional<br />Silambattam Federation</h1>
        <p className="hero-sub">
          Preserving and promoting the ancient Tamil martial art of Silambattam
          across India and the world.
        </p>
        <Link to="/about" className="btn">About WTSF</Link>
        <Link to="/instructors" className="btn btn-ghost">Our Instructors</Link>
      </div>
    </section>

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
          With over 2,000 students actively learning across various states of India, WTSF
          maintains a cadre of well-qualified instructors, judges, and masters. The Indian
          Government has recognised Silambam under the Khelo India Programme, and Tamil Nadu
          includes Silambam in the 3% sports quota for government jobs.
        </p>
        </div>
        <div className="text-center mt-2">
          <Link to="/about" className="btn">Read Full Story</Link>
        </div>
      </div>
    </section>

    <section className="section section-dark">
      <div className="container">
        <div className="section-title"><h2>WTSF Growth in Numbers</h2></div>
        <StatsSection/>
        </div>

    </section>

    <section className="section">
      <div className="container">
        <div className="section-title"><h2>Executive Members</h2></div>
        <div className="card-grid">
        {activeOfficials.map((off) => (
          <div className="card" key={off.id}>
            <div className="card-image-wrapper">
              <img 
                src={off.src} 
                alt={off.name} 
                className="card-image" 
              />
            </div>
            <div className="card-body">
              <h2 className="card-title">{off.name}</h2>
              <p className="card-text">{off.position}</p>
            </div>
          </div>
          
        ))}
      </div>
        <div className="text-center mt-2">
          <Link to="/instructors" className="btn">View All Instructors</Link>
        </div>
      </div>
    </section>

    <section className="section  section-dark">
      <div className="container">
        <div className="section-title"><h2>In Association With</h2></div>
        <div className="affiliates">
          {ASSOICIATIONS.map((a: Association) => (
            <div key={a.id} className="affiliate-badge">{a.alt}</div>
          ))}
        </div>
      </div>
    </section>

    <section className="section ">
      <div className="container">
        <div className="section-title"><h2>Upcoming Events</h2></div>
        <div className="blog-grid">
          {EVENTS.map((ev: EventItem) => {
            // const formatted: string = new Date(ev.date).toLocaleDateString("en-IN", {
            //   year: "numeric",
            //   month: "long",
            //   day: "numeric",
            // });
            return (
              <Link key={ev.id} to="/events" className="blog-card" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="blog-card-placeholder">
                    <img className="blog-card-image"
                      src={ev.img}
                      alt={ev.title}
                    />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-date"></div>
                  <span className="blog-card-cat">{ev.category}</span>
                  <p className="blog-card-desc">{ev.desc}</p>
                  <div className="blog-card-title">{ev.title}</div>
                  
                </div>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-2">
          <Link to="/events" className="btn">View All Events</Link>
        </div>
      </div>
    </section>

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

  </>
);

export default Home;
