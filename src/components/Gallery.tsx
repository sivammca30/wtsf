import { useState } from "react";
import type { FC } from "react";
import { FaThLarge, FaList, FaImages } from "react-icons/fa"; // Importing clean UI layout icons
import { CardView, ListView, CarouselView } from "./ImageView"; // Path to your view layouts

interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

const Gallery: FC = () => {
  const [viewMode, setViewMode] = useState<"card" | "list" | "carousel">("card");

  // Sample data array representing your federation images/content
  const sampleItems: GalleryItem[] = [
    { image: "https://picsum.photos/800/450?random=1", title: "Silambattam Event A", description: "Traditional weapon performance and grading session." },
    { image: "https://picsum.photos/800/450?random=2", title: "National Championship", description: "Showcasing high-speed stick rotational styles." },
    { image: "https://picsum.photos/800/450?random=3", title: "Karuppu Kachi Awarding", description: "Honoring veteran masters and advanced students." }
  ];

  return (
    <div className="gallery-section">
      
      {/* ── View Controls Button Group ── */}
      <div className="view-switcher-container">
        <span className="switcher-label">View Mode:</span>
        <div className="button-group">
          <button 
            className={`switch-btn ${viewMode === "card" ? "active" : ""}`} 
            onClick={() => setViewMode("card")}
            title="Grid Card View"
          >
            <FaThLarge /> <span className="btn-text">Cards</span>
          </button>
          
          <button 
            className={`switch-btn ${viewMode === "list" ? "active" : ""}`} 
            onClick={() => setViewMode("list")}
            title="List View"
          >
            <FaList /> <span className="btn-text">List</span>
          </button>
          
          <button 
            className={`switch-btn ${viewMode === "carousel" ? "active" : ""}`} 
            onClick={() => setViewMode("carousel")}
            title="Carousel Slider View"
          >
            <FaImages /> <span className="btn-text">Carousel</span>
          </button>
        </div>
      </div>

      {/* ── Dynamic Content Rendering ── */}
      <div className="gallery-content-area">
        {viewMode === "card" && <CardView items={sampleItems} />}
        {viewMode === "list" && <ListView items={sampleItems} />}
        {viewMode === "carousel" && <CarouselView items={sampleItems} />}
      </div>

    </div>
  );
};

export default Gallery;