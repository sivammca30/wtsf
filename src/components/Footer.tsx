import type { FC } from "react";
import { Link } from "react-router-dom";
import { SOCIAL_ICONS } from "../data";

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
        <Link to="/about">About Us</Link>
        <Link to="/instructors">Instructors</Link>
        <Link to="/history">History</Link>
        <Link to="/events">Events</Link>
      </div>

      <div className="footer-col">
        <h4>Programs</h4>
        <Link to="/classes">Classes</Link>
        <Link to="/instructors">Training</Link>
        <Link to="/events">Workshops</Link>
      </div>

      <div className="footer-col">
        <h4>Contact</h4>
        <Link to="/contact">Get in Touch</Link>
        <p>Tamil Nadu, India</p>
      </div>
    </div>

    <div className="footer-bottom">
      &copy; 2026 World Traditional Silambattam Federation. All rights reserved.
    </div>
  </footer>
);

export default Footer;
