"use client";

export default function EmailButton() {
  const mailtoLink = "mailto:bhaumiksenwal99@gmail.com";

  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=bhaumiksenwal99@gmail.com&su=Portfolio%20Contact&body=Hi%20Bhaumik,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.";

  const handleClick = (e) => {
    const isMobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      );

    // ✅ Desktop → open Gmail web
    if (!isMobile) {
      e.preventDefault();
      window.open(gmailLink, "_blank");
    }
    // ✅ Mobile → allow default mailto behavior (opens Gmail app)
  };

  return (
    <a
      href={mailtoLink}
      onClick={handleClick}
      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border hover:bg-muted transition-all duration-300"
    >
      📧 Email Me
    </a>
  );
}
