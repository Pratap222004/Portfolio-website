import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../../styles/AppStyles.js';

export const ProjectsSection = styled(Section)`
  padding: 100px 0;
`;

export const SectionHeader = styled(SectionTitle)`
  margin-bottom: 48px;
`;

export const FilterContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 48px;
`;

export const FilterButton = styled.button`
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${({ isActive, theme }) => 
    isActive 
      ? theme === 'dark' ? '#64FFDA' : '#0A192F' 
      : theme === 'dark' ? 'rgba(100, 255, 218, 0.1)' : 'rgba(10, 25, 47, 0.1)'};
  color: ${({ isActive, theme }) => 
    isActive 
      ? theme === 'dark' ? '#0A192F' : '#ffffff' 
      : theme === 'dark' ? '#64FFDA' : '#0A192F'};
  
  &:hover {
    transform: translateY(-2px);
    background-color: ${({ isActive, theme }) => 
      isActive 
        ? theme === 'dark' ? '#64FFDA' : '#0A192F' 
        : theme === 'dark' ? 'rgba(100, 255, 218, 0.2)' : 'rgba(10, 25, 47, 0.2)'};
  }
`;

export const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProjectCard = styled(motion.div)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.1)'};
  background-color: ${({ theme }) => theme === 'dark' ? '#112240' : '#ffffff'};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme === 'dark' ? '0 10px 30px rgba(0, 0, 0, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.15)'};
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: all 0.3s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

export const ProjectContent = styled.div`
  padding: 24px;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme === 'dark' ? '#e6f1ff' : '#0A192F'};
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 16px;
  line-height: 1.6;
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

export const ProjectTag = styled.span`
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme === 'dark' ? 'rgba(100, 255, 218, 0.1)' : 'rgba(10, 25, 47, 0.1)'};
  color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 16px;
`;

export const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

export const ProjectModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  padding: 24px;
`;

export const ModalContent = styled(motion.div)`
  background-color: ${({ theme }) => theme === 'dark' ? '#112240' : '#ffffff'};
  border-radius: 8px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme === 'dark' ? '#0A192F' : '#f1f1f1'};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
    border-radius: 4px;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: ${({ theme }) => theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  color: ${({ theme }) => theme === 'dark' ? '#e6f1ff' : '#0A192F'};
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background-color: ${({ theme }) => theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'};
  }
`;

export const ModalHeader = styled.div``;

export const ModalImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ModalTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  padding: 24px 24px 0;
  color: ${({ theme }) => theme === 'dark' ? '#e6f1ff' : '#0A192F'};
`;

export const ModalBody = styled.div`
  padding: 24px;
`;

export const ModalDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 24px;
`;

export const ModalTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const ModalTechItem = styled.span`
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme === 'dark' ? 'rgba(100, 255, 218, 0.1)' : 'rgba(10, 25, 47, 0.1)'};
  color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
`;

export const ModalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  
  & > a {
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 500;
    background-color: ${({ theme }) => theme === 'dark' ? 'rgba(100, 255, 218, 0.1)' : 'rgba(10, 25, 47, 0.1)'};
    
    &:hover {
      background-color: ${({ theme }) => theme === 'dark' ? 'rgba(100, 255, 218, 0.2)' : 'rgba(10, 25, 47, 0.2)'};
    }
  }
`;