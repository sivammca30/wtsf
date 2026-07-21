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

    const galbum = [...galleryAlbum]
        .filter(off => off.status === 'A')
        .sort((a, b) => a.order - b.order);

      


    return (
        <>

<section className="section-small section-dark">
    
    <div className="section-title-small"><h2>PHOTO GALLERY</h2></div>
            <div className="album-grid">
                {galbum.map((album) => (
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
                            <span className="album-cat">{album.category}</span>

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
            </section>

            <AlbumViewer
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                title={title}
            />

            
        </>
    );
}