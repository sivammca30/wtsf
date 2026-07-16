import { useState, useEffect } from 'react';

function useWindowWidth(): number {
  // Initialize state with current window width safely for SSR
  const [width, setWidth] = useState<number>(() => {
    return typeof window !== 'undefined' ? window.innerWidth : 0;
  });

  useEffect(() => {
    // Exit early if window object is not available
    if (typeof window === 'undefined') return;

    // Type inference automatically handles the Event type here
    const handleResize = () => setWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    
    // Clean up event listener to prevent memory leaks
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

export default useWindowWidth;
