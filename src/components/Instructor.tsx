import React, { useState } from 'react';
import states from '../assets/json/state.json';
import districts from '../assets/json/district.json';
import instructors from '../assets/json/instructors.json';
// Import the external CSS module sheet directly


function Instructor() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const statesArray = Array.isArray(states) ? states : [];
  const districtsArray = Array.isArray(districts) ? districts : [];
  const instructorsArray = Array.isArray(instructors) ? instructors : [];

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
            <select id="district-select" value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} className="custom-select">
              <option value="">-- All Districts --</option>
              {filteredDistrictsForDropdown.map((dt) => (
                <option key={dt.id} value={dt.id}>{dt.name}</option>
              ))}
            </select>
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

          const stateHasInstructors = instructorsArray.some(
            ins => ins.status === 'A' && ins.sid === state.id && (!selectedDistrict || ins.did === Number(selectedDistrict))
          );

          if (!stateHasInstructors) return null;

          return (
            <div key={state.id} className="state-section-block">
              <h2 className="state-header">📍 {state.name}</h2>

              {districtsInThisState.map((district) => {
                const districtInstructors = instructorsArray
                  .filter(ins => ins.status === 'A' && ins.sid === state.id && ins.did === district.id)
                  .sort((a, b) => a.order - b.order);

                if (districtInstructors.length === 0) return null;

                return (
                  <div key={district.id} className="district-section-block">
                    <h3 className="district-header">
                      {district.name} District ({districtInstructors.length})
                    </h3>

                    <div className="instructor-grid">
                      {districtInstructors.map((instructor) => (
                        <div key={instructor.id} className="instructor-card">
                          <img 
                            src={instructor.imageUrl} 
                            alt={instructor.name} 
                            className="instructor-avatar"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://placeholder.com';
                            }}
                          />
                          <h4 className="instructor-name">{instructor.name}</h4>
                          <p className="instructor-position">{instructor.position}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default Instructor;
