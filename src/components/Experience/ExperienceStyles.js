import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../../styles/AppStyles.js';

export const ExperienceSection = styled(Section)`
  padding: 100px 0;
`;

export const SectionHeader = styled(SectionTitle)`
  margin-bottom: 48px;
`;

export const ExperienceContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
`;

export const ExperienceAndLeadership = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TabList = styled.div`
  display: flex;
  overflow-x: auto;
  border-bottom: 2px solid rgba(100, 255, 218, 0.2);
  margin-bottom: 24px;
  
  @media (min-width: 768px) {
    flex-direction: column;
    border-bottom: none;
    border-left: 2px solid rgba(100, 255, 218, 0.2);
    margin-bottom: 0;
    margin-right: 24px;
    min-width: 200px;
  }
`;

export const TabButton = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
  background: transparent;
  color: ${({ isActive, theme }) => 
    isActive 
      ? theme === 'dark' ? '#64FFDA' : '#0A192F' 
      : 'inherit'};
  border: none;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme === 'dark' ? 'rgba(100, 255, 218, 0.1)' : 'rgba(10, 25, 47, 0.1)'};
  }
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const ActiveTabIndicator = styled(motion.div)`
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  
  @media (min-width: 768px) {
    bottom: 0;
    top: 0;
    right: auto;
    width: 2px;
    height: auto;
    left: -2px;
  }
`;

export const TabContent = styled.div`
  flex: 1;
  padding: 16px 0;
  
  @media (min-width: 768px) {
    padding: 0 0 0 16px;
  }
`;

export const JobHeader = styled.div`
  margin-bottom: 24px;
`;

export const JobTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme === 'dark' ? '#e6f1ff' : '#0A192F'};
`;

export const JobCompany = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
`;

export const JobDuration = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;

export const JobDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 24px;
`;

export const JobDuties = styled.ul`
  padding-left: 0;
`;

export const JobDuty = styled.li`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 16px;
  position: relative;
  padding-left: 30px;
  
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
    font-size: 1.5rem;
    line-height: 1.2;
  }
`;

export const LeadershipContainer = styled.div`
  padding: 32px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme === 'dark' ? 'rgba(17, 34, 64, 0.5)' : 'rgba(248, 249, 250, 0.5)'};
  box-shadow: ${({ theme }) => theme === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.1)'};
  transition: all 0.3s ease;
  border-left: 4px solid ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme === 'dark' ? '0 10px 30px rgba(0, 0, 0, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.15)'};
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 24px;
    color: ${({ theme }) => theme === 'dark' ? '#e6f1ff' : '#0A192F'};
  }
`;