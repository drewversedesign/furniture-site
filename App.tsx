import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionManifesto from './components/SectionManifesto';
import SectionStory from './components/SectionStory';
import SectionTeam from './components/SectionTeam';
import SectionProducts from './components/SectionProducts';
import SectionClients from './components/SectionClients';
import SectionFAQ from './components/SectionFAQ';
import Footer from './components/Footer';
import DesignAssistant from './components/DesignAssistant';

const App: React.FC = () => {
  return (
    <div className="font-sans text-stone-900 bg-stone-50 antialiased overflow-x-hidden selection:bg-stone-200">
      <Navbar />
      <main>
        <Hero />
        <SectionManifesto />
        <SectionStory />
        <SectionTeam />
        <SectionProducts />
        <SectionClients />
        <SectionFAQ />
      </main>
      <Footer />
      <DesignAssistant />
    </div>
  );
};

export default App;