import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox'; // Replace with your exact lightbox import path
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css'; // Lightbox standard styling

// 1. Define strong TypeScript Interfaces
export interface ImageItem {
  id: number;
  alt: string;
  src: string;
  sectionid: number;
  order: number;
  status: string;
}

export interface ProgramItem {
  id: number | string;
  alt: string;
  category?: string;
  desc?: string;
  subdesc?: string;
}

interface ImageStackProps {
  images: string[];
}

// Dummy/Placeholder ImageStack Component matching your definition
export const ImageStack: React.FC<ImageStackProps> = ({ images }) => {
  return (
    <div className="image-stack" style={{ position: 'relative' }}>
      {images.map((url, i) => (
        <img key={i} src={url} alt="stack-item" className="stack-img" />
      ))}
    </div>
  );
};

// 2. Main Component Types
interface LightboxState {
  isOpen: boolean;
  photoList: ImageItem[];
  photoIndex: number;
}

// Sample Mock Props Data types for demonstration 
interface GradingGalleryProps {
  sectionphoto: ImageItem[];
  PROGRAMS: ProgramItem[];
}

export const GradingGallery: React.FC<GradingGalleryProps> = ({ sectionphoto, PROGRAMS }) => {
  
  // 3. Centralized Lightbox State Management
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    photoList: [],
    photoIndex: 0,
  });

  const sectionIds = [1,2,3];

  // 4. Data Transformation Engine
  // Transforms master flat objects array into dynamic Section Object Dictionary
  const sectionPhotoObjects = sectionIds.reduce<Record<string, ImageItem[]>>((acc, sectionId) => {
    acc[`section_${sectionId}`] = [...sectionphoto]
      .filter((off) => off.status === 'A' && off.sectionid === sectionId)
      .sort((a, b) => a.order - b.order)
      .slice(0, 3);
    return acc;
  }, {});

  // Extracts just the raw string arrays for the structural ImageStack configurations
  const sectionPhotoUrls = sectionIds.reduce<Record<string, string[]>>((acc, sectionId) => {
    const key = `section_${sectionId}`;
    acc[key] = (sectionPhotoObjects[key] || []).map((off) => off.src);
    return acc;
  }, {});

  return (
    <div>
      {/* 5. The Cards Grid Layout */}
      <div className="grading-grid" style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
        {PROGRAMS.map((ev, index) => {
          const sectionKey = `section_${index + 1}`;
          const currentUrls: string[] = sectionPhotoUrls[sectionKey] || [];
          const currentObjects: ImageItem[] = sectionPhotoObjects[sectionKey] || [];

          return (
            <div
              key={ev.id}
              className="blog-card"
              style={{ textDecoration: 'none', color: 'inherit', flex: 1, cursor: 'pointer' }}
              // Trigger active structural changes on click actions
              onClick={() => {
                if (currentObjects.length > 0) {
                  setLightbox({
                    isOpen: true,
                    photoList: currentObjects,
                    photoIndex: 0, // Opens up starting at the very first item
                  });
                }
              }}
            >
              {/* Dynamic Row Header Title */}
              <h2 style={{ textTransform: 'capitalize', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                {sectionKey.replace('_', ' ')}
              </h2>

              <div className="blog-card-placeholder">
                {/* Clean string[] parameters matching type constraints safely */}
                <ImageStack images={currentUrls} />
              </div>

              <div className="blog-card-body">
                <div className="blog-card-date"></div>
                <div className="grading-card-title">{ev.alt}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 6. Dynamic Shared Global Lightbox Layer */}
      <Lightbox
        open={lightbox.isOpen}
        close={() => setLightbox((prev) => ({ ...prev, isOpen: false }))}
        index={lightbox.photoIndex}
        // Passes dynamic, filtered full ImageItem[] data array directly to slide deck
        slides={lightbox.photoList} 
        
        plugins={[Zoom, Fullscreen, Counter, Thumbnails]}
      />
    </div>
  );
};
