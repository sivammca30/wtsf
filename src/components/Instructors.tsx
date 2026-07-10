import { type FC } from "react";
import InstructorPage from './Instructor';
import DomeGallery from './DomeGallery';




const Instructors: FC = () => {
  
  return (
    <>
      <section className="page-header">
        <div className="page-header-content">
          {/* <p className="tagline">Our Team</p> */}
          <h1>WTSF Instructors</h1>
          <p>WTSF Affiliated/Qualified instructors carrying forward the Silambattam tradition across world.</p>
        </div>
      </section>

      <section className="desktop-only-div section secion-dark ">
        <div style={{ width: '95vw', height: '100vh', borderRadius: 10 }}>
          <DomeGallery
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale
          />
        </div>
      </section>

      <section className="section-small">
        <div className="container">
          {/* <StateSelection/> */}
          {/* <DistrictSelection/> */}
          {/* <DDLSelection/> */}
          <InstructorPage />


        </div>
      </section>

    </>
  );
}
export default Instructors;
