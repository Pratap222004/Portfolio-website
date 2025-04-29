import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0 24px;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%),
      ${({ theme }) => theme === 'dark' ? 'rgba(100, 255, 218, 0.03)' : 'rgba(10, 25, 47, 0.03)'},
      transparent 50%
    );
    pointer-events: none;
  }
`;

export const HeroContent = styled.div`
  max-width: 1000px;
  width: 100%;
  z-index: 2;
`;

export const Introduction = styled(motion.p)`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 16px;
  color: #64FFDA;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Name = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 8px;
  background: ${({ theme }) => 
    theme === 'dark' 
      ? 'linear-gradient(135deg, #e6f1ff 0%, #ccd6f6 100%)' 
      : 'linear-gradient(135deg, #0A192F 0%, #112240 100%)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (min-width: 768px) {
    font-size: 4rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 5rem;
  }
`;

export const Title = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 24px;
  color: ${({ theme }) => theme === 'dark' ? '#8892B0' : '#6c757d'};
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled(motion.p)`
  font-size: 1.1rem;
  max-width: 600px;
  margin-bottom: 32px;
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 48px;
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  background-color: #64FFDA;
  color: #0A192F;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(100, 255, 218, 0.3);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

export const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  background: transparent;
  color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  border: 2px solid ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme === 'dark' ? 'rgba(100, 255, 218, 0.1)' : 'rgba(10, 25, 47, 0.1)'};
    transform: translateY(-3px);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

export const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 16px;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  border: 2px solid ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme === 'dark' ? 'rgba(100, 255, 218, 0.1)' : 'rgba(10, 25, 47, 0.1)'};
    transform: translateY(-3px);
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;

export const ScrollIndicatorArrow = styled.div`
  width: 30px;
  height: 30px;
  border-right: 3px solid ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  border-bottom: 3px solid ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  transform: rotate(45deg);
`;