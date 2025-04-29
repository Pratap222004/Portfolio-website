import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../../styles/AppStyles.js';

export const SkillsSection = styled(Section)`
  padding: 100px 0;
`;

export const SectionHeader = styled(SectionTitle)`
  margin-bottom: 48px;
`;

export const SkillsCategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
  }
`;

export const SkillCategory = styled(motion.div)`
  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme === 'dark' ? 'rgba(17, 34, 64, 0.5)' : 'rgba(248, 249, 250, 0.5)'};
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.1)'};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme === 'dark' ? '0 10px 30px rgba(0, 0, 0, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.15)'};
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme === 'dark' ? '#e6f1ff' : '#0A192F'};
`;

export const SkillIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: #64FFDA;
`;

export const SkillsGrid = styled.div`
  display: grid;
  gap: 16px;
`;

export const SkillItem = styled.div`
  margin-bottom: 8px;
`;

export const SkillName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const ProgressBarContainer = styled.div`
  height: 8px;
  background-color: ${({ theme }) => theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 4px;
  overflow: hidden;
`;

export const ProgressBar = styled(motion.div)`
  height: 100%;
  background-color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  border-radius: 4px;
`;

export const AdditionalSkillsContainer = styled(motion.div)`
  margin-top: 48px;
  padding: 24px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme === 'dark' ? 'rgba(17, 34, 64, 0.5)' : 'rgba(248, 249, 250, 0.5)'};
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.1)'};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme === 'dark' ? '0 10px 30px rgba(0, 0, 0, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.15)'};
  }
`;

export const AdditionalSkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const AdditionalSkillItem = styled.span`
  padding: 8px 16px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme === 'dark' ? 'rgba(100, 255, 218, 0.1)' : 'rgba(10, 25, 47, 0.1)'};
  color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    background-color: ${({ theme }) => theme === 'dark' ? 'rgba(100, 255, 218, 0.2)' : 'rgba(10, 25, 47, 0.2)'};
  }
`;