import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext.jsx';
import { 
  SkillsSection, 
  SectionHeader, 
  SkillsCategoriesContainer,
  SkillCategory,
  CategoryTitle,
  SkillsGrid,
  SkillItem,
  SkillName,
  SkillIcon,
  ProgressBarContainer,
  ProgressBar,
  AdditionalSkillsContainer,
  AdditionalSkillsList,
  AdditionalSkillItem
} from './SkillsStyles.js';
import { 
  FiCode, 
  FiDatabase, 
  FiLayers, 
  FiTool, 
  FiTerminal 
} from 'react-icons/fi';

const Skills = () => {
  const { theme } = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillsRef = useRef();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const programmingLanguages = [
    { name: 'JavaScript', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'C/C++', level: 80 },
    { name: 'HTML/CSS', level: 95 },
  ];

  const frameworks = [
    { name: 'React.js', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 80 },
    { name: 'Bootstrap', level: 90 },
    { name: 'TailwindCSS', level: 85 },
  ];

  const databases = [
    { name: 'MongoDB', level: 85 },
    { name: 'SQL', level: 80 },
  ];

  const tools = [
    { name: 'Git', level: 90 },
    { name: 'VS Code', level: 95 },
    { name: 'Postman', level: 85 },
    { name: 'Jupyter', level: 80 },
  ];

  const additionalSkills = [
    'MATLAB', 'PL/SQL', 'OOP', 'REST APIs', 'Data Structures', 'Algorithms', 'Machine Learning'
  ];

  return (
    <SkillsSection id="skills" ref={ref}>
      <motion.div
        ref={skillsRef}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <SectionHeader variants={itemVariants} theme={theme}>Skills</SectionHeader>
        
        <SkillsCategoriesContainer>
          <SkillCategory variants={itemVariants} theme={theme}>
            <CategoryTitle theme={theme}>
              <SkillIcon>
                <FiCode size={24} />
              </SkillIcon>
              Programming Languages
            </CategoryTitle>
            <SkillsGrid>
              {programmingLanguages.map((skill, index) => (
                <SkillItem key={index} theme={theme}>
                  <SkillName>{skill.name}</SkillName>
                  <ProgressBarContainer theme={theme}>
                    <ProgressBar 
                      style={{ width: `${skill.level}%` }}
                      theme={theme}
                      animate={{ width: `${skill.level}%` }}
                      initial={{ width: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </ProgressBarContainer>
                </SkillItem>
              ))}
            </SkillsGrid>
          </SkillCategory>
          
          <SkillCategory variants={itemVariants} theme={theme}>
            <CategoryTitle theme={theme}>
              <SkillIcon>
                <FiLayers size={24} />
              </SkillIcon>
              Libraries & Frameworks
            </CategoryTitle>
            <SkillsGrid>
              {frameworks.map((skill, index) => (
                <SkillItem key={index} theme={theme}>
                  <SkillName>{skill.name}</SkillName>
                  <ProgressBarContainer theme={theme}>
                    <ProgressBar 
                      style={{ width: `${skill.level}%` }}
                      theme={theme}
                      animate={{ width: `${skill.level}%` }}
                      initial={{ width: 0 }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                  </ProgressBarContainer>
                </SkillItem>
              ))}
            </SkillsGrid>
          </SkillCategory>
          
          <SkillCategory variants={itemVariants} theme={theme}>
            <CategoryTitle theme={theme}>
              <SkillIcon>
                <FiDatabase size={24} />
              </SkillIcon>
              Databases
            </CategoryTitle>
            <SkillsGrid>
              {databases.map((skill, index) => (
                <SkillItem key={index} theme={theme}>
                  <SkillName>{skill.name}</SkillName>
                  <ProgressBarContainer theme={theme}>
                    <ProgressBar 
                      style={{ width: `${skill.level}%` }}
                      theme={theme}
                      animate={{ width: `${skill.level}%` }}
                      initial={{ width: 0 }}
                      transition={{ duration: 1, delay: 0.9 }}
                    />
                  </ProgressBarContainer>
                </SkillItem>
              ))}
            </SkillsGrid>
          </SkillCategory>
          
          <SkillCategory variants={itemVariants} theme={theme}>
            <CategoryTitle theme={theme}>
              <SkillIcon>
                <FiTool size={24} />
              </SkillIcon>
              Tools & Platforms
            </CategoryTitle>
            <SkillsGrid>
              {tools.map((skill, index) => (
                <SkillItem key={index} theme={theme}>
                  <SkillName>{skill.name}</SkillName>
                  <ProgressBarContainer theme={theme}>
                    <ProgressBar 
                      style={{ width: `${skill.level}%` }}
                      theme={theme}
                      animate={{ width: `${skill.level}%` }}
                      initial={{ width: 0 }}
                      transition={{ duration: 1, delay: 1.1 }}
                    />
                  </ProgressBarContainer>
                </SkillItem>
              ))}
            </SkillsGrid>
          </SkillCategory>
        </SkillsCategoriesContainer>
        
        <AdditionalSkillsContainer variants={itemVariants} theme={theme}>
          <CategoryTitle theme={theme}>
            <SkillIcon>
              <FiTerminal size={24} />
            </SkillIcon>
            Additional Skills
          </CategoryTitle>
          <AdditionalSkillsList>
            {additionalSkills.map((skill, index) => (
              <AdditionalSkillItem key={index} theme={theme}>
                {skill}
              </AdditionalSkillItem>
            ))}
          </AdditionalSkillsList>
        </AdditionalSkillsContainer>
      </motion.div>
    </SkillsSection>
  );
};

export default Skills;