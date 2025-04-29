import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: ${({ theme }) => theme === 'dark' ? '#0A192F' : '#f8f9fa'};
  color: ${({ theme }) => theme === 'dark' ? '#e6f1ff' : '#333'};
  transition: background-color 0.3s ease, color 0.3s ease;
  min-height: 100vh;
  position: relative;
`;

export const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  
  @media (min-width: 768px) {
    padding: 0 48px;
  }
  
  @media (min-width: 1024px) {
    padding: 0 64px;
  }
`;

export const Section = styled.section`
  padding: 80px 0;
  
  @media (min-width: 768px) {
    padding: 100px 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 48px;
  position: relative;
  display: inline-block;
  color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 80px;
    height: 4px;
    background-color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
    border-radius: 2px;
  }
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;