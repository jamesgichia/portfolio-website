"use client";
import { GithubIcon, LinkedinIcon } from "@/components/GithubIcon";
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from "lucide-react";
import SmartEmailLink from "@/components/SmartEmailLink";
import { useState, FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setState("submitting");

    // Construct a mailto: link with all form data pre-filled
    const body = `Hi James,\n\nMy name is ${form.name}.\n\n${form.message}\n\nBest regards,\n${form.name}\n${form.email}`;
    const mailto = `mailto:jamesgichia15@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;

    // Open the email client
    window.location.href = mailto;

    // Show success state after a short delay
    setTimeout(() => {
      setState("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }, 600);
  };

  const inputStyle = (field: keyof FormData): React.CSSProperties => ({
    width: "100%",
    padding: "11px 14px",
    borderRadius: "8px",
    background: "var(--bg-secondary)",
    border: `1px solid ${errors[field] ? "rgba(248,113,113,0.6)" : "var(--border)"}`,
    color: "var(--text-primary)",
    fontSize: "0.9rem",
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color 0.2s",
  });

  return (
    <div style={{ paddingTop: "64px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "80px 24px" }}>
        <p className="section-label">Get In Touch</p>
        <h1 className="section-title">
          Let&apos;s <span className="text-gradient">Work Together</span>
        </h1>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "1rem",
            maxWidth: "560px",
            marginBottom: "60px",
            lineHeight: 1.75,
          }}
        >
          I&apos;m open to internships, entry-level roles, and consulting engagements in
          software engineering, web application development, and application security.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            alignItems: "start",
          }}
        >
          {/* ── LEFT: Contact Info ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <h2
              style={{
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--text-primary)",
                marginBottom: "4px",
              }}
            >
              Contact Details
            </h2>
            {[
              {
                icon: <Mail size={18} color="var(--purple-400)" />,
                label: "Email",
                value: "jamesgichia15@gmail.com",
                href: "smart-email",
              },
              {
                icon: <Phone size={18} color="var(--purple-400)" />,
                label: "Phone",
                value: "+254 791 326 693",
                href: "tel:+254791326693",
              },
              {
                icon: <MapPin size={18} color="var(--purple-400)" />,
                label: "Location",
                value: "Ruiru, Kenya",
                href: null,
              },
              {
                icon: <GithubIcon size={18} color="var(--purple-400)" />,
                label: "GitHub",
                value: "github.com/jamesgichia",
                href: "https://github.com/jamesgichia",
              },
              {
                icon: <LinkedinIcon size={18} color="var(--purple-400)" />,
                label: "LinkedIn",
                value: "linkedin.com/in/jamesgichia",
                href: "https://linkedin.com/in/jamesgichia",
              },
            ].map(({ icon, label, value, href }) => (
              <div
                key={label}
                className="card"
                style={{
                  padding: "16px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "9px",
                    background: "rgba(22,101,52,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(22,101,52,0.2)",
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "2px",
                    }}
                  >
                    {label}
                  </p>
                  {label === "Email" ? (
                    <SmartEmailLink
                      subject="Let's collaborate"
                      style={{
                        color: "var(--text-primary)",
                        textDecoration: "none",
                        fontSize: "0.88rem",
                        fontWeight: 500,
                      }}
                    >
                      {value}
                    </SmartEmailLink>
                  ) : href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--text-primary)",
                        textDecoration: "none",
                        fontSize: "0.88rem",
                        fontWeight: 500,
                      }}
                    >
                      {value}
                    </a>
                  ) : (
                    <p style={{ color: "var(--text-primary)", fontSize: "0.88rem", fontWeight: 500 }}>
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div
              style={{
                marginTop: "4px",
                padding: "14px 16px",
                borderRadius: "10px",
                background: "rgba(34,197,94,0.06)",
                border: "1px solid rgba(34,197,94,0.2)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  background: "#4ade80",
                  display: "inline-block",
                  animation: "pulse 2s infinite",
                  flexShrink: 0,
                }}
              />
              <p style={{ fontSize: "0.85rem", color: "#4ade80", fontWeight: 500 }}>
                Available for internships &amp; entry-level roles
              </p>
            </div>
          </div>

          {/* ── RIGHT: Contact Form ── */}
          <div className="card" style={{ padding: "32px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "24px",
              }}
            >
              <Send size={20} color="var(--purple-400)" />
              <h2 style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)" }}>
                Send a Message
              </h2>
            </div>

            {state === "success" ? (
              /* Success state */
              <div
                style={{
                  textAlign: "center",
                  padding: "40px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "rgba(34,197,94,0.12)",
                    border: "1px solid rgba(34,197,94,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Check size={28} color="#4ade80" />
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      fontSize: "1rem",
                      marginBottom: "6px",
                    }}
                  >
                    Email client opened!
                  </p>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                    Your message has been pre-filled in your email client. Just
                    hit send and I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setState("idle")}
                  className="btn-outline"
                  style={{ cursor: "pointer", fontFamily: "inherit", marginTop: "8px" }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* Name + Email row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        marginBottom: "6px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => {
                        setForm((f) => ({ ...f, name: e.target.value }));
                        if (errors.name) setErrors((er) => ({ ...er, name: undefined }));
                      }}
                      style={inputStyle("name")}
                    />
                    {errors.name && (
                      <p style={{ color: "rgba(248,113,113,0.9)", fontSize: "0.75rem", marginTop: "4px" }}>
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "var(--text-secondary)",
                        marginBottom: "6px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => {
                        setForm((f) => ({ ...f, email: e.target.value }));
                        if (errors.email) setErrors((er) => ({ ...er, email: undefined }));
                      }}
                      style={inputStyle("email")}
                    />
                    {errors.email && (
                      <p style={{ color: "rgba(248,113,113,0.9)", fontSize: "0.75rem", marginTop: "4px" }}>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    style={{
                      display: "block",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "6px",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, subject: e.target.value }));
                      if (errors.subject) setErrors((er) => ({ ...er, subject: undefined }));
                    }}
                    style={inputStyle("subject")}
                  />
                  {errors.subject && (
                    <p style={{ color: "rgba(248,113,113,0.9)", fontSize: "0.75rem", marginTop: "4px" }}>
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: "block",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "var(--text-secondary)",
                      marginBottom: "6px",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell me about your project, role, or question..."
                    value={form.message}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, message: e.target.value }));
                      if (errors.message) setErrors((er) => ({ ...er, message: undefined }));
                    }}
                    style={{
                      ...inputStyle("message"),
                      resize: "vertical",
                      minHeight: "120px",
                    }}
                  />
                  {errors.message && (
                    <p style={{ color: "rgba(248,113,113,0.9)", fontSize: "0.75rem", marginTop: "4px" }}>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Info note */}
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "flex-start",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    background: "rgba(212,175,55,0.06)",
                    border: "1px solid rgba(212,175,55,0.15)",
                  }}
                >
                  <AlertCircle size={14} color="var(--gold-400)" style={{ flexShrink: 0, marginTop: "1px" }} />
                  <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                    Clicking &quot;Send Message&quot; opens your email client with the message pre-filled — no data is stored.
                  </p>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  id="contact-form-submit"
                  disabled={state === "submitting"}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    cursor: state === "submitting" ? "wait" : "pointer",
                    fontFamily: "inherit",
                    opacity: state === "submitting" ? 0.7 : 1,
                    width: "100%",
                  }}
                >
                  <Send size={16} />
                  {state === "submitting" ? "Opening email client…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        input:focus, textarea:focus {
          border-color: var(--border-hover) !important;
          box-shadow: 0 0 0 3px rgba(212,175,55,0.12);
        }
        @media (max-width: 480px) {
          #contact-name, #contact-email {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </div>
  );
}
