import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-foreground mb-2">DC Men's Zone</h3>
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
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://www.facebook.com/share/17RKLx5qmU/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={22} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} DC Men's Zone — Dhian Chand & Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
