import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { useTheme } from '../../context/ThemeContext.jsx';
import { FiArrowUp } from 'react-icons/fi';
import styled from 'styled-components';

const ScrollButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  color: ${({ theme }) => theme === 'dark' ? '#0A192F' : '#ffffff'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${({ show }) => (show ? '1' : '0')};
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(100px)')};
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: none;
  z-index: 100;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const ScrollToTop = () => {
  const { theme } = useTheme();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  return (
    <ScrollButton 
      onClick={scrollToTop} 
      show={showScroll} 
      theme={theme}
      aria-label="Scroll to top"
    >
      <FiArrowUp size={20} />
    </ScrollButton>
  );
};

export default ScrollToTop;