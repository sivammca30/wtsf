import { useState } from 'react';
import gallery from '../assets/json/gallery.json';
// import Accordion from './Accordion';
// import type { AccordionItem } from './Accordion'
import { GALLERYMOMENTS } from "../data";
import type { EventItem } from "../data";
import Stack from './StackImage';
import PhotoGallery from './PhotoGallery';

// const faqData: AccordionItem[] = [
//   {
//     title: "YOGA DAY CELEBRATION - 2026",
//     content: ""
//   },
//   {
//     title: "WOMENS DAY CELEBRATION - SELF DEFENSE - TRAINING CAMP - 2026",
//     content: ""
//   },
//   {
//     title: "WOMENS DAY CELEBRATION - SELF DEFENSE - TRAINING CAMP - 2026",
//     content: ""
//   }
// ];

const images = [
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
];


const activeGallery = [...gallery]
  .filter(off => off.status === 'A' && off.sid === 1 && off.isVideo === 0)
  .sort((a, b) => a.order - b.order);


// const activeVideoGallery = [...gallery]
//     .filter(off => off.status === 'A' && off.sid === 1 && off.isVideo === 1)
//     .sort((a, b) => a.order - b.order);

// 1. Define Interfaces for type safety
interface ImageItem {
  id: number;
  src: string;
  name: string;
}

// interface VideoItem {
//   id: number;
//   src: string;
//   name: string;
// }

const GalleryImage: ImageItem[] = activeGallery
//const GalleryVideo: VideoItem[] = activeVideoGallery

export default function Gallery() {
  // 2. Explicitly type state to allow ImageItem or null
  //const [activeImage, setActiveImage] = useState<ImageItem | null>(null);

  // Specify that state can either be a string (the full URL) or null
  const [selectedImg, setSelectedImg] = useState<string | null>(null);


  // Handler typing for closing the modal via backdrop or close button
  const handleClose = (e: React.MouseEvent<HTMLDivElement | HTMLSpanElement>): void => {
    setSelectedImg(null);
  };

  return (


    <div className="gallery-container">
      <section className="page-header">
        <div className="page-header-content">
          {/* <p className="tagline">About Us</p> */}
          <h1>WTSF MOMENTS</h1>
          <p>Best of WTSF from Archives</p>
        </div>
      </section>

      <section className="section-small">
        <div className="container">
          <div className="section-placeholder">
            <span>INTERNATIONAL YOGA DAY</span>
          </div>
        </div>
        <div className="container">
            <PhotoGallery/>
        </div>
      </section>

      

      
      




    </div>
  )
}
