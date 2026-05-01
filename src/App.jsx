import { useReveal } from './hooks/useReveal';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Process from './components/Process';
import Ventures from './components/Ventures';
import Services from './components/Services';
import About from './components/About';
import Experience from './components/Experience';
import Why from './components/Why';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  useReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Process />
        <Ventures />
        <Services />
        <About />
        <Experience />
        <Why />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
