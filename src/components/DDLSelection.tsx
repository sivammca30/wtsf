import React, { useState } from 'react';
import states from '../assets/json/state.json';
import districts from '../assets/json/district.json';

function DDLSelection() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const statesArray = Array.isArray(states) ? states : [];
  const districtsArray = Array.isArray(districts) ? districts : [];

  const activeStates = [...statesArray]
    .filter(st => st.status === 'A')
    .sort((a, b) => a.order - b.order);

  const activeDistricts = [...districtsArray]
    .filter(dt => dt.status === 'A')
    .sort((a, b) => a.order - b.order);

  const filteredDistricts = activeDistricts
    .filter((dt) => {
      return selectedState ? dt.sid === Number(selectedState) : false;
    });

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
    setSelectedDistrict(''); 
  };

  return (
    /* 1. Added a flexbox container wrapper */
    <div className="dropdown-row-container" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      
      {/* State Dropdown */}
      <div className="dropdown-container" style={{ flex: '1', minWidth: '200px', maxWidth: '300px' }}>
        <label htmlFor="state-select">Choose a State: </label>
        <div className="select-wrapper">
          <select 
            id="state-select" 
            value={selectedState} 
            onChange={handleStateChange}
            className="custom-select"
          >
            <option value="">-- Select a State --</option>
            {activeStates.map((st) => (
              <option key={st.id} value={st.id}>
                {st.name}
              </option>
            ))}
          </select>
        </div>
        {selectedState && <p style={{ fontSize: '12px', marginTop: '4px' }}>Selected ID: {selectedState}</p>}
      </div>

      {/* District Dropdown */}
      {/* 2. Removed top margin and applied flexible sizing */}
      <div className="dropdown-container" style={{ flex: '1', minWidth: '200px', maxWidth: '300px' }}>
        <label htmlFor="district-select">Choose a District: </label>
        <div className="select-wrapper">
          <select 
            id="district-select" 
            value={selectedDistrict} 
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="custom-select"
            disabled={!selectedState}
          >
            <option value="">
              {selectedState ? "-- Select a District --" : "-- Choose a State First --"}
            </option>
            {filteredDistricts.map((dt) => (
              <option key={dt.id} value={dt.id}>
                {dt.name}
              </option>
            ))}
          </select>
        </div>
        {selectedDistrict && <p style={{ fontSize: '12px', marginTop: '4px' }}>Selected ID: {selectedDistrict}</p>}
      </div>

    </div>
  );
}

export default DDLSelection;
