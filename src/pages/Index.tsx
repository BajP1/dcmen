import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import heroShowroom from "@/assets/hero-showroom.png";

const HomePage = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      {/* Hero Section - starts below fixed navbar */}
      <section className="relative min-h-[calc(100vh-5rem)] mt-20 flex items-center overflow-hidden">
        {/* Background image with warm tone + blur + zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full scale-105">
            <img
              src={heroShowroom}
              alt="DC Men's Zone showroom"
              className="w-full h-full object-cover animate-slow-zoom saturate-[1.1] sepia-[0.15] brightness-[0.9] blur-[1px]"
            />
          </div>
          {/* Dark gradient overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.4) 100%)" }} />
          {/* Warm golden tint */}
          <div className="absolute inset-0" style={{ background: "rgba(139,109,71,0.08)" }} />
          {/* Grain texture overlay */}
          <div className="absolute inset-0 hero-grain opacity-[0.04]" />
        </div>

        {/* Left-aligned text content */}
        <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-3xl">
          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8"
            style={{ color: "#F5F2ED", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            Crafted for the Modern Gentleman
          </h1>
          <p
            className="text-lg md:text-xl lg:text-2xl font-light tracking-wide mb-12"
            style={{ color: "rgba(245,242,237,0.85)", textShadow: "0 1px 10px rgba(0,0,0,0.4)" }}
          >
            Premium Tailoring &amp; Menswear in Amritsar
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="https://wa.me/919872887860?text=Hi%20DC%20Men's%20Zone%2C%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-lg text-sm tracking-widest uppercase transition-all duration-300 hover:bg-primary/85 hover:-translate-y-0.5"
            >
              Book Appointment
            </a>
            <a
              href="https://wa.me/919872887860?text=Hi%20DC%20Men's%20Zone"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-glow inline-flex items-center justify-center px-10 py-4 rounded-lg text-sm tracking-widest uppercase font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: "hsl(var(--whatsapp))", color: "#fff" }}
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="scroll-fade-in">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Since Generations</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Legacy of Fine Craftsmanship
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At DC Men's Zone by Dhian Chand & Co., we blend timeless tailoring traditions with contemporary style. Every stitch tells a story of dedication, precision, and an unwavering commitment to making you look your absolute best.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Located in the heart of Amritsar, our atelier has dressed generations of gentlemen for life's most important moments — from boardroom meetings to wedding celebrations.
            </p>
          </div>
          <div className="scroll-fade-in scroll-fade-in-delay-2 img-hover-zoom rounded-lg overflow-hidden">
            <img
              src="/dc-mens-zone-logo.png"
              alt="DC Men's Zone craftsmanship"
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 lg:px-12 bg-secondary">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <p className="scroll-fade-in text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">What We Offer</p>
          <h2 className="scroll-fade-in font-serif text-3xl md:text-5xl font-bold text-foreground">Our Services</h2>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Bespoke Tailoring",
              desc: "Custom-crafted suits tailored to your exact measurements and personal style.",
              img: "/bespoke-tailoring.jpg",
            },
            {
              title: "Ready-Made Collection",
              desc: "Curated premium menswear ready to elevate your wardrobe instantly.",
              img: "/ready-made-collection.jpg",
            },
            {
              title: "Premium Fabrics",
              desc: "Handpicked fabrics from the world's finest mills for discerning gentlemen.",
              img: "/premium-fabrics.jpg",
            },
          ].map((service, i) => (
            <Link
              to="/services"
              key={service.title}
              className={`scroll-fade-in scroll-fade-in-delay-${i + 1} group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className="img-hover-zoom h-64">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Fabric Texture Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&q=80"
            alt="Premium fabric texture"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 backdrop-blur-sm" style={{ background: "rgba(245,242,237,0.75)" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="scroll-fade-in text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">The Foundation</p>
          <h2 className="scroll-fade-in font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Feel the Fabric
          </h2>
          <p className="scroll-fade-in text-muted-foreground leading-relaxed text-lg">
            Every masterpiece begins with the right material. We source only the finest fabrics — from Italian wool to English tweed — ensuring your garment feels as extraordinary as it looks.
          </p>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <p className="scroll-fade-in text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Portfolio</p>
          <h2 className="scroll-fade-in font-serif text-3xl md:text-5xl font-bold text-foreground">Our Work</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "/52ef4add-1888-4a53-aa78-5a66dd30ef17.jpg",
            "/06d5f583-fa12-4e6f-86f2-6f848000af6f.jpg",
            "/21564b05-23d0-46e9-9547-82811417bd86.jpg",
            "/5adba766-def1-4c20-95a1-917db47af6ea.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className={`scroll-fade-in scroll-fade-in-delay-${(i % 3) + 1} img-hover-zoom rounded-lg overflow-hidden aspect-[3/4]`}
            >
              <img src={src} alt={`Gallery preview ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="text-center mt-10 scroll-fade-in">
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center px-8 py-3 border border-foreground text-foreground text-sm tracking-wide uppercase font-medium rounded-md hover:bg-foreground hover:text-background transition-all duration-300"
          >
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="scroll-fade-in font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Experience Bespoke?
          </h2>
          <p className="scroll-fade-in text-muted-foreground text-lg mb-10">
            Book your appointment today and discover the art of personalized tailoring.
          </p>
          <div className="scroll-fade-in flex flex-col sm:flex-row gap-4 justify-center">
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
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
