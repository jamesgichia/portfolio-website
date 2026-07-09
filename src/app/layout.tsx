import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "James Gichia — Software Engineer & Security Enthusiast",
  description:
    "Portfolio of James Gichia — Full-Stack Software Engineer specialising in Django, Next.js, and application security. Based in Nairobi, Kenya.",
  keywords: [
    "James Gichia",
    "Software Engineer",
    "Application Security",
    "Django",
    "Next.js",
    "Python",
    "Nairobi",
    "Kenya",
  ],
  authors: [{ name: "James Gichia" }],
  openGraph: {
    title: "James Gichia — Software Engineer",
    description: "Building secure, full-stack web applications.",
    type: "website",
  },
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
      </head>
      <body>
        <ThemeProvider>
          {/* Background blobs */}
          <div className="bg-blob bg-blob-1" />
          <div className="bg-blob bg-blob-2" />

          <Navbar />
          <main style={{ position: "relative", zIndex: 1 }}>{children}</main>

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
              Nairobi, Kenya 🇰🇪
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
