import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../../context/ThemeContext.jsx';
import { 
  NavContainer, 
  NavContent, 
  Logo, 
  NavLinks, 
  NavItem, 
  ThemeToggle, 
  MobileMenuButton,
  MobileMenu
} from './NavbarStyles.js';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', to: 'hero', offset: -100 },
  { name: 'About', to: 'about', offset: -70 },
  { name: 'Skills', to: 'skills', offset: -70 },
  { name: 'Projects', to: 'projects', offset: -70 },
  { name: 'Experience', to: 'experience', offset: -70 },
  { name: 'Contact', to: 'contact', offset: -70 }
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <NavContainer scrolled={scrolled} theme={theme}>
      <NavContent>
        <Logo theme={theme} to="hero" smooth={true} duration={500} offset={-100}>
          <span>R</span>ohit
        </Logo>

        <MobileMenuButton onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </MobileMenuButton>

        <NavLinks>
          {navLinks.map((link) => (
            <NavItem key={link.name}>
              <Link
                activeClass="active"
                to={link.to}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
              >
                {link.name}
              </Link>
            </NavItem>
          ))}

          <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </ThemeToggle>
        </NavLinks>

        <MobileMenu isOpen={mobileMenuOpen} theme={theme}>
          {navLinks.map((link) => (
            <NavItem key={`mobile-${link.name}`}>
              <Link
                activeClass="active"
                to={link.to}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            </NavItem>
          ))}
          <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme" isMobile>
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </ThemeToggle>
        </MobileMenu>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;