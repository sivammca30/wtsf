//import React from "react";
import { useState } from "react";
// import LightGallery from "lightgallery/react";

// import lgZoom from "lightgallery/plugins/zoom";
// import lgFullscreen from "lightgallery/plugins/fullscreen";
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// //import lgShare from "lightgallery/plugins/share";

// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";
// import "lightgallery/css/lg-fullscreen.css";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import gallery from '../assets/json/gallery.json';


const activeGallery = [...gallery]
  .filter(off => off.status === 'A' && off.sid === 1 && off.isVideo === 0)
  .sort((a, b) => a.order - b.order);


    export default function PhotoGallery() {
     const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

    return (
        <>

         <div className="gallery">

        {activeGallery.map((slide, i) => (

          <img
            key={i}
            src={slide.src}
            alt=""
            className="gallery-image"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />

        ))}

      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={activeGallery}
        plugins={[
          Zoom,
          Fullscreen,
          Counter,
          Thumbnails
        ]}
      />

      </>

    );

};
