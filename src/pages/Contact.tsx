import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef} className="pt-20">
      {/* Header */}
      <section className="py-24 px-6 lg:px-12 text-center">
        <p className="scroll-fade-in text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Get in Touch</p>
        <h1 className="scroll-fade-in font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Contact Us</h1>
        <p className="scroll-fade-in text-muted-foreground text-lg max-w-2xl mx-auto">
          Visit our store or reach out to schedule your appointment.
        </p>
      </section>

      {/* Contact Info + Map */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div className="scroll-fade-in space-y-10">
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Our Address</h3>
                <p className="text-muted-foreground">14 - Katra Jaimal Singh</p>
                <p className="text-muted-foreground">Amritsar, Punjab, India</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Phone</h3>
                <a href="tel:+919872887860" className="block text-muted-foreground hover:text-primary transition-colors">
                  +91 98728 87860
                </a>
                <a href="tel:+919872931751" className="block text-muted-foreground hover:text-primary transition-colors">
                  +91 98729 31751
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground">Monday – Sunday: 10 AM – 9 PM</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/dcmenzone?igsh=NmdsenczMmdlbTEz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-md hover:border-foreground transition-all"
                  aria-label="Instagram"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <defs>
                      <linearGradient id="ig-gradient-contact" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFDC80" />
                        <stop offset="25%" stopColor="#F77737" />
                        <stop offset="50%" stopColor="#E1306C" />
                        <stop offset="75%" stopColor="#C13584" />
                        <stop offset="100%" stopColor="#833AB4" />
                      </linearGradient>
                    </defs>
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-gradient-contact)" strokeWidth="2" />
                    <circle cx="12" cy="12" r="5" stroke="url(#ig-gradient-contact)" strokeWidth="2" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="url(#ig-gradient-contact)" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/17RKLx5qmU/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-md hover:border-foreground transition-all"
                  aria-label="Facebook"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/919872887860?text=Hi%20DC%20Men's%20Zone%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md text-sm tracking-wide uppercase transition-all duration-300"
              >
                Book Appointment
              </a>
              <a
                href="tel:+919872887860"
                className="inline-flex items-center justify-center px-8 py-4 border border-foreground text-foreground text-sm tracking-wide uppercase font-medium rounded-md hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Call Us
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="scroll-fade-in scroll-fade-in-delay-2 rounded-lg overflow-hidden h-[500px] md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.5!2d74.8723!3d31.6340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM4JzAyLjQiTiA3NMKwNTInMjAuMyJF!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DC Men' Zone location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
