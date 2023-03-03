import React from 'react';
import './App.js';
import NavbarSection from './sections/navbar-section.js';
import HeroSection from './sections/hero-section.js';
import AboutSection from './sections/about-section.js';
import WorksSection from './sections/works-section.js';
import ContactsSection from './sections/contacts-section.js';

function App() {
  return (
    <div className="App">
      <NavbarSection/>
      <hr/>
      <HeroSection/>
      <AboutSection/>
      <WorksSection/>
      <ContactsSection/>
    </div>
  );
}

export default App;
