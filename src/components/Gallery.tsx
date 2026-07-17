import GalleryAlbum from "./GalleryAlbum";

export default function Gallery() {
  
  return (


    <div className="gallery-container">
      <section className="page-header">
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
    </div>
  )
}
