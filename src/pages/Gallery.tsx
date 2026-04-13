import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X } from "lucide-react";

const galleryImages = [
  { src: "/gallery-13.jpg", h: "h-[28rem]" },
  { src: "/gallery-9.jpg", h: "h-80" },
  { src: "/gallery-14.jpg", h: "h-72" },
  { src: "/gallery-12.jpg", h: "h-[28rem]" },
  { src: "/gallery-10.jpg", h: "h-80" },
  { src: "/gallery-16.jpg", h: "h-[28rem]" },
  { src: "/gallery-11.jpg", h: "h-80" },
  { src: "/gallery-15.jpg", h: "h-72" },
  { src: "/gallery-17.jpg", h: "h-[28rem]" },
  { src: "/gallery-18.jpg", h: "h-[28rem]" },
  { src: "/gallery-19.jpg", h: "h-80" },
  { src: "/gallery-20.jpg", h: "h-72" },
  { src: "/gallery-21.jpg", h: "h-80" },
  { src: "/gallery-22.jpg", h: "h-[28rem]" },
  { src: "/gallery-23.jpg", h: "h-80" },
  { src: "/gallery-24.jpg", h: "h-[28rem]" },
  { src: "/gallery-25.jpg", h: "h-80" },
  { src: "/gallery-26.jpg", h: "h-72" },
  { src: "/gallery-27.jpg", h: "h-[28rem]" },
  { src: "/gallery-28.jpg", h: "h-[28rem]" },
  { src: "/gallery-29.jpg", h: "h-80" },
  { src: "/gallery-30.jpg", h: "h-72" },
  { src: "/gallery-31.jpg", h: "h-80" },
  { src: "/gallery-32.jpg", h: "h-[28rem]" },
  { src: "/gallery-33.jpg", h: "h-[28rem]" },
  { src: "/gallery-34.jpg", h: "h-80" },
  { src: "/gallery-35.jpg", h: "h-[28rem]" },
  { src: "/gallery-36.jpg", h: "h-80" },
  { src: "/gallery-37.jpg", h: "h-72" },
  { src: "/gallery-38.jpg", h: "h-[28rem]" },
  { src: "/gallery-39.jpg", h: "h-[28rem]" },
  { src: "/gallery-40.jpg", h: "h-80" },
  { src: "/gallery-41.jpg", h: "h-[28rem]" },
  { src: "/gallery-42.jpg", h: "h-80" },
  { src: "/gallery-43.jpg", h: "h-72" },
  { src: "/gallery-44.jpg", h: "h-[28rem]" },
  { src: "/gallery-45.jpg", h: "h-[28rem]" },
  { src: "/gallery-46.jpg", h: "h-80" },
  { src: "/gallery-47.jpg", h: "h-[28rem]" },
  { src: "/gallery-48.jpg", h: "h-[28rem]" },
  { src: "/gallery-49.jpg", h: "h-80" },
  { src: "/gallery-50.jpg", h: "h-[28rem]" },
  { src: "/gallery-51.jpg", h: "h-80" },
  { src: "/gallery-52.jpg", h: "h-72" },
  { src: "/gallery-53.jpg", h: "h-80" },
  { src: "/gallery-54.jpg", h: "h-[28rem]" },
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

      {/* Masonry Grid */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto masonry-grid">
          {galleryImages.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="scroll-fade-in img-hover-zoom rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setLightbox(img.src.replace("w=600", "w=1600"))}
            >
              <img
                src={img.src}
                alt={`Gallery image ${i + 1}`}
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
          className="scroll-fade-in inline-flex items-center gap-2 justify-center px-8 py-4 border border-foreground text-foreground text-sm tracking-wide uppercase font-medium rounded-md hover:bg-foreground hover:text-background transition-all duration-300"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <defs>
              <linearGradient id="ig-gradient-gallery" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFDC80" />
                <stop offset="25%" stopColor="#F77737" />
                <stop offset="50%" stopColor="#E1306C" />
                <stop offset="75%" stopColor="#C13584" />
                <stop offset="100%" stopColor="#833AB4" />
              </linearGradient>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-gradient-gallery)" strokeWidth="2" />
            <circle cx="12" cy="12" r="5" stroke="url(#ig-gradient-gallery)" strokeWidth="2" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="url(#ig-gradient-gallery)" />
          </svg>
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
