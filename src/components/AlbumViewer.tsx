import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

interface Slide {
  src: string;
}

interface AlbumViewerProps {
  open: boolean;
  close: () => void;
  slides: Slide[];
  title: string;
}

export default function AlbumViewer({
  open,
  close,
  slides,
  
}: AlbumViewerProps) {
  return (
    <Lightbox
      open={open}
      close={close}
      slides={slides}
      plugins={[
        Zoom,
        Fullscreen,
        Counter,
        Thumbnails,
      ]}
      carousel={{
        finite: true,
        preload: 2,
      }}
      animation={{
        fade: 350,
        swipe: 500,
      }}
      controller={{
        closeOnBackdropClick: true,
      }}
      thumbnails={{
        position: "bottom",
        width: 110,
        height: 70,
        border: 2,
        borderRadius: 8,
        padding: 4,
        gap: 12,
      }}
      counter={{
        container: {
          style: {
            top: "20px",
            left: "20px",
            fontSize: "22px",
            fontWeight: "600",
            color: "#fff",
          },
        },
      }}
      styles={{
        container: {
          backgroundColor: "rgba(0,0,0,.94)",
        },

        navigationPrev: {
          width: "70px",
          height: "70px",
        },

        navigationNext: {
          width: "70px",
          height: "70px",
        },

        slide: {
          padding: "30px 100px 140px",
        },
      }}
    />
  );
}