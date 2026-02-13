"use client";

export default function EmailButton() {
  const mailtoLink = "mailto:bhaumiksenwal99@gmail.com";

  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=bhaumiksenwal99@gmail.com&su=Portfolio%20Contact&body=Hi%20Bhaumik,%20I%20visited%20your%20portfolio.";

  return (
    <div className="flex gap-3 flex-wrap">
      {/* ✅ Mobile + universal email (opens app) */}
      <a
        href={mailtoLink}
        className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border hover:bg-muted transition-all duration-300"
      >
        📧 Email Me
      </a>

      {/* ✅ Desktop Gmail button */}
      <a
        href={gmailLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border hover:bg-muted transition-all duration-300"
      >
        🌐 Open in Gmail
      </a>
    </div>
  );
}
