import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme === 'dark' ? '#0A192F' : '#f8f9fa'};
  border-top: 1px solid ${({ theme }) => theme === 'dark' ? 'rgba(100, 255, 218, 0.1)' : 'rgba(10, 25, 47, 0.1)'};
  padding: 32px 0;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    color: ${({ theme }) => theme === 'dark' ? '#e6f1ff' : '#64FFDA'};
  }
`;

export const FooterDivider = styled.div`
  width: 70px;
  height: 4px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  margin-bottom: 24px;
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme === 'dark' ? '#8892B0' : '#6c757d'};
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;