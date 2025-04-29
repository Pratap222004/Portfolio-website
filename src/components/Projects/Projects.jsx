import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import appleImg from '../../assets/apple.jpg';
import armyImg from '../../assets/army.jpg';
import portfolioImg from '../../assets/portfolio.jpg';
import roboticarmimg from '../../assets/roboticarm.jpg'
import { useTheme } from '../../context/ThemeContext.jsx';
import { 
  ProjectsSection, 
  SectionHeader, 
  FilterContainer,
  FilterButton,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  ProjectTags,
  ProjectTag,
  ProjectLinks,
  ProjectLink,
  ProjectModal,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalImage,
  ModalTitle,
  ModalDescription,
  ModalTechStack,
  ModalTechItem,
  ModalLinks
} from './ProjectsStyles.js';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

const Projects = () => {
  const { theme } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'iot', label: 'IoT' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A fully responsive personal portfolio to showcase coding projects, tech skills, and contact links.',
      image: portfolioImg,
      tags: ['web', 'react'],
      fullDescription: 'Designed and deployed a fully responsive personal portfolio website to showcase coding projects, technical skills, and contact information. Built with React, styled-components, and deployed on Netlify with CI/CD pipeline.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 2,
      title: 'Apple Vision Pro Website Clone',
      description: 'Engineered a pixel-perfect, animated website replica of Apple Vision Pro, applying GSAP animations and parallax scrolling.',
      image: appleImg,
      tags: ['web', 'gsap'],
      fullDescription: 'Engineered a pixel-perfect, animated website replica of Apple Vision Pro, applying GSAP animations, parallax scrolling, and optimized UX. Features include smooth scrolling effects, animated transitions, and responsive design across all devices.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 3,
      title: 'Indian Army Official Portal',
      description: 'MERN Stack application with RESTful APIs for real-time data management, user feedback modules, and dynamic content.',
      image: armyImg,
      tags: ['fullstack', 'mern'],
      fullDescription: 'Developed a dynamic, interactive full-stack web application using MongoDB, Express.js, React.js, and Node.js. Integrated RESTful APIs for real-time data management, user feedback modules, and dynamic defence news updates. Implemented React Hooks and component-based architecture for maintainability and performance.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'RESTful APIs'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 4,
      title: 'IoT & Robotics Projects',
      description: 'Created functional prototypes for home automation systems, robotic arms, and distance measuring devices.',
      image: roboticarmimg,
      tags: ['iot', 'hardware'],
      fullDescription: 'Created functional prototypes for home automation systems, robotic arms, and distance measuring devices, integrating software control with embedded hardware. Developed microcontroller firmware, implemented sensor integration, and designed user interfaces for device control.',
      technologies: ['Arduino', 'Raspberry Pi', 'Python', 'C++', 'Sensors'],
      github: 'https://github.com',
      demo: null
    }
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(selectedFilter));

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

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <ProjectsSection id="projects" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <SectionHeader variants={itemVariants} theme={theme}>Projects</SectionHeader>
        
        <FilterContainer variants={itemVariants}>
          {filters.map(filter => (
            <FilterButton
              key={filter.id}
              isActive={selectedFilter === filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              theme={theme}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterContainer>
        
        <ProjectsGrid>
          <AnimatePresence>
            {filteredProjects.map(project => (
              <ProjectCard 
                key={project.id}
                layout
                variants={itemVariants}
                theme={theme}
                onClick={() => openModal(project)}
              >
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectContent>
                  <ProjectTitle theme={theme}>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTags>
                    {project.tags.map(tag => (
                      <ProjectTag key={tag} theme={theme}>{tag}</ProjectTag>
                    ))}
                  </ProjectTags>
                  <ProjectLinks>
                    <ProjectLink 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      theme={theme}
                      onClick={(e) => e.stopPropagation()}
                      aria-label="GitHub Repository"
                    >
                      <FiGithub size={18} />
                    </ProjectLink>
                    {project.demo && (
                      <ProjectLink 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        theme={theme}
                        onClick={(e) => e.stopPropagation()}
                        aria-label="Live Demo"
                      >
                        <FiExternalLink size={18} />
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
        
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <ModalContent
                theme={theme}
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25 }}
              >
                <ModalCloseButton onClick={closeModal} theme={theme}>
                  <FiX size={24} />
                </ModalCloseButton>
                <ModalHeader>
                  <ModalImage src={selectedProject.image} alt={selectedProject.title} />
                  <ModalTitle theme={theme}>{selectedProject.title}</ModalTitle>
                </ModalHeader>
                <ModalBody>
                  <ModalDescription>{selectedProject.fullDescription}</ModalDescription>
                  <ModalTechStack theme={theme}>
                    {selectedProject.technologies.map(tech => (
                      <ModalTechItem key={tech} theme={theme}>{tech}</ModalTechItem>
                    ))}
                  </ModalTechStack>
                  <ModalLinks theme={theme}>
                    <ProjectLink 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      theme={theme}
                      aria-label="GitHub Repository"
                    >
                      <FiGithub size={20} style={{ marginRight: '8px' }} />
                      GitHub Repository
                    </ProjectLink>
                    {selectedProject.demo && (
                      <ProjectLink 
                        href={selectedProject.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        theme={theme}
                        aria-label="Live Demo"
                      >
                        <FiExternalLink size={20} style={{ marginRight: '8px' }} />
                        Live Demo
                      </ProjectLink>
                    )}
                  </ModalLinks>
                </ModalBody>
              </ModalContent>
            </ProjectModal>
          )}
        </AnimatePresence>
      </motion.div>
    </ProjectsSection>
  );
};

export default Projects;