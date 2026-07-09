import type { FC } from "react";
import { useState } from "react";
import { FaThLarge, FaList,FaImages } from "react-icons/fa";

import InstructorPage  from './Instructor';

type ViewMode = "card" | "list" | "carousel";

const Instructors: FC = () => {
  const [viewMode, setViewMode] = useState<"card" | "list" | "carousel">("card");

  return (  
  <>  
    <section className="page-header">
      <div className="page-header-content">        
        <h1>WTSF Instructors</h1>
        <p>WTSF Affiliated/Qualified instructors carrying forward the Silambattam tradition across world.</p>
      </div>
    </section>

     <section className="section-small">
          <div className="container">            
          {/* View Mode Buttons */}
          {/* EXACT SAME VIEW SWITCHER AS GALLERY */}

          <div className="view-switcher-container">

            <span className="switcher-label">
              View Mode:
            </span>


            <div className="button-group">

              {/* CARD */}

              <button
                type="button"
                className={`switch-btn ${
                  viewMode === "card"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setViewMode("card")
                }
                title="Grid Card View"
              >

                <FaThLarge />

                <span className="btn-text">
                  Cards
                </span>

              </button>


              {/* LIST */}

              <button
                type="button"
                className={`switch-btn ${
                  viewMode === "list"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setViewMode("list")
                }
                title="List View"
              >

                <FaList />

                <span className="btn-text">
                  List
                </span>

              </button>


              {/* CAROUSEL */}

              <button
                type="button"
                className={`switch-btn ${
                  viewMode === "carousel"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setViewMode("carousel")
                }
                title="Carousel Slider View"
              >

                <FaImages />

                <span className="btn-text">
                  Carousel
                </span>

              </button>

            </div>

          </div>


           {/* <StateSelection/> */}
           {/* <DistrictSelection/> */}
          {/* <DDLSelection/> */}
          <InstructorPage viewMode={viewMode} />
         
       
          </div>
        </section>

</>
  
  );
}


export default Instructors;
