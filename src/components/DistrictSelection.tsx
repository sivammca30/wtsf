import React, { useState } from 'react';
import districts from '../assets/json/district.json';

    const activeDistricts = [...districts]
    .filter(dt => dt.status === 'A')
    .sort((a, b) => a.order - b.order);


     const filteredDistricts = activeDistricts
    .filter((dt) => {
      const matchesState = selectedState ? dt.sid === Number(selectedState) : true;
      const isActive = dt.status === 'A';
      return matchesState && isActive;
    })
    .sort((a, b) => a.order - b.order);


function DistrictSelection() {
  
  const [selectedDistrict, setSelectedDistrict] = useState('');

  return (
    <div className="dropdown-container">
      <label htmlFor="state-select">Choose a District: </label>
      <div className="select-wrapper">
      <select 
        id="state-select" 
        value={selectedDistrict} 
        onChange={(e) => setSelectedDistrict(e.target.value)}
        className="custom-select"
      >
        <option value="" disabled>-- Select a District --</option>
        {/* Map over the JSON array to generate options */}
        {activeDistricts.map((dt) => (
          <option key={dt.id} value={dt.id}>
            {dt.name}
          </option>
        ))}
      </select>
      </div>

      {selectedDistrict && <p>Selected District ID: {selectedDistrict}</p>}
    </div>
  );
};


export default DistrictSelection;