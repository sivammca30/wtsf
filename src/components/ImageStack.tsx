import React, { useState } from 'react';


// Type definition for component props
interface ImageStackProps {
  /** Array of image URLs to be rendered in the stack */
  images: string[];
}

const ImageStack: React.FC<ImageStackProps> = ({ images }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div 
      className="image-stack-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((src: string, index: number) => {
        // Center-aligned dynamic math for layout calculation
        const total: number = images.length;
        const offsetMultiplier: number = index - (total - 1) / 2;
        
        // Conditional transform rules based on hover state
        const rotateDeg: number = isHovered ? offsetMultiplier * 15 : offsetMultiplier * 3;
        const translateX: number = isHovered ? offsetMultiplier * 60 : 0;
        const translateY: number = isHovered ? -10 : index * -4;

        return (
          <div
            key={index}
            className="stacked-image-wrapper"
            style={{
              zIndex: index,
              transform: `translate(${translateX}px, ${translateY}px) rotate(${rotateDeg}deg)`,
            }}
          >
            <img 
              src={src} 
              alt={`Stacked visual gallery item ${index + 1}`} 
              className="stacked-image" 
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageStack;
