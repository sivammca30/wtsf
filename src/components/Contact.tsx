import type { FC, ChangeEvent, FormEvent } from "react";
import { useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────
interface FormField {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

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

const EMPTY_FORM: FormField = { name: "", email: "", phone: "", subject: "", message: "" };

// ── Component ─────────────────────────────────────────────────────────────────
const Contact: FC = () => {
  const [form, setForm] = useState<FormField>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<FormField>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  // Validation
  const validate = (): Partial<FormField> => {
    const e: Partial<FormField> = {};
    if (!form.name.trim())          e.name    = "Name is required.";
    if (!form.email.trim())         e.email   = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                    e.email   = "Enter a valid email address.";
    if (!form.subject.trim())       e.subject = "Subject is required.";
    if (!form.message.trim())       e.message = "Message is required.";
    else if (form.message.trim().length < 20)
                                    e.message = "Message must be at least 20 characters.";
    return e;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormField]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("submitting");
    // Simulate API call — replace with real endpoint
    await new Promise<void>((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setForm(EMPTY_FORM);
    setErrors({});
  };

  const handleReset = (): void => {
    setForm(EMPTY_FORM);
    setErrors({});
    setStatus("idle");
  };

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

              {/* Embedded map placeholder */}
              <div className="contact-map">
                <div className="contact-map-inner">
                  <span className="contact-map-pin">📍</span>
                  <p>Chennai, Tamil Nadu, India</p>
                  <a
                    href="https://maps.google.com/?q=Chennai+Tamil+Nadu+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ marginTop: "1rem", fontSize: "0.8rem", padding: "0.55rem 1.4rem" }}
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>

            {/* ── Right: form ── */}
            <div className="contact-form-wrap">
              <h2 className="contact-info-title">Send a Message</h2>

              {status === "success" ? (
                <div className="contact-success">
                  <div className="contact-success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 1–2 business days.</p>
                  <button className="btn" onClick={handleReset} style={{ marginTop: "1.5rem" }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name <span className="form-required">*</span></label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className={`form-input${errors.name ? " form-input-error" : ""}`}
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                      />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address <span className="form-required">*</span></label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className={`form-input${errors.email ? " form-input-error" : ""}`}
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="form-input"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="subject">Subject <span className="form-required">*</span></label>
                      <select
                        id="subject"
                        name="subject"
                        className={`form-input form-select${errors.subject ? " form-input-error" : ""}`}
                        value={form.subject}
                        onChange={handleChange}
                      >
                        <option value="">Select a subject</option>
                        <option value="Affiliation">Affiliation</option>
                        <option value="Classes">Classes &amp; Training</option>
                        <option value="Events">Events &amp; Tournaments</option>
                        <option value="Media">Media &amp; Press</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.subject && <span className="form-error">{errors.subject}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message <span className="form-required">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className={`form-input form-textarea${errors.message ? " form-input-error" : ""}`}
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={handleChange}
                    />
                    <div className="form-char-count">{form.message.length} characters</div>
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  {status === "error" && (
                    <div className="form-server-error">Something went wrong. Please try again.</div>
                  )}

                  <div className="form-actions">
                    <button
                      type="submit"
                      className="btn"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? "Sending…" : "Send Message"}
                    </button>
                    <button type="button" className="btn btn-ghost" onClick={handleReset}>
                      Clear
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
