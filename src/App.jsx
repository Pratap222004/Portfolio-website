import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { animateScroll as scroll } from 'react-scroll';
import { useTheme } from './context/ThemeContext.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import Experience from './components/Experience/Experience.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import ScrollToTop from './components/ui/ScrollToTop.jsx';
import LoadingScreen from './components/ui/LoadingScreen.jsx';
import { AppContainer, MainContent } from './styles/AppStyles.js';

function App() {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Smooth scroll to top on page load
  useEffect(() => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  }, []);

  return (
    <AppContainer theme={theme}>
      <LoadingScreen />
      <Navbar />
      <MainContent>
        <Hero />
        <About ref={ref} inView={inView} />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </MainContent>
      <Footer />
      <ScrollToTop />
    </AppContainer>
  );
}

export default App;