import { useState } from 'react';
import states from '../assets/json/state.json';

    const activeStates = [...states]
    .filter(st => st.status === 'A')
    .sort((a, b) => a.order - b.order);


function StateSelection() {
  
  const [selectedState, setSelectedState] = useState('');

  return (
    <div className="dropdown-container">
      <label htmlFor="state-select">Choose a State: </label>
      <div className="select-wrapper">
      <select 
        id="state-select" 
        value={selectedState} 
        onChange={(e) => setSelectedState(e.target.value)}
        className="custom-select"
      >
        <option value="" disabled>-- Select a State --</option>
        {/* Map over the JSON array to generate options */}
        {activeStates.map((st) => (
          <option key={st.id} value={st.id}>
            {st.name}
          </option>
        ))}
      </select>
      </div>

      {selectedState && <p>Selected State ID: {selectedState}</p>}
    </div>
  );
};


export default StateSelection;