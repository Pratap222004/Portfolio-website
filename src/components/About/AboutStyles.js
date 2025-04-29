import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../../styles/AppStyles.js';

export const AboutSection = styled(Section)`
  padding: 100px 0;
`;

export const SectionHeader = styled(SectionTitle)`
  margin-bottom: 48px;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  margin-bottom: 64px;
  
  @media (min-width: 768px) {
    grid-template-columns: 3fr 2fr;
    gap: 64px;
  }
`;

export const TextContainer = styled(motion.div)`
  order: 2;
  
  @media (min-width: 768px) {
    order: 1;
  }
`;

export const ImageContainer = styled(motion.div)`
  order: 1;
  display: flex;
  justify-content: center;
  
  @media (min-width: 768px) {
    order: 2;
  }
`;

export const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 8px;
  object-fit: cover;
  filter: ${({ theme }) => theme === 'dark' ? 'grayscale(30%)' : 'grayscale(0%)'};
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.3);
  position: relative;
  
  &:hover {
    filter: none;
    transform: translateY(-5px);
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid #64FFDA;
    top: 15px;
    left: 15px;
    z-index: -1;
    border-radius: 8px;
  }
  
  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

export const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 24px;
`;

export const AboutHighlight = styled.span`
  color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  font-weight: 600;
`;

export const AboutList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px 16px;
  margin-top: 24px;
  padding-left: 0;
`;

export const AboutListItem = styled.li`
  font-size: 1rem;
  line-height: 1.5;
  position: relative;
  padding-left: 20px;
  
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  }
`;

export const EducationContainer = styled(motion.div)`
  margin-top: 48px;
`;

export const EducationItem = styled.div`
  margin-bottom: 32px;
  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme === 'dark' ? 'rgba(17, 34, 64, 0.5)' : 'rgba(248, 249, 250, 0.5)'};
  border-left: 4px solid ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.3);
  }
`;

export const School = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme === 'dark' ? '#e6f1ff' : '#0A192F'};
`;

export const Degree = styled.p`
  font-size: 1.1rem;
  margin-bottom: 8px;
`;

export const Year = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 8px;
`;

export const Location = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;