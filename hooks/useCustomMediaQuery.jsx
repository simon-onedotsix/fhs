import { useEffect, useState } from 'react';

export default function useCustomMediaQuery(mediaQuery) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    
    const handleChange = (event) => {
      setMatches(event.matches);
    };

    handleChange(mediaQueryList);

    mediaQueryList.addEventListener('change', handleChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, [mediaQuery]);

  return matches;
}



// useage
// const isDesktop = useCustomMediaQuery('(min-width: 600px)')