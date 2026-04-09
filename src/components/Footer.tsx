import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-secondary py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-foreground mb-2">DC Men' Zone</h3>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Dhian Chand & Co.</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Crafting excellence in men's fashion since generations. Bespoke tailoring and premium menswear in Amritsar.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Quick Links</h4>
          <nav className="space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/our-craft", label: "Our Craft" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Contact Us</h4>
          <address className="not-italic space-y-2 text-sm text-muted-foreground">
            <p>14 - Katra Jaimal Singh, Amritsar</p>
            <p>Punjab, India</p>
            <a href="tel:+919872887860" className="block hover:text-primary transition-colors">
              +91 98728 87860
            </a>
            <a href="tel:+919872931751" className="block hover:text-primary transition-colors">
              +91 98729 31751
            </a>
          </address>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/dcmenzone?igsh=NmdsenczMmdlbTEz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <defs>
                  <linearGradient id="ig-gradient-footer" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFDC80" />
                    <stop offset="25%" stopColor="#F77737" />
                    <stop offset="50%" stopColor="#E1306C" />
                    <stop offset="75%" stopColor="#C13584" />
                    <stop offset="100%" stopColor="#833AB4" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-gradient-footer)" strokeWidth="2" />
                <circle cx="12" cy="12" r="5" stroke="url(#ig-gradient-footer)" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="url(#ig-gradient-footer)" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/17RKLx5qmU/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} DC Men' Zone — Dhian Chand & Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
