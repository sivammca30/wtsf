import GalleryAlbum from "./GalleryAlbum";
import videoAlbum from "../assets/json/videogallery.json";

export default function Gallery() {

   const videoalbum = [...videoAlbum]
        .filter(off => off.status === 'A')
        .sort((a, b) => a.order - b.order);

  
  return (


    <div className="gallery-container">
      <section className="page-header-small">
        <div className="page-header-content">
          <h1>WTSF MOMENTS</h1>
          <p>Best of WTSF from Archives</p>
        </div>
      </section>

      <section className="section-small">
        <div className="container">
          
          <GalleryAlbum/>
        </div>
        
      </section>

      
<section className="section-small section-dark">
    <div className="section-title-small">
        <h2>VIDEO GALLERY</h2>
    </div>

    <div className="">
        {videoalbum.map((album) => (
            <div className="video-container" key={album.id}>
                <div className="video-responsive">
                    <iframe
                        src={album.src}
                        title={album.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>

                {/* <h4 className="video-title">{album.title}</h4> */}
            </div>
        ))}
    </div>
</section>
    </div>
  )
}
