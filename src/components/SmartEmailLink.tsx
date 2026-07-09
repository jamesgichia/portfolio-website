"use client";
import { ReactNode, AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  subject?: string;
}

const EMAIL = "jamesgichia15@gmail.com";

export default function SmartEmailLink({ children, subject = "", ...rest }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const sub = subject ? encodeURIComponent(subject) : "";
    const mailto = `mailto:${EMAIL}${sub ? `?subject=${sub}` : ""}`;
    const gmail = `https://mail.google.com/mail/?view=cm&to=${EMAIL}${sub ? `&su=${sub}` : ""}`;

    let nativeAppOpened = false;

    const onBlur = () => { nativeAppOpened = true; };
    window.addEventListener("blur", onBlur, { once: true });

    // Try native email client first
    window.location.href = mailto;

    // After 1.5 s with no blur, fall back to Gmail in new tab
    setTimeout(() => {
      window.removeEventListener("blur", onBlur);
      if (!nativeAppOpened) {
        window.open(gmail, "_blank", "noopener,noreferrer");
      }
    }, 1500);
  };

  return (
    <a
      href={`mailto:${EMAIL}`}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </a>
  );
}
