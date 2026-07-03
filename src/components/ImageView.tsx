import { useState } from "react";
import type { FC } from "react";

interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

interface ViewProps {
  items: GalleryItem[];
}

/* ── 1. CARD VIEW COMPONENT ──────────────────────────────────────────────── */
export const CardView: FC<ViewProps> = ({ items }) => {
  return (
    <div className="card-grid">
      {items.map((item, index) => (
        <div key={index} className="ui-card">
          <img src={item.image} alt={item.title} className="card-img" />
          <div className="card-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ── 2. LIST VIEW COMPONENT ──────────────────────────────────────────────── */
export const ListView: FC<ViewProps> = ({ items }) => {
  return (
    <div className="list-container">
      {items.map((item, index) => (
        <div key={index} className="ui-list-item">
          <img src={item.image} alt={item.title} className="list-img" />
          <div className="list-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ── 3. CAROUSEL VIEW COMPONENT ──────────────────────────────────────────── */
export const CarouselView: FC<ViewProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  if (!items || items.length === 0) return <p>No images available.</p>;

  const nextSlide = (): void => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (): void => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  return (
    <div className="carousel-wrapper">
      {/* Navigation Left Arrow */}
      <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous slide">
        &lsaquo;
      </button>
      
      {/* Active Carousel Slide */}
      <div className="carousel-slide">
        <img src={items[currentIndex].image} alt={items[currentIndex].title} />
        <div className="carousel-caption">
          <h3>{items[currentIndex].title}</h3>
          <p>{items[currentIndex].description}</p>
        </div>
      </div>

      {/* Navigation Right Arrow */}
      <button className="carousel-btn next" onClick={nextSlide} aria-label="Next slide">
        &rsaquo;
      </button>

      {/* Optional Indicator Dots */}
      <div className="carousel-dots">
        {items.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};