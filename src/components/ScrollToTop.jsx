import { useState, useEffect } from 'react';
import { useTheme } from '../context/useTheme';

const ScrollToTop = () => {
  const { isDark } = useTheme(); 
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // 1. Show button only after scrolling down 300px
    // 2. Hide when scrolling UP, Show when scrolling DOWN
    if (currentScrollY > 300 && currentScrollY > lastScrollY) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  };

  const scrollToTop = () => {
    // Temporarily disable snap if you are using mandatory snapping
    document.documentElement.style.scrollSnapType = "none";
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Re-enable snap after scroll completes
    setTimeout(() => {
      document.documentElement.style.scrollSnapType = "y mandatory";
    }, 800);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <button
      onClick={scrollToTop}
      style={{
        // Positioning
        position: 'fixed',
        bottom: '30px',
        right: '10px',
        zIndex: 1000,
        // Shape & Size
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Glassmorphism Styling
        backgroundColor: 'transparent',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}`,
        color: isDark ? '#ffffff' : '#000000',
        // Animation Logic
        cursor: 'pointer',
        transition: 'all 0.4s ease-in-out',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
        pointerEvents: isVisible ? 'all' : 'none',
      }}
      className={`p-0 ${isDark ? 'shadow-lite' : 'shadow'}`}
      aria-label="Scroll to top"
    >
      <i className="fa-solid fa-angle-up" style={{ fontSize: '15px' }}></i>
    </button>
  );
};

export default ScrollToTop;