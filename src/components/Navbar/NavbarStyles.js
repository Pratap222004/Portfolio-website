import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 1000;
  transition: all 0.3s ease;
  background-color: ${({ scrolled, theme }) => 
    scrolled 
      ? theme === 'dark' 
        ? 'rgba(10, 25, 47, 0.9)' 
        : 'rgba(248, 249, 250, 0.9)'
      : 'transparent'};
  backdrop-filter: ${({ scrolled }) => 
    scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${({ scrolled }) => 
    scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'};
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Logo = styled(ScrollLink)`
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  color: ${({ theme }) => theme === 'dark' ? '#64FFDA' : '#0A192F'};
  
  span {
    font-weight: 800;
  }
`;

export const NavLinks = styled.ul`
  display: none;
  align-items: center;
  gap: 32px;
  
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavItem = styled.li`
  font-size: 1rem;
  font-weight: 500;
  
  a {
    position: relative;
    cursor: pointer;
    padding: 4px 0;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #64FFDA;
      transition: width 0.3s ease;
    }
    
    &:hover:after,
    &.active:after {
      width: 100%;
    }
  }
`;

export const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.isMobile ? '100%' : '40px'};
  height: ${props => props.isMobile ? '48px' : '40px'};
  border-radius: 50%;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: ${props => props.isMobile ? '12px 0' : '0'};
  
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

export const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  color: inherit;
  z-index: 1001;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  max-width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  background-color: ${({ theme }) => theme === 'dark' ? '#112240' : '#f8f9fa'};
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  padding: 48px 24px;
  
  @media (min-width: 768px) {
    display: none;
  }
`;