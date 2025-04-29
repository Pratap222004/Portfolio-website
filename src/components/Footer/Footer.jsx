import { useTheme } from '../../context/ThemeContext.jsx';
import { 
  FooterContainer, 
  FooterContent, 
  FooterText, 
  SocialLinks, 
  SocialLink,
  FooterDivider
} from './FooterStyles.js';
import { FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer theme={theme}>
      <FooterContent>
        <SocialLinks>
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
          <SocialLink 
            href="https://leetcode.com/rohitbhadoria" 
            target="_blank" 
            rel="noopener noreferrer"
            theme={theme}
            aria-label="LeetCode"
          >
            <FiCode size={20} />
          </SocialLink>
        </SocialLinks>
        
        <FooterDivider theme={theme} />
        
        <FooterText theme={theme}>
          Designed &amp; Built by Rohit Pratap Singh Bhadoria
        </FooterText>
        <FooterText theme={theme}>
          &copy; {currentYear} All Rights Reserved
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;