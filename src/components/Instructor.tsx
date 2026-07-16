import React, { useState } from 'react';
import states from '../assets/json/state.json';
import districts from '../assets/json/district.json';
import instructors from '../assets/json/instructors.json';
import { FaThLarge, FaList, FaImages } from "react-icons/fa";
// Import the external CSS module sheet directly

function Instructor() {
  const [viewMode, setViewMode] = useState<"card" | "list" | "carousel">("card");
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
    // Store separate carousel index for each district
  const [carouselIndex, setCarouselIndex] =
    useState<Record<number, number>>({});

  const statesArray = Array.isArray(states) ? states : [];
  const districtsArray = Array.isArray(districts) ? districts : [];
  const instructorsArray = Array.isArray(instructors) ? instructors : [];
  const [searchText, setSearchText] = useState('');

  const searchValue = searchText.toLowerCase();

const matchesSearch = (ins: any, districtName: string, stateName: string) => {

    return (
        ins.name?.toLowerCase().includes(searchValue) ||
        ins.position?.toLowerCase().includes(searchValue) ||
        ins.phone?.toLowerCase().includes(searchValue) ||
        ins.email?.toLowerCase().includes(searchValue) ||
        ins.qualification?.toLowerCase().includes(searchValue) ||
        districtName.toLowerCase().includes(searchValue) ||
        stateName.toLowerCase().includes(searchValue)
    );
};

  const activeStates = [...statesArray]
    .filter(st => st.status === 'A')
    .sort((a, b) => a.order - b.order);

  const activeDistricts = [...districtsArray]
    .filter(dt => dt.status === 'A')
    .sort((a, b) => a.order - b.order);

  const filteredDistrictsForDropdown = activeDistricts.filter((dt) => {
    return selectedState ? dt.sid === Number(selectedState) : true;
  });

  const statesToRender = activeStates.filter((st) => {
    return selectedState ? st.id === Number(selectedState) : true;
  });

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
    setSelectedDistrict(''); 
     // Reset carousel
    setCarouselIndex({});
  };

    const handleDistrictChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDistrict(e.target.value);

    // Reset carousel
    setCarouselIndex({});
  };

   /* =====================================================
     SEARCH CHANGE
  ===================================================== */

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(e.target.value);

    // Search may change the instructor count
    setCarouselIndex({});
  };


   /* =====================================================
     CAROUSEL PREVIOUS
  ===================================================== */

  const handlePrevious = (
    districtId: number,
    total: number
  ) => {
    setCarouselIndex((prev) => {
      const current =
        prev[districtId] ?? 0;

      const newIndex =
        current === 0
          ? total - 1
          : current - 1;

      return {
        ...prev,
        [districtId]: newIndex
      };
    });
  };


  /* =====================================================
     CAROUSEL NEXT
  ===================================================== */

  const handleNext = (
    districtId: number,
    total: number
  ) => {
    setCarouselIndex((prev) => {
      const current =
        prev[districtId] ?? 0;

      const newIndex =
        current === total - 1
          ? 0
          : current + 1;

      return {
        ...prev,
        [districtId]: newIndex
      };
    });
  };


  return (
    <div className="ddl-wrapper">
      
      {/* DROPDOWN FILTER BAR ROW */}
      <div className="dropdown-row-container">
        
        {/* State Dropdown Selector Element Container */}
        <div className="dropdown-container">
          <label htmlFor="state-select">Choose a State: </label>
          <div className="select-wrapper">
            <select id="state-select" value={selectedState} onChange={handleStateChange} className="custom-select">
              <option value="">-- All States --</option>
              {activeStates.map((st) => (
                <option key={st.id} value={st.id}>{st.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* District Dropdown Selector Element Container */}
        <div className="dropdown-container">
          <label htmlFor="district-select">Choose a District: </label>
          <div className="select-wrapper">
            <select id="district-select" value={selectedDistrict} onChange={handleDistrictChange} className="custom-select">
              <option value="">-- All Districts --</option>
              {filteredDistrictsForDropdown.map((dt) => (
                <option key={dt.id} value={dt.id}>{dt.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="dropdown-container">
          <label htmlFor="search">Search for an instructor:</label>
          <input
            id="search"
            type="text"
            className="custom-select"
            placeholder="Search for an instructor..."
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>
        
        <div className="dropdown-container">
<label htmlFor="search">View Mode:</label>
            {/* <span className="switcher-label">
              View Mode:
            </span> */}


            <div className="button-group">

              {/* CARD */}

              <button
                type="button"
                className={`switch-btn ${viewMode === "card"
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
                className={`switch-btn ${viewMode === "list"
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
                className={`switch-btn ${viewMode === "carousel"
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
        
      </div>

      {/* --- NESTED ROSTER STRUCTURE CANVAS AREA --- */}
      <div>
        <h2 className="roster-title">Our Team</h2>

        {statesToRender.map((state) => {
          const districtsInThisState = activeDistricts.filter((dt) => {
            const belongsToState = dt.sid === state.id;
            const matchesDistrictFilter = selectedDistrict ? dt.id === Number(selectedDistrict) : true;
            return belongsToState && matchesDistrictFilter;
          });

          // const stateHasInstructors = instructorsArray.some(
          //   ins => ins.status === 'A' && ins.sid === state.id && (!selectedDistrict || ins.did === Number(selectedDistrict))
          // );
          const stateHasInstructors = instructorsArray.some((ins) => {

            if (ins.status !== 'A') return false;

            if (ins.sid !== state.id) return false;

            if (selectedDistrict && ins.did !== Number(selectedDistrict))
              return false;

            const district = activeDistricts.find(d => d.id === ins.did);

            if (
              searchText &&
              !matchesSearch(
                ins,
                district?.name || "",
                state.name
              )
            )
              return false;

            return true;
          });

          if (!stateHasInstructors) return null;

          return (
            <div key={state.id} className="state-section-block">
              <h2 className="state-header">📍 {state.name}</h2>

              {districtsInThisState.map((district) => {
                // const districtInstructors = instructorsArray
                //   .filter(ins => ins.status === 'A' && ins.sid === state.id && ins.did === district.id)
                //   .sort((a, b) => a.order - b.order);
                const districtInstructors = instructorsArray
                  .filter((ins) => {

                    if (ins.status !== 'A') return false;

                    if (ins.sid !== state.id) return false;

                    if (ins.did !== district.id) return false;

                    if (
                      searchText &&
                      !matchesSearch(ins, district.name, state.name)
                    ) {
                      return false;
                    }

                    return true;
                  })
                  .sort((a, b) => a.order - b.order);

                if (districtInstructors.length === 0) return null;

                 /* Current carousel index */

                  const selectedIndex =
                    carouselIndex[district.id] ?? 0;


                  /*
                    Safety check:
                    search/filter can reduce array length.
                  */

                  const currentIndex =
                    selectedIndex <
                    districtInstructors.length
                      ? selectedIndex
                      : 0;


                  const currentInstructor =
                    districtInstructors[currentIndex];


                  return (
                    <div
                      key={district.id}
                      className="district-section-block"
                    >


                      {/* DISTRICT HEADER */}

                      <h3 className="district-header">
                        {district.name} District (
                        {districtInstructors.length})
                      </h3>


                      {/* =================================================
                          CARD VIEW
                      ================================================= */}

                      {viewMode === "card" && (
                        <div className="instructor-grid">

                          {districtInstructors.map(
                            (instructor) => (
                              <div
                                className="card"
                                key={instructor.id}
                              >

                                <div className="card-image-wrapper">

                                  <img
                                    src={instructor.src}
                                    alt={instructor.name}
                                    className="card-image"
                                  />

                                </div>


                                <div className="card-body">

                                  <h2 className="card-title">
                                    {instructor.name}
                                  </h2>

                                  <p className="card-text">
                                    {instructor.position}
                                  </p>

                                </div>

                              </div>
                            )
                          )}

                        </div>
                      )}


                      {/* =================================================
                          LIST VIEW
                      ================================================= */}

                      {viewMode === "list" && (
                        <div className="instructor-list">

                          {districtInstructors.map(
                            (instructor) => (
                              <div
                                className="instructor-list-item"
                                key={instructor.id}
                              >

                                <img
                                  src={instructor.src}
                                  alt={instructor.name}
                                  className="instructor-list-image"
                                />


                                <div className="instructor-list-content">

                                  <h3>
                                    {instructor.name}
                                  </h3>

                                  <p>
                                    {/* <strong>
                                      Position:
                                    </strong>{" "} */}
                                    {instructor.position}
                                  </p>

                                </div>

                              </div>
                            )
                          )}

                        </div>
                      )}


                      {/* =================================================
                          CAROUSEL VIEW
                      ================================================= */}

                      {viewMode === "carousel" && (
                        <div className="instructor-carousel-wrapper">


                          {/* PREVIOUS BUTTON */}

                          <button
                            type="button"
                            className="carousel-prev"
                            onClick={() =>
                              handlePrevious(
                                district.id,
                                districtInstructors.length
                              )
                            }
                            aria-label="Previous instructor"
                          >
                            ❮
                          </button>


                          {/* CURRENT INSTRUCTOR CARD */}

                          <div className="instructor-carousel-card">

                            <img
                              src={currentInstructor.src}
                              alt={currentInstructor.name}
                              className="instructor-carousel-image"
                            />


                            <div className="instructor-carousel-info">

                              <h2>
                                {currentInstructor.name}
                              </h2>

                              <p>
                                {currentInstructor.position}
                              </p>

                              {/* <span className="carousel-count">
                                {currentIndex + 1}
                                {" / "}
                                {districtInstructors.length}
                              </span> */}

                            </div>

                          </div>


                          {/* NEXT BUTTON */}

                          <button
                            type="button"
                            className="carousel-next"
                            onClick={() =>
                              handleNext(
                                district.id,
                                districtInstructors.length
                              )
                            }
                            aria-label="Next instructor"
                          >
                            ❯
                          </button>


                        </div>
                      )}


                    </div>
                  );

                }
              )}


            </div>
          );

                // return (
                //   <div key={district.id} className="district-section-block">
                //     <h3 className="district-header">
                //       {district.name} District ({districtInstructors.length})
                //     </h3>

                //     <div className="instructor-grid">
                //       {districtInstructors.map((instructor) => (
                       
                //         <div className="card" key={instructor.id}>
                //           <div className="card-image-wrapper">
                //             <img
                //               src={instructor.src}
                //               alt={instructor.name}
                //               className="card-image"
                //             />
                //           </div>
                //           <div className="card-body">
                //             <h2 className="card-title">{instructor.name}</h2>
                //             <p className="card-text">{instructor.position}</p>
                //           </div>
                //         </div>
                //       ))}
                //     </div>
                //   </div>
                // );
              })}
            </div>
        
      </div>

  );
}

export default Instructor;
