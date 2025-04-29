import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext.jsx';
import profileImage from '../../assets/profile.jpg';
import { 
  AboutSection, 
  SectionHeader, 
  ContentContainer, 
  TextContainer, 
  ImageContainer,
  ProfileImage,
  AboutText,
  AboutHighlight,
  AboutList,
  AboutListItem,
  EducationContainer,
  EducationItem,
  School,
  Degree,
  Year,
  Location
} from './AboutStyles.js';

const About = forwardRef(({ inView }, ref) => {
  const { theme } = useTheme();

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <AboutSection id="about" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <SectionHeader variants={itemVariants} theme={theme}>About Me</SectionHeader>
        
        <ContentContainer>
          <TextContainer variants={itemVariants}>
            <AboutText>
              Hello! I'm Rohit, a software developer and electrical engineering student at Thapar Institute of Engineering and Technology. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
            </AboutText>
            
            <AboutText>
              My interest in web development started back in 2019 when I decided to try creating a custom webpage. Fast-forward to today, and I've had the privilege of working on diverse projects 
            </AboutText>
            
            <AboutText>
              My main focus these days is building accessible, inclusive products and digital experiences using modern technologies. Here are a few technologies I've been working with recently:
            </AboutText>
            
            <AboutList>
              <AboutListItem theme={theme}>React.js</AboutListItem>
              <AboutListItem theme={theme}>Node.js</AboutListItem>
              <AboutListItem theme={theme}>JavaScript (ES6+)</AboutListItem>
              <AboutListItem theme={theme}>Python</AboutListItem>
              <AboutListItem theme={theme}>MongoDB</AboutListItem>
              <AboutListItem theme={theme}>REST APIs</AboutListItem>
            </AboutList>
          </TextContainer>

          <ImageContainer variants={itemVariants}>
          <ProfileImage
  src={profileImage}
  alt="Rohit Pratap Singh Bhadoria"
  theme={theme}
/>
          </ImageContainer>
        </ContentContainer>

        <EducationContainer variants={itemVariants}>
          <SectionHeader as="h3" theme={theme} style={{ fontSize: '1.75rem' }}>Education</SectionHeader>
          
          <EducationItem theme={theme}>
            <School theme={theme}>Thapar Institute of Engineering and Technology</School>
            <Degree>B.E. in Electrical Engineering</Degree>
            <Year>2022 - 2026</Year>
            <Location>Patiala, Punjab</Location>
          </EducationItem>
          
          <EducationItem theme={theme}>
            <School theme={theme}>City Central Hr. Sec. School</School>
            <Degree>Class 12th</Degree>
            <Year>2020 - 2021</Year>
            <Location>Bhind, M.P.</Location>
          </EducationItem>
        </EducationContainer>
      </motion.div>
    </AboutSection>
  );
});

export default About;