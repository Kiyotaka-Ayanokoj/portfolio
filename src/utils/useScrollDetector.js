import { useState, useEffect } from 'react';

const useScrollDetector = (scrollMin = 0) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const posY = window.scrollY;
      setIsScrolled(posY > scrollMin);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollMin]);

  return isScrolled;
};

export default useScrollDetector;