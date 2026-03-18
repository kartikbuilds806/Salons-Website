import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import InstagramProof from './components/InstagramProof';
import Testimonials from './components/Testimonials';
import Offers from './components/Offers';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import FloatingCall from './components/FloatingCall';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <WhyChooseUs />
        <Gallery />
        <InstagramProof />
        <Testimonials />
        <Offers />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <FloatingCall />
    </div>
  );
}

export default App;
