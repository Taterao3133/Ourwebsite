import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {

    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [pathname]);
}

export default ScrollTop;