import type { Metadata } from "next";
import CVInteractive from "./CVInteractive";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum Vitae of James Gichia — Full-Stack Software Engineer specialising in Django, Next.js, and application security. View and download my CV.",
  alternates: {
    canonical: "/cv",
  },
  openGraph: {
    title: "CV | James Gichia",
    description:
      "Full-Stack Software Engineer specialising in Django, Next.js, and application security. View and download the CV of James Gichia.",
    url: "/cv",
  },
  twitter: {
    card: "summary",
    title: "CV | James Gichia",
    description: "View and download the CV of James Gichia — Software Engineer & Security Specialist.",
  },
};

export default function CVPage() {
  return <CVInteractive />;
}
