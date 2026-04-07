import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X } from "lucide-react";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", h: "h-80" },
  { src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80", h: "h-96" },
  { src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80", h: "h-72" },
  { src: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80", h: "h-96" },
  { src: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&q=80", h: "h-80" },
  { src: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&q=80", h: "h-72" },
  { src: "https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?w=600&q=80", h: "h-96" },
  { src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80", h: "h-80" },
  { src: "https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?w=600&q=80", h: "h-72" },
  { src: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80", h: "h-96" },
  { src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80", h: "h-80" },
  { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80", h: "h-72" },
];

const Gallery = () => {
  const scrollRef = useScrollAnimation();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div ref={scrollRef} className="pt-20">
      {/* Header */}
      <section className="py-24 px-6 lg:px-12 text-center">
        <p className="scroll-fade-in text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Portfolio</p>
        <h1 className="scroll-fade-in font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Gallery</h1>
        <p className="scroll-fade-in text-muted-foreground text-lg max-w-2xl mx-auto">
          A glimpse into our world of fine tailoring and premium menswear.
        </p>
      </section>

      {/* Filters */}
      <div className="px-6 lg:px-12 mb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm tracking-wide uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto masonry-grid">
          {filtered.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="scroll-fade-in img-hover-zoom rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setLightbox(img.src.replace("w=600", "w=1600"))}
            >
              <img
                src={img.src}
                alt={`${img.cat} gallery image`}
                className={`w-full object-cover ${img.h}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 px-6 lg:px-12 bg-secondary text-center">
        <p className="scroll-fade-in text-muted-foreground mb-6">See more of our work on social media</p>
        <a
          href="https://www.instagram.com/dcmenzone?igsh=NmdsenczMmdlbTEz"
          target="_blank"
          rel="noopener noreferrer"
          className="scroll-fade-in inline-flex items-center justify-center px-8 py-4 border border-foreground text-foreground text-sm tracking-wide uppercase font-medium rounded-md hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Follow us on Instagram
        </a>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-overlay fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Full size gallery view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
