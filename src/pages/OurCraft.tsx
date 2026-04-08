import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We begin with an in-depth conversation about your style, occasion, and preferences. Understanding your vision is the first step in creating something truly personal.",
    img: "/consultation.jpg",
  },
  {
    num: "02",
    title: "Fabric Selection",
    desc: "Choose from our extensive library of premium fabrics sourced from the world's finest mills. Feel the texture, see the drape, and select the material that speaks to you.",
    img: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1000&q=80",
  },
  {
    num: "03",
    title: "Measurements",
    desc: "Our master tailors take precise measurements — over 30 individual points — ensuring your garment fits flawlessly and moves with your body naturally.",
    img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=1000&q=80",
  },
  {
    num: "04",
    title: "Final Fitting",
    desc: "The moment of truth. Try on your finished piece, experience the perfect fit, and walk out as the best-dressed version of yourself.",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1000&q=80",
  },
];

const OurCraft = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef} className="pt-20">
      {/* Header */}
      <section className="py-24 px-6 lg:px-12 text-center">
        <p className="scroll-fade-in text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">The Experience</p>
        <h1 className="scroll-fade-in font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Our Craft</h1>
        <p className="scroll-fade-in text-muted-foreground text-lg max-w-2xl mx-auto">
          Every bespoke piece is a journey — from the first conversation to the final stitch.
        </p>
      </section>

      {/* Steps */}
      {steps.map((step, i) => (
        <section
          key={step.num}
          className={`py-24 px-6 lg:px-12 ${i % 2 === 1 ? "bg-secondary" : ""}`}
        >
          <div
            className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
            style={{ direction: i % 2 === 1 ? "rtl" : "ltr" }}
          >
            <div className="scroll-fade-in img-hover-zoom rounded-lg overflow-hidden" style={{ direction: "ltr" }}>
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="scroll-fade-in scroll-fade-in-delay-2" style={{ direction: "ltr" }}>
              <span className="font-serif text-6xl md:text-8xl font-bold text-border">{step.num}</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">{step.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{step.desc}</p>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-secondary text-center">
        <h2 className="scroll-fade-in font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
          Begin Your Journey
        </h2>
        <p className="scroll-fade-in text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Book your fitting today and experience the art of bespoke tailoring.
        </p>
        <a
          href="https://wa.me/919872887860?text=Hi%20DC%20Men's%20Zone%2C%20I%20would%20like%20to%20book%20a%20fitting"
          target="_blank"
          rel="noopener noreferrer"
          className="scroll-fade-in btn-glow inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-medium rounded-md text-sm tracking-wide uppercase transition-all duration-300"
        >
          Book Your Fitting Now
        </a>
      </section>
    </div>
  );
};

export default OurCraft;
