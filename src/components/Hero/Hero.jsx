import { useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext.jsx';
import { 
  HeroSection, 
  HeroContent, 
  Introduction, 
  Name, 
  Title, 
  Description, 
  ButtonContainer, 
  PrimaryButton, 
  SecondaryButton,
  SocialLinks,
  SocialLink,
  ScrollIndicator,
  ScrollIndicatorArrow
} from './HeroStyles.js';
import { FiGithub, FiLinkedin, FiCode, FiDownload } from 'react-icons/fi';

const Hero = () => {
  const { theme } = useTheme();
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', x);
      heroRef.current.style.setProperty('--mouse-y', y);
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <HeroSection id="hero" ref={heroRef} theme={theme}>
      <HeroContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Introduction variants={itemVariants}>Hello, I'm</Introduction>
          <Name variants={itemVariants} theme={theme}>Rohit Pratap Singh Bhadoria</Name>
          <Title variants={itemVariants} theme={theme}>Software Developer & Electrical Engineer</Title>
          <Description variants={itemVariants}>
            I build exceptional digital experiences with modern technologies.
            Skilled in full-stack development, with expertise in React, Node.js, and Python.
          </Description>
          
          <ButtonContainer variants={itemVariants}>
            <PrimaryButton
              as={Link}
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              theme={theme}
            >
              <FiCode style={{ marginRight: '8px' }} />
              View Projects
            </PrimaryButton>
            
            <SecondaryButton
              as="a"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              theme={theme}
            >
              <FiDownload style={{ marginRight: '8px' }} />
              Resume
            </SecondaryButton>
          </ButtonContainer>
          
          <SocialLinks variants={itemVariants}>
            <SocialLink 
              href="https://github.com/rohitbhadoria" 
              target="_blank" 
              rel="noopener noreferrer"
              theme={theme}
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </SocialLink>
            <SocialLink 
              href="https://linkedin.com/in/rohitbhadoria" 
              target="_blank" 
              rel="noopener noreferrer"
              theme={theme}
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </SocialLink>
          </SocialLinks>
        </motion.div>
      </HeroContent>
      
      <ScrollIndicator 
        as={Link}
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        theme={theme}
      >
        <ScrollIndicatorArrow theme={theme} />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;