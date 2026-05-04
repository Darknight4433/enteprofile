import { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

export default function Nav() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      setScrollProgress((currentScrollY / totalScroll) * 100);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`nav ${!isVisible ? 'nav--hidden' : ''}`}>
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />
      <a href="#" className="nav-logo" aria-label="Abel Sebastian">
        <div className="nav-logo-mark">
          <img src={logoImg} alt="AS" />
        </div>
        Abel Sebastian
      </a>
      <ul className="nav-links">
        <li><a href="#process">What I Do</a></li>
        <li><a href="#signal-desk">Signal Desk</a></li>
        <li><a href="#ventures">Ventures</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
      </ul>
      <a href="#cta" className="nav-cta">Book a Call →</a>
    </nav>
  );
}
