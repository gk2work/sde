import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const contactLinks = [
  {
    name: "Email",
    value: "gautam.aec18@gmail.com",
    href: "mailto:gautam.aec18@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        width="16"
        height="16"
        aria-hidden="true"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    name: "Phone",
    value: "+91 9631636391",
    href: "tel:+919631636391",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        width="16"
        height="16"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    value: "github.com/gk2work",
    href: "https://github.com/gk2work",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        width="16"
        height="16"
        aria-hidden="true"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="section contact"
      aria-label="Contact section"
    >
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">
            Let&apos;s <span className="accent">Work Together</span>
          </h2>
          <p className="section-subtitle">
            Open to full-time roles, freelance projects, and interesting
            conversations.
          </p>
        </div>

        <div className="contact__grid">
          {/* Left: info card */}
          <div className="contact__info fade-in-left">
            <div className="contact__info-bar">
              <span className="contact__info-bar-label">Contact Info</span>
              <div className="contact__info-bar-line"></div>
            </div>

            <div className="contact__available">
              <span className="contact__available-dot"></span>
              <div>
                <div className="contact__available-title">
                  Available for Work
                </div>
                <div className="contact__available-sub">
                  Open to full-time &amp; freelance opportunities
                </div>
              </div>
            </div>

            <p className="contact__blurb">
              Whether you have a project, a role, or just want to connect drop
              me a line. I reply to every message.
            </p>

            <div className="contact__links">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="contact__link-row"
                  aria-label={link.name}
                >
                  <span className="contact__link-icon">{link.icon}</span>
                  <div className="contact__link-text">
                    <span className="contact__link-name">{link.name}</span>
                    <span className="contact__link-value">{link.value}</span>
                  </div>
                  <span className="contact__link-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form
            className="contact__form fade-in-right"
            onSubmit={handleSubmit}
            aria-label="Contact form"
          >
            <div className="contact__form-bar">
              <span className="contact__form-label-main">Send a Message</span>
              <div className="contact__form-bar-line"></div>
            </div>

            <div className="contact__field">
              <label htmlFor="contact-name" className="contact__field-label">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                className="contact__input"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                required
                autoComplete="name"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-email" className="contact__field-label">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                className="contact__input"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                required
                autoComplete="email"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message" className="contact__field-label">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="contact__input contact__textarea"
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                required
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="contact__submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send Message"}
              {status !== "sending" && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  width="15"
                  height="15"
                  aria-hidden="true"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              )}
            </button>

            {status === "success" && (
              <p className="contact__feedback contact__feedback--success">
                Message sent — I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="contact__feedback contact__feedback--error">
                Something went wrong. Email me directly at gautam.aec18@gmail.com
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
