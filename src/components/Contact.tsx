import type { FC } from "react";
import LeafletMapTS from "./LeafletMapTS";


// ── Contact Info ──────────────────────────────────────────────────────────────
interface ContactDetail {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

const CONTACT_DETAILS: ContactDetail[] = [
  { icon: "📍", label: "Address",   value: "World Traditional Silambattam Federation, Tamil Nadu, Chennai, India" },
  { icon: "📞", label: "Phone",     value: "+91 99418 73608", href: "tel:+919941873608" },
  { icon: "✉️", label: "Email",     value: "wtsfsilambam@gmail.com",   href: "mailto:info@wtsf.in" },
  { icon: "🕐", label: "Office Hours", value: "Mon – Sun, 9:00 AM to 6:00 PM IST" },
];

interface SocialLink { icon: string; label: string; href: string; }
const SOCIAL_LINKS: SocialLink[] = [
  { icon: "f", label: "Facebook",  href: "https://www.facebook.com/share/1D2NXAP8J6/" },
  { icon: "in", label: "Instagram", href: "https://www.instagram.com/wtsfsilambam/" },
  { icon: "X",  label: "Twitter",   href: "#"},
  { icon: "▶",  label: "YouTube",   href: "https://www.youtube.com/@worldtraditionalsilambatta4819" },
];

// ── Component ─────────────────────────────────────────────────────────────────
const Contact: FC = () => {
  return (
    <>
      <section className="page-header">
        <div className="page-header-content">
          {/* <p className="tagline">Get In Touch</p> */}
          <h1>Contact Us</h1>
          <p>Have a question about WTSF Reach out — we'd love to hear from you.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* ── Left: info + map ── */}
            <div className="contact-info">
              <h2 className="contact-info-title">Federation Office</h2>

              <ul className="contact-detail-list">
                {CONTACT_DETAILS.map((d) => (
                  <li key={d.label} className="contact-detail-item">
                    <span className="contact-detail-icon">{d.icon}</span>
                    <div>
                      <div className="contact-detail-label">{d.label}</div>
                      {d.href
                        ? <a href={d.href} className="contact-detail-value link">{d.value}</a>
                        : <div className="contact-detail-value">{d.value}</div>}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="contact-social-row">
                {SOCIAL_LINKS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" className="contact-social-btn" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>

              
            </div>

           
              {/* Right Side */}
  <div className="contact-map">
    <LeafletMapTS />
  </div>

           
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
