import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import AITools from './components/AITools';
import Results from './components/Results';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Features />
      {/* <AITools /> */}
      <Results />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
