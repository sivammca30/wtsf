import { useState } from "react";
import galleryAlbum from "../assets/json/galleryAlbum.json";
import AlbumViewer from "./AlbumViewer";

export default function GalleryAlbum() {
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState<any[]>([]);
  const [title, setTitle] = useState("");

  const openAlbum = (album: any) => {
    setSlides(album.photos);
    setTitle(album.title);
    setOpen(true);
  };

  return (
    <>
      <div className="album-grid">
        {galleryAlbum.map((album) => (
          <div
            key={album.id}
            className="album-card"
            onClick={() => openAlbum(album)}
          >
            <div className="album-image">
              <img src={album.cover} alt={album.title} />
            </div>

            <div className="album-info">
    <h3>{album.title}</h3>

    <div className="album-bottom">
        <span className="album-count">
            {album.photos.length} Photos
        </span>

        <span className="album-link">
            View Album →
        </span>
    </div>
</div>
          </div>
        ))}
      </div>

      <AlbumViewer
        open={open}
        close={() => setOpen(false)}
        slides={slides} 
        title={title}       
      />
    </>
  );
}