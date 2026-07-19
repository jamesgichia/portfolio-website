import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with James Gichia for software engineering, web application development, and application security opportunities.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | James Gichia",
    description: "Get in touch with James Gichia for software engineering, web application development, and application security opportunities.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
