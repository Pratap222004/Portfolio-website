import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext.jsx';
import styled from 'styled-components';

const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme === 'dark' ? '#0A192F' : '#f8f9fa'};
  z-index: 2000;
`;

const LoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled(motion.div)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
`;

const ProgressBar = styled(motion.div)`
  width: 200px;
  height: 4px;
  background-color: ${({ theme }) => theme === 'dark' ? 'rgba(100, 255, 218, 0.2)' : 'rgba(10, 25, 47, 0.2)'};
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background-color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  border-radius: 2px;
`;

const LoadingScreen = () => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    initial: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const logoVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const progressVariants = {
    initial: {
      width: 0,
    },
    animate: {
      width: '100%',
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <AnimatePresence>
      {loading && (
        <LoadingContainer
          theme={theme}
          variants={containerVariants}
          initial="initial"
          exit="exit"
        >
          <LoaderContent>
            <LogoContainer
              theme={theme}
              variants={logoVariants}
              initial="initial"
              animate="animate"
            >
              <span>R</span>ohit
            </LogoContainer>
            <ProgressBar theme={theme}>
              <ProgressFill
                theme={theme}
                variants={progressVariants}
                initial="initial"
                animate="animate"
              />
            </ProgressBar>
          </LoaderContent>
        </LoadingContainer>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;