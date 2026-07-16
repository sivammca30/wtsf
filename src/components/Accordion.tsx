import { useState } from 'react';


// Define the interface for an individual item
export interface AccordionItem {
  title: string;
  content: React.ReactNode; // Allows text, HTML, or other components
}

// Define the interface for the component props
interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  // Track the open item index, allowing number or null
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div key={index} className={`accordion-item ${isOpen ? 'active' : ''}`}>
            <button 
              className="accordion-header" 
              onClick={() => handleToggle(index)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
            </button>
            <div className={`accordion-collapse ${isOpen ? 'show' : ''}`}>
              <div className="accordion-content">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
