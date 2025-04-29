import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext.jsx';
import { 
  ContactSection, 
  SectionHeader, 
  ContactContent,
  ContactInfo,
  ContactHeading,
  ContactText,
  ContactForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton,
  ContactLinksContainer,
  ContactLink,
  FormMessage
} from './ContactStyles.js';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiCode } from 'react-icons/fi';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    message: '',
    type: ''
  });
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill out all fields.',
        type: 'error'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        message: 'Please enter a valid email address.',
        type: 'error'
      });
      return;
    }

    // In a real application, you would send the form data to a server here
    // For demo purposes, we'll just show a success message
    setFormStatus({
      message: 'Message sent successfully! I\'ll get back to you soon.',
      type: 'success'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus({
        message: '',
        type: ''
      });
    }, 5000);
  };

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
    <ContactSection id="contact" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <SectionHeader variants={itemVariants} theme={theme}>Contact Me</SectionHeader>
        
        <ContactContent>
          <ContactInfo variants={itemVariants}>
            <ContactHeading theme={theme}>Get In Touch</ContactHeading>
            <ContactText>
              I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hello, feel free to reach out. I'll do my best to get back to you!
            </ContactText>
            
            <ContactLinksContainer>
              <ContactLink href="mailto:rbhadoria_be22@thapar.edu" theme={theme}>
                <FiMail size={20} />
                rbhadoria_be22@thapar.edu
              </ContactLink>
              <ContactLink href="tel:+918839968017" theme={theme}>
                <FiPhone size={20} />
                +91 8839968017
              </ContactLink>
              <ContactLink href="https://linkedin.com/in/rohitbhadoria" target="_blank" rel="noopener noreferrer" theme={theme}>
                <FiLinkedin size={20} />
                LinkedIn
              </ContactLink>
              <ContactLink href="https://github.com/rohitbhadoria" target="_blank" rel="noopener noreferrer" theme={theme}>
                <FiGithub size={20} />
                GitHub
              </ContactLink>
              <ContactLink href="https://leetcode.com/rohitbhadoria" target="_blank" rel="noopener noreferrer" theme={theme}>
                <FiCode size={20} />
                LeetCode
              </ContactLink>
            </ContactLinksContainer>
          </ContactInfo>
          
          <ContactForm 
            variants={itemVariants}
            onSubmit={handleSubmit}
            theme={theme}
          >
            <FormGroup>
              <FormLabel htmlFor="name" theme={theme}>Name</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                theme={theme}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="email" theme={theme}>Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                theme={theme}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="message" theme={theme}>Message</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                theme={theme}
                rows="6"
                required
              />
            </FormGroup>
            
            {formStatus.message && (
              <FormMessage $type={formStatus.type}>
                {formStatus.message}
              </FormMessage>
            )}
            
            <FormButton type="submit" theme={theme}>
              Send Message
            </FormButton>
          </ContactForm>
        </ContactContent>
      </motion.div>
    </ContactSection>
  );
};

export default Contact;