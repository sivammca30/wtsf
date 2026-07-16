import { useState } from 'react';
import type { MouseEvent, FC } from 'react';

// Define the blueprint structure for individual tab objects
interface TabItem {
  label: string;
  content: string;
}

const GalleryTab: FC = () => {
  // Explicitly restrict state to hold only numeric indices
  const [activeTab, setActiveTab] = useState<number>(0);

  // Strongly type the data collection array
  const tabData: TabItem[] = [
    { label: 'Image', content: '' },
    { label: 'Video', content: '' }
  ];

  // Optional: Explicit handler with React event definition
  const handleTabClick = (e: MouseEvent<HTMLButtonElement>, index: number): void => {
    setActiveTab(index);
    console.log(e.detail);
  };

  return (
    <div className="tabs-container">
      {/* Tab Navigation Headers */}
      <div className="tab-list" role="tablist" aria-label="User Account Options">
        {tabData.map((tab: TabItem, index: number) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`panel-${index}`}
            id={`tab-${index}`}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={(e) => handleTabClick(e, index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content Display Panel */}
      <div 
        className="tab-panel"
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
      >
        {/* <p>{tabData[activeTab].content}</p> */}
      </div>
    </div>
  );
};

export default GalleryTab;
