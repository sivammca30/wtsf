import type { FC } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutubeSquare } from "react-icons/fa";

const socials = [
  { icon: <FaFacebookF />, url: "https://www.facebook.com/share/1D2NXAP8J6/", text: "Facebook" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/wtsfsilambam/", text: "Instagram" },
  { icon: <FaYoutubeSquare />, url: "https://www.youtube.com/@worldtraditionalsilambatta4819", text: "YouTube" },
  { icon: <FaTwitter />, url: "https://twitter.com/wtsfsilambam?t=Upr6UJ9aXxtp2aIT-rINwg&s=08", text: "Twitter" },
];

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
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="social-media-circle"
              aria-label={item.text}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-media-icon">{item.icon}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="footer-col">
        <h4>Quick Links</h4>
        <Link to="/about">About Us</Link>
        <Link to="/instructors">Instructors</Link>
        {/* <Link to="/history">History</Link> */}

      </div>

      <div className="footer-col">
        <h4>Programs</h4>
        <Link to="/events">Events</Link>
        {/* <Link to="/classes">Classes</Link>
        <Link to="/instructors">Training</Link>
        <Link to="/events">Workshops</Link> */}
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
