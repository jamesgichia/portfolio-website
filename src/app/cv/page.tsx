"use client";

import { useState } from "react";
import { Download, Link2, Check, FileText, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

// Note: metadata export doesn't work in client components.
// For SEO we rely on the layout-level title template.
// If you need page-level metadata, convert to a server component and extract
// the interactive bits to a separate client component.

const CV_URL = "/James_Gichia_CV.pdf";
const SHARE_URL = "https://jamesgichia.vercel.app/cv";

export default function CVPage() {
  const [copied, setCopied] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for environments without clipboard API
      const el = document.createElement("textarea");
      el.value = SHARE_URL;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div style={{ paddingTop: "64px", minHeight: "100vh" }}>
      {/* ── PAGE HEADER ── */}
      <section
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "60px 24px 32px",
        }}
      >
        {/* Label */}
        <p className="section-label">Resume</p>

        {/* Title row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "10px",
              }}
            >
              My{" "}
              <span className="text-gradient">Curriculum Vitae</span>
            </h1>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                maxWidth: "480px",
                lineHeight: 1.6,
              }}
            >
              Full-Stack Software Engineer specialising in Django, Next.js, and
              application security.
            </p>
          </div>

          {/* Action buttons */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              flexShrink: 0,
            }}
          >
            {/* Download */}
            <a
              href={CV_URL}
              download="James_Gichia_CV.pdf"
              className="btn-primary"
              id="cv-download-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Download size={16} />
              Download PDF
            </a>

            {/* Copy link */}
            <button
              onClick={handleCopyLink}
              className="btn-outline"
              id="cv-copy-link-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              {copied ? (
                <>
                  <Check size={16} color="var(--green-400)" />
                  <span style={{ color: "var(--green-400)" }}>Link Copied!</span>
                </>
              ) : (
                <>
                  <Link2 size={16} />
                  Share CV
                </>
              )}
            </button>
          </div>
        </div>

        {/* Stat chips */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "40px",
          }}
        >
          {[
            "Full-Stack Development",
            "Application Security",
            "Django & Next.js",
            "Open to Opportunities",
          ].map((chip) => (
            <span key={chip} className="tag">
              {chip}
            </span>
          ))}
        </div>
      </section>

      {/* ── PDF VIEWER ── */}
      <section
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        <div
          className="card"
          style={{
            overflow: "hidden",
            padding: 0,
            position: "relative",
            minHeight: "800px",
          }}
        >
          {/* Viewer toolbar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 20px",
              borderBottom: "1px solid var(--border)",
              background: "var(--bg-secondary)",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "var(--text-secondary)",
                fontSize: "0.85rem",
              }}
            >
              <FileText size={16} color="var(--gold-400)" />
              <span>James_Gichia_CV.pdf</span>
            </div>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--purple-400)",
                textDecoration: "none",
                fontSize: "0.82rem",
                fontWeight: 600,
              }}
            >
              Open in new tab <ExternalLink size={13} />
            </a>
          </div>

          {/* PDF iframe / fallback */}
          {!iframeError ? (
            <iframe
              src={`${CV_URL}#view=FitH`}
              title="James Gichia CV"
              onError={() => setIframeError(true)}
              style={{
                width: "100%",
                height: "900px",
                border: "none",
                display: "block",
                background: "var(--bg-card)",
              }}
            />
          ) : (
            /* Graceful fallback if browser blocks iframes for PDFs */
            <div
              style={{
                padding: "80px 24px",
                textAlign: "center",
                color: "var(--text-secondary)",
              }}
            >
              <FileText
                size={48}
                color="var(--gold-400)"
                style={{ margin: "0 auto 20px" }}
              />
              <p style={{ fontSize: "1rem", marginBottom: "16px" }}>
                Your browser is blocking inline PDF preview.
              </p>
              <a
                href={CV_URL}
                download="James_Gichia_CV.pdf"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Download size={16} />
                Download PDF Instead
              </a>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
