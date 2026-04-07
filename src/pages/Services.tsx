import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "Bespoke Tailoring",
    subtitle: "Crafted Exclusively for You",
    desc: "Experience the pinnacle of personalized fashion. Our master tailors create suits that are uniquely yours — from the choice of fabric and lining to every button and stitch. Each bespoke piece is a work of art that reflects your personality and fits like a second skin.",
    img: "/e517537a-8998-43af-86f2-a8a0524f9225.jpg",
    reverse: false,
  },
  {
    title: "Ready-Made Collection",
    subtitle: "Premium Style, Instant Elegance",
    desc: "Our carefully curated ready-made collection features premium suits, blazers, shirts, and trousers. Each piece is crafted with the same attention to quality that defines our bespoke work — perfect for the gentleman who wants exceptional style without the wait.",
    img: "/ready-made-collection-3.jpg",
    reverse: true,
  },
  {
    title: "Premium Fabrics",
    subtitle: "The World's Finest Materials",
    desc: "We source fabrics from the most prestigious mills across Italy, England, and beyond. From luxurious Super 150s wool to breathable tropical blends, our fabric library offers an extraordinary range of textures, patterns, and weights for every season and occasion.",
    img: "/premium-fabrics-3.jpg",
    reverse: false,
  },
];

const Services = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef} className="pt-20">
      {/* Header */}
      <section className="py-24 px-6 lg:px-12 text-center">
        <p className="scroll-fade-in text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">What We Offer</p>
        <h1 className="scroll-fade-in font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Our Services</h1>
        <p className="scroll-fade-in text-muted-foreground text-lg max-w-2xl mx-auto">
          From bespoke creations to premium ready-made collections, we deliver excellence in every stitch.
        </p>
      </section>

      {/* Service Sections */}
      {services.map((service, i) => (
        <section
          key={service.title}
          className={`py-24 px-6 lg:px-12 ${i % 2 === 1 ? "bg-secondary" : ""}`}
        >
          <div
            className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center ${
              service.reverse ? "md:flex-row-reverse" : ""
            }`}
            style={{ direction: service.reverse ? "rtl" : "ltr" }}
          >
            <div className="scroll-fade-in img-hover-zoom rounded-lg overflow-hidden" style={{ direction: "ltr" }}>
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="scroll-fade-in scroll-fade-in-delay-2" style={{ direction: "ltr" }}>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">{service.subtitle}</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">{service.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{service.desc}</p>
              <div className="flex flex-col sm:flex-row gap-4">
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
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-24 px-6 lg:px-12 bg-secondary text-center">
        <h2 className="scroll-fade-in font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
          Let's Create Something Exceptional
        </h2>
        <p className="scroll-fade-in text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Every gentleman deserves clothing that tells his story. Begin yours today.
        </p>
        <a
          href="https://wa.me/919872887860?text=Hi%20DC%20Men's%20Zone%2C%20I%20would%20like%20to%20book%20an%20appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="scroll-fade-in btn-glow inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-medium rounded-md text-sm tracking-wide uppercase transition-all duration-300"
        >
          Book Your Appointment
        </a>
      </section>
    </div>
  );
};

export default Services;
