
import secthreephoto from '../assets/json/sectionthree.json';
import React, { useState } from 'react';
import type { FC } from "react";


// Define the shape of our image objects
interface ImageData {
  id: number;
  src: string;
}

const secphoto = [...secthreephoto]
    .filter(off => off.status === 'A')
    .sort((a, b) => a.order - b.order);

const SectionThreePhoto: FC = () => {

  // Specify that state can either be a string (the full URL) or null
  const [selectedImg, setSelectedImg] = useState<string | null>(null);


  // Handler typing for closing the modal via backdrop or close button
  const handleClose = (e: React.MouseEvent<HTMLDivElement | HTMLSpanElement>): void => {
    setSelectedImg(null);
  };

  return (
    <>
    <div className="gallery-container">
      {/* Thumbnail Grid */}
      <div className="thumbnail-grid">
        {secphoto.map((img: ImageData) => (
          <img
            key={img.id}
            src={img.src}
            alt={`Thumbnail ${img.id}`}
            className="thumbnail"
            onClick={() => setSelectedImg(img.src)}
          />
        ))}
      </div>

      {/* Lightbox / Modal Overlay */}
      {selectedImg && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={handleClose}>&times;</span>
            <img src={selectedImg} alt="Enlarged view" className="full-image" />
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default SectionThreePhoto