import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const BASE_URL = "https://jamesgichia.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "James Gichia — Software Engineer & Security Enthusiast",
    template: "%s | James Gichia",
  },
  verification: {
    google: "google2ba3c4578ae13e72",
  },
  description:
    "Portfolio of James Gichia — Full-Stack Software Engineer specialising in Django, Next.js, and application security. Based in Ruiru, Kenya.",
  keywords: [
    "James Gichia",
    "Software Engineer",
    "Application Security",
    "Full Stack Developer",
    "Django Developer",
    "Next.js Developer",
    "Python Developer",
    "Web Security",
    "OWASP",
    "Backend Developer",
    "Ruiru",
    "Nairobi",
    "Kenya",
    "Portfolio",
  ],
  authors: [{ name: "James Gichia", url: BASE_URL }],
  creator: "James Gichia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "James Gichia — Software Engineer",
    description:
      "Full-Stack Web Apps & Application Security. Based in Ruiru, Kenya.",
    type: "website",
    url: BASE_URL,
    siteName: "James Gichia Portfolio",
    locale: "en_KE",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "James Gichia — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "James Gichia — Software Engineer",
    description:
      "Full-Stack Web Apps & Application Security. Based in Ruiru, Kenya.",
    images: ["/og-image.png"],
    creator: "@jamesgichia",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "James Gichia",
  jobTitle: "Software Engineer",
  description:
    "Full-Stack Software Engineer specialising in Django, Next.js, and application security.",
  url: BASE_URL,
  image: `${BASE_URL}/og-image.png`,
  email: "jamesgichia15@gmail.com",
  telephone: "+254791326693",
  sameAs: [
    "https://github.com/jamesgichia",
    "https://linkedin.com/in/jamesgichia",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ruiru",
    addressRegion: "Nairobi",
    addressCountry: "KE",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Mama Ngina University",
    address: "Kenya",
  },
  knowsAbout: [
    "Python",
    "Django",
    "Next.js",
    "React",
    "PostgreSQL",
    "Application Security",
    "OWASP Top 10",
    "Penetration Testing",
    "Docker",
    "REST APIs",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <div className="bg-blob bg-blob-1" />
          <div className="bg-blob bg-blob-2" />

          <Navbar />
          <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
          <FloatingWhatsApp />

          <footer
            style={{
              position: "relative",
              zIndex: 1,
              borderTop: "1px solid var(--border)",
              textAlign: "center",
              padding: "32px 24px",
              color: "var(--text-muted)",
              fontSize: "0.85rem",
            }}
          >
            <p>
              © {new Date().getFullYear()} James Gichia. Built with Next.js &amp;
              deployed on Vercel.
            </p>
            <p style={{ marginTop: "6px", color: "var(--purple-400)" }}>
              Ruiru, Kenya 🇰🇪
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
