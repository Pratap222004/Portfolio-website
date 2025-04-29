import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section, SectionTitle } from '../../styles/AppStyles.js';

export const ContactSection = styled(Section)`
  padding: 100px 0;
`;

export const SectionHeader = styled(SectionTitle)`
  margin-bottom: 48px;
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  }
`;

export const ContactInfo = styled(motion.div)``;

export const ContactHeading = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 24px;
  color: ${({ theme }) => theme === 'dark' ? '#e6f1ff' : '#0A192F'};
`;

export const ContactText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 32px;
`;

export const ContactLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
`;

export const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: ${({ theme }) => theme === 'dark' ? 'rgba(17, 34, 64, 0.5)' : 'rgba(248, 249, 250, 0.5)'};
  padding: 32px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.1)'};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme === 'dark' ? '#e6f1ff' : '#0A192F'};
`;

export const FormInput = styled.input`
  padding: 12px 16px;
  font-size: 1rem;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme === 'dark' ? 'rgba(100, 255, 218, 0.2)' : 'rgba(10, 25, 47, 0.2)'};
  background-color: ${({ theme }) => theme === 'dark' ? 'rgba(10, 25, 47, 0.5)' : '#ffffff'};
  color: inherit;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
    box-shadow: 0 0 0 3px ${({ theme }) => theme === 'dark' ? 'rgba(100, 255, 218, 0.3)' : 'rgba(10, 25, 47, 0.3)'};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme === 'dark' ? 'rgba(136, 146, 176, 0.5)' : 'rgba(108, 117, 125, 0.5)'};
  }
`;

export const FormTextarea = styled.textarea`
  padding: 12px 16px;
  font-size: 1rem;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme === 'dark' ? 'rgba(100, 255, 218, 0.2)' : 'rgba(10, 25, 47, 0.2)'};
  background-color: ${({ theme }) => theme === 'dark' ? 'rgba(10, 25, 47, 0.5)' : '#ffffff'};
  color: inherit;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
    box-shadow: 0 0 0 3px ${({ theme }) => theme === 'dark' ? 'rgba(100, 255, 218, 0.3)' : 'rgba(10, 25, 47, 0.3)'};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme === 'dark' ? 'rgba(136, 146, 176, 0.5)' : 'rgba(108, 117, 125, 0.5)'};
  }
`;

export const FormButton = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  background-color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  color: ${({ theme }) => theme === 'dark' ? '#0A192F' : '#ffffff'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px ${({ theme }) => theme === 'dark' ? 'rgba(100, 255, 218, 0.3)' : 'rgba(10, 25, 47, 0.3)'};
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

export const FormMessage = styled.div`
  padding: 12px 16px;
  border-radius: 4px;
  font-size: 0.9rem;
  background-color: ${({ $type }) => $type === 'success' ? 'rgba(25, 135, 84, 0.1)' : 'rgba(220, 53, 69, 0.1)'};
  color: ${({ $type }) => $type === 'success' ? '#19875c' : '#dc3545'};
  border: 1px solid ${({ $type }) => $type === 'success' ? '#19875c' : '#dc3545'};
`;