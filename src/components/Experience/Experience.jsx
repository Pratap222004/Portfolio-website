import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext.jsx';
import { 
  ExperienceSection, 
  SectionHeader, 
  TabsContainer,
  TabList,
  TabButton,
  ActiveTabIndicator,
  TabContent,
  JobHeader,
  JobTitle,
  JobCompany,
  JobDuration,
  JobDescription,
  JobDuties,
  JobDuty,
  ExperienceContainerGrid,
  ExperienceAndLeadership,
  LeadershipContainer
} from './ExperienceStyles.js';

const Experience = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experience = [
    {
      title: 'Hackathon Participant ',
      company: 'Thapar Institute',
      duration: 'May 2023 - Present',
      duties: [
        'Collaborated in many college hackathons, developing problem-solving skills and prototyping tech solutions under time constraints.',
        'Received positive feedback for usability and performance.',
        'Technologies Used: React.js, Node.js, Python, IoT hardware (Arduino/Raspberry Pi).'
      ]
    }
  ];

  const leadership = [
    'Active on LeetCode with 100+ problems solved focusing on arrays, strings, linked lists, trees, recursion, and dynamic programming.',
    'Mentored junior students in DSA, C++, and project-based learning.',
    'Designed Retail Innovation Framework to address logistics issues, combining data analysis and optimization strategies.',
    'Core team member of Saturnalia Tech Fest, managing event logistics, planning, and on-ground execution.'
  ];

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
    <ExperienceSection id="experience" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <SectionHeader variants={itemVariants} theme={theme}>Experience</SectionHeader>
        
        <ExperienceContainerGrid>
          <ExperienceAndLeadership variants={itemVariants}>
            <TabsContainer>
              <TabList>
                {experience.map((job, index) => (
                  <TabButton
                    key={index}
                    isActive={activeTab === index}
                    onClick={() => setActiveTab(index)}
                    theme={theme}
                  >
                    {job.company}
                    {activeTab === index && (
                      <ActiveTabIndicator layoutId="activeTab" theme={theme} />
                    )}
                  </TabButton>
                ))}
              </TabList>

              <TabContent>
                <JobHeader>
                  <JobTitle theme={theme}>{experience[activeTab].title}</JobTitle>
                  <JobCompany theme={theme}>{experience[activeTab].company}</JobCompany>
                  <JobDuration>{experience[activeTab].duration}</JobDuration>
                </JobHeader>
                <JobDescription>{experience[activeTab].description}</JobDescription>
                <JobDuties>
                  {experience[activeTab].duties.map((duty, index) => (
                    <JobDuty key={index} theme={theme}>
                      {duty}
                    </JobDuty>
                  ))}
                </JobDuties>
              </TabContent>
            </TabsContainer>
          
            <LeadershipContainer theme={theme}>
              <h3>Leadership & Extracurricular</h3>
              <JobDuties>
                {leadership.map((item, index) => (
                  <JobDuty key={index} theme={theme}>
                    {item}
                  </JobDuty>
                ))}
              </JobDuties>
            </LeadershipContainer>
          </ExperienceAndLeadership>
        </ExperienceContainerGrid>
      </motion.div>
    </ExperienceSection>
  );
};

export default Experience;