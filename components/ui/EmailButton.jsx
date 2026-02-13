export default function EmailButton() {
  const email = "bhaumiksenwal99@gmail.com";

  const mailtoLink = `mailto:${email}?subject=Portfolio Contact&body=Hi Bhaumik, I visited your portfolio and would like to connect.`;

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Portfolio%20Contact&body=Hi%20Bhaumik,%20I%20visited%20your%20portfolio.`;

  return (
    <div className="flex gap-3">
      
      {/* ✅ Mobile + fallback (opens mail app) */}
      <a
        href={mailtoLink}
        className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border hover:bg-muted transition-all duration-300 md:hidden"
      >
        📧 Email Me
      </a>

      {/* ✅ Desktop only (opens Gmail web) */}
      <a
        href={gmailLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border hover:bg-muted transition-all duration-300"
      >
        📧 Email Me
      </a>
    </div>
  );
}
